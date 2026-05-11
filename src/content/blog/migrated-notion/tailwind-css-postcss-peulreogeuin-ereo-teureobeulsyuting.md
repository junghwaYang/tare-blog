---
title: "Tailwind CSS PostCSS 플러그인 에러 트러블슈팅"
description: "문제 상황 React + Vite + Tailwind CSS 프로젝트 설정 중 다음과 같은 에러가 발생: plain text postcss It looks like you're trying to use tailwindcss directly as a PostCSS plugin. The PostCSS plugin has moved to a separate pa"
pubDate: 2025-06-10T06:40:00.000Z
updatedDate: 2025-07-30T18:22:00.000Z
tags: []
category: "troubleshooting"
slug: "tailwind-css-postcss-peulreogeuin-ereo-teureobeulsyuting"
draft: false
originalUrl: "https://www.notion.so/20e4ef560994805bb92af0f4f6255dba"
---


## 문제 상황


React + Vite + Tailwind CSS 프로젝트 설정 중 다음과 같은 에러가 발생:


```plain text
[postcss] It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin. The PostCSS plugin has moved to a separate package, so to continue using Tailwind CSS with PostCSS you'll need to install `@tailwindcss/postcss` and update your PostCSS configuration.
```


## 원인 분석

- **Tailwind CSS v4**부터 PostCSS 플러그인이 별도 패키지로 분리됨
- 기존의 `tailwindcss` 패키지에서 PostCSS 플러그인 기능이 제거됨
- 새로운 `@tailwindcss/postcss` 패키지를 사용해야 함

## 해결 방법


### 1단계: 새로운 PostCSS 플러그인 설치


```shell
npm install -D @tailwindcss/postcss
```


### 2단계: PostCSS 설정 파일 수정


**기존** **`postcss.config.js`****:**


```javascript
export default {
  plugins: {
    tailwindcss: {},        // ❌ 구버전 방식
    autoprefixer: {},
  },
};
```


**수정된** **`postcss.config.js`****:**


```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},  // ✅ 신버전 방식
    autoprefixer: {},
  },
};
```


### 3단계: 개발 서버 재시작


```shell
npm run dev
```


## 추가 확인 사항


### 1. Tailwind 설정 파일 확인


`tailwind.config.js`가 올바르게 설정되어 있는지 확인:


```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```


### 2. CSS 파일 확인


`src/index.css`에 Tailwind directives가 포함되어 있는지 확인:


```css
@import 'tailwindcss';
```


### 3. 패키지 버전 확인


현재 설치된 Tailwind CSS 버전 확인:


```shell
npm list tailwindcss
```


## 대안 해결 방법


만약 위 방법으로 해결되지 않는다면:


### 방법 1: Tailwind CSS 재설치


```shell
npm uninstall tailwindcss postcss autoprefixer @tailwindcss/postcss
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest @tailwindcss/postcss@latest
```


### 방법 2: Vite 플러그인 사용


PostCSS 대신 Vite 플러그인 직접 사용:

1. Vite 플러그인 설치:

```shell
npm install -D @tailwindcss/vite
```

1. `vite.config.js` 수정:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

1. `postcss.config.js` 삭제 (더 이상 필요하지 않음)

## 주의사항

- **Node.js 버전**: Tailwind CSS v4는 Node.js 18+ 권장
- **Vite 버전**: 최신 버전의 Vite 사용 권장
- **캐시 클리어**: 문제가 지속되면 `node_modules` 삭제 후 재설치

## 관련 링크

- [Tailwind CSS PostCSS 플러그인 공식 문서](https://tailwindcss.com/docs/using-with-preprocessors)
- [Vite와 Tailwind CSS 통합 가이드](https://tailwindcss.com/docs/guides/vite)
- [Tailwind CSS v4 마이그레이션 가이드](https://tailwindcss.com/docs/upgrade-guide)

---


**작성일**: 2024년 6월 10일


**테스트 환경**: Node.js v21.6.0, npm v10.9.2, Vite v6.3.5, Tailwind CSS v4+


