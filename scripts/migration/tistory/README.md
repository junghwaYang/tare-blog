# tistory → Astro 마이그레이션

`siltare.tistory.com` 의 글을 `src/content/blog/migrated-tistory/` 로 변환합니다.

## 사용법

```bash
# 시범 5편 (기본)
node scripts/migration/tistory/migrate.js

# 편 수 지정
node scripts/migration/tistory/migrate.js --limit 10

# 전체 (타래님 승인 후)
node scripts/migration/tistory/migrate.js --all
```

## 수집 전략

| 순서 | 소스 | 용도 |
|------|------|------|
| 1 | RSS (`/rss`) | 글 목록 + 본문 HTML (최신 50편 내외) |
| 2 | 개별 HTML 페이지 | 태그 (`rel="tag"`), 카테고리 (`.category`), ogImage, modifiedTime |

## 메타데이터 매핑

| tistory | frontmatter |
|---------|-------------|
| `<title>` | `title` |
| RSS `<description>` 첫 290자 | `description` |
| `<pubDate>` | `pubDate` (ISO 8601) |
| `article:modified_time` | `updatedDate` (pubDate 이후일 때만) |
| `rel="tag"` 링크 | `tags` (영문 소문자·하이픈만) |
| `.category` div | `category` (CATEGORY_MAP 변환) |
| 제목 로마자 변환 | `slug` (velog 충돌 시 `-tistory` 접미사) |
| 글 URL | `originalUrl` |
| `og:image` | `ogImage` |

## 슬러그 충돌 정책

velog 마이그레이션 글과 slug가 동일하면 `-tistory` 접미사를 붙입니다.
예: `ceoneo-byeonsuwa-taib` → `ceoneo-byeonsuwa-taib-tistory`

## 이미지

- `tistory.com`, `daumcdn.net`, `kakaocdn.net` CDN URL 탐지
- `public/images/migrated-tistory/<slug>/` 에 다운로드
- 본문 경로를 로컬 경로로 치환

## 주의사항

- 요청 간 200ms sleep (rate limit 방지)
- RSS 한계상 오래된 글은 수집 불가 (약 50편 이내)
- 전체 진행(`--all`)은 타래님 승인 후 실행
