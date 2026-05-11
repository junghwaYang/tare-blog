---
title: "08장. 제어문"
description: "코드 블록을 먼저 실행하고 조건식을 평가한다.switch문의 코드 블록을 탈출하기 위한 문반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동 시킨다."
pubDate: 2024-01-09T07:27:44.542Z
updatedDate: 2026-04-17T01:44:15.278Z
tags: []
category: "general"
slug: "08jang-jeeomun"
draft: false
originalUrl: "https://velog.io/@siltarre/08장.-제어문"
series: "javascript-deep-dive"
---

<aside>
💡 제어문은 조건에 따라 코드 블록을 실행(조건문)하거나 반복 실행(반복문) 할때 사용한다.

</aside>

# 블록문

<aside>
💡 블록문은 0개 이상의 문을 중괄호로 묶은 것으로, 코드 블록 또는 블록이라고 부르기도 한다.

</aside>

```jsx
// 블록문
{var foo = 10;}

// 제어문
var x =1;
if(x < 10){
	x++
}

// 함수 선언문
function sum(a,b){
	return a + b;
}
```

# 조건문

<aside>
💡 조건문은 주어진 조건식의 평가 결과에 따라 코드 블록의 실행을 결정한다. 조건식은 불리언 값으로 평가될 수 있는 표현식이다.

</aside>

## if …else 문

```jsx
if(조건식){
	// 조건식이 참이면 실행
}else{
	// 조건식이 거짓이면 실행
}
```

## switch 문

```jsx
switch (표현식){
	case 표현식 1:
		// switch문의 표현식과 표현식1이 일치하면 실행
	break;
	case 표현식 2:
		// switch문의 표현식과 표현식2이 일치하면 실행
	break;
	default:
		// switch문의 표현식과 일치하지않는 case문이 없을 때 실행
}
```

## 반복문

### for문

```jsx
for(var i = 0; i < 2, i++){
	console.log(i); // 조건식이 참인 경우 반복 실행 될 문.
}

// 결과 0
// 결과 1
```

### while 문

```jsx
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3){
	console.log(count); // 결과 0 1 2
	count++;
}
```

### do …while 문

코드 블록을 먼저 실행하고 조건식을 평가한다.

```jsx
var count = 0;

do{
	console.log(count); // 0 1 2
	count++;
}while (count < 3);
```

## break 문

switch문의 코드 블록을 탈출하기 위한 문

## continue 문

반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동 시킨다.
