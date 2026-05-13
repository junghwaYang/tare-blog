---
title: "mac os M1 환경에서 anaconda 세팅"
description: "해당 본문은 mac M1 환경에서 anaconda 설치 방법을 다루고 있습니다. 📚 아나콘다(anaconda)란? 파이썬을 사용할 때 필요한 여러가지 패키지 관리 및 가상환경을 편리하게 설정할 수 있는 배포판이다. 가상환경: 소프트웨어 개발 시 여러 패키지와 라이브러리를 설치하여 사용하는데, 버전이 맞지않는 경우 충돌이 일어날 수 있다. 따라서 패키지와 "
pubDate: 2025-06-17T13:38:00.000Z
updatedDate: 2025-06-17T14:01:00.000Z
tags: ["python", "파이썬"]
category: "python"
slug: "mac-os-m1-hwangyeongeseo-anaconda-seting"
draft: false
originalUrl: "https://www.notion.so/2154ef56099480938e82df694ea02f1f"
---


_해당 본문은 mac M1 환경에서 anaconda 설치 방법을 다루고 있습니다._


> 📚 아나콘다(anaconda)란?  
> 파이썬을 사용할 때 필요한 여러가지 패키지 관리 및 **가상환경***을 편리하게 설정할 수 있는 배포판이다.


**가상환경***: 소프트웨어 개발 시 여러 패키지와 라이브러리를 설치하여 사용하는데, 버전이 맞지않는 경우 충돌이 일어날 수 있다. 따라서 패키지와 라이브러리들을 독립적으로 관리할 수 있는 환경을 <u>가상환경</u>이라고 한다.


## 1. 아나콘다 설치


[링크](https://www.anaconda.com/download/success) 로 접속하여 아나콘다 설치

> 기존 M1,M2,M3 칩에서는 Minicanda를 지원하지않아 무겁게 사용을 했었는데 2022.05.06 발표 이후 공식으로 지원을 함으로써 좀 더 가벼운 상태를 유지할 수 있다고 한다.

![Miniconda Installers > Download for Apple Silicon](/images/migrated-notion/mac-os-m1-hwangyeongeseo-anaconda-seting/image.png)


mac 환경 최적화를 위해 **Miniconda Installers > Download for Apple Silicon**을 설치 해줍시다.


‼️ M1, M2, M3 사용자들은 <u>**Intel**</u>이 아닌 <u>**Apple Silicon**</u>으로 설치해주셔야 합니다.


## 2. 설치 과정


나오는 계약 조건은 [계속]으로 넘겨주시고,

- 대상 디스크 선택 : 이 컴퓨터의 모든 사용자를 위해 설치(개인 PC의 경우)

설치 > 계속


## 3. 설치 확인


터미널을 열어 `conda` 입력 후 아래와 같은 내용이 나오는지 확인합니다.


![image.png](/images/migrated-notion/mac-os-m1-hwangyeongeseo-anaconda-seting/image.png)


## 4. 가상 환경 생성


아래 명령어를 터미널에 입력 후 `y`를 입력하여 설치를 진행합니다.


```bash
conda create -n <환경명> python=<버전>

# 예시
conda create -n py3.12 python=3.12
```


## 5. 가상 환경 확인


아래 명령어를 입력하여 어떤 가상환경을 가지고 있는지 확인해주세요


```bash
conda env list
```

- 위 예시로 만든 가상환경 확인

![image.png](/images/migrated-notion/mac-os-m1-hwangyeongeseo-anaconda-seting/image.png)


# (추가) IntelliJ IDEA에서 python 초기 세팅 방법


## 1. Python 플러그인 설치

- **IntelliJ IDEA 실행**
- `Preferences` (또는 `Settings`) → `Plugins` → 검색창에 "Python" 입력 → Python 플러그인 설치 후 IntelliJ 재시작
- 플러그인 설치 후에는 Python 언어 지원이 활성화됩니다.

---


## 2. 프로젝트 생성 또는 열기

- **새 프로젝트 생성**
    - `File` → `New` → `Project...`
    - 언어를 `Python`으로 선택
- **기존 프로젝트 열기**
    - `File` → `Open` 또는 `Open Recent`에서 프로젝트 선택

---


## 3. Python SDK(인터프리터) 설정

- **Anaconda 환경 확인**
    - 터미널에서 `conda info --envs` 명령어로 설치된 환경 목록 확인
    - 원하는 환경(예: `base` 또는 생성한 가상환경)의 경로를 확인합니다.
- **IntelliJ에서 SDK 추가**
    - `File` → `Project Structure...` → `SDKs` 탭
    - `+` 버튼 클릭 → `Add Python SDK...`
    - `Conda Environment` 또는 `System Interpreter` 선택
        - **Conda Environment**가 보이면 선택 후, conda 실행 파일 경로와 환경을 지정
        - **System Interpreter**에서 직접 `/Users/사용자명/opt/anaconda3/bin/python`(base) 또는 `/Users/사용자명/opt/anaconda3/envs/환경이름/bin/python`(가상환경) 경로 지정
- **프로젝트에 SDK 적용**
    - `Project Structure` → `Project` → `Project SDK`에서 방금 추가한 SDK 선택 후 `OK`

---


## 4. 패키지 설치 및 환경 확인(추가)

- **필요한 패키지 설치**
    - 터미널에서 해당 conda 환경 활성화 후 `conda install 패키지명` 또는 `pip install 패키지명`으로 설치
- **IntelliJ에서 실행**
    - Python 파일을 열고, 상단의 실행 버튼을 누르면 설정된 환경에서 실행됩니다.

---


출처
[1] [[Conda] 맥(Mac)에서 아나콘다(anaconda) 설치 및 가상환경 사용](https://ethanswinery.tistory.com/158)


