---
title: "데이터베이스(SQLlite)"
description: "데이터베이스 기초 학습노트 1. 데이터베이스란? 정의 데이터베이스(DB): 데이터를 체계적으로 저장하고 관리하는 소프트웨어 저장소 DBMS(Database Management System): 데이터베이스를 관리할 수 있는 시스템 예시: MySQL, PostgreSQL, Oracle, SQLite 등 기본 구조 서버 설치 → 데이터베이스 설치 → 클라이언트와"
pubDate: 2025-06-24T10:56:00.000Z
updatedDate: 2025-07-31T12:54:00.000Z
tags: []
category: "database"
slug: "deiteobeiseusqllite"
draft: false
originalUrl: "https://www.notion.so/21c4ef56099480c7b684d6744844fa68"
---


# 데이터베이스 기초 학습노트


## 1. 데이터베이스란?


### 정의

- **데이터베이스(DB)**: 데이터를 체계적으로 저장하고 관리하는 소프트웨어 저장소
- **DBMS(Database Management System)**: 데이터베이스를 관리할 수 있는 시스템
- 예시: MySQL, PostgreSQL, Oracle, SQLite 등

### 기본 구조

- 서버 설치 → 데이터베이스 설치 → 클라이언트와 서버 간 통신을 통한 데이터 요청/응답

### 장점

- 직접적인 데이터 조작 불필요
- 데이터 조회 요청만 하면 결과를 자동으로 반환
- 기존 리스트 기반 관리보다 효율적

## 2. 데이터베이스 종류


### 관계형 데이터베이스 (RDBMS)

- **특징**: 테이블 형태로 데이터 저장
- **구조**: 행(Row)과 열(Column)로 구성 (엑셀과 유사)
- **장점**:
    - 오랫동안 사용되어 온 검증된 방식
    - 앞으로도 지속적으로 사용될 예정
    - 일반적으로 익숙한 구조

### 비관계형 데이터베이스 (NoSQL)

- **특징**: SQL 없이도 데이터 조회 및 가져오기 가능
- **장점**: 더 유연한 데이터 구조 제공

## 3. SQLite 소개


### 특징

- **경량성**: 매우 가벼운 데이터베이스
- **파일 기반**: 별도 서버 설치 불필요, 클라이언트 자체에 내장
- **초보자 친화적**: 데이터베이스 입문용으로 최적
- **파이썬 지원**: 파이썬에서 공식적으로 SQLite 라이브러리 제공

### 주요 장점

1. 서버 설치 불필요
2. 파일 자체가 데이터베이스
3. 구조화된 방식으로 데이터 저장/읽기 가능
4. 접근성이 높음

## 4. SQLite 기본 사용법


### 연결 설정


```python
import sqlite3

# 데이터베이스 연결 (파일이 없으면 자동 생성)
connection = sqlite3.connect('database.db')
cursor = connection.cursor()
```


### 테이블 생성


```sql
CREATE TABLE IF NOT EXISTS member (
    name TEXT PRIMARY KEY,
    phone_number TEXT
);
```


**주요 개념:**

- **테이블**: 데이터를 저장하는 구조
- **필드(Field)**: 각 열(Column)을 의미
- **데이터 타입**: TEXT, INTEGER, REAL 등
- **PRIMARY KEY**: 중복되지 않는 고유 식별자

### 데이터 삽입


```sql
INSERT INTO member (name, phone_number) VALUES (?, ?);
```


**특징:**

- `?` 물음표: 플레이스홀더 (나중에 실제 값으로 치환)
- 리스트 형식으로 데이터 전달

### 데이터 조회


```sql
SELECT * FROM member;
```


**설명:**

- `SELECT`: 데이터 조회 명령
- : 와일드카드 (모든 필드 선택)
- `FROM member`: member 테이블에서 조회

### 실행 및 결과 처리


```python
# 쿼리 실행
cursor.execute(query, [name, phone_number])

# 모든 결과 가져오기
results = cursor.fetchall()

# 결과 순회
for row in results:
    print(row)
```


## 5. 실습 예제 구조


### 프로젝트 파일 구성

- `database.db`: SQLite 데이터베이스 파일
- 메인 프로그램: 데이터베이스 연결 및 조작 로직

### 기본 기능 구현

1. **데이터베이스 연결**: `sqlite3.connect()`
2. **테이블 생성**: `CREATE TABLE` 문
3. **데이터 추가**: `INSERT INTO` 문
4. **데이터 조회**: `SELECT` 문
5. **결과 처리**: `fetchall()` 메서드

## 6. 온라인 SQLite 뷰어 활용


### SQLiteOnline 사용법

1. SQLiteOnline 웹사이트 접속
2. 데이터베이스 파일 업로드
3. 브라우저에서 직접 데이터 확인 가능
4. 간단한 데이터베이스 관리 도구로 활용

## 7. 핵심 정리


### 기존 방식 vs 데이터베이스


| 기존 방식      | 데이터베이스 방식      |
| ---------- | -------------- |
| 리스트로 직접 관리 | 테이블 구조로 체계적 관리 |
| 수동 검색 필요   | SQL 쿼리로 자동 검색  |
| 복잡한 데이터 조작 | 간단한 명령어로 조작    |


### 학습 포인트

- 데이터베이스는 생각보다 어렵지 않음
- 기본적인 데이터 기록 및 조회는 매우 직관적
- API 사용법만 익히면 충분히 활용 가능
- 파일 다루기와 유사한 수준의 난이도

## 8. 다음 학습 계획

1. **완성된 회원 관리 시스템 구현**
2. **데이터베이스 결과 확인 및 검증**
3. **추가 SQL 명령어 학습**
4. **고급 데이터베이스 개념 탐구**

---

> 💡 학습 팁: SQLite는 데이터베이스 입문용으로 최적화되어 있어, 복잡한 설정 없이도 바로 실습할 수 있습니다. 기본 CRUD(Create, Read, Update, Delete) 작업부터 차근차근 익혀보세요!

