#!/usr/bin/env node
/**
 * refine-slugs.mjs
 * 한글 음역 slug를 의미 있는 영문 slug로 변환하는 스크립트
 *
 * Usage:
 *   node scripts/refine-slugs.mjs --dry-run        # 후보 출력만
 *   node scripts/refine-slugs.mjs --write           # 실제 변경 적용
 *   node scripts/refine-slugs.mjs --dry-run --top 5 # 상위 N개만
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// CLI 옵션 파싱
const args = process.argv.slice(2);
const DRY_RUN = !args.includes('--write');
const TOP_N = (() => {
  const idx = args.indexOf('--top');
  return idx !== -1 ? parseInt(args[idx + 1], 10) : 10;
})();

// ─────────────────────────────────────────────
// 1. 한글 음역 → 영문 의미 사전
// ─────────────────────────────────────────────
const ROMANIZATION_DICT = {
  // 컴퓨터·시스템
  'deiteobeiseu': 'database',
  'deiteo': 'data',
  'siseutem': 'system',
  'keompyuteo': 'computer',
  'guseongyoso': 'components',
  'guseong': 'components',
  'akitekcheo': 'architecture',
  'neteuwoking': 'networking',
  'keonpeoreonseu': 'conference',
  'peurotokolui': 'protocols',
  'peurotokol': 'protocol',
  'tongsinui': 'communication',
  'tongsin': 'communication',
  'gibonjeokin': 'basic',
  'gibonjeogin': 'basic',
  'gibon': 'basic',
  'gicho': 'basics',
  'jongryu': 'types',
  'ihaewa': 'understanding',
  'ihae': 'understanding',
  'bunseok': 'analysis',
  'bunryu': 'classification',

  // 프로그래밍·개발
  'peurograming': 'programming',
  'peureimwokeu': 'framework',
  'jadonghwa': 'automation',
  'wokeupeulrou': 'workflow',
  'gaebal': 'development',
  'hwangyeong': 'environment',
  'seting': 'setup',
  'seoljeong': 'setup',
  'teseuteu': 'test',
  'rendeoring': 'rendering',
  'seobeosaideu': 'server-side',
  'peurirendeoring': 'pre-rendering',

  // Next.js · React · 프론트엔드
  'peuronteu': 'frontend',
  'peiji': 'page',
  'saengseonghagi': 'generating',
  'idonghagi': 'navigating',
  'sayonghagi': 'using',
  'batgi': 'receiving',

  // API · 네트워크
  'rauteu': 'route',
  'mandeulgi': 'creating',
  'yeondonghagi': 'integration',
  'rikweseuteu': 'request',
  'riseuponseu': 'response',
  'ridairekteu': 'redirect',
  'darugi': 'handling',
  'junieo': 'junior',
  'seuteodi': 'study',

  // 플랫폼·서비스
  'keomyuniti': 'community',
  'sosyeol': 'social',
  'peulraespom': 'platform',
  'jeanseo': 'proposal',
  'wep': 'web',
  'peobeulrising': 'publishing',
  'baneunghyeong': 'responsive',

  // 언어·용어
  'yongeojip': 'glossary',
  'yeoksawa': 'history',
  'myeongryeongeo': 'commands',
  'keomaendeuran': 'commands',
  'direktori': 'directory',
  'keomenteu': 'comment',
  'yunikseu': 'unix',

  // 기타
  'bigyo': 'comparison',
  'hoego': 'retrospective',
  'gwajejeonhyeong': 'assignment-stage',
  'paeseuteuteuraek': 'fast-track',
  'myeonjeop': 'interview',
  'junbi': 'preparation',
  'eosiseuteondeu': 'assistant',
  'chogeup': 'beginner',
  'junggeup': 'intermediate',
  'chogi': 'initial',
  'riseuteu': 'list',
  'gongbu': 'study',
  'chuhu': 'future',
  'jaryo': 'materials',
  'jeongbo': 'information',
  'mich': 'and',
  'jaba': 'java',
  'nonrijeok': 'logical',
  'churon': 'reasoning',
  'suhak': 'math',
  'munje': 'problem',
  'haegyeol': 'solving',
  'dadangye': 'multi-step',
  'jeongboboan': 'information-security',
  'boan': 'security',
  'keoseuteom': 'custom',
  'keulraieonteueseo': 'client',
  'keulraieonteu': 'client',
  'ganguiyoyakbon': 'lecture-notes',
  'yoyakbon': 'summary',
  'eijeontik': 'agentic',
  'chasedae': 'next-generation',
  'jaeoegukmin': 'overseas-koreans',
  'meinpeijigesipan': 'main-page-board',
  'meinpeiji': 'main-page',
  'gesipan': 'board',
  'ceoneo': 'c-lang',
  'kodeuis': 'codeit',
  'iyonghan': 'using',
  'iyonghae': 'using',
  'daehan': 'about',
  'gaenyeom': 'concepts',
};

// ─────────────────────────────────────────────
// 2. 수동 확정 매핑 (최우선 적용)
// ─────────────────────────────────────────────
const MANUAL_MAP = {
  'deiteobeiseusqllite': 'database-sqlite',
  'deiteo-tongsinui-peurotokolui-ihaewa-jongryu': 'data-communication-protocols-understanding-types',
  'deiteo-tongsinui-gibonjeokin-guseongyoso': 'data-communication-basic-components',
  'keompyuteosiseutemui-guseongyoso': 'computer-system-components',
  'keompyuteo-yeoksawa-bunryu': 'computer-history-classification',
  'chasedae-eijeontik-gaebal-hwangyeongai-ideui-akitekcheo': 'next-gen-agentic-ide-architecture',
  'jaeoegukmin-sosyeol-keomyuniti-peulraespom-gaebal-jeanseo': 'overseas-koreans-social-community-platform-proposal',
  'meinpeijigesipan-baneunghyeong-wep-peobeulrising-jeanseo': 'main-page-board-responsive-web-publishing-proposal',
  'nonrijeok-churon-suhak-munje-haegyeol-dadangye-churon': 'logical-reasoning-math-problem-solving-multi-step',
  'reactnext-teseuteu-jadonghwa-peureimwokeu': 'react-next-test-automation-framework',
};

// ─────────────────────────────────────────────
// 3. slug 스코어링 (한글 음역 패턴 감지)
// ─────────────────────────────────────────────
const KOREAN_VOWEL_PATTERNS = [
  /eu/, /ae/, /eo/, /ui/, /eui/, /ye/, /yeo/, /wa/, /wi/, /oe/
];

function scoreSlug(slug) {
  // MANUAL_MAP 항목은 무조건 최우선
  if (MANUAL_MAP[slug]) return 1000;

  let score = 0;
  const parts = slug.split('-').filter(Boolean);

  for (const part of parts) {
    if (part.length === 0) continue;

    let vowelHits = 0;
    for (const pattern of KOREAN_VOWEL_PATTERNS) {
      if (pattern.test(part)) vowelHits++;
    }
    if (vowelHits >= 2) score += 3;
    else if (vowelHits >= 1) score += 1;

    for (const key of Object.keys(ROMANIZATION_DICT)) {
      if (part === key) { score += 5; break; }
    }

    if (part.length >= 12) score += 4;
    else if (part.length >= 8) score += 2;

    const realEnglish = /^(api|git|next|react|python|java|spring|mongo|sql|sqlite|fcm|firebase|css|html|js|ts|npm|url|ux|ai|mac|os|gpt|dbms|app|ax)$/i;
    if (realEnglish.test(part)) score -= 5;
  }

  if (slug.length >= 40) score += 4;
  else if (slug.length >= 25) score += 2;

  return score;
}

// ─────────────────────────────────────────────
// 4. 새 slug 생성
// ─────────────────────────────────────────────
function buildNewSlug(oldSlug, _title) {
  if (MANUAL_MAP[oldSlug]) return MANUAL_MAP[oldSlug];

  const parts = oldSlug.split('-');
  const converted = [];
  let i = 0;

  while (i < parts.length) {
    const part = parts[i];
    // 2-gram 시도
    if (i + 1 < parts.length) {
      const bigram = parts[i] + parts[i + 1];
      if (ROMANIZATION_DICT[bigram]) {
        converted.push(ROMANIZATION_DICT[bigram]);
        i += 2;
        continue;
      }
    }
    if (ROMANIZATION_DICT[part]) {
      converted.push(ROMANIZATION_DICT[part]);
    } else {
      converted.push(part);
    }
    i++;
  }

  const candidate = converted.join('-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  return candidate || oldSlug;
}

// ─────────────────────────────────────────────
// 5. 파일 스캔
// ─────────────────────────────────────────────
function findMdFiles(dir) {
  const results = [];
  try {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (statSync(full).isDirectory()) {
        results.push(...findMdFiles(full));
      } else if (entry.endsWith('.md') || entry.endsWith('.mdx')) {
        results.push(full);
      }
    }
  } catch { /* ignore */ }
  return results;
}

function getField(fm, key) {
  const match = fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  if (!match) return '';
  return match[1].replace(/^['"]|['"]$/g, '').trim();
}

// ─────────────────────────────────────────────
// 6. 메인
// ─────────────────────────────────────────────
const MIGRATED_DIRS = [
  join(ROOT, 'src/content/blog/migrated-tistory'),
  join(ROOT, 'src/content/blog/migrated-velog'),
  join(ROOT, 'src/content/blog/migrated-notion'),
];

const files = MIGRATED_DIRS.flatMap(findMdFiles);

const candidates = [];

for (const filePath of files) {
  const content = readFileSync(filePath, 'utf-8');
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) continue;
  const fm = fmMatch[1];

  const slug = getField(fm, 'slug');
  const title = getField(fm, 'title');
  if (!slug) continue;

  const score = scoreSlug(slug);
  if (score <= 0) continue;

  const newSlug = buildNewSlug(slug, title);
  const willChange = newSlug !== slug;

  candidates.push({ slug, newSlug, title, score, filePath, willChange, content });
}

candidates.sort((a, b) => {
  if (a.willChange !== b.willChange) return a.willChange ? -1 : 1;
  return b.score - a.score;
});

const selected = candidates.filter(c => c.willChange).slice(0, TOP_N);
const noChange = candidates.filter(c => !c.willChange);

console.log('\n=== Slug Refinement Analysis ===\n');
console.log(`전체 후보: ${candidates.length}건`);
console.log(`변환 가능: ${candidates.filter(c => c.willChange).length}건`);
console.log(`수동 검토 필요: ${noChange.length}건`);
console.log(`적용 대상 (top ${TOP_N}): ${selected.length}건`);
console.log('');

console.log('--- 적용 대상 ---');
for (const c of selected) {
  console.log(`[score=${c.score}] ${c.slug}`);
  console.log(`  => ${c.newSlug}`);
  console.log(`  title: ${c.title}`);
  console.log(`  file: ${c.filePath.replace(ROOT, '.')}`);
  console.log('');
}

if (noChange.length > 0) {
  console.log('--- 수동 검토 필요 (변환 동일) ---');
  for (const c of noChange.slice(0, 5)) {
    console.log(`[score=${c.score}] ${c.slug}`);
  }
  console.log('');
}

if (DRY_RUN) {
  console.log('[DRY-RUN] 실제 변경 없음. --write 옵션으로 적용하세요.\n');
  process.exit(0);
}

// ─────────────────────────────────────────────
// 7. 실제 변경 적용
// ─────────────────────────────────────────────
const vercelJsonPath = join(ROOT, 'vercel.json');
const vercelJson = JSON.parse(readFileSync(vercelJsonPath, 'utf-8'));

const appliedMappings = [];

for (const c of selected) {
  // slug 필드는 따옴표 있을 수도 없을 수도 있음: slug: "value" or slug: value
  const newContent = c.content.replace(
    new RegExp(`^(slug:\\s*)(["']?)${escapeRegex(c.slug)}(["']?)(\\s*)$`, 'm'),
    `$1$2${c.newSlug}$3$4`
  );

  if (newContent === c.content) {
    console.warn(`[WARN] slug 교체 실패: ${c.filePath}`);
    continue;
  }

  writeFileSync(c.filePath, newContent, 'utf-8');
  console.log(`[WRITE] ${c.slug} => ${c.newSlug}`);
  appliedMappings.push({ oldSlug: c.slug, newSlug: c.newSlug });
}

// redirect 추가 / 기존 destination 갱신
for (const { oldSlug, newSlug } of appliedMappings) {
  const alreadyExists = vercelJson.redirects.some(
    r => r.source === `/blog/${oldSlug}` || r.source === `/blog/${oldSlug}/`
  );
  if (!alreadyExists) {
    vercelJson.redirects.push({
      source: `/blog/${oldSlug}`,
      destination: `/blog/${newSlug}/`,
      permanent: true,
    });
  }

  // 기존 redirect가 old slug를 destination으로 가리키면 new slug로 업데이트
  for (const r of vercelJson.redirects) {
    if (r.destination === `/blog/${oldSlug}` || r.destination === `/blog/${oldSlug}/`) {
      r.destination = `/blog/${newSlug}/`;
      console.log(`[REDIRECT-UPDATE] ${r.source} => /blog/${newSlug}/`);
    }
  }
}

writeFileSync(vercelJsonPath, JSON.stringify(vercelJson, null, 2) + '\n', 'utf-8');
console.log(`\n[DONE] vercel.json redirect ${appliedMappings.length}건 추가/갱신 완료`);

console.log('\n=== 적용된 매핑 ===');
for (const { oldSlug, newSlug } of appliedMappings) {
  console.log(`  /blog/${oldSlug} => /blog/${newSlug}/`);
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
