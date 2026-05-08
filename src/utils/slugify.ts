/**
 * slug 유효성 검증: 영문 소문자, 숫자, 하이픈만 허용
 */
export function validateSlug(slug: string): boolean {
  return /^[a-z0-9-]+$/.test(slug);
}

/**
 * 임의 문자열을 slug로 정규화
 * - 소문자 변환
 * - 공백 → '-'
 * - 영문/숫자/하이픈 외 문자 제거
 * - 연속 하이픈 정리
 * - 앞뒤 하이픈 제거
 *
 * 한글 transliteration은 후행 트랙에서 구현
 */
export function normalizeSlug(input: string): string {
  return input
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '');
}
