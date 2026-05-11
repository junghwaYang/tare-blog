---
title: "리퀘스트 다루기"
description: "들어가며 이번 글에서는 우리가 만든 API의 request에 대한 정보를 가져올때 사용이 되는데, 어떤 것들을 가져오는지 확인해볼것이다. 본문 1. params와 query string 다이나믹 라우트에 params 값 가져오기 javascript // id.js export default function handler(req, res) { res.send"
pubDate: 2024-12-03T09:05:00.000Z
updatedDate: 2025-06-17T02:55:00.000Z
tags: []
category: "react"
slug: "rikweseuteu-darugi"
draft: false
originalUrl: "https://www.notion.so/1514ef56099480f8a1c9c61e6d707fe9"
---


# 들어가며


이번 글에서는 우리가 만든 API의 `request`에 대한 정보를 가져올때 사용이 되는데, 어떤 것들을 가져오는지 확인해볼것이다.


# 본문


### 1. params와 query string

- 다이나믹 라우트에 `params` 값 가져오기

```javascript
// [id].js
export default function handler(req, res) {
  res.send(
req.query
);
}
```


```javascript
GET http://localhost:3000/api/short-links/
123


### 


GET http://localhost:3000/api/short-links/
123?q=hello
```


우선 `request`의 `params`를 확인 할 수 있는데, 위와 같이 `id` `params`를 리퀘스트로 보냈을때,


```javascript
// params
{
	"id" : "123"
}

// params + 쿼리 스트링
{
	"id" : "123",
	"q" : "hello"
}
```


이렇게 객체에 `id` 프로퍼티로 123이 들어가있는것을 확인 할 수 있다.


여기서 `params`뿐만 아닌 쿼리 스트링도 `req.query`로 확인 할 수 있다.

> 여기서 params랑 query string이 같은 객체에 담겨져 있다.

## body

- post req로 body 확인하기

```javascript
// [id].js
export default function handler(req, res) {
  res.send(
req.body
);
}

// request.http
POST http://localhost:3000/api/short-links/
123

Content-Type: application/json

{
	"title" : "안녕"
}
```


해당 `res`를 확인해보면, 보낸 바디가 그대로 잘 도착하는 것을 확인 할 수 있다.


## 쿠키 값 확인하기

- `req`로 오는 쿠키 값 확인하기

```javascript
// [id].js
export default function handler(req, res) {
  res.send(
req.cookies
);
}

// request.http
GET http://localhost:3000/api/short-links/123
Cookie: session-id=hello1234
```


위와 같이 작성하면 우리가 보낸 쿠키를 참조 할 수 있다.


## method

- `method` 확인하기

```javascript
// [id].js
export default function handler(req, res) {
  res.send(
req.method
);
}

// request.http
GET ...

### 

POST ...
```


위와 같이 작성했을때 `method`가 `GET`이면 `GET`, `POST`면 `POST`로 잘 전달되는걸 확인할 수 있다.


## method마다 다른 처리 하기

- method마다 다른처리를 하고싶다면 `switch` 문을 사용하면 된다.

```javascript
// [id].js
export default function handler(req, res) {
	switch(req.method){
		case "PATCH":
			res.send("수정");
			break;
		case "GET":
			res.send("조회");
			break;
		default:
			res.send();
			break;
	}
}
```


이렇게 작성 후 `request.http`를 통해 각 메서드를 요청하면 그에 해당하는 값으로 `res`로 확인할 수 있다.


# 마치며


사용자가 보내오는 request를 확인하고, 어떤 식으로 들어오는지 확인하기 위한 챕터이다.


어떤 식으로 들어오고 보여지는지 확인이 가능해야 그에 응당하는 response를 보내줄 수 있으니 알아두면 좋을듯하다.


그 외 다양한 프로퍼티와 메소드는 [Next 공식문서](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)에서 확인하면 된다.


