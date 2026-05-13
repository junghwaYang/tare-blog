---
title: "리스폰스 다루기"
description: "들어가며 이번 챕터는 response를 다루는 방법에 대해서 서술할 예정이다. res를 다룰때는 req와 다른 방식으로 작성을 해주어야하는데 이때 메서드 체이닝을 이용해서 작성해주어야한다. 본문 메서드 체이닝이란? 메서드 체이닝은 객체에서 연속적으로 메서드를 호출할 수 있도록 설계된 프로그래밍 기법입니다. 각 메서드가 호출된 후 객체 자신(this)을 반환"
pubDate: 2024-12-03T09:31:00.000Z
updatedDate: 2025-06-17T02:55:00.000Z
tags: ["react", "리액트"]
category: "react"
slug: "riseuponseu-darugi"
draft: false
originalUrl: "https://www.notion.so/1514ef560994803c92e0cc34c7d71622"
---


# 들어가며


이번 챕터는 response를 다루는 방법에 대해서 서술할 예정이다.


res를 다룰때는 req와 다른 방식으로 작성을 해주어야하는데 이때 메서드 체이닝을 이용해서 작성해주어야한다.


# 본문


## 메서드 체이닝이란?


**메서드 체이닝**은 객체에서 연속적으로 메서드를 호출할 수 있도록 설계된 프로그래밍 기법입니다. 각 메서드가 호출된 후 객체 자신(this)을 반환하므로, 여러 메서드 호출을 한 줄에 연결(체이닝)할 수 있습니다.


## 만든 api 상태 코드 지정하기


```javascript
// /api/short-links/index.js

export default function handler(req, res){
	switch(req.method){
		case 'POST':
			res.status(201).send({
				title: '위키피디아 Next.js',
				url: 'http://en.wikipedia.org/wiki/Next.js',
			});
			break;
		case 'GET':
			res.send([
				{
					id: 1,
					title: '위키',
					url: '...',
				},
				{
					id: 2,
					title: '자유게시판',
					url: '...',
				},
				{
					id: 3,
					title: '더미데이터',
					url: '...',
				},
			]);
			break;
		default:
			res.status(404).send();
	}
}
```


우선 임의로 `POST`와 `GET`요청에 대한 `response`에 대해서 작성해주었다.


여기서 `res.status(…).send()` 방식으로 작성된 것을 메서드 체이닝이라고 하며,


각각 `POST`와 `GET` 요청을 해보면 여기서 지정해준 `201`과 `404` 상태 코드를 `response`를 통해 확인 할 수 있다.


# 마치며


여기서는 간단하게 Next에서 자주 쓰는 상태코드에 대해서만 다루었는데, response 객체에는 statue와 send말고 다양한 메소드가 존재하니 추가적인 정보는 [Next 공식 문서](https://nextjs-ko.org/docs/app/api-reference/functions/next-response)[(영문)](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)를 찾아보면 좋을듯하다.


