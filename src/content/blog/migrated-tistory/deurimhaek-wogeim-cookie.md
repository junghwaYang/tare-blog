---
title: "[드림핵 워게임] cookie"
description: "!image(https://blog.kakaocdn.net/dna/bHQYRe/btrangyR9GV/AAAAAAAAAAAAAAAAAAAAAJRW4XpBp4PLztpNqSX7SxQlcc5yvv9xYIG6dbG7A8z/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allowip=&allowreferer=&signature=BFeEn51GJidsvP2xMvvNUcnXV3Y%3D) cookie 내용 !image(https://blog.kaka"
pubDate: 2021-07-23T06:33:13.000Z
updatedDate: 2021-07-23T06:55:26.000Z
tags: []
category: "wargame"
slug: "deurimhaek-wogeim-cookie"
draft: false
originalUrl: "https://siltare.tistory.com/14"
ogImage: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FbHQYRe%2FbtrangyR9GV%2FAAAAAAAAAAAAAAAAAAAAAJRW4XpBp4PLztpNqSX7SxQlcc5y_vv9xYIG6dbG7A8z%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1780239599%26allow_ip%3D%26allow_referer%3D%26signature%3DBFeEn51GJidsvP2xMvvNUcnXV3Y%253D"
---

![image](/images/migrated-tistory/deurimhaek-wogeim-cookie/img.png)
cookie 내용

![image](/images/migrated-tistory/deurimhaek-wogeim-cookie/img.png)
접속화면

우선 처음 접속하게 되면 welcome! 이라는 텍스트가 있다.

우선 home이랑 about이라는 메뉴와 login이 있다. 한단계식 눌러보면 home이랑 about은 아무런 반응이 없는반면,

login창에는 login input이 있다.

![image](/images/migrated-tistory/deurimhaek-wogeim-cookie/img.png)
login 화면

우선 안에 아무거나 넣어보자.

![image](/images/migrated-tistory/deurimhaek-wogeim-cookie/img.png)
error

아무거나 넣었더니 찾을 수 없는 유저라고 뜬다.

그렇다면 해당 문제의 소스코드(문제파일 다운로드)를 열어보자.

![image](/images/migrated-tistory/deurimhaek-wogeim-cookie/img.png)
cookie 소스파일

해당 소스파일을 보면 users안에 guest와 admin이 있다.

우선 guest 아이디와 패스워드로 로그인을 해보자.

![image](/images/migrated-tistory/deurimhaek-wogeim-cookie/img.png)
guest로 로그인 시

guest로 로그인이 되었다. 하지만 넌 어드민이 아니다. 라는 텍스트가 떠있다.

이 문제의 제목이 무엇인가? cookie이니 쿠키값을 열어보자.

그 전에 크롬 플러그인 EditThisCookie 를 깔아주자.

해당 플러그인은 쿠키값 확인 및 변조에 유용한 플러그인이다.

[https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=ko](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=ko)

EditThisCookie

EditThisCookie는 쿠키 관리자입니다. 이것을 이용하여 쿠키를 추가하고, 삭제하고, 편집하고, 찾고, 보호하거나 막을 수 있습니다!

chrome.google.com

![image](/images/migrated-tistory/deurimhaek-wogeim-cookie/img.png)
쿠키값 확인

해당 사이트의 쿠키를 확인해보니 username이라는 이름의 쿠키값이 guest로 확인 되었다.

그렇다면 username에 admin을 넣어서 쿠키값 변조를 한다면?

![image](/images/migrated-tistory/deurimhaek-wogeim-cookie/img.png)
쿠키값 변조 후

이렇게 flag가 나오게 된다.
