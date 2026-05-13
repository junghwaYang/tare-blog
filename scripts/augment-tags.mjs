#!/usr/bin/env node
/**
 * augment-tags.mjs — 한·영 태그 양방향 augment 도구
 *
 * 동작:
 *   1. src/content/blog/**\/*.md 전부 읽기
 *   2. frontmatter tags + category 기반으로 augmentTags() 적용
 *   3. --dry-run: diff 출력만, 파일 변경 X (기본값)
 *   4. --write: frontmatter tags 갱신
 *
 * 안전 장치:
 *   - 기존 태그 절대 손실 없음 (Set으로 union)
 *   - frontmatter 외 영역은 byte-for-byte 보존
 *   - tags 라인만 정확히 치환 (블록 스칼라/들여쓰기 변형 X)
 *
 * 실행:
 *   node scripts/augment-tags.mjs              # dry-run
 *   node scripts/augment-tags.mjs --write      # 실제 갱신
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { augmentTags } = require('./migration/lib/tagMapping.cjs');

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const CONTENT_DIR = join(ROOT, 'src/content/blog');

const WRITE = process.argv.includes('--write');

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

function splitFrontmatter(raw) {
  if (!raw.startsWith('---\n')) return null;
  const end = raw.indexOf('\n---', 4);
  if (end === -1) return null;
  return {
    fm: raw.slice(4, end),
    body: raw.slice(end + 4),
  };
}

function parseField(fm, key) {
  const re = new RegExp(`^${key}:\\s*(.+?)\\s*$`, 'm');
  const m = fm.match(re);
  if (!m) return null;
  return m[1];
}

function parseTagsLine(fm) {
  const re = /^tags:\s*(.+?)\s*$/m;
  const m = fm.match(re);
  if (!m) return { raw: null, list: [] };
  const raw = m[1];
  if (raw === '[]') return { raw, list: [] };
  // 인라인 배열 ["a", "b"] 형식만 지원 (현 데이터 일관 형식)
  const inlineMatch = raw.match(/^\[(.*)\]$/);
  if (!inlineMatch) return { raw, list: [] };
  const inner = inlineMatch[1].trim();
  if (!inner) return { raw, list: [] };
  const list = inner
    .split(',')
    .map((s) => s.trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean);
  return { raw, list };
}

function formatTagsLine(list) {
  if (list.length === 0) return 'tags: []';
  const quoted = list.map((t) => `"${t.replace(/"/g, '\\"')}"`);
  return `tags: [${quoted.join(', ')}]`;
}

function unquote(v) {
  if (!v) return v;
  return v.replace(/^["']|["']$/g, '');
}

async function main() {
  const files = await listMarkdownFiles(CONTENT_DIR);
  let totalChanged = 0;
  let totalSkipped = 0;
  const diffs = [];

  for (const f of files) {
    const raw = await readFile(f, 'utf8');
    const split = splitFrontmatter(raw);
    if (!split) {
      totalSkipped++;
      continue;
    }
    const { fm, body } = split;
    const category = unquote(parseField(fm, 'category')) ?? '';
    const { raw: tagsRawLine, list: originalTags } = parseTagsLine(fm);
    if (tagsRawLine === null) {
      totalSkipped++;
      continue;
    }

    const augmented = augmentTags(originalTags, category);
    // 변경 없음(같은 집합) 스킵
    const beforeSet = new Set(originalTags);
    const afterSet = new Set(augmented);
    const added = augmented.filter((t) => !beforeSet.has(t));
    const removed = originalTags.filter((t) => !afterSet.has(t));
    if (added.length === 0 && removed.length === 0) continue;

    totalChanged++;
    diffs.push({
      file: relative(ROOT, f),
      category,
      before: originalTags,
      after: augmented,
      added,
      removed,
    });

    if (WRITE) {
      const newTagsLine = formatTagsLine(augmented);
      const newFm = fm.replace(/^tags:\s*.+?\s*$/m, newTagsLine);
      const newRaw = `---\n${newFm}\n---${body}`;
      await writeFile(f, newRaw, 'utf8');
    }
  }

  console.log(
    `\n${WRITE ? '✏️  WRITE' : '🔍 DRY-RUN'} — ${totalChanged}편 변경, ${totalSkipped}편 skip\n`
  );
  console.log('─'.repeat(72));
  // 최대 20건만 미리보기
  const preview = diffs.slice(0, 20);
  for (const d of preview) {
    console.log(`\n📄 ${d.file}`);
    console.log(`   category: ${d.category}`);
    console.log(`   before: [${d.before.join(', ')}]`);
    console.log(`   after:  [${d.after.join(', ')}]`);
    if (d.added.length > 0) console.log(`   ➕ ${d.added.join(', ')}`);
    if (d.removed.length > 0) console.log(`   ➖ ${d.removed.join(', ')}`);
  }
  if (diffs.length > preview.length) {
    console.log(`\n... and ${diffs.length - preview.length} more`);
  }
  console.log('\n' + '─'.repeat(72));
  if (!WRITE) {
    console.log('\n💡 적용하려면: node scripts/augment-tags.mjs --write\n');
  } else {
    console.log('\n✅ 적용 완료. npm run build로 검증하세요.\n');
  }
}

main().catch((err) => {
  console.error('실행 실패:', err);
  process.exit(1);
});
