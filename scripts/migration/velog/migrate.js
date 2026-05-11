#!/usr/bin/env node
/**
 * velog → Astro 마이그레이션 스크립트
 * @siltarre 의 velog 글을 src/content/blog/migrated-velog/ 로 변환
 *
 * 사용법:
 *   node scripts/migration/velog/migrate.js [--limit 5] [--all]
 *   기본: 최신 5편만 처리 (시범 모드)
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { fileURLToPath } from 'url';
import { slugify } from '../lib/slugify.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_ROOT = path.resolve(__dirname, '../../../');
const OUTPUT_DIR = path.join(BLOG_ROOT, 'src/content/blog/migrated-velog');
const IMAGE_DIR = path.join(BLOG_ROOT, 'public/images/migrated');
const CACHE_DIR = path.join(__dirname, '../.cache');

const VELOG_GRAPHQL = 'https://v3.velog.io/graphql';
const USERNAME = 'siltarre';
const SLEEP_MS = 150; // rate limit 방지

// ---------------------------------------------------------------------------
// 유틸
// ---------------------------------------------------------------------------

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    mod.get(url, (res) => {
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve({ status: res.statusCode, buffer: Buffer.concat(chunks) }));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function graphql(query, variables = {}) {
  const body = JSON.stringify({ query, variables });
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'v3.velog.io',
        path: '/graphql',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body),
        },
      },
      (res) => {
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => {
          try {
            resolve(JSON.parse(Buffer.concat(chunks).toString()));
          } catch (e) {
            reject(e);
          }
        });
      }
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ---------------------------------------------------------------------------
// slug 변환 — lib/slugify.js (hangul-romanize 기반) 사용
// ---------------------------------------------------------------------------

function normalizeSlug(urlSlug) {
  if (!urlSlug) return 'untitled';
  return slugify(urlSlug) || slugify(urlSlug.replace(/-/g, ' ')) || urlSlug;
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
// 태그/카테고리 정규화
// ---------------------------------------------------------------------------

function normalizeTag(tag) {
  return tag
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function guessCategory(tags, title) {
  const allText = [...tags, title].join(' ').toLowerCase();
  if (/c언어|c\s*lang|clang|c언어/.test(allText)) return 'c-lang';
  if (/javascript|js|node|react|vue|svelte/.test(allText)) return 'javascript';
  if (/typescript|ts/.test(allText)) return 'typescript';
  if (/css|html|web|cascad/.test(allText)) return 'frontend';
  if (/python|django|flask/.test(allText)) return 'python';
  if (/ai|gpt|llm|chatbot/.test(allText)) return 'ai';
  if (/java|spring/.test(allText)) return 'java';
  if (/데이터|data|sql|db/.test(allText)) return 'database';
  return 'general';
}

// ---------------------------------------------------------------------------
// 이미지 다운로드
// ---------------------------------------------------------------------------

async function downloadImage(url, slug) {
  try {
    const imgDir = path.join(IMAGE_DIR, slug);
    fs.mkdirSync(imgDir, { recursive: true });

    const filename = path.basename(new URL(url).pathname);
    const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
    const destPath = path.join(imgDir, safeName);
    const publicPath = `/images/migrated/${slug}/${safeName}`;

    if (fs.existsSync(destPath)) return publicPath;

    const res = await httpsGet(url);
    if (res.status === 200) {
      fs.writeFileSync(destPath, res.buffer);
      return publicPath;
    }
  } catch (e) {
    console.warn(`  [WARN] 이미지 다운로드 실패: ${url}`);
  }
  return null;
}

// ---------------------------------------------------------------------------
// 본문 이미지 처리
// ---------------------------------------------------------------------------

async function processBodyImages(body, slug) {
  let processed = body;
  let downloadCount = 0;

  const mdImgRegex = /!\[([^\]]*)\]\((https:\/\/images\.velog\.io\/[^)]+)\)/g;
  const mdMatches = [...body.matchAll(mdImgRegex)];

  const htmlImgRegex = /<img[^>]+src="(https:\/\/images\.velog\.io\/[^"]+)"[^>]*>/g;
  const htmlMatches = [...body.matchAll(htmlImgRegex)];

  for (const match of mdMatches) {
    const [full, alt, url] = match;
    const localPath = await downloadImage(url, slug);
    if (localPath) {
      processed = processed.replace(full, `![${alt}](${localPath})`);
      downloadCount++;
    }
    await sleep(50);
  }

  for (const match of htmlMatches) {
    const [full, url] = match;
    const localPath = await downloadImage(url, slug);
    if (localPath) {
      processed = processed.replace(full, `<img src="${localPath}" />`);
      downloadCount++;
    }
    await sleep(50);
  }

  return { processed, downloadCount };
}

// ---------------------------------------------------------------------------
// frontmatter 생성
// ---------------------------------------------------------------------------

function buildFrontmatter(post, slug) {
  const tags = (post.tags || [])
    .map(normalizeTag)
    .filter((t) => t.length > 0 && /^[a-z0-9-]+$/.test(t));

  const category = guessCategory(post.tags || [], post.title || '');

  const rawDesc = post.short_description
    ? post.short_description.trim()
    : (post.body || '').replace(/[#*`\[\]]/g, '').trim();
  const description = rawDesc.slice(0, 290);

  const lines = [
    '---',
    `title: ${JSON.stringify(post.title || '')}`,
    `description: ${JSON.stringify(description)}`,
    `pubDate: ${new Date(post.released_at).toISOString()}`,
  ];

  if (post.updated_at) {
    lines.push(`updatedDate: ${new Date(post.updated_at).toISOString()}`);
  }

  lines.push(`tags: [${tags.map((t) => JSON.stringify(t)).join(', ')}]`);
  lines.push(`category: ${JSON.stringify(category)}`);
  lines.push(`slug: ${JSON.stringify(slug)}`);
  lines.push(`draft: false`);

  const originalUrl = `https://velog.io/@${USERNAME}/${post.url_slug}`;
  lines.push(`originalUrl: ${JSON.stringify(originalUrl)}`);

  if (post.series?.name) {
    lines.push(`series: ${JSON.stringify(post.series.name)}`);
  }

  if (post.thumbnail) {
    lines.push(`ogImage: ${JSON.stringify(post.thumbnail)}`);
  }

  lines.push('---');
  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// GraphQL 쿼리
// ---------------------------------------------------------------------------

const POST_QUERY = `
  query GetPost($input: ReadPostInput!) {
    post(input: $input) {
      id
      title
      body
      short_description
      thumbnail
      released_at
      updated_at
      url_slug
      tags
      series { name url_slug }
      user { username }
    }
  }
`;

const POSTS_QUERY = `
  query GetPosts($input: GetPostsInput!) {
    posts(input: $input) {
      id
      title
      url_slug
      released_at
      updated_at
      short_description
      thumbnail
      tags
      series { name url_slug }
    }
  }
`;

async function fetchPostBody(urlSlug) {
  const data = await graphql(POST_QUERY, { input: { username: USERNAME, url_slug: urlSlug } });
  return data?.data?.post || null;
}

async function fetchAllPosts() {
  let allPosts = [];
  let cursor = null;

  while (true) {
    const input = { username: USERNAME, limit: 20 };
    if (cursor) input.cursor = cursor;

    const data = await graphql(POSTS_QUERY, { input });
    const posts = data?.data?.posts || [];
    if (posts.length === 0) break;

    allPosts = allPosts.concat(posts);
    if (posts.length < 20) break;

    cursor = posts[posts.length - 1].id;
    await sleep(SLEEP_MS);
  }

  return allPosts;
}

// ---------------------------------------------------------------------------
// 단일 글 변환
// ---------------------------------------------------------------------------

async function migratePost(postMeta, index, total) {
  console.log(`\n[${index + 1}/${total}] ${postMeta.title}`);
  console.log(`  url_slug: ${postMeta.url_slug}`);

  await sleep(SLEEP_MS);
  const post = await fetchPostBody(postMeta.url_slug);
  if (!post) {
    console.warn(`  [ERROR] 글 본문 가져오기 실패`);
    return null;
  }

  const rawSlug = normalizeSlug(post.url_slug);
  const slug = dedupeSlug(rawSlug);
  console.log(`  slug: ${slug}`);

  const { processed: body, downloadCount } = await processBodyImages(post.body || '', slug);
  console.log(`  이미지 다운로드: ${downloadCount}개`);

  const frontmatter = buildFrontmatter(post, slug);
  const content = `${frontmatter}\n\n${body}\n`;

  const outPath = path.join(OUTPUT_DIR, `${slug}.md`);
  fs.writeFileSync(outPath, content, 'utf-8');
  console.log(`  저장: ${outPath}`);

  return {
    slug,
    title: post.title,
    originalUrl: `https://velog.io/@${USERNAME}/${post.url_slug}`,
    outPath,
    downloadCount,
    category: guessCategory(post.tags || [], post.title || ''),
    tags: (post.tags || []).map(normalizeTag).filter(Boolean),
  };
}

// ---------------------------------------------------------------------------
// 메인
// ---------------------------------------------------------------------------

async function main() {
  const args = process.argv.slice(2);
  const isAll = args.includes('--all');
  const limitArg = args.indexOf('--limit');
  const limit = limitArg >= 0 ? parseInt(args[limitArg + 1]) : 5;

  console.log('=== velog 마이그레이션 시작 ===');
  console.log(`대상: @${USERNAME}`);
  console.log(`모드: ${isAll ? '전체' : `시범 ${limit}편`}`);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(IMAGE_DIR, { recursive: true });
  fs.mkdirSync(CACHE_DIR, { recursive: true });

  console.log('\n글 목록 수집 중...');
  const allPosts = await fetchAllPosts();
  console.log(`총 ${allPosts.length}편 발견`);

  const targets = isAll ? allPosts : allPosts.slice(0, limit);
  console.log(`처리 대상: ${targets.length}편`);

  const results = [];
  for (let i = 0; i < targets.length; i++) {
    const result = await migratePost(targets[i], i, targets.length);
    if (result) results.push(result);
    await sleep(SLEEP_MS);
  }

  console.log('\n=== 결과 요약 ===');
  console.log(`성공: ${results.length}/${targets.length}편`);
  for (const r of results) {
    console.log(`  - [${r.slug}] ${r.title}`);
    console.log(`    카테고리: ${r.category} | 태그: ${r.tags.join(', ')}`);
  }

  console.log('\n전체 통계:');
  console.log(`  총 글 수: ${allPosts.length}편`);
  console.log(`  이번 처리: ${results.length}편`);
  console.log(`  총 이미지 다운로드: ${results.reduce((s, r) => s + r.downloadCount, 0)}개`);
}

main().catch((e) => {
  console.error('[FATAL]', e);
  process.exit(1);
});
