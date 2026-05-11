---
title: "리다이렉트 하기"
description: "만약 웹 사이트를 운영하다가 특정 path의 경로를 바꾸어줘야할때는 next 파일 자체에서는 pages에 있는 폴더 네임만 변경해주면 됩니다. 하지만 사용자의 입장에서 이전 url을 즐겨찾기 해놓고 이전 버전의 url로 접속했을때는 404 에러가 발생하게 되는데 이를 방지하기위해서 next 서버에서 리다이렉트 처리를 해주어야한다. next 서버 설정은 ne"
pubDate: 2024-11-21T05:25:00.000Z
updatedDate: 2025-06-17T02:55:00.000Z
tags: []
category: "study"
slug: "ridairegteu-hagi"
draft: false
originalUrl: "https://www.notion.so/1454ef5609948025a2e4c474bae93218"
---


만약 웹 사이트를 운영하다가 특정 `path`의 경로를 바꾸어줘야할때는 next 파일 자체에서는 pages에 있는 폴더 네임만 변경해주면 됩니다.


하지만 사용자의 입장에서 이전 url을 즐겨찾기 해놓고 이전 버전의 url로 접속했을때는 404 에러가 발생하게 되는데 이를 방지하기위해서 next 서버에서 리다이렉트 처리를 해주어야한다.


next 서버 설정은 `next.config.js`에서 설정해주면 된다.


```javascript
async redirects() {
    return [
      {
        source: '/...', // 리다이렉션의 시작 URL
        destination: '/...', // 리다이렉션의 대상 URL
        permanent: true, 
      },
    ];
  },
```


이런 식으로 설정을 해주면 되는데 사실 자주 쓰이진 않아서 필요할때마다 [Next.js 공식 문서 ](https://nextjs-ko.org/docs/app/api-reference/next-config-js/redirects) 에 들어가서 검색하는 것을 추천한다.


그리고 `permanent`의 경우는 리다이렉션 해준 경로를 웹 브라우저에 저장하겠냐는 걸 뜻하는데, `false`로 설정해도 바뀐 경로로 잘 이동하지만 해당 값을 `false`로 두면 매번 이전 url에 접속할때마다 리다렉션 부분을 찾아서 다시 이동하는 네트워크 적 번거로움이 있다.


그렇기에 일반적으로는 `true`로 설정하여, 한번 리다이렉트 된 경로로 접속했을때 웹 브라우저가 이를 기억하여, 다시 이전 url로 접속을 해도 기억해두었던 경로로 이동을 시켜주게끔 하는 것이 좋다.


