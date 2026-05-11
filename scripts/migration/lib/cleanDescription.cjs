/**
 * cleanDescription.js
 * frontmatter description 정제 공통 헬퍼
 * 적용 순서대로 정제 규칙 16개 + 길이 정상화
 */

/**
 * description 문자열에서 마크다운/HTML 흔적을 제거한다.
 * @param {string} raw
 * @returns {string}
 */
function stripMarkdown(raw) {
  let s = raw;

  // 1. 코드블록 제거 (multiline)
  s = s.replace(/```[\s\S]*?```/g, ' ');

  // 2. 인라인 코드 제거: `code` → code
  s = s.replace(/`([^`]*)`/g, '$1');

  // 3. 이미지 마크다운 제거: ![alt](url), !image.png(url), !image(url) 등 변형
  // URL이 잘려서 닫히지 않은 경우도 처리 (greedy로 행 끝까지)
  s = s.replace(/!\[([^\]]*)\]\([^)]*\)?/g, '');
  s = s.replace(/!image(?:\.[a-zA-Z]+)?\([^)]*\)?/g, '');
  // !image.png(https://... 처럼 URL이 잘린 경우 (괄호 없이 URL 시작)
  s = s.replace(/!image(?:\.[a-zA-Z]+)?\(https?:\/\/[^\s]*/gi, '');
  // 규칙 12: 비표준 이미지 패턴 — !word.ext(anything) 형태 모두 제거
  s = s.replace(/!\w+\.\w+\([^)]*\)/g, '');
  // 규칙 13: !word( 형태 일반화 (괄호 있는 것)
  s = s.replace(/!\w+\([^)]*\)/g, '');

  // 4. 링크 마크다운: [text](url) → text
  s = s.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');

  // 규칙 14: Notion 링크 변형 — text(https://...) 패턴에서 URL 제거, 텍스트만 유지
  // 예: "FCM(Firebase Cloud Messaging)(https://firebase.google.com/...)" → "FCM(Firebase Cloud Messaging)"
  // 예: "순수 함수 정리(https://...)" → "순수 함수 정리"
  // 영문/한글 텍스트 뒤에 (https://...) 가 붙은 경우
  s = s.replace(/\(https?:\/\/[^\s)]*\)/g, '');
  // 규칙 15: 남은 standalone raw URL 제거 — https://... 단독 출현
  s = s.replace(/https?:\/\/\S+/g, '');

  // 5. HTML 태그 제거
  s = s.replace(/<br\s*\/?>/gi, ' ');
  // 정상 HTML 태그 제거: <tag> 또는 </tag>
  s = s.replace(/<\/?[a-zA-Z][a-zA-Z0-9]*[^>]*>/g, '');
  // 변형 HTML: <u텍스트</u 패턴 (angle bracket + 태그명 + 텍스트 + </tag)
  s = s.replace(/<[a-zA-Z]+([^<>]*)<\/[a-zA-Z]+/g, '$1');
  // 잔여 꺽쇠 + 단어 패턴 제거: <u같은 잘린 태그
  s = s.replace(/<[a-zA-Z][a-zA-Z0-9]*/g, '');

  // 6. 마크다운 강조 제거: **text** → text, *text* → text, __text__ → text, _text_ → text
  s = s.replace(/\*\*([^*]+)\*\*/g, '$1');
  s = s.replace(/__([^_]+)__/g, '$1');
  s = s.replace(/\*([^*]+)\*/g, '$1');
  s = s.replace(/_([^_]+)_/g, '$1');

  // 7. 헤딩 마크 제거: ^#+\s+
  s = s.replace(/^#{1,6}\s+/gm, '');

  // 8. 인용 마크 제거: ^>\s+
  s = s.replace(/^>\s+/gm, '');

  // 9. 리스트 마크 제거
  s = s.replace(/^[\-\*\+]\s+/gm, '');
  s = s.replace(/^\d+\.\s+/gm, '');

  // 9b. 테이블 제거: | ... | 패턴 반복 적용 (중첩 컬럼)
  // 먼저 | col | col | 같은 전체 테이블 행 제거
  s = s.replace(/\|[^\n]*\|/g, ' ');
  // 잔여 파이프 + 대시 구분자 제거
  s = s.replace(/\|\s*[-:]+\s*/g, ' ');
  // 잔여 파이프 단독 제거
  s = s.replace(/\|/g, ' ');
  // --- 단독 구분자 제거 (테이블 헤더 구분선)
  s = s.replace(/\s---+\s/g, ' ');

  // 10. 여러 공백·줄바꿈 → 단일 공백
  s = s.replace(/\s+/g, ' ');

  // 11. trim
  s = s.trim();

  return s;
}

/**
 * 본문(body)에서 description 후보를 추출한다.
 * frontmatter 이후 첫 문단에서 정제된 텍스트를 반환한다.
 * @param {string} body - frontmatter 제거된 본문
 * @returns {string}
 */
function extractFromBody(body) {
  const lines = body.split('\n');
  let paragraphLines = [];
  let collecting = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (collecting && paragraphLines.length > 0) break;
      continue;
    }
    // 헤딩 건너뜀
    if (/^#{1,6}\s/.test(trimmed)) continue;
    // 코드블록 시작/끝 건너뜀
    if (/^```/.test(trimmed)) continue;
    // 이미지만 있는 줄 건너뜀
    if (/^!\[/.test(trimmed) || /^!image/.test(trimmed)) continue;
    // 테이블 구분자 건너뜀
    if (/^\|[-\s|]+\|$/.test(trimmed)) continue;

    collecting = true;
    paragraphLines.push(trimmed);

    if (paragraphLines.join(' ').length >= 80) break;
  }

  const raw = paragraphLines.join(' ');
  return stripMarkdown(raw);
}

/**
 * description을 길이 기준으로 자르거나 발췌한다.
 * @param {string} desc - 정제된 description
 * @param {string} body - frontmatter 제거된 본문
 * @param {string} title - 글 제목
 * @param {number} minLen - 최소 길이 (기본 30)
 * @param {number} maxLen - 최대 길이 (기본 200)
 * @returns {string}
 */
function normalizeLength(desc, body, title, minLen = 30, maxLen = 200) {
  let s = desc;

  // title과 동일하거나 title로 시작하면 본문에서 대체
  if (title && (s === title.trim() || s.startsWith(title.trim()))) {
    const fromBody = extractFromBody(body);
    if (fromBody.length >= minLen) {
      s = fromBody;
    }
  }

  // 너무 짧으면 본문에서 보충
  if (s.length < minLen) {
    const fromBody = extractFromBody(body);
    if (fromBody.length >= minLen) {
      s = fromBody;
    }
  }

  // 여전히 너무 짧으면 본문 앞부분 그대로 사용
  if (s.length < minLen) {
    const stripped = body.substring(0, 500);
    s = stripMarkdown(stripped).substring(0, maxLen).trim();
  }

  // 그래도 짧으면 (본문이 거의 비어있는 경우) title 기반 description 생성
  if (s.length < minLen && title) {
    s = `${title.trim()}에 대한 내용을 정리한 글입니다.`;
  }

  // 너무 길면 자연스러운 경계에서 자르기
  if (s.length > maxLen) {
    let cut = s.substring(0, maxLen);
    // 마침표, 느낌표, 물음표에서 자르기 시도
    const punctMatch = cut.match(/[.!?。！？]/g);
    if (punctMatch) {
      let lastPunct = -1;
      for (let i = cut.length - 1; i >= maxLen * 0.6; i--) {
        if (/[.!?。！？]/.test(cut[i])) {
          lastPunct = i;
          break;
        }
      }
      if (lastPunct > 0) {
        cut = cut.substring(0, lastPunct + 1).trim();
      } else {
        // 어절 경계(공백)에서 자르기
        const lastSpace = cut.lastIndexOf(' ');
        if (lastSpace > maxLen * 0.7) {
          cut = cut.substring(0, lastSpace).trim();
        }
      }
    } else {
      const lastSpace = cut.lastIndexOf(' ');
      if (lastSpace > maxLen * 0.7) {
        cut = cut.substring(0, lastSpace).trim();
      }
    }
    s = cut.trim();
  }

  return s;
}

module.exports = { stripMarkdown, extractFromBody, normalizeLength };
