---
title: "커스텀 App과 Document"
description: "App.js Next에서는 App.js 라는 파일에서 공통으로 사용되는 컴포넌트를 추가 할 수 있다. 리액트로 치면 App.js 컴포넌트라고 할 수 있다. 예제 typescript import Container from '@/components/Container'; import '@/styles/global.css'; export default functi"
pubDate: 2024-11-22T05:07:00.000Z
updatedDate: 2025-06-17T02:55:00.000Z
tags: []
category: "react"
slug: "keoseuteom-appgwa-document"
draft: false
originalUrl: "https://www.notion.so/8101eb97552244b0b62454c37707fff1"
---


# _App.js


Next에서는 `_App.js` 라는 파일에서 공통으로 사용되는 컴포넌트를 추가 할 수 있다. 리액트로 치면 App.js 컴포넌트라고 할 수 있다.

- 예제

```typescript
import Container from '@/components/Container';
import '@/styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Headers />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
```


위 코드에서 `Component`가 뜻하는 바는 Next에서 페이지에 포함되는 컴포넌트를 렌더링 시켜주는 역할을 한다.


그러므로 공통 컴포넌트를 추가하고 싶을때는 `_App.js`에 추가해주면 된다.


# _Documents.js


`Documents`의 경우는 일반적인 컴포넌트의 형태와 유사하지만, 해당 파일은 실제 HTML의 뼈대를 만들어주는 곳으로써 리액트의 `Hooks`나 일반적인 `js` 코드를 추가해도 정상적으로 동작하지 않는다.


해당 파일에서는 **Html의 lang를 변경한다거나 할때만 사용**이 된다.

- 예제

```typescript
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```


