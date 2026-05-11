---
title: "MongoDB"
description: "데이터베이스 데이터를 따로 저장하고 관리하는 프로그램 데이터 베이스에는 SQL, NoSQL 등 여러 종류가 있는데 MongoDB는 NoSQL에 속한다. MongoDB 몽고DB에 저장되는 데이터는 도큐먼트(Document)라고 불린다. 도큐먼트는 자바스크립트 객체 같은거라고 생각해도 될 것 같다. 예를 들어 쇼핑몰을 기준으로 도큐먼트를 생성한다면, 상품 정보"
pubDate: 2024-12-03T09:55:00.000Z
updatedDate: 2025-06-17T02:49:00.000Z
tags: []
category: "database"
slug: "mongodb"
draft: false
originalUrl: "https://www.notion.so/1514ef560994809ca32dcb3e9dd86952"
---


### 데이터베이스

- 데이터를 따로 저장하고 관리하는 프로그램
- 데이터 베이스에는 SQL, NoSQL 등 여러 종류가 있는데 MongoDB는 NoSQL에 속한다.

### MongoDB

- 몽고DB에 저장되는 데이터는 도큐먼트(Document)라고 불린다. 도큐먼트는 자바스크립트 객체 같은거라고 생각해도 될 것 같다.
- 예를 들어 쇼핑몰을 기준으로 도큐먼트를 생성한다면, 상품 정보 데이터, 로그인 데이터 등등 각 관심사 별로 분류하게 되는데 이렇게 도큐먼트를 모아놓은 것을 컬렉션(Collection) 이라고 한다.

해당 본문에서는 MongoDB Atlas(클라우드 서비스)를 이용해서, 클라우드에 MongoDB 데이터 베이스르 생성하고, Mongoose라는 자바스크립트 라이브러리로 서버에서 MongoDB를 다루는 방법에 대해서 설명할 것이다.

- [MongoDB Atlas 사용법](https://www.codeit.kr/tutorials/70/mongodb-atlas)

