---
title: "TypeScript strict 모드 완전 정복"
description: "TypeScript strict 모드 활성화 시 마주치는 에러 유형과 해결 패턴을 정리합니다. 실무 코드베이스 마이그레이션 경험 기반입니다."
pubDate: 2026-05-03
tags: ["frontend", "strict", "type-safety", "typescript", "엄격모드", "타입스크립트", "타입안전성", "프론트엔드"]
category: "frontend"
slug: "typescript-strict-mode"
draft: false
---

## strict 모드란?

`tsconfig.json`의 `strict: true`는 다음 플래그들을 한 번에 활성화합니다.

- `strictNullChecks`
- `strictFunctionTypes`
- `noImplicitAny`
- `strictPropertyInitialization`

## 가장 흔한 에러 패턴

### 1. `null` / `undefined` 미처리

```ts
// 에러: Object is possibly 'null'
const el = document.getElementById('app');
el.innerHTML = 'hello'; // 빌드 에러

// 수정
const el = document.getElementById('app');
if (el) {
  el.innerHTML = 'hello'; // 정상
}
```

### 2. 암묵적 `any`

```ts
// 에러: Parameter 'data' implicitly has an 'any' type
function process(data) { return data; } // 빌드 에러

// 수정
function process(data: unknown) { return data; } // 정상
```

## 점진적 마이그레이션 전략

기존 코드베이스라면 파일 단위로 `// @ts-nocheck`를 임시 적용하고, 하나씩 제거하면서 strict를 넓혀가는 방식을 권장합니다. 한 번에 전체 활성화하면 수백 개의 에러를 한꺼번에 마주칩니다.
