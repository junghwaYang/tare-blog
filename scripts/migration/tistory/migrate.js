#!/usr/bin/env node
/**
 * tistory → Astro 마이그레이션 스크립트
 * @siltarre 의 tistory 글을 src/content/blog/migrated-tistory/ 로 변환
 *
 * 사용법:
 *   node scripts/migration/tistory/migrate.js [--limit 5] [--all]
 *   기본: 최신 5편만 처리 (시범 모드)
 *
 * 전략:
 *   1. RSS 피드에서 글 목록 + 본문 HTML 수집 (기본 소스)
 *   2. 개별 HTML 페이지에서 태그·카테고리 보완
 *   3. HTML → Markdown 변환 (내장 변환기)
 *   4. 이미지 다운로드 (tistory CDN / kakaocdn)
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { fileURLToPath } from 'url';
import { slugify } from '../lib/slugify.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_ROOT = path.resolve(__dirname, '../../../');
const OUTPUT_DIR = path.join(BLOG_ROOT, 'src/content/blog/migrated-tistory');
const IMAGE_DIR = path.join(BLOG_ROOT, 'public/images/migrated-tistory');

const TISTORY_BASE = 'https://siltare.tistory.com';
const RSS_URL = `${TISTORY_BASE}/rss`;
const SLEEP_MS = 200; // rate limit 방지

const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

// ---------------------------------------------------------------------------
// 유틸
// ---------------------------------------------------------------------------

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function httpGet(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(
      url,
      {
        headers: {
          'User-Agent': USER_AGENT,
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.8',
        },
      },
      (res) => {
        // follow redirects
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return httpGet(res.headers.location).then(resolve).catch(reject);
        }
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () =>
          resolve({ status: res.statusCode, buffer: Buffer.concat(chunks) })
        );
        res.on('error', reject);
      }
    );
    req.on('error', reject);
    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error(`Timeout: ${url}`));
    });
  });
}

// ---------------------------------------------------------------------------
// slug 변환 — lib/slugify.js (hangul-romanize 기반) 사용
// ---------------------------------------------------------------------------

function titleToSlug(title, postId) {
  if (!title) return `tistory-${postId}`;
  return slugify(title) || `tistory-${postId}`;
}

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
// 태그·카테고리 정규화 (velog 패턴 재사용)
// ---------------------------------------------------------------------------

function normalizeTag(tag) {
  return tag
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

const CATEGORY_MAP = {
  '웹,앱 해킹': 'web-hacking',
  '웹,앱 해킹/연구': 'web-hacking',
  '웹,앱 해킹/기초': 'web-hacking',
  wargame: 'wargame',
  'wargame/dreamhack': 'wargame',
  '웹 개발': 'web-dev',
  '웹 개발/react': 'react',
  '프로그래밍': 'programming',
  '프로그래밍/javascript': 'javascript',
  '프로그래밍/c': 'c-lang',
  'c언어': 'c-lang',
  '정보보호학': 'security',
  '정보보호학/멀티미디어개론': 'security',
  '3d 모델링 & 게임 개발': '3d-modeling',
  '3d 모델링 & 게임 개발/블렌더': 'blender',
  ai: 'ai',
};

function normalizeCategory(rawCategory) {
  if (!rawCategory) return 'general';
  const key = rawCategory.toLowerCase().trim();
  if (CATEGORY_MAP[key]) return CATEGORY_MAP[key];
  const main = key.split('/')[0].trim();
  if (CATEGORY_MAP[main]) return CATEGORY_MAP[main];
  const slug = normalizeTag(main);
  return slug || 'general';
}

function guessCategoryFromTitle(title) {
  const t = title.toLowerCase();
  if (/c언어|\[c\]/.test(t)) return 'c-lang';
  if (/javascript|js|react|vue/.test(t)) return 'javascript';
  if (/python|django/.test(t)) return 'python';
  if (/ai|gpt|llm|에이전트|agentic/.test(t)) return 'ai';
  if (/해킹|wargame|ctf|dreamhack/.test(t)) return 'web-hacking';
  if (/컴퓨터|데이터 통신|네트워크|프로토콜/.test(t)) return 'computer-science';
  if (/블렌더|3d|게임/.test(t)) return '3d-modeling';
  return 'general';
}

// ---------------------------------------------------------------------------
// HTML → Markdown 변환 (내장, turndown 미설치 대응)
// ---------------------------------------------------------------------------

function htmlToMarkdown(html) {
  let md = html;

  // 광고·위젯·TOC 제거
  md = md.replace(
    /<div[^>]+class="[^"]*(?:revenue_unit|kakao_ad|toc\b|related|comment|footer|tag_wrap|another_category)[^"]*"[^>]*>[\s\S]*?<\/div>/gi,
    ''
  );
  md = md.replace(/<!--[\s\S]*?-->/g, '');

  // iframe (YouTube) 보존
  md = md.replace(
    /<iframe[^>]+src="([^"]*youtube[^"]*)"[^>]*>[\s\S]*?<\/iframe>/gi,
    (_, src) => `\n\n<iframe src="${src}" frameborder="0" allowfullscreen></iframe>\n\n`
  );
  md = md.replace(/<iframe[\s\S]*?<\/iframe>/gi, '');

  // 코드블록
  md = md.replace(
    /<pre[^>]*><code[^>]*class="[^"]*language-([a-z]+)[^"]*"[^>]*>([\s\S]*?)<\/code><\/pre>/gi,
    (_, lang, code) => `\n\`\`\`${lang}\n${decodeHtmlEntities(code).trim()}\n\`\`\`\n`
  );
  md = md.replace(
    /<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi,
    (_, code) => `\n\`\`\`\n${decodeHtmlEntities(code).trim()}\n\`\`\`\n`
  );
  md = md.replace(
    /<pre[^>]*>([\s\S]*?)<\/pre>/gi,
    (_, code) => `\n\`\`\`\n${decodeHtmlEntities(code).trim()}\n\`\`\`\n`
  );

  // 인라인 코드
  md = md.replace(/<code[^>]*>(.*?)<\/code>/gi, (_, c) => `\`${decodeHtmlEntities(c)}\``);

  // 제목
  for (let h = 6; h >= 1; h--) {
    md = md.replace(
      new RegExp(`<h${h}[^>]*>([\\s\\S]*?)<\\/h${h}>`, 'gi'),
      (_, t) => `\n${'#'.repeat(h)} ${stripTags(decodeHtmlEntities(t)).trim()}\n`
    );
  }

  // 강조
  md = md.replace(/<strong[^>]*>(.*?)<\/strong>/gi, (_, t) => `**${stripTags(t)}**`);
  md = md.replace(/<b[^>]*>(.*?)<\/b>/gi, (_, t) => `**${stripTags(t)}**`);
  md = md.replace(/<em[^>]*>(.*?)<\/em>/gi, (_, t) => `*${stripTags(t)}*`);
  md = md.replace(/<i[^>]*>(.*?)<\/i>/gi, (_, t) => `*${stripTags(t)}*`);

  // 링크
  md = md.replace(/<a[^>]+href="([^"]*)"[^>]*>(.*?)<\/a>/gi, (_, href, text) => {
    const t = stripTags(text).trim();
    return t ? `[${t}](${href})` : href;
  });

  // 이미지
  md = md.replace(/<img[^>]+src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, (_, src, alt) =>
    `\n![${alt}](${src})\n`
  );
  md = md.replace(/<img[^>]+src="([^"]*)"[^>]*\/?>/gi, (_, src) => `\n![image](${src})\n`);

  // 인용
  md = md.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, content) =>
    stripTags(content)
      .trim()
      .split('\n')
      .map((l) => `> ${l}`)
      .join('\n') + '\n'
  );

  // 수평선
  md = md.replace(/<hr[^>]*\/?>/gi, '\n---\n');

  // 목록
  md = md.replace(/<li[^>]*>(.*?)<\/li>/gi, (_, t) => `- ${stripTags(decodeHtmlEntities(t)).trim()}\n`);
  md = md.replace(/<\/?[uo]l[^>]*>/gi, '\n');

  // 표
  md = md.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (_, tableContent) => {
    const rows = [];
    let isFirst = true;
    for (const trMatch of tableContent.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)) {
      const cells = [];
      for (const td of trMatch[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)) {
        cells.push(stripTags(decodeHtmlEntities(td[1])).trim());
      }
      if (cells.length === 0) continue;
      rows.push(`| ${cells.join(' | ')} |`);
      if (isFirst) {
        rows.push(`| ${cells.map(() => '---').join(' | ')} |`);
        isFirst = false;
      }
    }
    return '\n' + rows.join('\n') + '\n';
  });

  // 문단
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, t) => {
    const text = stripTags(decodeHtmlEntities(t)).trim();
    return text ? `\n${text}\n` : '';
  });
  md = md.replace(/<br\s*\/?>/gi, '\n');
  md = md.replace(/<div[^>]*>([\s\S]*?)<\/div>/gi, (_, t) => {
    const text = stripTags(decodeHtmlEntities(t)).trim();
    return text ? `\n${text}\n` : '';
  });

  // 나머지 태그 제거 → 엔티티 디코드
  md = decodeHtmlEntities(stripTags(md));

  // 연속 빈줄 정리
  return md.replace(/\n{3,}/g, '\n\n').trim();
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, '');
}

function decodeHtmlEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&lsquo;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&hellip;/g, '…')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
}

// ---------------------------------------------------------------------------
// 이미지 다운로드
// ---------------------------------------------------------------------------

async function downloadImage(url, slug) {
  try {
    const parsedUrl = new URL(url);
    const imgDir = path.join(IMAGE_DIR, slug);
    fs.mkdirSync(imgDir, { recursive: true });

    // fname 파라미터 우선 (daumcdn 썸네일 패턴)
    let filename;
    const fname = parsedUrl.searchParams.get('fname');
    if (fname) {
      try {
        filename = path.basename(new URL(fname).pathname);
      } catch {
        filename = '';
      }
    }
    if (!filename) filename = path.basename(parsedUrl.pathname);
    filename = filename.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 80) || 'image.jpg';

    const destPath = path.join(imgDir, filename);
    const publicPath = `/images/migrated-tistory/${slug}/${filename}`;

    if (fs.existsSync(destPath)) return publicPath;

    const res = await httpGet(url);
    if (res.status === 200) {
      fs.writeFileSync(destPath, res.buffer);
      return publicPath;
    }
    console.warn(`  [WARN] 이미지 다운로드 실패 (${res.status}): ${url.slice(0, 80)}`);
  } catch (e) {
    console.warn(`  [WARN] 이미지 오류: ${url.slice(0, 80)} → ${e.message}`);
  }
  return null;
}

async function processImages(content, slug) {
  let processed = content;
  let downloadCount = 0;

  // markdown img
  const mdImgRegex = /!\[([^\]]*)\]\((https?:\/\/[^)]*(?:tistory|daumcdn|kakaocdn)[^)]*)\)/g;
  for (const match of [...content.matchAll(mdImgRegex)]) {
    const [full, alt, url] = match;
    const localPath = await downloadImage(url, slug);
    if (localPath) {
      processed = processed.replace(full, `![${alt}](${localPath})`);
      downloadCount++;
    }
    await sleep(50);
  }

  // HTML img (혹시 남아 있을 경우)
  const htmlImgRegex = /<img[^>]+src="(https?:\/\/[^"]*(?:tistory|daumcdn|kakaocdn)[^"]*)"[^>]*>/g;
  for (const match of [...content.matchAll(htmlImgRegex)]) {
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
// RSS 파싱
// ---------------------------------------------------------------------------

function parseRss(xml) {
  const items = [];

  for (const m of xml.matchAll(/<item>([\s\S]*?)<\/item>/g)) {
    const item = m[1];

    const title = item.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim() ?? '';
    const link = item.match(/<link>([\s\S]*?)<\/link>/)?.[1]?.trim() ?? '';
    const desc = item.match(/<description>([\s\S]*?)<\/description>/)?.[1]?.trim() ?? '';
    const pubDate = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1]?.trim() ?? '';

    // pages/ 링크는 건너뜀
    if (link.includes('/pages/')) continue;

    const idMatch = link.match(/\/(\d+)$/);
    const postId = idMatch?.[1] ?? null;

    items.push({
      title: decodeHtmlEntities(title),
      link,
      postId,
      descHtml: decodeHtmlEntities(desc),
      pubDate,
    });
  }

  return items;
}

// ---------------------------------------------------------------------------
// 중첩 div 추출 (depth tracking)
// ---------------------------------------------------------------------------

function extractNestedDiv(html, marker) {
  const start = html.indexOf(marker);
  if (start === -1) return null;
  const tagStart = html.lastIndexOf('<div', start);
  if (tagStart === -1) return null;
  let depth = 0, i = tagStart;
  while (i < html.length) {
    if (html.slice(i, i + 4) === '<div') { depth++; i += 4; }
    else if (html.slice(i, i + 6) === '</div>') {
      depth--;
      if (depth === 0) return html.slice(tagStart, i + 6);
      i += 6;
    } else {
      i++;
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// HTML 페이지 → 본문 HTML 추출 (이미지 보강용)
// ---------------------------------------------------------------------------

function extractBodyHtml(pageHtml) {
  // fallback 체인: tt_article_useless_p_margin → entry-content → article-view → #content
  const CONTENT_MARKERS = [
    'tt_article_useless_p_margin',
    'entry-content',
    'article-view',
    'contents_style',
  ];

  for (const marker of CONTENT_MARKERS) {
    const div = extractNestedDiv(pageHtml, marker);
    if (div && div.length > 200) {
      // 광고·위젯 제거
      let clean = div
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<ins[^>]*>[\s\S]*?<\/ins>/gi, '')
        .replace(/<div[^>]+data-tistory-react-app[^>]*>[\s\S]*?<\/div>/gi, '')
        .replace(/<div[^>]+class="[^"]*(?:revenue_unit|adsbygoogle|wrap_btn|reaction|related|comment|footer|tag_wrap|another_category|sns_btn|author_post)[^"]*"[^>]*>[\s\S]*?<\/div>/gi, '')
        .replace(/<!--[\s\S]*?-->/g, '');
      return { html: clean, marker };
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// 개별 HTML 페이지 → 태그·카테고리·이미지 수집
// ---------------------------------------------------------------------------

async function fetchPostMeta(url) {
  try {
    const res = await httpGet(url);
    if (res.status !== 200) return {};
    const html = res.buffer.toString('utf-8');

    const ogImage =
      html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/)?.[1] ?? null;
    const category =
      html.match(/<div class="category">(.*?)<\/div>/)?.[1]?.trim() ?? null;
    const tags = [...html.matchAll(/<a[^>]+rel="tag"[^>]*>([^<]+)<\/a>/g)].map((m) =>
      m[1].trim()
    );
    const modifiedTime =
      html.match(/<meta[^>]+property="article:modified_time"[^>]+content="([^"]+)"/)?.[1] ?? null;

    // 본문 HTML 추출 (이미지 보강용)
    const bodyResult = extractBodyHtml(html);
    const bodyHtml = bodyResult?.html ?? null;
    const bodyMarker = bodyResult?.marker ?? null;

    // 본문 내 이미지 목록 추출
    const bodyImages = bodyHtml
      ? [...bodyHtml.matchAll(/<img[^>]+src="([^"]+)"/gi)].map((m) => m[1])
      : [];

    return { ogImage, category, tags, modifiedTime, bodyHtml, bodyMarker, bodyImages };
  } catch (e) {
    console.warn(`  [WARN] 메타 수집 실패: ${url} → ${e.message}`);
    return {};
  }
}

// ---------------------------------------------------------------------------
// frontmatter 생성
// ---------------------------------------------------------------------------

function buildFrontmatter({ title, slug, pubDate, modifiedTime, description, tags, category, originalUrl, ogImage }) {
  const lines = [
    '---',
    `title: ${JSON.stringify(title)}`,
    `description: ${JSON.stringify(description)}`,
    `pubDate: ${new Date(pubDate).toISOString()}`,
  ];

  if (modifiedTime) {
    const mod = new Date(modifiedTime);
    const pub = new Date(pubDate);
    if (mod > pub) lines.push(`updatedDate: ${mod.toISOString()}`);
  }

  lines.push(`tags: [${tags.map((t) => JSON.stringify(t)).join(', ')}]`);
  lines.push(`category: ${JSON.stringify(category)}`);
  lines.push(`slug: ${JSON.stringify(slug)}`);
  lines.push('draft: false');
  lines.push(`originalUrl: ${JSON.stringify(originalUrl)}`);
  if (ogImage) lines.push(`ogImage: ${JSON.stringify(ogImage)}`);
  lines.push('---');

  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// 단일 글 변환
// ---------------------------------------------------------------------------

async function migratePost(item, index, total) {
  console.log(`\n[${index + 1}/${total}] ${item.title}`);
  console.log(`  URL: ${item.link}`);

  await sleep(SLEEP_MS);
  const meta = await fetchPostMeta(item.link);

  const normalizedTags = (meta.tags ?? [])
    .map(normalizeTag)
    .filter((t) => t.length > 0 && /^[a-z0-9-]+$/.test(t));

  const category = meta.category
    ? normalizeCategory(meta.category)
    : guessCategoryFromTitle(item.title);

  const rawSlug = titleToSlug(item.title, item.postId);
  const slug = dedupeSlug(rawSlug);
  console.log(`  slug: ${slug}`);
  console.log(`  category: ${category} | tags: ${normalizedTags.join(', ') || '(없음)'}`);

  // 본문 소스 결정: HTML 페이지 본문이 있고 이미지가 포함된 경우 우선 사용
  let sourceHtml = item.descHtml;
  if (meta.bodyHtml && meta.bodyImages && meta.bodyImages.length > 0) {
    console.log(`  본문 소스: HTML 페이지 (${meta.bodyMarker}, 이미지 ${meta.bodyImages.length}개 감지)`);
    sourceHtml = meta.bodyHtml;
  } else if (meta.bodyHtml && meta.bodyHtml.length > item.descHtml.length * 0.8) {
    // HTML 본문이 RSS보다 실질적으로 더 길면 사용
    console.log(`  본문 소스: HTML 페이지 (${meta.bodyMarker})`);
    sourceHtml = meta.bodyHtml;
  } else {
    console.log(`  본문 소스: RSS`);
  }

  const markdown = htmlToMarkdown(sourceHtml);

  const description = markdown
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[*`_\[\]]/g, '')
    .replace(/\n+/g, ' ')
    .trim()
    .slice(0, 290);

  const { processed: body, downloadCount } = await processImages(markdown, slug);
  console.log(`  이미지 다운로드: ${downloadCount}개`);

  const frontmatter = buildFrontmatter({
    title: item.title,
    slug,
    pubDate: item.pubDate,
    modifiedTime: meta.modifiedTime,
    description: description || item.title,
    tags: normalizedTags,
    category,
    originalUrl: item.link,
    ogImage: meta.ogImage ?? null,
  });

  const content = `${frontmatter}\n\n${body}\n`;
  const outPath = path.join(OUTPUT_DIR, `${slug}.md`);
  fs.writeFileSync(outPath, content, 'utf-8');
  console.log(`  저장: src/content/blog/migrated-tistory/${slug}.md`);

  return { slug, title: item.title, originalUrl: item.link, outPath, downloadCount, category, tags: normalizedTags };
}

// ---------------------------------------------------------------------------
// 메인
// ---------------------------------------------------------------------------

async function main() {
  const args = process.argv.slice(2);
  const isAll = args.includes('--all');
  const limitArg = args.indexOf('--limit');
  const limit = limitArg >= 0 ? parseInt(args[limitArg + 1], 10) : 5;

  console.log('=== tistory 마이그레이션 시작 ===');
  console.log(`대상: ${TISTORY_BASE}`);
  console.log(`모드: ${isAll ? '전체' : `시범 ${limit}편`}`);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(IMAGE_DIR, { recursive: true });

  console.log('\nRSS 수집 중...');
  const rssRes = await httpGet(RSS_URL);
  if (rssRes.status !== 200) {
    console.error(`RSS 수집 실패 (${rssRes.status})`);
    process.exit(1);
  }
  const allPosts = parseRss(rssRes.buffer.toString('utf-8'));
  console.log(`총 ${allPosts.length}편 발견 (pages/ 제외)`);

  const targets = isAll ? allPosts : allPosts.slice(0, limit);
  console.log(`처리 대상: ${targets.length}편`);

  const results = [];
  const errors = [];

  for (let i = 0; i < targets.length; i++) {
    try {
      const result = await migratePost(targets[i], i, targets.length);
      if (result) results.push(result);
    } catch (e) {
      console.error(`  [ERROR] 변환 실패: ${targets[i].title} → ${e.message}`);
      errors.push({ title: targets[i].title, error: e.message });
    }
    await sleep(SLEEP_MS);
  }

  console.log('\n=== 결과 요약 ===');
  console.log(`성공: ${results.length}/${targets.length}편`);
  if (errors.length > 0) {
    console.log(`실패: ${errors.length}편`);
    for (const e of errors) console.log(`  - ${e.title}: ${e.error}`);
  }

  for (const r of results) {
    console.log(`\n  [${r.slug}]`);
    console.log(`    제목: ${r.title}`);
    console.log(`    카테고리: ${r.category} | 태그: ${r.tags.join(', ') || '없음'}`);
    console.log(`    이미지: ${r.downloadCount}개`);
  }

  const totalImages = results.reduce((s, r) => s + r.downloadCount, 0);
  console.log(`\n전체 통계:`);
  console.log(`  RSS 글 수: ${allPosts.length}편`);
  console.log(`  이번 처리: ${results.length}편`);
  console.log(`  총 이미지 다운로드: ${totalImages}개`);
}

main().catch((e) => {
  console.error('[FATAL]', e);
  process.exit(1);
});
