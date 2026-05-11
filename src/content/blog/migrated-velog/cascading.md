---
title: "Cascading 이란?"
description: "동일한 요소에 여러 스타일을 적용 시킬 때,어떤 스타일이 우선적으로 적용이 되는지 결정하는 방식을 말한다.위 css를 작성 했을때, css 코드의 동작은 ‘위에서부터 아래로’ 동작 하기 때문에결과적으로 background-color: red; 가 적용이 된다.일부 CS"
pubDate: 2024-08-29T12:02:29.711Z
updatedDate: 2026-04-15T19:50:26.836Z
tags: ["11"]
category: "frontend"
slug: "cascading"
draft: false
originalUrl: "https://velog.io/@siltarre/Cascading"
series: "코드잇_FE_11기_스프린트"
---

## **Cascading 이란?**

> 동일한 요소에 여러 스타일을 적용 시킬 때,
어떤 스타일이 **우선적으로 적용**이 되는지 결정하는 방식을 말한다.
> 

### 적용 순서(우선 순위가 높은 순)

<aside>
1️⃣ 인라인 스타일

</aside>

<aside>
2️⃣ id 선택자

</aside>

<aside>
3️⃣ class, 속성, 가상 선택자

</aside>

<aside>
4️⃣ 태그 선택자

</aside>

### 소스 순서에 따른 우선순위

```css
.box{
	background-color: blue;
}

.box{
	background-color: red;
}
```

위 css를 작성 했을때, css 코드의 동작은 ‘위에서부터 아래로’ 동작 하기 때문에

결과적으로 `background-color: red;` 가 적용이 된다.

### CSS의 상속

일부 CSS 스타일은 부모 요소로 부터 자식 요소에게 상속되는 속성들이 있다.

`color`, `font-family`, `font-size` 와 같은 텍스트 요소에 관한 속성들은

부모로 부터 자식 요소가 상속 받아 적용되지만,

`margin`, `padding` 과 같은 박스 속성은 상속이 되지 않는다.

여기서 부모로 부터 상속 받은 자식요소에 정의된 스타일이 없을 경우,

부모 요소로 부터 상속받은 스타일이 적용되지만,

자식 요소에 정의된 스타일이 작성 된 경우에는 자식 요소에 정의된 스타일로 적용 된다.

### !important

`!important` 는 위 CSS 우선 순위 규칙을 **모두 무시한 채 가장 최우선으로 적용** 되는 속성이다.

```css
.box{
	background-color: blue !important;
}

.box{
	background-color: red;
}
```

 `!important` 는 위 처럼 사용되는데,

해당 스타일링의 최종 스타일은 `background-color: blue !important;` 가 적용 된다.

⚠️ `!important` 는 모든 규칙을 무시하고 최우선으로 적용되기 때문에,

협업 시 스타일이 동작하지 않는다고 무작정 사용하면 추후 큰 화를 입을 수 있다.

정말 필요할 때를 잘 구분해서 사용하는게 좋다.

### 브라우저 스타일

기본적으로 html 요소에는 브라우저 스타일이 적용 되어있다.

이는 사용자 정의 스타일이 없을 때 적용되며,

사용자 정의 스타일이 있을때는 브라우저 스타일 위에 사용자 정의 스타일로 덮어 씌우게 된다.

 

⭐️ 프로젝트 스타일링 전 reset.css 나 normalize.css 등을 통해, 브라우저 스타일을 지우고 시작한다.

🔍reset.css :

- https://meyerweb.com/eric/tools/css/reset/
- https://elad2412.github.io/the-new-css-reset/

🔍normalize.css : 

- https://necolas.github.io/normalize.css/

🤔 **reset.css**와 **normalize.css**의 차이

1️⃣ reset.css

- reset.css의 경우 브라우저 스타일을 초기화 해주는 스타일 시트 이다.
- 사용자 정의 스타일로 처음부터 웹 페이지를 스타일링 할 수 있다.

2️⃣ normalize.css

- normalize.css는 reset.css 처럼 초기화 해주진 않지만, 가능한 브라우저 스타일을 최대한 건들지 않는 선에서 브라우저 간에 상이한 부분만 스타일을 통일시켜주는 시트라고 생각하면 된다.

✅ 고로, 모든 `font-size`와 `margin`, `padding`을 초기화 하고 싶으면 reset.css를

일부 브라우저 스타일을 사용하여, 스타일링을 하고 싶다면 normalize.css를 추천한다.
