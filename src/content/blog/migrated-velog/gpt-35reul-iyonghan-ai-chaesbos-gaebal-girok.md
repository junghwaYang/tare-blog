---
title: "gpt-3.5를 이용한 ai 챗봇 개발 기록"
description: "프론트엔드:Next.js: 리액트 기반의 프론트엔드 프레임워크React: 사용자 인터페이스 구축을 위한 라이브러리React DOM: React 애플리케이션을 웹 페이지에 렌더링하기 위한 라이브러리Axios: HTTP 요청을 위한 라이브러리Tailwind CSS: CSS"
pubDate: 2024-01-19T19:53:44.212Z
updatedDate: 2026-05-06T22:29:22.800Z
tags: []
category: "ai"
slug: "gpt-35reul-iyonghan-ai-chaesbos-gaebal-girok"
draft: false
originalUrl: "https://velog.io/@siltarre/gpt-3.5를-이용한-ai-챗봇-개발-기록"
series: "토이프로젝트(개인개발)"
---

- 프론트엔드:
Next.js: 리액트 기반의 프론트엔드 프레임워크
React: 사용자 인터페이스 구축을 위한 라이브러리
React DOM: React 애플리케이션을 웹 페이지에 렌더링하기 위한 라이브러리
Axios: HTTP 요청을 위한 라이브러리
Tailwind CSS: CSS 프레임워크로 스타일링을 위해 사용됨
- 백엔드:
Express.js: Node.js 기반의 웹 애플리케이션 프레임워크
http-proxy-middleware: HTTP 프록시를 설정하기 위한 라이브러리
Cors: 크로스 오리진 리소스 공유를 처리하기 위한 미들웨어
Dotenv: 환경 변수를 로드하기 위한 라이브러리
- 개발 도구 및 환경:
TypeScript: 정적 타입 검사와 타입 안정성을 제공하는 언어
Eslint: 코드 스타일과 오류 검사 도구
PostCSS: CSS 후처리 도구
Autoprefixer: CSS 자동 접두사 추가를 위한 PostCSS 플러그인
Tailwind CSS: 스타일링을 위한 CSS 프레임워크
@types/node: Node.js의 타입 정의
@types/react: React의 타입 정의
@types/react-dom: React DOM의 타입 정의

이슈 : 
기본적인 기술스택과 서버세팅을 진행했으나 프론트엔드에서의 요청은 정상이지만 백엔드에서 요청을 받지 못하는 현상 발생.
프록시 설정까지 완료하고 node와 next의 버전 호환성까지 확인해보았지만 문제 해결이 되지않고 있음.
무엇이 문제일까
