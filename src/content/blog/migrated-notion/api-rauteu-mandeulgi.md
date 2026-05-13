---
title: "API 라우트 만들기"
description: "들어가며 Next에서는 간단하게 페이지 라우터를 이용하여 서버 엔드포인트를 만들 수 있다. 본문 javascript pages/ api/ shortlinks/ id.js index.js javascript // index.js export default function handler(req, res) { res.send('안녕 API!'); } javasc"
pubDate: 2024-11-29T18:41:00.000Z
updatedDate: 2025-06-17T02:55:00.000Z
tags: ["react", "리액트"]
category: "react"
slug: "api-rauteu-mandeulgi"
draft: false
originalUrl: "https://www.notion.so/14d4ef560994809980daf47761baf996"
---


## 들어가며


Next에서는 간단하게 페이지 라우터를 이용하여 서버 엔드포인트를 만들 수 있다.


## 본문


```javascript
pages/
	api/
		short-links/
			[id].js
			index.js
```


```javascript
// index.js
export default function handler(req, res) {
  res.send('안녕 API!');
}
```


```javascript
// [id].js
export default function handler(req, res) {
  res.send('안녕 다이나믹 라우트!');
}
```


위와 같이 간단하게 `res`를 받아오는 엔드포인트를 생성해주었다.


생성 방식은 `pages` 폴더 안에 `api`라는 폴더를 만들어서 하위 폴더나 파일로 생성해주면 된다.

> 기존에 페이지 라우터를 이용해 path 경로를 만들어주는것과 동일하다

잘 동작하는지 테스트를 위해서는 **REST client**라는 vscode 확장 프로그램을 활용할건데


프로젝트 루트에 `request.http` 파일을 하나 만들어서 아래와 같이 작성하여 테스트 가능하다.


```javascript
GET http://localhost:3000/api/short-links

###

GET http://localhost:3000/api/short-links/123
```


해당 주소로 `req`를 보내면 `HTTP/1.1 200 OK` 응답과 함께 정상적으로 `res`를 받아오는 것을 확인 할 수 있다.


## 마치며


본문에서는 정말 간단하게 API 라우트를 만드는 방법에 대해서만 서술했다.


기본적으로 우리가 알고있는 Next에서의 페이지 라우트 경로 생성 방법과 동일하다고 보면 될 것 같다.


