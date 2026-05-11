---
title: "[C언어] 연산자 기초 - 사칙연산"
description: "여러분, 지난 시간에 변수가 뭐다?\"데이터 담는 상자\"라고 했었죠.이제 그 상자 안의 값들을 꺼내서 더하고 빼고 곱하고 나눠볼 차례입니다. 사칙연산 - + : 더하기 - - : 빼기 -  : 곱하기 - % : 나누기 int a = 10, b = 3; printf(\"a + b = %d\\\\n\", a + b); // 13   printf(\"a - b = %d\\\\n\", a - b); // 7   printf(\"a \\ b = %d\\\\n\", a \\ b); // 30   printf(\"a / b = %d\\\\n\", a / b);"
pubDate: 2025-09-01T13:46:00.000Z
updatedDate: 2025-09-01T13:52:41.000Z
tags: ["c", "c"]
category: "programming"
slug: "ceoneo-yeonsanja-gicho-sachikyeonsan-tistory"
draft: false
originalUrl: "https://siltare.tistory.com/35"
ogImage: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fstatic%2Fimages%2FopenGraph%2Fopengraph.png"
---

여러분, 지난 시간에 변수가 뭐다?"데이터 담는 상자"라고 했었죠.이제 그 상자 안의 값들을 꺼내서 더하고 빼고 곱하고 나눠볼 차례입니다.

### 사칙연산

- + : 더하기

- - : 빼기

- * : 곱하기

- % : 나누기

```
int a = 10, b = 3;

printf("a + b = %d\\n", a + b); // 13  
printf("a - b = %d\\n", a - b); // 7  
printf("a \* b = %d\\n", a \* b); // 30  
printf("a / b = %d\\n", a / b); // 3
```

※ int끼리 나누면 소수점은 싹 잘려서 정수만 남습니다.

## 나머지 연산자 (%)

몫 말고 나머지가 필요할 때 %를 씁니다.

```
int candy = 10, people = 3;

printf("몫: %d\\n", candy / people); // 3  
printf("나머지: %d\\n", candy % people); // 1
```

※ 짝수/홀수 판별할 때도 자주 쓰이는 연산자예요.

## 증감 연산자 (++ / –)

변수에 1을 더하거나 빼는 단축 연산자입니다.

```
int count = 5;

count++; // count = 6  
count--; // count = 5
```

## 전위형과 후위형

```
int a = 5;

printf("%d\\n", a++); // 5 (출력 후 +1)  
printf("%d\\n", ++a); // 7 (출력 전 +1)
```

- a++ &rarr; 쓰고 나서 증가

- ++a &rarr; 먼저 증가시키고 씀

## 형변환 (Casting)

변수 타입을 잠깐 바꾸는 방법입니다.

```
int a = 10, b = 3;  
double result = (double)a / b;

printf("결과: %lf\\n", result); // 3.333333
```

※ (double)a처럼 쓰면 정수 a를 잠깐 실수형으로 바꿔서 계산합니다.반대로 (int)3.7은 3만 남고 .7은 잘려나갑니다. (반올림 아님!)

---

### 오늘 정리

- 사칙연산 : +, -, *, /

- 나머지 연산자: %

- 증감 연산자: ++, --(전위/후위 구분 필요)

- 형변환: (타입)변수

다음 시간에는 이 연산자들을 활용해서 **조건문(if문)**을 배워보겠습니다.조건에 따라 "다르게 행동하는 프로그램"을 만드는 거죠.
