---
title: "React/Next 테스트 자동화 프레임워크"
description: "웹/앱 React/Next.js 환경에서의 테스트 자동화 프레임워크와 방식은 주로 다음과 같은 조합과 절차로 진행됩니다. 1. 주요 테스트 자동화 도구 Jest Next.js 및 React 프로젝트에서 가장 널리 사용하는 테스트 프레임워크입니다. 유닛 테스트, 모의(mock) 함수 지원, 스냅샷 테스트 등을 제공합니다. React Testing Librar"
pubDate: 2025-07-31T12:56:00.000Z
updatedDate: 2025-07-31T12:56:00.000Z
tags: ["retrospective", "회고"]
category: "retrospective"
slug: "reactnext-teseuteu-jadonghwa-peureimwokeu"
draft: false
originalUrl: "https://www.notion.so/2414ef560994802e9de5f1c8b2d34be6"
---


웹/앱 React/Next.js 환경에서의 테스트 자동화 프레임워크와 방식은 주로 다음과 같은 조합과 절차로 진행됩니다.


### 1. 주요 테스트 자동화 도구

- **Jest**

    Next.js 및 React 프로젝트에서 가장 널리 사용하는 테스트 프레임워크입니다. 유닛 테스트, 모의(mock) 함수 지원, 스냅샷 테스트 등을 제공합니다.

- **React Testing Library(@testing-library/react, @testing-library/jest-dom)**

    React 컴포넌트의 UI 동작과 사용자 상호작용을 테스트하기 위한 라이브러리로, 실제 사용자가 보는 DOM에 가까운 환경에서 테스트합니다.

- **TypeScript + @types/jest**

    TypeScript 사용하는 경우 타입 지원을 위해 필수 설치.

- **SWC** (swc/jest)

    Next.js는 SWC 트랜스파일러를 기본 제공하여 빠른 Jest 테스트 실행 속도를 지원합니다 (바벨 대비 최대 4~5배 빠름).


### 2. 테스트 자동화 설치 및 설정 예시


```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest swc-jest
```


`package.json`에 테스트 스크립트 추가:


```json
"scripts": {
  "test": "jest"
}
```


`jest.config.js` 예:


```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\\\.(js|jsx|ts|tsx)$': ['@swc/jest'],
  },
}
```


`jest.setup.js` 예:


```javascript
import '@testing-library/jest-dom';
```


### 3. 테스트 작성 방식

- **유닛 테스트(Unit Tests)**: 함수나 컴포넌트 단위로 기능을 독립적으로 검증
- **스냅샷 테스트(Snapshot Tests)**: 컴포넌트 렌더 결과가 의도한 UI와 일치하는지 확인
- **사용자 이벤트 테스트(user-event)**: 버튼 클릭, 입력 등 사용자 상호작용 테스트

예시:


```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyButton from './MyButton';

test('버튼 클릭 시 카운트 증가', () => {
  render(<MyButton />);
  const button = screen.getByRole('button');
  userEvent.click(button);
  expect(button).toHaveTextContent('Clicked 1 times');
});
```


### 4. 엔드투엔드(E2E) 테스트 도구

- **Cypress, Playwright** 등으로 Next.js 앱의 전체 흐름, 사용자 시나리오 자동화 테스트 가능
- 실시간 디버깅, 스크린샷, 비디오 녹화 기능 지원

### 5. CI/CD와 연계

- GitHub Actions, Jenkins, GitLab CI 등과 통합해 푸시, PR 시 자동 테스트 실행 및 결과 리포트
- 워크플로우 자동화로 품질 보증 강화

### 정리


| 구분         | 도구 및 라이브러리                  | 역할 및 특징                        |
| ---------- | --------------------------- | ------------------------------ |
| 단위 테스트     | Jest, React Testing Library | 컴포넌트, 함수 단위 테스트, 사용자 이벤트 시뮬레이션 |
| 스냅샷 테스트    | Jest Snapshot               | UI 변동 감지                       |
| 타입 지원      | @types/jest                 | TypeScript 환경 테스트 지원           |
| 테스트 실행 최적화 | SWC Jest Transformer        | 빠른 테스트 컴파일                     |
| E2E 테스트    | Cypress, Playwright         | 사용자 시나리오 기반 통합 테스트             |
| CI/CD 연동   | GitHub Actions, Jenkins 등   | 자동화된 테스트 및 배포 프로세스 구축          |


필요하면 Next.js 프로젝트에서의 구체적인 설정 코드, 테스트 시나리오 작성법도 안내 가능합니다.


출처
[1] nextjs에서 jest로 테스트코드 도입하기 - 한동룡 기술 블로그 [https://www.handongryong.com/posts/jest](https://www.handongryong.com/posts/jest)
[2] NextJS에서 유닛테스트하기: Jest & react-testing ... - 호박너구리 블로그 [https://blog.pumpkin-raccoon.com/83](https://blog.pumpkin-raccoon.com/83)
[3] [Next.js] 테스팅 도입기(1)- Next.js 에 Jest, React Testing Library 세팅 [https://velog.io/@aeong98/Next.js-Next.js-에-Jest-Testing-Library-세팅](https://velog.io/@aeong98/Next.js-Next.js-%EC%97%90-Jest-Testing-Library-%EC%84%B8%ED%8C%85)
[4] [Next.Js] with Testing - velog [https://velog.io/@seohyeon1578/Next.Js-with-Testing](https://velog.io/@seohyeon1578/Next.Js-with-Testing)
[5] [번역] Next.js를 위한 테스트 도구 - Develog [https://daunje0.tistory.com/305](https://daunje0.tistory.com/305)
[6] NextJS 테스트 코드 작성하기 - 리액트 테스트에 대하여 - OIL - 티스토리 [https://rocketengine.tistory.com/entry/NextJS-테스트-코드-작성하기](https://rocketengine.tistory.com/entry/NextJS-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%ED%95%98%EA%B8%B0)
[7] [Next.js] 테스트 종류 [https://weeeeey.tistory.com/129](https://weeeeey.tistory.com/129)
[8] Next.js로 테스트하기 : r/nextjs - Reddit [https://www.reddit.com/r/nextjs/comments/196q7p6/testing_with_nextjs/?tl=ko](https://www.reddit.com/r/nextjs/comments/196q7p6/testing_with_nextjs/?tl=ko)
[9] [Next.js] Cursor+MCP 테스트 자동화 / 307 리디렉션? HttpOnly 쿠키 ... [https://dingx2-story.tistory.com/163](https://dingx2-story.tistory.com/163)


