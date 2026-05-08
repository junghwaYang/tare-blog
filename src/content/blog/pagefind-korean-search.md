---
title: "Pagefind로 한국어 블로그 검색 구현하기"
description: "정적 사이트에 Pagefind를 통합해 한국어 전문 검색을 구현하는 방법을 정리합니다. force_language 설정과 인덱싱 범위 최적화까지 다룹니다."
pubDate: 2026-04-20
updatedDate: 2026-05-05
tags: ["pagefind", "search", "korean"]
category: "tooling"
slug: "pagefind-korean-search"
draft: false
---

## Pagefind란?

Pagefind는 정적 사이트 전용 검색 라이브러리입니다. 빌드 후 생성된 HTML을 분석해 검색 인덱스를 만들고, 클라이언트 사이드에서 동작합니다. 서버 없이 검색 기능을 구현할 수 있습니다.

## 한국어 설정

`pagefind.yml` 파일에 `force_language: ko`를 지정하면 한국어 토크나이저를 사용합니다.

```yaml
force_language: ko
```

한국어는 형태소 분석 없이 바이그램(bigram) 방식으로 인덱싱됩니다. 완벽하지는 않지만 일반적인 검색 시나리오에서는 충분히 동작합니다.

## 인덱싱 범위 최적화

네비게이션, 푸터 같은 반복 콘텐츠는 검색에서 제외합니다.

```html
<!-- 검색 포함 영역 -->
<article data-pagefind-body>
  <h1>포스트 제목</h1>
  <p>본문 내용...</p>
</article>

<!-- 검색 제외 영역 -->
<nav data-pagefind-ignore>...</nav>
<footer data-pagefind-ignore>...</footer>
```

## 카테고리 필터

```html
<meta data-pagefind-meta="category" content="frontend" />
```

이 메타 태그를 추가하면 카테고리별 검색 필터링이 가능합니다.

## 한계 및 교체 트리거

Pagefind 한국어 검색은 바이그램 기반으로 정확도에 한계가 있습니다. 블로그 글이 100편을 초과하거나 검색 만족도 이슈가 5건 이상 발생하면 FlexSearch 또는 Algolia 교체를 검토합니다.
