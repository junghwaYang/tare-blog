/**
 * 읽기 시간 계산 유틸리티
 * - 한국어: 500자/분
 * - 영문: 200어/분
 */
export function calcReadingTime(text: string): number {
  // 마크다운 문법 제거 (코드 블록, 링크, 이미지, 헤딩 기호 등)
  const cleaned = text
    .replace(/```[\s\S]*?```/g, '')   // 코드 블록
    .replace(/`[^`]*`/g, '')           // 인라인 코드
    .replace(/!\[.*?\]\(.*?\)/g, '')   // 이미지
    .replace(/\[.*?\]\(.*?\)/g, '')    // 링크
    .replace(/^#{1,6}\s/gm, '')        // 헤딩 기호
    .replace(/[*_~>|]/g, '')           // 강조, 인용, 표 기호
    .trim();

  const koCharCount = (cleaned.match(/[가-힣]/g) || []).length;
  const enWordCount = cleaned
    .replace(/[가-힣]+/g, '')
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = koCharCount / 500 + enWordCount / 200;
  return Math.max(1, Math.ceil(minutes));
}
