#!/usr/bin/env node
/**
 * clean-descriptions.js
 * 마이그 글 frontmatter description 일괄 정제 스크립트
 *
 * 사용법:
 *   node scripts/migration/clean-descriptions.js --dry-run   # 변경 사항만 출력
 *   node scripts/migration/clean-descriptions.js --apply     # 실제 파일에 저장
 */

const fs = require('fs');
const path = require('path');
const { stripMarkdown, extractFromBody, normalizeLength } = require('./lib/cleanDescription.cjs');

const isDryRun = process.argv.includes('--dry-run');
const isApply = process.argv.includes('--apply');

if (!isDryRun && !isApply) {
  console.error('사용법: --dry-run 또는 --apply 옵션을 지정하세요.');
  process.exit(1);
}

const BLOG_ROOT = path.resolve(__dirname, '../../src/content/blog');
const DIRS = [
  { dir: 'migrated-velog', label: 'velog' },
  { dir: 'migrated-tistory', label: 'tistory' },
  { dir: 'migrated-notion', label: 'notion' },
];

/**
 * frontmatter에서 필드 값 추출
 * 큰따옴표로 감싸진 multi-line도 처리
 */
function parseFrontmatter(content) {
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!fmMatch) return null;

  const fmRaw = fmMatch[1];
  const body = fmMatch[2] || '';

  // description 추출
  let description = null;
  // 1) 큰따옴표 감싸기
  const dqMatch = fmRaw.match(/^description:\s*"([\s\S]*?)"\s*$/m);
  if (dqMatch) {
    description = dqMatch[1];
  } else {
    // 2) 작은따옴표 감싸기
    const sqMatch = fmRaw.match(/^description:\s*'([\s\S]*?)'\s*$/m);
    if (sqMatch) {
      description = sqMatch[1];
    } else {
      // 3) plain
      const plainMatch = fmRaw.match(/^description:\s*(.+)$/m);
      if (plainMatch) {
        description = plainMatch[1].trim();
      }
    }
  }

  // title 추출
  let title = null;
  const titleDqMatch = fmRaw.match(/^title:\s*"([^"]*)"/m);
  if (titleDqMatch) {
    title = titleDqMatch[1];
  } else {
    const titlePlainMatch = fmRaw.match(/^title:\s*(.+)$/m);
    if (titlePlainMatch) {
      title = titlePlainMatch[1].trim();
    }
  }

  return { fmRaw, body, description, title };
}

/**
 * frontmatter의 description 필드만 교체
 */
function replaceDescription(content, newDesc) {
  // 이스케이프: 큰따옴표 내 특수문자 처리
  const escaped = newDesc.replace(/\\/g, '\\\\').replace(/"/g, '\\"');

  // 큰따옴표 description 교체 (multi-line 포함)
  if (/^description:\s*"[\s\S]*?"\s*$/m.test(content)) {
    return content.replace(
      /^(description:\s*)"[\s\S]*?"\s*$/m,
      `$1"${escaped}"`
    );
  }
  // 작은따옴표 description 교체
  if (/^description:\s*'[\s\S]*?'\s*$/m.test(content)) {
    return content.replace(
      /^(description:\s*)'[\s\S]*?'\s*$/m,
      `$1"${escaped}"`
    );
  }
  // plain description 교체
  return content.replace(
    /^(description:\s*)(.+)$/m,
    `$1"${escaped}"`
  );
}

/**
 * description에 정제가 필요한지 판단
 */
function needsCleaning(desc) {
  if (!desc) return true;
  // 이미지 마크다운
  if (/!\[|!image(?:\.[a-zA-Z]+)?\(/.test(desc)) return true;
  // HTML 태그
  if (/<[a-zA-Z]/.test(desc)) return true;
  // 인라인 코드
  if (/`/.test(desc)) return true;
  // 코드블록
  if (/```/.test(desc)) return true;
  // 너무 짧음
  if (desc.trim().length < 30) return true;
  // 너무 길음 (Zod max 300)
  if (desc.trim().length > 300) return true;
  return false;
}

// 결과 집계
const results = {
  changed: [],
  unchanged: [],
  byLabel: { velog: 0, tistory: 0, notion: 0 },
  short: 0,
  long: 0,
};

for (const { dir, label } of DIRS) {
  const dirPath = path.join(BLOG_ROOT, dir);
  if (!fs.existsSync(dirPath)) continue;

  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const content = fs.readFileSync(filePath, 'utf8');

    const parsed = parseFrontmatter(content);
    if (!parsed) {
      console.warn(`[SKIP] frontmatter 파싱 실패: ${file}`);
      continue;
    }

    const { body, description, title } = parsed;
    const originalDesc = description || '';

    if (!needsCleaning(originalDesc)) {
      results.unchanged.push({ file: filePath, desc: originalDesc });
      continue;
    }

    // 길이 정상화 카운트 (정제 전 기준)
    if (originalDesc.trim().length < 30) results.short++;
    if (originalDesc.trim().length > 200) results.long++;

    // 1. 마크다운/HTML 제거
    let cleaned = stripMarkdown(originalDesc);

    // 2. 길이 정상화 + 본문 발췌
    cleaned = normalizeLength(cleaned, body, title, 30, 200);

    // 최종 검증: Zod max 300
    if (cleaned.length > 300) {
      cleaned = cleaned.substring(0, 297).trim() + '...';
    }

    // 변경사항 기록
    results.changed.push({
      file: filePath,
      label,
      before: originalDesc,
      after: cleaned,
    });
    results.byLabel[label]++;

    if (isApply) {
      const newContent = replaceDescription(content, cleaned);
      fs.writeFileSync(filePath, newContent, 'utf8');
    }
  }
}

// 결과 출력
console.log('\n========================================');
console.log(`[description 정제 결과] ${isDryRun ? '(DRY-RUN)' : '(APPLIED)'}`);
console.log('========================================');
console.log(`변경된 파일: ${results.changed.length}편`);
console.log(`  - velog: ${results.byLabel.velog}편`);
console.log(`  - tistory: ${results.byLabel.tistory}편`);
console.log(`  - notion: ${results.byLabel.notion}편`);
console.log(`변경 없는 파일: ${results.unchanged.length}편`);
console.log(`길이 정상화 - 짧은 글 본문 발췌: ${results.short}건`);
console.log(`길이 정상화 - 긴 글 잘라냄: ${results.long}건`);
console.log('');

// 샘플 출력 (변경된 파일 최대 5개)
const samples = results.changed.slice(0, 5);
if (samples.length > 0) {
  console.log('[변경 전후 샘플]');
  for (const s of samples) {
    const fname = path.relative(path.resolve(__dirname, '../../'), s.file);
    console.log(`\n  파일: ${fname}`);
    console.log(`  전(${s.before.length}자): "${s.before.substring(0, 100)}${s.before.length > 100 ? '...' : ''}"`);
    console.log(`  후(${s.after.length}자): "${s.after.substring(0, 100)}${s.after.length > 100 ? '...' : ''}"`);
  }
}

if (isDryRun && results.changed.length > 0) {
  console.log('\n--apply 옵션으로 실제 적용하세요.');
}
console.log('========================================\n');
