---
title: "Next 시작"
description: "🤔 Next.js 란? React를 기반으로 한 풀스택 웹 프레임워크입니다. React의 단점을 보완하고, 서버사이드 렌더링(SSR), 정적 사이트 생성(SSG) 같은 기능을 쉽게 구현할 수 있도록 설계된 프레임워크입니다. Vercel이 개발 및 유지 보수하고 있으며, SEO 최적화, 퍼포먼스 개선, 유연한 라우팅 시스템 등 현대적인 웹 개발에 필요한 기"
pubDate: 2024-11-19T09:53:00.000Z
updatedDate: 2025-06-17T02:57:00.000Z
tags: ["react", "리액트"]
category: "react"
slug: "next-sijak"
draft: false
originalUrl: "https://www.notion.so/1434ef560994808caae0eec9a0995d40"
---


> 🤔 Next.js 란?  
> **React**를 기반으로 한 **풀스택 웹 프레임워크**입니다. React의 단점을 보완하고, 서버사이드 렌더링(SSR), 정적 사이트 생성(SSG) 같은 기능을 쉽게 구현할 수 있도록 설계된 프레임워크입니다. Vercel이 개발 및 유지 보수하고 있으며, **SEO 최적화**, **퍼포먼스 개선**, **유연한 라우팅 시스템** 등 현대적인 웹 개발에 필요한 기능을 제공합니다.


### 설치방법


```powershell
npx creat-next-app .
```


### 파일 시스템 기반 라우팅

- 리액트에서는 Route를 사용했다면, Next는 프로젝트 폴더 파일 기준으로 경로를 정하게 된다.
- 예시

```powershell
page/
	products/
		[id].jsx
	_app.jsx
	_document.jsx
	index.jsx
	search.jsx
	setting.jsx
```

- 동적 경로를 지정할때는 파일명을 대괄호를 이용해서 작성해주면 되는데 꼭 파일이 아니더라도 폴더로도 설정이 가능하다.

```powershell
page/
	products/
		
[id]/

			index.jsx
```

- next.js에서 이런 라우팅 경로를 `pram` 이라고 한다.

