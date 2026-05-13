/**
 * tagMapping.cjs — 한·영 태그 양방향 매핑 테이블
 *
 * 목적:
 *   - velog → astro 마이그레이션 시 손실된 한글 태그 복원
 *   - "타입스크립트"로 검색해도 "TypeScript" 글이 매칭되도록
 *   - PostCard·검색 결과 양측에 한·영 모두 노출
 *
 * 사용처:
 *   - scripts/augment-tags.mjs (frontmatter tags augment)
 *
 * 매핑 원칙:
 *   - 한국어 화자가 자연스럽게 검색할 표현만 등록 (강제 전사 X)
 *   - 'general'처럼 너무 일반적인 카테고리는 매핑 제외
 */

// 영문(소문자) → 한글 — 한 방향만 정의, 역매핑 자동 생성
const EN_TO_KO = {
  typescript: '타입스크립트',
  javascript: '자바스크립트',
  react: '리액트',
  next: '넥스트',
  nextjs: '넥스트',
  'next.js': '넥스트',
  astro: '아스트로',
  python: '파이썬',
  java: '자바',
  c: '씨언어',
  database: '데이터베이스',
  mongodb: '몽고DB',
  frontend: '프론트엔드',
  backend: '백엔드',
  security: '보안',
  'web-hacking': '웹해킹',
  ai: '인공지능',
  agent: '에이전트',
  git: '깃',
  search: '검색',
  pagefind: '페이지파인드',
  ssg: '정적사이트',
  rsc: '서버컴포넌트',
  'type-safety': '타입안전성',
  strict: '엄격모드',
  korean: '한국어',
  blog: '블로그',
  claudecode: '클로드코드',
  'claude-code': '클로드코드',
  cursor: '커서',
  antigravity: '안티그래비티',
  tip: '팁',
  troubleshooting: '트러블슈팅',
  tooling: '도구',
  retrospective: '회고',
  programming: '프로그래밍',
  notion: '노션',
  projects: '프로젝트',
};

// 한글 → 영문 (역매핑)
const KO_TO_EN = Object.fromEntries(
  Object.entries(EN_TO_KO).map(([en, ko]) => [ko, en])
);

// 카테고리 → 추천 태그 (영문 + 한글 한 쌍씩)
// 글 frontmatter tags가 비었거나 부족할 때 보강
const CATEGORY_HINT_TAGS = {
  react: ['react', '리액트'],
  typescript: ['typescript', '타입스크립트'],
  javascript: ['javascript', '자바스크립트'],
  python: ['python', '파이썬'],
  java: ['java', '자바'],
  'c-lang': ['c', '씨언어'],
  database: ['database', '데이터베이스'],
  frontend: ['frontend', '프론트엔드'],
  security: ['security', '보안'],
  'web-hacking': ['web-hacking', '웹해킹'],
  ai: ['ai', '인공지능'],
  git: ['git', '깃'],
  retrospective: ['retrospective', '회고'],
  notion: ['notion', '노션'],
  projects: ['projects', '프로젝트'],
  troubleshooting: ['troubleshooting', '트러블슈팅'],
  tooling: ['tooling', '도구'],
};

/**
 * 입력 태그 배열을 받아 한·영 양방향 augment한 배열 반환
 * @param {string[]} tags - 원본 태그
 * @param {string} category - 글 카테고리 (영문 slug)
 * @returns {string[]} augmented unique tags
 */
function augmentTags(tags, category) {
  const set = new Set(tags ?? []);

  // 1. 기존 태그의 반대 언어 자동 추가
  for (const t of [...set]) {
    const tLower = t.toLowerCase();
    if (EN_TO_KO[tLower]) set.add(EN_TO_KO[tLower]);
    else if (KO_TO_EN[t]) set.add(KO_TO_EN[t]);
  }

  // 2. category 기반 hint 태그 추가
  const hints = CATEGORY_HINT_TAGS[category];
  if (hints) {
    for (const h of hints) set.add(h);
  }

  // 3. unique, 한·영 혼합 정렬 (영문 먼저, 한글 뒤)
  return [...set].sort((a, b) => {
    const aHan = /[가-힣]/.test(a);
    const bHan = /[가-힣]/.test(b);
    if (aHan !== bHan) return aHan ? 1 : -1;
    return a.localeCompare(b, 'ko');
  });
}

module.exports = {
  EN_TO_KO,
  KO_TO_EN,
  CATEGORY_HINT_TAGS,
  augmentTags,
};
