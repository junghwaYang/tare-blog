---
title: "서버사이드 렌더링"
description: "서버 사이드 렌더링 이란 정적 렌더링과 반대로 자주 변경되는 페이지를 만들때 사용된다. 기본적인 사용법은 정적 렌더링 방식과 비슷하지만 사용되는 함수가 다르다. 여기서 주의해야할 점도 SSG와 SSR은 같이 사용할 수 없다는 점이다. getServerSideProps 사용하기 javascript export async function getServerSid"
pubDate: 2024-11-29T13:40:00.000Z
updatedDate: 2025-06-17T02:55:00.000Z
tags: []
category: "react"
slug: "seobeosaideu-rendeoring"
draft: false
originalUrl: "https://www.notion.so/14d4ef56099480b5b23acb0d813a3107"
---


서버 사이드 렌더링 이란 정적 렌더링과 반대로 자주 변경되는 페이지를 만들때 사용된다.


기본적인 사용법은 정적 렌더링 방식과 비슷하지만 사용되는 함수가 다르다.


여기서 주의해야할 점도 SSG와 SSR은 같이 사용할 수 없다는 점이다.


### `getServerSideProps` 사용하기


```javascript
export async function getServerSideProps(context){
	const q = context.query['q'];
	
	const res = await axios.get(`/products/?q=${q}`);
	const products = res.data.results ?? [];
	
	return {
		props: {
			products,
			q,
		},
	}
}
```


