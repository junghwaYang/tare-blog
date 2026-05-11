---
title: "Next에서 지원하는 구글폰트 사용"
description: "NextJS에서는 구글 폰트를 위한 기능을 제공한다. 일반적인 cdn 방식으로 가져오는거보다 훨신 더 최적화 된 방법으로 사용할 수 있다. 해당 기능은 13버전 이후로만 사용이 가능하다. 예를 들어 noto sans 폰트를 사용한다고 가정해보자. 사용방법 typescript import { NotoSansKR } from 'next/f"
pubDate: 2024-11-29T09:27:00.000Z
updatedDate: 2025-06-17T02:55:00.000Z
tags: []
category: "react"
slug: "nexteseo-jiwonhaneun-gugeulponteu-sayong"
draft: false
originalUrl: "https://www.notion.so/14d4ef56099480a29895ca0472fbebc2"
---


NextJS에서는 구글 폰트를 위한 기능을 제공한다.


일반적인 cdn 방식으로 가져오는거보다 훨신 더 최적화 된 방법으로 사용할 수 있다.


해당 기능은 <u>**NextJS 13버전 이후**</u>로만 사용이 가능하다.


예를 들어 noto sans 폰트를 사용한다고 가정해보자.

- 사용방법

```typescript
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '700'],
  subsets: [],
});
```


여기서 `weight`는 숫자형태가 아닌 문자열 형태로 받으며,


`subsets`는 영문,한글 같은 형식을 골라서 사용할 수 있다. 빈 배열로 남겨놓게 된다면 모두 사용이 가능하다.


해당 폰트를 전역으로 설정해주고싶다면 _app.js에서 아래와 같이 감싸서 사용할 수 있다.


```typescript
<main className={notoSansKR.className}>
  ...
</main>
```


JSX내에서 `className`으로 사용하는 방법도 있지만 `global.css`에서 `font-family`로도 설정이 가능하다.


