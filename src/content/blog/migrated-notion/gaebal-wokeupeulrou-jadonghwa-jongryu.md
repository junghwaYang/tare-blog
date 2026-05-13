---
title: "개발 워크플로우 자동화 종류"
description: "개발 환경에서 워크플로우 자동화는 코드 품질, 배포, 버전 관리, 테스트, 커밋 규칙 등 여러 분야에서 다양한 도구와 방법으로 이뤄집니다. 1. 커밋 컨벤션 및 코드 스타일 자동화 commitlint(@commitlint/cli, @commitlint/configconventional) 커밋 메시지 포맷 검증을 자동화해 일관된 커밋 컨벤션 유지 commit"
pubDate: 2025-07-31T12:13:00.000Z
updatedDate: 2025-07-31T12:26:00.000Z
tags: ["retrospective", "회고"]
category: "retrospective"
slug: "gaebal-wokeupeulrou-jadonghwa-jongryu"
draft: false
originalUrl: "https://www.notion.so/2414ef560994809ea03ffea3a5b2f1ce"
---


개발 환경에서 워크플로우 자동화는 코드 품질, 배포, 버전 관리, 테스트, 커밋 규칙 등 여러 분야에서 다양한 도구와 방법으로 이뤄집니다.


### 1. 커밋 컨벤션 및 코드 스타일 자동화

- **commitlint(@commitlint/cli, @commitlint/config-conventional)**
커밋 메시지 포맷 검증을 자동화해 일관된 커밋 컨벤션 유지
- **commitizen(cz-conventional-changelog 포함)**
커밋 메시지 작성 가이드 제공, 명령어 기반 커밋 메시지 작성 지원
- **husky**
Git 훅(Hook) 자동화로 커밋 전후, 푸시 전에 스크립트 실행(예: lint, 테스트, commitlint 실행)
- **lint-staged**
스테이지된 파일만 대상으로 린팅, 포맷팅 실행해 빠르고 정확한 코드 품질 관리

### 2. 빌드 및 테스트 자동화

- **Jest, Mocha, Jasmine** 등 테스트 프레임워크 + **CI 도구 (GitHub Actions, Jenkins, GitLab CI/CD, CircleCI)**
테스트 실행부터 결과 보고, 빌드, 배포까지 자동화 파이프라인 구축
- **Selenium, Cypress, Cucumber**
UI/기능 자동화 테스트, BDD 기반 테스트 자동화 도구

### 3. 배포 및 CI/CD 자동화

- **Jenkins, GitHub Actions, GitLab CI/CD, CircleCI, ArgoCD**
빌드→테스트→배포 전 과정을 자동화, 장애 조치 및 롤백 지원
- **Docker, Kubernetes**
컨테이너 기반 배포 자동화 및 확장성 관리

### 4. 버전 관리 및 릴리즈 자동화

- **semantic-release**
커밋 메시지를 바탕으로 자동 버전 관리 및 자동 릴리즈 생성
- **standard-version**
수동 커맨드로 자동 릴리즈 노트 생성 및 버전 업데이트 지원

### 5. 코드 품질 및 정적 분석 자동화

- **ESLint, Prettier, Stylelint**
코드 포맷, 문법, 스타일 검사 자동화
- **SonarQube**
보안, 코드 품질, 중복 코드 탐지 등 심도 있는 정적 분석

### 6. 문서화 및 기타 자동화

- **Typedoc, JSDoc**
코드 주석을 기반으로 문서 자동 생성
- **Dependabot, Renovate**
자동으로 라이브러리 버전 업데이트 및 PR 생성

### 요약


| 자동화 분야      | 주요 도구/패키지 이름                                    | 주요 기능 및 특징                       |
| ----------- | ----------------------------------------------- | -------------------------------- |
| 커밋 메시지 규칙   | @commitlint/cli, commitizen, husky, lint-staged | 커밋 메시지 체계화, Git 훅 자동화로 규칙 준수 강제화 |
| 테스트 및 빌드    | Jest, Mocha, GitHub Actions, Jenkins            | 단위 테스트, 통합 테스트, 빌드/배포 파이프라인 자동화  |
| 배포 및 CI/CD  | Jenkins, GitHub Actions, Docker, Kubernetes     | 자동 빌드-테스트-배포, 컨테이너 관리            |
| 버전관리 및 릴리즈  | semantic-release, standard-version              | 커밋 메시지 기반 자동 버전업 및 릴리즈           |
| 코드품질 및 정적분석 | ESLint, Prettier, SonarQube                     | 코드 포맷, 스타일 검사 및 보안/품질 정적 분석 자동화  |
| 문서화 및 버전 관리 | Typedoc, Dependabot, Renovate                   | API 문서 자동 생성, 의존성 자동 업데이트        |


필요한 자동화 도구는 프로젝트 규모, 팀 문화, 배포 방식에 따라 맞춤 적용하며, 위 도구들은 대부분 **CLI 기반**이며 CI/CD와 연동되어 매우 유용합니다. Gemini CLI 같은 AI 도구도 자동화 스크립트 생성, 코드 리뷰 보조 등 워크플로우 고도화에 활용 가능합니다.


필요하면 각 도구별 설정 예시나 실제 적용 방법도 안내해 드릴 수 있습니다.


출처
[1] 최고의 자동화 테스트 도구 10선 - Apidog [https://apidog.com/kr/blog/best-automated-testing-tools-2/](https://apidog.com/kr/blog/best-automated-testing-tools-2/)
[2] 실무에서 활용되는 자동화 도구 추천 - 디비안츠 블로그 [https://www.deviantceblog.com/it-19/](https://www.deviantceblog.com/it-19/)
[3] 2025년 최고의 자동화 테스트 도구 20가지 - ClickUp [https://clickup.com/ko/blog/228197/automation-testing-tools](https://clickup.com/ko/blog/228197/automation-testing-tools)
[4] CI/CD 기본개념과 가장 많이 쓰이는 도구 5가지 - 하늘네트 [https://www.hanl.tech/blog/ci-cd-기본개념과-가장-많이-쓰이는-도구-5가지/](https://www.hanl.tech/blog/ci-cd-%EA%B8%B0%EB%B3%B8%EA%B0%9C%EB%85%90%EA%B3%BC-%EA%B0%80%EC%9E%A5-%EB%A7%8E%EC%9D%B4-%EC%93%B0%EC%9D%B4%EB%8A%94-%EB%8F%84%EA%B5%AC-5%EA%B0%80%EC%A7%80/)
[5] 최고의 21개 오픈 소스 및 무료 자동화 테스트 도구 - Apidog [https://apidog.com/kr/blog/automated-testing-tools-2/](https://apidog.com/kr/blog/automated-testing-tools-2/)
[6] DevOps 환경을 위한 주요 도구 분류 및 소개 [https://velog.io/@kimjisub/DevOps-환경을-위한-주요-도구-분류-및-소개](https://velog.io/@kimjisub/DevOps-%ED%99%98%EA%B2%BD%EC%9D%84-%EC%9C%84%ED%95%9C-%EC%A3%BC%EC%9A%94-%EB%8F%84%EA%B5%AC-%EB%B6%84%EB%A5%98-%EB%B0%8F-%EC%86%8C%EA%B0%9C)
[7] 2025년 최고의 소프트웨어 개발 도구 15가지 - ClickUp [https://clickup.com/ko/blog/46290/software-development-tools](https://clickup.com/ko/blog/46290/software-development-tools)
[8] 개발환경 | 개발 도구의 종류 - 데브에이드 [https://sanctacrux.tistory.com/219](https://sanctacrux.tistory.com/219)


