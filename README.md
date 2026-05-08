# 타래의 기술 노트

한국어 기술 아카이빙·학습 기록 블로그. Astro v6 SSG + 로컬 마크다운 + Vercel 호스팅. 미니멀 타이포 디자인.

---

## 스택

| 영역 | 기술 |
|---|---|
| 프레임워크 | Astro 6.x (SSG, `output: 'static'`) |
| 콘텐츠 | 로컬 `.md` / `.mdx` (Git 관리) |
| 검색 | Pagefind 1.x (`force_language: ko`) |
| 폰트 | Pretendard Variable subset self-host |
| 코드블록 | Shiki dual themes (github-light / github-dark) |
| 호스팅 | Vercel + `@vercel/analytics` |

---

## 로컬 개발

```bash
npm install
npm run dev        # http://localhost:4321
```

> 개발 서버에서는 `/pagefind/` 리소스가 없으므로 검색창이 비활성 상태입니다. 빌드 후 `npm run preview`로 확인하세요.

---

## 빌드

```bash
npm run build
```

`astro build` 완료 후 `pagefind --site dist`가 자동으로 실행되어 `dist/pagefind/` 에 검색 인덱스를 생성합니다.

빌드 산출물 확인:

```
dist/
├── pagefind/
│   ├── pagefind.js
│   ├── pagefind-ui.js
│   ├── pagefind-ui.css
│   ├── pagefind-entry.json
│   └── index/          # 한국어 n-gram 인덱스 바이너리
├── blog/
├── tags/
├── categories/
├── rss.xml
└── sitemap-index.xml
```

---

## 배포

Vercel에 연결하면 자동 배포됩니다. 환경변수 설정 불필요.

`vercel.json` 참조:

```json
{
  "buildCommand": "astro build && pagefind --site dist",
  "outputDirectory": "dist",
  "framework": "astro"
}
```

---

## 콘텐츠 작성

`src/content/blog/` 디렉토리에 `.md` 또는 `.mdx` 파일을 추가합니다.

### frontmatter 스키마

| 필드 | 타입 | 필수 | 설명 |
|---|---|---|---|
| `title` | string (1~120자) | 필수 | 글 제목 |
| `description` | string (1~300자) | 필수 | 요약 (OG/SEO 사용) |
| `pubDate` | date | 필수 | 발행일 (예: `2026-05-09`) |
| `updatedDate` | date | 선택 | 수정일 |
| `category` | string | 필수 | 카테고리 (예: `React`) |
| `tags` | string[] | 선택 | 태그 목록 (기본값: `[]`) |
| `slug` | string | 필수 | URL slug — **영문·숫자·하이픈만** (`^[a-z0-9-]+$`) |
| `draft` | boolean | 선택 | `true`면 빌드 제외 (기본값: `false`) |
| `heroImage` | image | 선택 | 대표 이미지 |
| `heroImageAlt` | string | 조건 | heroImage 있으면 필수 |
| `originalUrl` | url | 선택 | 마이그레이션 예약 (velog/tistory canonical) |
| `series` | string | 선택 | 마이그레이션 예약 (velog 시리즈) |
| `ogImage` | string | 선택 | OG 자동생성 도입 시 사용 |

예시:

```yaml
---
title: "React 18 Concurrent Features 정리"
description: "useTransition, Suspense, startTransition을 실전 예제로 살펴봅니다."
pubDate: 2026-05-09
category: React
tags: ["react", "concurrent", "hooks"]
slug: react-18-concurrent-features
draft: false
---
```

---

## Pagefind 한국어 검색 한계 및 교체 트리거

### 현재 방식

Pagefind는 `force_language: ko` 설정으로 한국어를 처리하지만, **형태소 분석을 지원하지 않습니다**. 내부적으로 n-gram 기반 토크나이징을 사용하므로 아래와 같은 한계가 있습니다.

- "리액트" 검색 시 "React"로는 매칭 안 됨 (동의어 미지원)
- 조사 분리 미지원: "훅에서"로 검색하면 "훅" 문서가 누락될 수 있음
- 복합 명사 분해 미지원: "타입스크립트제네릭" vs "타입스크립트 제네릭"

### 교체 트리거

아래 조건 중 하나라도 충족되면 FlexSearch 또는 Algolia DocSearch로 교체를 검토합니다.

- **글 100편 이상** 누적 시 (인덱스 크기 증가로 초기 로딩 부담)
- **검색 만족도 이슈 5건 이상** 발생 시 (실제 사용자 미매칭 신고)

교체 후보:
- **FlexSearch**: 클라이언트 사이드, 형태소 플러그인 추가 가능, 번들 크기 주의
- **Algolia DocSearch**: 서버 인덱싱, 무료 오픈소스 플랜, 형태소 분석 지원

---

## 마이그레이션 트랙 (MVP 이후 별도 진행)

Notion/velog/tistory 100+편 마이그레이션은 MVP 이후 별도 트랙으로 진행됩니다.

- `originalUrl` 필드: velog/tistory canonical URL 보존용 (이미 스키마 예약)
- `series` 필드: velog 시리즈 정보 보존용 (이미 스키마 예약)
- `ogImage` 필드: OG 자동생성 도입 시 사용 (이미 스키마 예약)

마이그레이션 시 이미지 재호스팅, 내부 링크 변환, 코드블록 언어 추론 작업이 필요합니다.
