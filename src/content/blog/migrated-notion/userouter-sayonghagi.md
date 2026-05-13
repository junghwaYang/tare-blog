---
title: "useRouter 사용하기"
description: "useRouter는 next에서 경로의 pram과 query를 가져오는데에 사용된다. pram 가져오기 javascript // pages/products/id.jsx import { useRouter } from 'next/router'; export default function Product(){ const router = useRouter(); co"
pubDate: 2024-11-19T10:03:00.000Z
updatedDate: 2025-06-17T02:55:00.000Z
tags: ["react", "리액트"]
category: "react"
slug: "userouter-sayonghagi"
draft: false
originalUrl: "https://www.notion.so/1434ef56099480849115ed2942346165"
---


useRouter는 next에서 경로의 pram과 query를 가져오는데에 사용된다.


### pram 가져오기


```javascript
// pages/products/[id].jsx
import { useRouter } from 'next/router';

export default function Product(){
	const router = useRouter();
	const { id } = router.query;
	
	return (
		<div>
			<h1> 페이지 번호: {id} </h1>
		</div>
	)
}
```

- 위 코드의 경우는 `/products/1` 로 접속했을때, `페이지 번호: 1` 이라는 내용으로 노출 될 것이다.

### query 가져오기


```javascript
// pages/Search.jsx
import { useRouter } from 'next/router';

export default function Search(){
	const router = useRouter();
	const { q } = router.query;
	
	return (
		<div>
			<h1> q query : {q} </h1>
		</div>
	)
}
```

- 위처럼 동적 경로가 아니더라도 뒤에 `/Search?q=티셔츠` 이런 식으로 쿼리를 작성하고 이동한다면 페이지 본문에는 `q query : 티셔츠` 라고 노출 될 것이다.

