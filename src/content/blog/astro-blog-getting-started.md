---
title: "Astro로 기술 블로그 시작하기"
description: "Astro 6.x를 사용해 정적 블로그를 구축하는 방법을 정리합니다. Content Collections, Zod 스키마, MDX 통합까지 다룹니다."
pubDate: 2026-05-01
tags: ["astro", "blog", "ssg"]
category: "frontend"
slug: "astro-blog-getting-started"
draft: false
---

## Astro란?

Astro는 콘텐츠 중심 웹사이트 구축에 특화된 프레임워크입니다. 기본적으로 JavaScript를 최소화해 빠른 로딩을 제공합니다.

```bash
npm create astro@latest my-blog
cd my-blog
npm install
npm run dev
```

## Content Collections 설정

`src/content/config.ts`에 Zod 스키마를 정의하면 frontmatter 유효성 검증이 빌드 타임에 실행됩니다.

```ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1).max(120),
    pubDate: z.coerce.date(),
  }),
});

export const collections = { blog };
```

## 정적 빌드

`output: 'static'`으로 설정하면 모든 페이지가 HTML 파일로 출력됩니다. Vercel에 배포 시 별도 서버 없이 CDN에서 서빙됩니다.

Astro + Vercel 조합은 빌드 속도와 글로벌 배포 성능 모두 만족스럽습니다.
