/**
 * slugify.js - 공통 slug 생성 헬퍼 (ESM)
 * 한글 → Revised Romanization (hangul-romanize)
 * 공백 → -, 비허용 문자 제거, 연속 - 정리, 60자 제한
 */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { Romanize } = require('hangul-romanize');

/**
 * 문자열을 URL-safe slug로 변환
 * @param {string} text - 원본 텍스트 (한글/영문 혼용 가능)
 * @returns {string} - slug
 */
export function slugify(text) {
  if (!text) return '';

  // 1. 한글 → 로마자 변환 (글자 단위로 처리)
  let result = '';
  for (const char of text) {
    if (/[가-힣ᄀ-ᇿ]/.test(char)) {
      result += Romanize.from(char);
    } else {
      result += char;
    }
  }

  // 2. 소문자 변환
  result = result.toLowerCase();

  // 3. 공백 → -
  result = result.replace(/\s+/g, '-');

  // 4. 허용 문자만 남기기 (알파벳, 숫자, -)
  result = result.replace(/[^a-z0-9-]/g, '');

  // 5. 연속 - 정리
  result = result.replace(/-+/g, '-');

  // 6. 앞뒤 - 제거
  result = result.replace(/^-+|-+$/g, '');

  // 7. 60자 제한 (단어 경계 고려)
  if (result.length > 60) {
    result = result.substring(0, 60).replace(/-[^-]*$/, '');
  }

  return result;
}
