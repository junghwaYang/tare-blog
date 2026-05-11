#!/usr/bin/env node
/**
 * Notion → Astro 마이그레이션 스크립트
 * 루트 페이지 하위의 child_page를 재귀 탐색 → src/content/blog/migrated-notion/ 로 변환
 *
 * 사용법:
 *   node scripts/migration/notion/migrate.js [--limit 5] [--all]
 *   기본: 시범 5편만 처리
 *
 * 환경변수 (.env):
 *   NOTION_TOKEN=<integration token>
 *   NOTION_ROOT_PAGE_ID=<root page id>
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// dotenv 로드
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const { Client } = require('@notionhq/client');
const { NotionToMarkdown } = require('notion-to-md');

// ---------------------------------------------------------------------------
// 경로 상수
// ---------------------------------------------------------------------------

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_ROOT = path.resolve(__dirname, '../../../');
const OUTPUT_DIR = path.join(BLOG_ROOT, 'src/content/blog/migrated-notion');
const IMAGE_DIR = path.join(BLOG_ROOT, 'public/images/migrated-notion');

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_ROOT_PAGE_ID = process.env.NOTION_ROOT_PAGE_ID;

const SLEEP_MS = 350; // Notion API rate limit: ~3 req/sec
const MAX_DEPTH = 5;

// ---------------------------------------------------------------------------
// Notion 클라이언트 초기화
// ---------------------------------------------------------------------------

if (!NOTION_TOKEN) {
  console.error('[FATAL] NOTION_TOKEN 환경변수가 없습니다. .env 파일을 확인하세요.');
  process.exit(1);
}
if (!NOTION_ROOT_PAGE_ID) {
  console.error('[FATAL] NOTION_ROOT_PAGE_ID 환경변수가 없습니다. .env 파일을 확인하세요.');
  process.exit(1);
}

const notion = new Client({ auth: NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

// ---------------------------------------------------------------------------
// 유틸
// ---------------------------------------------------------------------------

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, (res) => {
      // presigned URL 리다이렉트 처리
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve(httpsGet(res.headers.location));
        return;
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () =>
        resolve({
          status: res.statusCode,
          buffer: Buffer.concat(chunks),
          contentType: res.headers['content-type'] || '',
        })
      );
      res.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error('timeout'));
    });
  });
}

// ---------------------------------------------------------------------------
// slug 변환 — velog/tistory 동일 정책
// ---------------------------------------------------------------------------

const HANGUL_INITIALS = [
  'g','gg','n','d','dd','r','m','b','bb','s','ss','','j','jj','ch','k','t','p','h',
];
const HANGUL_VOWELS = [
  'a','ae','ya','yae','eo','e','yeo','ye','o','wa','wae','oe','yo','u','wo','we','wi','yu','eu','ui','i',
];
const HANGUL_FINALS = [
  '','g','gg','gs','n','nj','nh','d','l','lg','lm','lb','ls','lt','lp','lh','m','b','bs','s','ss','ng','j','ch','k','t','p','h',
];

function hangulToRoman(char) {
  const code = char.charCodeAt(0) - 0xac00;
  if (code < 0 || code > 11171) return char;
  const initial = Math.floor(code / (21 * 28));
  const vowel = Math.floor((code % (21 * 28)) / 28);
  const final = code % 28;
  return HANGUL_INITIALS[initial] + HANGUL_VOWELS[vowel] + HANGUL_FINALS[final];
}

function koreanToSlug(text) {
  let result = '';
  for (const ch of text) {
    const code = ch.charCodeAt(0);
    if (code >= 0xac00 && code <= 0xd7a3) {
      result += hangulToRoman(ch);
    } else if (/[a-zA-Z0-9]/.test(ch)) {
      result += ch.toLowerCase();
    } else {
      result += '-';
    }
  }
  return result.replace(/-+/g, '-').replace(/^-|-$/g, '');
}

function titleToSlug(title) {
  if (!title) return 'untitled';
  const romanized = koreanToSlug(title);
  return (romanized || 'untitled').slice(0, 80);
}

// slug 중복 방지
const usedSlugs = new Set();
function dedupeSlug(slug) {
  if (!usedSlugs.has(slug)) {
    usedSlugs.add(slug);
    return slug;
  }
  let i = 1;
  while (usedSlugs.has(`${slug}-${i}`)) i++;
  const unique = `${slug}-${i}`;
  usedSlugs.add(unique);
  return unique;
}

// ---------------------------------------------------------------------------
// DB 제목 → 카테고리 매핑 테이블
// ---------------------------------------------------------------------------

const DB_TO_CATEGORY = {
  '공부노트': 'study',
  '스터디': 'study',
  '회고 및 기록': 'retrospective',
  '트러블슈팅': 'troubleshooting',
  '프로젝트 제안서': 'projects',
  '토이 프로젝트': 'projects',
  'Untitled': 'notion',
  'New database': 'notion',
};

// ---------------------------------------------------------------------------
// 태그/카테고리 정규화
// ---------------------------------------------------------------------------

function normalizeTag(tag) {
  if (!tag) return '';
  return tag
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function guessCategory(tags, title, parentName) {
  // 1순위: DB 제목 기반 매핑 (명시적)
  if (parentName && DB_TO_CATEGORY[parentName]) {
    return DB_TO_CATEGORY[parentName];
  }

  // 2순위: 태그/제목 키워드 추정
  const allText = [...(tags || []), title || '', parentName || ''].join(' ').toLowerCase();
  if (/javascript|js\b|node|react|vue|svelte/.test(allText)) return 'javascript';
  if (/typescript|ts\b/.test(allText)) return 'typescript';
  if (/css|html|web\b|frontend/.test(allText)) return 'frontend';
  if (/python|django|flask/.test(allText)) return 'python';
  if (/\bai\b|gpt|llm|chatbot/.test(allText)) return 'ai';
  if (/java|spring/.test(allText)) return 'java';
  if (/c언어|clang/.test(allText)) return 'c-lang';
  if (/데이터|data|sql|\bdb\b/.test(allText)) return 'database';

  // 3순위: parentName이 영문 slug 형태면 그대로 사용
  if (parentName) {
    const pSlug = normalizeTag(parentName);
    if (pSlug && /^[a-z0-9-]+$/.test(pSlug) && pSlug !== 'root') return pSlug;
  }

  // 4순위: 기본값
  return 'notion';
}

// ---------------------------------------------------------------------------
// 이미지 다운로드
// ---------------------------------------------------------------------------

async function downloadImage(url, slug) {
  try {
    const imgDir = path.join(IMAGE_DIR, slug);
    fs.mkdirSync(imgDir, { recursive: true });

    const urlObj = new URL(url);
    const rawName = path.basename(urlObj.pathname);
    const ext = path.extname(rawName) || '.jpg';
    const baseName = rawName.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 60);
    const safeName = baseName.includes('.') ? baseName : baseName + ext;
    const destPath = path.join(imgDir, safeName);
    const publicPath = `/images/migrated-notion/${slug}/${safeName}`;

    if (fs.existsSync(destPath)) return publicPath;

    const res = await httpsGet(url);
    if (res.status === 200) {
      fs.writeFileSync(destPath, res.buffer);
      return publicPath;
    }
    console.warn(`    [WARN] 이미지 다운로드 실패 (HTTP ${res.status}): ${url.slice(0, 80)}`);
  } catch (e) {
    console.warn(`    [WARN] 이미지 다운로드 오류: ${e.message}`);
  }
  return null;
}

// ---------------------------------------------------------------------------
// 본문 이미지 처리 (Notion presigned URL 치환)
// ---------------------------------------------------------------------------

async function processBodyImages(body, slug) {
  if (!body) return { processed: '', downloadCount: 0 };

  let processed = body;
  let downloadCount = 0;

  // Notion S3 presigned URL 패턴
  const imgRegex = /!\[([^\]]*)\]\((https:\/\/(?:prod-files-secure|s3[^\s)]*amazonaws)[^\s)]+)\)/g;
  const matches = [...body.matchAll(imgRegex)];

  // URL 기준 중복 제거
  const uniqueUrls = new Map();
  for (const m of matches) {
    if (!uniqueUrls.has(m[2])) uniqueUrls.set(m[2], { full: m[0], alt: m[1], url: m[2] });
  }

  for (const { full, alt, url } of uniqueUrls.values()) {
    const localPath = await downloadImage(url, slug);
    if (localPath) {
      processed = processed.split(full).join(`![${alt}](${localPath})`);
      downloadCount++;
    }
    await sleep(50);
  }

  return { processed, downloadCount };
}

// ---------------------------------------------------------------------------
// Notion 페이지 메타데이터 추출
// ---------------------------------------------------------------------------

function extractTitle(page) {
  const titleProp =
    page.properties?.title ||
    page.properties?.Title ||
    page.properties?.Name;
  if (titleProp?.title) {
    return titleProp.title.map((t) => t.plain_text).join('') || '';
  }
  if (titleProp?.rich_text) {
    return titleProp.rich_text.map((t) => t.plain_text).join('') || '';
  }
  return '';
}

function extractTags(page) {
  const tagsProp =
    page.properties?.Tags ||
    page.properties?.tags ||
    page.properties?.Tag;
  if (tagsProp?.multi_select) {
    return tagsProp.multi_select
      .map((t) => normalizeTag(t.name))
      .filter((t) => t && /^[a-z0-9-]+$/.test(t));
  }
  return [];
}

function extractCoverUrl(page) {
  if (page.cover?.external?.url) return page.cover.external.url;
  if (page.cover?.file?.url) return page.cover.file.url;
  return null;
}

function extractDescription(page, bodyText) {
  const descProp =
    page.properties?.Description ||
    page.properties?.description ||
    page.properties?.Summary;
  if (descProp?.rich_text?.length > 0) {
    return descProp.rich_text.map((t) => t.plain_text).join('').slice(0, 290);
  }
  if (bodyText) {
    const clean = bodyText
      .replace(/[#*`\[\]\-_>]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    if (clean.length > 0) return clean.slice(0, 200);
  }
  return '(내용 없음)';
}

// ---------------------------------------------------------------------------
// frontmatter 빌드
// ---------------------------------------------------------------------------

function buildFrontmatter({ title, description, pubDate, updatedDate, tags, category, slug, originalUrl, ogImage }) {
  const lines = [
    '---',
    `title: ${JSON.stringify(title)}`,
    `description: ${JSON.stringify(description)}`,
    `pubDate: ${new Date(pubDate).toISOString()}`,
  ];
  if (updatedDate) lines.push(`updatedDate: ${new Date(updatedDate).toISOString()}`);
  lines.push(`tags: [${tags.map((t) => JSON.stringify(t)).join(', ')}]`);
  lines.push(`category: ${JSON.stringify(category)}`);
  lines.push(`slug: ${JSON.stringify(slug)}`);
  lines.push(`draft: false`);
  lines.push(`originalUrl: ${JSON.stringify(originalUrl)}`);
  if (ogImage) lines.push(`ogImage: ${JSON.stringify(ogImage)}`);
  lines.push('---');
  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// 재귀 페이지 탐색
// ---------------------------------------------------------------------------

// step1: 루트 페이지 블록 재귀 탐색 → child_page 수집 + DB ID 목록 수집
async function collectPages(blockId, parentTitle, depth, collected, foundDbIds) {
  if (depth > MAX_DEPTH) return;

  let cursor = undefined;
  do {
    await sleep(SLEEP_MS);
    const params = { block_id: blockId, page_size: 50 };
    if (cursor) params.start_cursor = cursor;

    let response;
    try {
      response = await notion.blocks.children.list(params);
    } catch (e) {
      console.warn(`  [WARN] blocks.children.list 실패 (${blockId}): ${e.message}`);
      return;
    }

    for (const block of response.results) {
      if (block.type === 'child_page') {
        collected.push({
          id: block.id,
          title: block.child_page?.title || 'Untitled',
          parentTitle,
          type: 'page',
          pageMeta: null,
        });
        await collectPages(block.id, block.child_page?.title || parentTitle, depth + 1, collected, foundDbIds);
      } else if (block.type === 'child_database') {
        // DB ID와 제목을 기록만 하고 실제 rows는 step2에서 search 한 번으로 처리
        foundDbIds.set(block.id.replace(/-/g, ''), block.child_database?.title || parentTitle);
      } else if (['column_list', 'column', 'toggle', 'synced_block'].includes(block.type)) {
        // 레이아웃 컨테이너는 투명하게 재귀 탐색 (parentTitle 유지)
        await collectPages(block.id, parentTitle, depth + 1, collected, foundDbIds);
      }
    }

    cursor = response.has_more ? response.next_cursor : undefined;
  } while (cursor);
}

// step2: search 한 번 순회 → foundDbIds에 속한 페이지만 수집
async function collectAllDbPages(foundDbIds, collected) {
  if (foundDbIds.size === 0) return;
  console.log(`  DB 탐색 대상: ${[...foundDbIds.values()].join(', ')}`);

  let cursor = undefined;
  let scanned = 0;
  do {
    await sleep(SLEEP_MS);
    const params = { filter: { value: 'page', property: 'object' }, page_size: 100 };
    if (cursor) params.start_cursor = cursor;

    let response;
    try {
      response = await notion.search(params);
    } catch (e) {
      console.warn(`  [WARN] search 실패: ${e.message}`);
      return;
    }

    scanned += response.results.length;
    for (const page of response.results) {
      // v5 parent 구조: { type: 'data_source_id', data_source_id: '<view-uuid>', database_id: '<actual-db-uuid>' }
      // database_id가 실제 DB UUID → 이걸로 필터링
      const parentId = (page.parent?.database_id || '').replace(/-/g, '');

      if (parentId && foundDbIds.has(parentId)) {
        const dbTitle = foundDbIds.get(parentId);
        collected.push({
          id: page.id,
          title: extractTitle(page),
          parentTitle: dbTitle,
          type: 'db-row',
          pageMeta: page,
        });
      }
    }

    cursor = response.has_more ? response.next_cursor : undefined;
  } while (cursor);

  console.log(`  search 순회 완료: 총 ${scanned}개 페이지 스캔`);
}

// ---------------------------------------------------------------------------
// 단일 페이지 변환
// ---------------------------------------------------------------------------

async function migratePage(pageInfo, index, total) {
  console.log(`\n[${index + 1}/${total}] ${pageInfo.title}`);
  console.log(`  id: ${pageInfo.id} | parent: ${pageInfo.parentTitle}`);

  // 페이지 메타 로드 (child_page는 pageMeta 없음)
  let page = pageInfo.pageMeta;
  if (!page) {
    await sleep(SLEEP_MS);
    try {
      page = await notion.pages.retrieve({ page_id: pageInfo.id });
    } catch (e) {
      console.warn(`  [ERROR] pages.retrieve 실패: ${e.message}`);
      return null;
    }
  }

  const title = (extractTitle(page) || pageInfo.title || '').trim();
  if (!title) {
    console.log(`  [SKIP] 제목 없음`);
    return null;
  }

  // 본문 변환
  await sleep(SLEEP_MS);
  let mdBlocks;
  try {
    mdBlocks = await n2m.pageToMarkdown(pageInfo.id);
  } catch (e) {
    console.warn(`  [ERROR] notion-to-md 실패: ${e.message}`);
    return null;
  }

  const rawBody = n2m.toMarkdownString(mdBlocks)?.parent || '';

  if (!rawBody.trim()) {
    console.log(`  [SKIP] 본문 없음`);
    return null;
  }

  const slug = dedupeSlug(titleToSlug(title));
  console.log(`  slug: ${slug}`);

  // 이미지 다운로드 (presigned URL 만료 전 즉시)
  const { processed: body, downloadCount } = await processBodyImages(rawBody, slug);
  console.log(`  이미지: ${downloadCount}개 다운로드`);

  // cover 이미지
  const coverUrl = extractCoverUrl(page);
  let ogImage = null;
  if (coverUrl) {
    ogImage = await downloadImage(coverUrl, slug);
  }

  const tags = extractTags(page);
  const category = guessCategory(tags, title, pageInfo.parentTitle);
  const description = extractDescription(page, rawBody);
  const originalUrl = `https://www.notion.so/${pageInfo.id.replace(/-/g, '')}`;

  const frontmatter = buildFrontmatter({
    title,
    description,
    pubDate: page.created_time,
    updatedDate: page.last_edited_time,
    tags,
    category,
    slug,
    originalUrl,
    ogImage,
  });

  const content = `${frontmatter}\n\n${body}\n`;
  const outPath = path.join(OUTPUT_DIR, `${slug}.md`);
  fs.writeFileSync(outPath, content, 'utf-8');
  console.log(`  저장: ${outPath}`);

  return { slug, title, category, tags, originalUrl, downloadCount, ogImage };
}

// ---------------------------------------------------------------------------
// 메인
// ---------------------------------------------------------------------------

async function main() {
  const args = process.argv.slice(2);
  const isAll = args.includes('--all');
  const limitArg = args.indexOf('--limit');
  const limit = limitArg >= 0 ? parseInt(args[limitArg + 1], 10) : 5;

  console.log('=== Notion 마이그레이션 시작 ===');
  console.log(`루트 페이지 ID: ${NOTION_ROOT_PAGE_ID}`);
  console.log(`모드: ${isAll ? '전체' : `시범 ${limit}편`}`);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(IMAGE_DIR, { recursive: true });

  console.log('\n페이지 탐색 중 (최대 깊이 5)...');
  const collected = [];
  const foundDbIds = new Map(); // normalId → dbTitle
  await collectPages(NOTION_ROOT_PAGE_ID, 'root', 1, collected, foundDbIds);

  console.log(`  child_page ${collected.length}개, DB ${foundDbIds.size}개 발견`);

  // step2: DB rows를 search 한 번으로 수집
  if (foundDbIds.size > 0) {
    console.log('\nDB 페이지 수집 중 (search API)...');
    await collectAllDbPages(foundDbIds, collected);
  }

  const pageCount = collected.filter((p) => p.type === 'page').length;
  const dbRowCount = collected.filter((p) => p.type === 'db-row').length;
  console.log(`\n발견: child_page ${pageCount}개, db-row ${dbRowCount}개 (합계 ${collected.length}개)`);

  const targets = isAll ? collected : collected.slice(0, limit);
  console.log(`처리 대상: ${targets.length}편`);

  const results = [];
  for (let i = 0; i < targets.length; i++) {
    const result = await migratePage(targets[i], i, targets.length);
    if (result) results.push(result);
    await sleep(SLEEP_MS);
  }

  console.log('\n=== 결과 요약 ===');
  console.log(`성공: ${results.length}/${targets.length}편`);
  if (results.length > 0) {
    console.log('\n| slug | title | category | tags |');
    console.log('|------|-------|----------|------|');
    for (const r of results) {
      console.log(`| ${r.slug} | ${r.title} | ${r.category} | ${r.tags.join(', ')} |`);
    }
  }
  console.log(`\n재귀 탐색 결과: child_page ${pageCount}개, db-row ${dbRowCount}개`);
  console.log(`이미지 다운로드 합계: ${results.reduce((s, r) => s + r.downloadCount, 0)}개`);
  console.log(`출력 디렉토리: ${OUTPUT_DIR}`);
}

main().catch((e) => {
  console.error('[FATAL]', e);
  process.exit(1);
});
