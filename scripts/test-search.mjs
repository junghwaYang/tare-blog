#!/usr/bin/env node
/**
 * test-search.mjs — 한국어 검색 매칭률 baseline 측정
 *
 * 동작:
 *   1. src/content/blog/**\/*.md 전부 읽기
 *   2. 5개 키워드(--keywords로 override 가능)에 대해
 *      title + description + body에서 부분 일치 카운트
 *   3. 매칭 글 수 + top-3 결과(제목, 카테고리, 매칭 횟수) 출력
 *
 * 주의:
 *   - 이 스크립트는 Pagefind 인덱스와 다르게 단순 substring 검색입니다.
 *     Pagefind는 토큰화/세그멘트화하므로 실제 매칭이 더 많거나
 *     다를 수 있습니다. baseline 점검용으로만 사용하세요.
 *   - §9-3 교체 트리거: 글 100편+ OR 만족도 이슈 5건+ →
 *     FlexSearch/Algolia 검토.
 *
 * 실행:
 *   node scripts/test-search.mjs
 *   node scripts/test-search.mjs --keywords "리액트,타입스크립트"
 */

import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const CONTENT_DIR = join(ROOT, 'src/content/blog');

const DEFAULT_KEYWORDS = [
  '리액트',
  '타입스크립트',
  'git',
  'next',
  '데이터베이스',
];

function parseArgs() {
  const args = process.argv.slice(2);
  const idx = args.indexOf('--keywords');
  if (idx === -1) return DEFAULT_KEYWORDS;
  const raw = args[idx + 1];
  if (!raw) return DEFAULT_KEYWORDS;
  return raw
    .split(',')
    .map((k) => k.trim())
    .filter(Boolean);
}

async function listMarkdownFiles(dir) {
  const out = [];
  async function walk(d) {
    const entries = await readdir(d, { withFileTypes: true });
    for (const e of entries) {
      const p = join(d, e.name);
      if (e.isDirectory()) await walk(p);
      else if (e.isFile() && (p.endsWith('.md') || p.endsWith('.mdx'))) out.push(p);
    }
  }
  await walk(dir);
  return out;
}

function parseFrontmatter(raw) {
  if (!raw.startsWith('---\n')) return { meta: {}, body: raw };
  const end = raw.indexOf('\n---', 4);
  if (end === -1) return { meta: {}, body: raw };
  const fmRaw = raw.slice(4, end);
  const body = raw.slice(end + 4);
  const meta = {};
  for (const line of fmRaw.split('\n')) {
    const m = line.match(/^(\w+):\s*(.+?)\s*$/);
    if (!m) continue;
    const key = m[1];
    let val = m[2].replace(/^["']|["']$/g, '');
    meta[key] = val;
  }
  return { meta, body };
}

function countOccurrences(haystack, needle) {
  if (!needle) return 0;
  const lower = haystack.toLowerCase();
  const target = needle.toLowerCase();
  let count = 0;
  let i = 0;
  while ((i = lower.indexOf(target, i)) !== -1) {
    count++;
    i += target.length;
  }
  return count;
}

async function main() {
  const keywords = parseArgs();
  const files = await listMarkdownFiles(CONTENT_DIR);

  const docs = [];
  for (const f of files) {
    const raw = await readFile(f, 'utf8');
    const { meta, body } = parseFrontmatter(raw);
    if (meta.draft === 'true') continue;
    docs.push({
      file: relative(ROOT, f),
      title: meta.title ?? '(no title)',
      description: meta.description ?? '',
      category: meta.category ?? '',
      body,
    });
  }

  console.log(`\n📚 검색 인덱스: ${docs.length}편 (draft 제외)\n`);
  console.log(`🔍 검색 키워드: ${keywords.join(', ')}\n`);
  console.log('─'.repeat(72));

  for (const kw of keywords) {
    const hits = docs
      .map((d) => {
        const titleHits = countOccurrences(d.title, kw) * 5;
        const descHits = countOccurrences(d.description, kw) * 3;
        const bodyHits = countOccurrences(d.body, kw);
        const score = titleHits + descHits + bodyHits;
        return { ...d, score, titleHits, descHits, bodyHits };
      })
      .filter((d) => d.score > 0)
      .sort((a, b) => b.score - a.score);

    console.log(`\n🔎 "${kw}"`);
    console.log(`   매칭 글: ${hits.length}편`);
    if (hits.length === 0) {
      console.log('   (결과 없음 — Pagefind 검색 결과와 교차 확인 필요)');
      continue;
    }
    const top = hits.slice(0, 3);
    top.forEach((h, i) => {
      const breakdown = [
        h.titleHits > 0 ? `title×${h.titleHits / 5}` : null,
        h.descHits > 0 ? `desc×${h.descHits / 3}` : null,
        h.bodyHits > 0 ? `body×${h.bodyHits}` : null,
      ]
        .filter(Boolean)
        .join(', ');
      console.log(
        `   ${i + 1}. [${h.category || 'no-category'}] ${h.title}`
      );
      console.log(`      ${breakdown}  (score ${h.score})`);
    });
  }
  console.log('\n' + '─'.repeat(72));
  console.log(
    '\n💡 다음 단계: dev server에서 같은 키워드로 Pagefind UI 검증 → 차이 분석'
  );
  console.log('   - dev: npm run dev (http://localhost:4321/blog/)\n');
}

main().catch((err) => {
  console.error('실행 실패:', err);
  process.exit(1);
});
