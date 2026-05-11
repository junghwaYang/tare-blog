---
title: "정적 페이지 생성하기"
description: "Next는 기본적으로 정적 페이지를 생성해준다. 빌드할때 딱 한번만 렌더링 된다 getStaticProps 함수 내부에서는 리액트 hooks를 사용할 수 없다. 단어가 정적페이지라고해서 고정적인 페이지를 보여주는 것이 아닌 빌드 시점에 미리 HTML을 만들어 둔다는 의미로써 고정적인 페이지 라는 의미와 헷갈리지 말자. 데이터 불러와 정적 페이지 생성하기 t"
pubDate: 2024-11-29T10:14:00.000Z
updatedDate: 2025-06-17T02:55:00.000Z
tags: []
category: "react"
slug: "jeongjeok-peiji-saengseonghagi"
draft: false
originalUrl: "https://www.notion.so/14d4ef5609948048b69ac90d88a30a18"
---

- Next는 기본적으로 정적 페이지를 생성해준다.
- 빌드할때 딱 한번만 렌더링 된다
- `getStaticProps` 함수 내부에서는 리액트 hooks를 사용할 수 없다.
> 단어가 정적페이지라고해서 고정적인 페이지를 보여주는 것이 아닌 빌드 시점에 미리 HTML을 만들어 둔다는 의미로써 고정적인 페이지 라는 의미와 헷갈리지 말자.

---


## 데이터 불러와 정적 페이지 생성하기


```typescript
import { InferGetStaticPropsType } from 'next';

type Post = {
    id: number;
    title: string;
    body: string;
};

type Props = {
    posts: Post[];
};

// 1. getStaticProps 함수 정의
export async function getStaticProps() {
    // 외부 API에서 데이터 가져오기
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await response.json();

    // props로 데이터 반환

    return 
{
        props: {
            posts,
        },
    };
}

// 2. 컴포넌트에서 props 사용
export default function PostsPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
```


`InferGetStaticPropsType<typeof getStaticProps>` 란?


Next.js에서 제공하는 타입 유틸리티로, `getStaticProps` 함수가 반환하는 `props`의 타입을 자동으로 추론합니다. 이를 통해 `props`의 타입을 명시적으로 정의하지 않아도 TypeScript가 정확히 이해할 수 있도록 도와줍니다.


## 다이나믹한 페이지를 정적 페이지로 생성하기


`getStaticPaths`를 이용해 다이나믹 페이지를 정적으로 생성하는 방법은, **빌드 타임에 필요한 모든 경로를 미리 정의하고 해당 경로에 대한 정적 HTML을 생성**하는 방식입니다. 이 방법은 데이터가 자주 변경되지 않는 경우 적합하며, 빠른 로드 속도와 SEO 친화적인 페이지를 제공할 수 있습니다.


---


### 예시코드


```javascript
// paths 맵핑
export async function getStaticPaths(){
	const res = await axios.get('/products'); // REST API 호출
	const products = res.data.results;
	const paths = producsts.map((product)=> ({
		params: {id: 
String
(product.id)}
	}));
	
	return {
		paths,
		fallback: true;
	}
}

export async function getStaticProps(context){
	const productId = context.params['id'];
	let product;
	try{
		const res = await axios.get(`/products/${productId}`);
		product = res.data;
	} catch {
		return {
			notFound: true,
		}
	}
	
	return {
		props: {
			product,
		}
	}
}


if(!product) return (
	<div className={styles.loading}>
		<Spinner />
	</div>
)
```


`getStaticPaths`를 사용할때에는 `getStaticProps` 함수와 같이 사용하는데 이때 정적 경로를 생성하기위해서는 `getStaticProps`의 파라미터로 `context` 객체를 받아야하는데 해당 객체의 `params` 라는 값을 이용해서 정적 경로를 생성할 수 있다.


하지만 `getStaticProps`만으로는 웹 브라우저에서 `params`의 값을 모르기때문에 `getStaticPaths`를 통해서 `params`를 맵핑 해주어야 한다.


### fallback 이란?


`getStaticPaths`를 리턴할때 `fallback`이라는 키도 같이 리턴하게 되는데 해당 속성값으로는 `boolean`을 작성해주면 된다.

- `false` 일 경우
    - 정적 경로로 생성되지않은 url로 접근했을때의 처리를 해주지 않겠다는 의미 ⇒ 404를 리턴함
- `true` 일 경우
    - 정적 경로로 생성되어있지않아도 자동으로 동적 데이터를 통해서 페이지를 보여준다.
        - 이때, 동적인 경로를 생성할때, 서버에 요청하여 데이터를 불러오는 과정 중 로딩 처리를 해주어야하는데 그때 필요한 경우 로딩처리를 해준다면, 정적인 경로에서는 정상적으로 바로 노출될 것이고, 정적 경로로 생성하지않은 경우에는 데이터를 불러올때까지 로딩처리를 하다가 데이터가 불러와지면 그때 화면이 렌더링 된다.
    - `true`일 경우에는 `getStaticProps`에서 `try,catch`문을 이용하여 따로 설정이 가능한데, 위 코드에서의 `catch`문 처리는 해당 API 데이터가 없는 url로 접근하였을때, 즉 데이터가 1~10까지 밖에없을때 `/11` 의 경로로 접근할 경우 404를 보낸다는 의미이다.

## 🤔 나중에 업데이트를 발생시킬때는 또 빌드를 해야하나?


이럴때는 ISR 방식을 사용하면 된다.


> ISR(Incremental Static Regeneration)이란?  
> ISR(증분 정적 재생성)은 Next.js에서 제공하는 기능으로, **정적 페이지를 빌드 시 생성한 후에도 일정 주기로 갱신**할 수 있는 방법입니다. 이를 통해 **정적 페이지의 성능**과 **동적 데이터의 유연성**을 동시에 누릴 수 있습니다.

- Next에서는 한 페이지 안에서 SSR과 SSG를 동시에 사용할 수 없다.
- 만약 실시간 데이터를 받아야하는 페이지라면 SSR 페이지로만 사용하면 되지만 SSG로 빌드 시킨 후에 일정주기가 지나고 나서 업데이트되는 방식을 사용하고 싶다면 ISR로 빌드를 시키면 된다.
- 예제

```javascript
import { InferGetStaticPropsType } from 'next';

type Props = {
    currentTime: string;
};

export async function getStaticProps() {
    return {
        props: {
            currentTime: new Date().toISOString(),
        },
        revalidate: 10, // 10초마다 페이지를 갱신
    };
}

export default function ISRPage({ currentTime }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div>
            <h1>Incremental Static Regeneration</h1>
            <p>Current Time: {currentTime}</p>
        </div>
    );
}
```


기본적으로 SSG로 만들기위한 `getStaticProps` 함수를 작성하고 리턴값으로 `revalidate`를 이용해 초마다 갱신할 수 있도록 설정이 가능하다.


### 🤔 ISR을 언제 사용하면 좋을까?


예를들어 ‘주간 인기 순위’ 가 있다고 치자.


해당 인기 순위는 실시간으로 반영되게끔하면 무수히 많은 요청을 서버에 할 것이다.


그렇게 되면 서버에 과부화가 오게 될 수 있기때문에 특정 기간마다 갱신시킬 수 있는 ISR로 작성하는 것이 훨신 더 효율적이다.


시간 단위도 일주일 기준으로 설정해놓으면 좋을 것 같고, 사용자에게도 ‘마지막 업데이트: 2024.11.01 00:00:00’ 이런식으로 보여주면 좋을 것 같다.


