---
title: "Prefetch란?"
description: "Prefetch는 브라우저가 사용자가 특정 리소스를 요청하기 전에 미리 가져오는 기술이다. Next.js에서는 <u페이지 전환 시 사용될 데이터와 리소스를 사전에 로드</u하여, 사용자가 링크를 클릭하면 즉시 해당 페이지를 렌더링할 수 있도록 최적화할 수 있다. Next에서 Prefetch Link Next.js는 기본적으로 next/link 컴포넌트에서 "
pubDate: 2024-11-26T02:56:00.000Z
updatedDate: 2025-06-17T02:55:00.000Z
tags: []
category: "study"
slug: "prefetchran"
draft: false
originalUrl: "https://www.notion.so/14a4ef5609948059a8d8d8077c764e18"
---


> **Prefetch**는 브라우저가 사용자가 특정 리소스를 요청하기 전에 미리 가져오는 기술이다.  
> Next.js에서는 <u>**페이지 전환 시 사용될 데이터와 리소스를 사전에 로드**</u>하여,  
> 사용자가 링크를 클릭하면 즉시 해당 페이지를 렌더링할 수 있도록 최적화할 수 있다.


# Next에서 Prefetch


## Link


Next.js는 기본적으로 **`next/link`** 컴포넌트에서 사전 로딩(prefetch)을 지원합니다. 이 기능은 사용자가 링크를 클릭하기 전에 페이지 리소스를 미리 로드하여 페이지 전환 속도를 크게 향상시킵니다.


### **기본 동작**


`next/link`는 사용자가 브라우저 뷰포트에 해당 링크가 나타났을 때 **자동으로 Prefetch**를 수행합니다.

- JavaScript와 데이터를 브라우저가 백그라운드에서 사전 로드합니다.
- 사용자가 링크를 클릭하면, 이미 로드된 리소스를 즉시 사용해 페이지를 전환합니다.
- `next/link`의 `prefetch` 속성은 기본값이 `true`입니다. 이를 `false`로 설정하면 특정 링크의 사전 로딩을 비활성화할 수 있습니다.

## Dynamic Import


Next.js의 **Dynamic Import**를 사용하면 <u>**필요할 때만 특정 컴포넌트**</u>를 로드하도록 설정할 수 있습니다. 여기에 `preload`를 추가하면 컴포넌트를 사전에 로드할 수 있습니다.


### 사용법 예시


```typescript
import dynamic from 'next/dynamic';

const About = dynamic(() => import('./about'), { ssr: false });

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <About />
    </div>
  );
}
```


## 데이터 Prefetch


Next.js에서 페이지 전환 시 데이터를 사전에 로드하려면 `getStaticProps`(SSG를 구현하기 위한 메서드) 또는 `getServerSideProps`(SSR를 구현하는 메서드)와 결합할 수 있습니다.


### `getStaticProps`로 Prefetch

- `getStaticProps`는 빌드 타임에 데이터를 사전에 가져옵니다.
- 링크된 페이지의 데이터와 리소스가 Prefetch를 통해 사전 로드됩니다

```typescript
import Link from 'next/link';

export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Link href={`/post/${post.id}`} key={post.id}>
          <a>{post.title}</a>
        </Link>
      ))}
    </div>
  );
}
```


## SEO 최적화


Prefetch는 사용자 경험(UX)을 향상시키지만, SEO에는 직접적인 영향을 주지 않습니다. 그러나 <u>**Next.js에서 제공하는 정적 페이지 생성(SSG) 또는 서버 사이드 렌더링(SSR)과 결합하면 SEO를 최적화**</u>할 수 있습니다.


# Prefetch의 장점

1. **빠른 페이지 전환**
    - 링크 클릭 전에 리소스를 로드하여 사용자에게 거의 즉각적인 전환 경험을 제공합니다.
2. **네트워크 성능 최적화**
    - 브라우저의 idle 시간을 활용해 중요한 리소스를 미리 로드합니다.
3. **사용자 경험 개선**
    - 느린 네트워크 환경에서도 매끄러운 전환을 제공.

# Prefetch 주의점

- **리소스 사용량 증가**
    - 모든 링크에 대해 Prefetch를 활성화하면 불필요한 리소스 로드가 발생할 수 있습니다.
    - 대규모 사이트에서는 성능에 부정적인 영향을 줄 수 있습니다.
- **브라우저 지원**
    - 대부분의 최신 브라우저가 Prefetch를 지원하지만, 오래된 브라우저에서는 제한적일 수 있습니다.
- **캐시 전략 필요**
    - Prefetch로 로드된 리소스가 캐시되지 않으면 사용자가 링크를 클릭할 때 다시 요청할 수 있습니다.

