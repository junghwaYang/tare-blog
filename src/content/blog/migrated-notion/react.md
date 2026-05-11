---
title: "React"
description: "💡 리액트란? 리액트(React)는 사용자 인터페이스(UI)를 구축하기 위한 JavaScript 라이브러리로, 주로 웹 애플리케이션을 개발하는 데 사용됩니다. 리액트는 Facebook에서 개발하였으며, 현재는 오픈 소스로 커뮤니티에 의해 유지 관리되고 있습니다. 학습 내용 리액트 기초 react 설치 및 실행 명령어 react 설치 및 실행 명령어 리액트"
pubDate: 2024-10-08T16:11:00.000Z
updatedDate: 2025-06-17T02:49:00.000Z
tags: []
category: "study"
slug: "react"
draft: false
originalUrl: "https://www.notion.so/1194ef56099480ce8012fc6e74ae602f"
---


> 💡 리액트란?  
> 리액트(React)는 사용자 인터페이스(UI)를 구축하기 위한 JavaScript 라이브러리로, 주로 웹 애플리케이션을 개발하는 데 사용됩니다. 리액트는 Facebook에서 개발하였으며, 현재는 오픈 소스로 커뮤니티에 의해 유지 관리되고 있습니다.


## 학습 내용


---


## 리액트 기초

## react 설치 및 실행 명령어

# react 설치 및 실행 명령어

- 리액트 init
    - create-react-app으로 리액트 프로젝트를 생성

```javascript
npm init react-app .
```

- 실행 명령어
    - 파일에 변경이 있으면 해당 변경사항을 인식하여, 즉시 웹브라우저에 반영해준다.(개발모드 실행)

```javascript
npm run start
```

- 크롬 브라우저에서 react [개발자 도구 확장프로그램](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko&pli=1)을 설치

# 리액트의 파일 구조(프로젝트 준비)


```plain text
public
  ㄴ index.html
src
  ㄴ index.js
```

- index.html ⇒ 웹 브라우저에서 가장 먼저 실행 되는 파일
- index.js ⇒ index.html이 실행되고, 리액트 파일 중에 가장 먼저 실행되는 파일
    - `root.render`는 첫번째 인자값을 두번째 인자에 전달하여, index.html에 innerHTML을 해주는 것이라고 보면 될 것 같다.
    - 여기서 `render` 메서드는 index.html에서 한번만 실행된다.

## JSX

# JSX

- 리액트에서 html 태그를 작성하기 위해서 사용되는 문법
- html과 JS를 섞어서 쓸 수 있는 JS의 확장 된 문법이다.

## JSX에서의 html 속성 문법

- class ⇒ className
- form label에서 사용되는 for ⇒ htmlFor
- 이벤트 핸들러
    - onblur, onfocus, onmousedown ⇒ onBlur, onFocus, onMuseDown (카멜 케이스로 작성)
- JSX 문법을 사용 시 **하나의 태그를 감싸서 그 안에 html 태그를 작성**해야한다.

    ```javascript
    // 리액트에서 제공하는 태그
    root.render(
      <Fragment>
    	  <h1>안녕 리액트!</h1>
      </Fragment>
    ,);
    
    // 다른 표기법
    root.render(
      <>
    	  <h1>안녕 리액트!</h1>
      </>
    ,);
    ```

- JS와 같이 쓰기

```javascript
const product = '맥북';

root.render(
  <>
	  <h1>나만의 {product} 주문하기</h1>
  </>
  
 ,);
```


변수를 불러 올 뿐만 아니라, `{product.toUpperCase()}` 이런식으로 메서드를 넣을 수도 있다.


JS에서 동작하는 연산도 포함 시킬 수 있다.

- HTML 태그 속성 값도 변수를 활용해 넣을 수 있다

```javascript
const imageUrl = "http://...";

root.render(
  <>
	  <img src={imageUrl} alt="제품사진"/>
  </>
,);
```

- 이벤트 속성도 가능하다
    - 리액트에서는 addEventListner를 쓰기보다는 이렇게 속성을 사용하여 함수를 실행한다.

```javascript
function handleClick(){
	alert('곧 도착합니다!');
}

root.render(
  <>
	  <button onClick={handleClick}>확인</button>
  </>
,);
```


⚠️ 중괄호 안에는 JS의 표현식만 넣는것이 가능하다. (문장은 불가)


## 컴포넌트

# 컴포넌트


## 컴포넌트의 정의?

- 애플리케이션의 특정 기능이나 UI(User Interface)를 독립적으로 구현한 코드의 재사용 가능한 단위
- 컴포넌트는 서로 결합하여 전체 애플리케이션을 구성하는 기본적인 구성 요소로 작용

## 컴포넌트의 주요 특징

- 컴포넌트는 한 번 정의한 후 여러 곳에서 <u>_**재사용**_</u>할 수 있다. 이는 코드의 중복을 줄이고, 유지 보수를 용이하게 만든다. ⇒ 재사용성
- 각 컴포넌트는 독립적인 기능을 가지고 있으며, 내부 구현을 숨기고 외부에 필요한 인터페이스만 노출한다. 이는 복잡성을 줄이고, 다른 개발자들이 컴포넌트를 사용할 때 영향을 받지 않도록 한다. ⇒ 캡슐화
- 컴포넌트는 다른 컴포넌트를 포함할 수 있으며, 이러한 방식으로 복잡한 UI를 구성할 수 있다. 예를 들어, 버튼, 입력 필드, 모달 등 여러 작은 컴포넌트를 조합하여 더 큰 컴포넌트를 만들 수 있다.
- 컴포넌트는 내부 상태를 가질 수 있으며, 이 상태를 변경함으로써 UI를 동적으로 업데이트할 수 있다. 상태 관리는 사용자 상호작용에 따른 변화에 대응하는 데 필수적이다. ⇒ 상태 관리
- 컴포넌트는 외부로부터 데이터를 받을 수 있는 방법인 `props`를 통해 동작한다. `props`는 _**부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 역할**_을 한다.

## 리액트에서 컴포넌트를 만들고 사용하는 방법


Greetings.js


```javascript
// Hello.js
function Greetings(){
	return <p>안녕하세요!</p>
}

export default Greetings;
```


App.js


```javascript
// App.js
import Greetings from './Greetings';

function App() {
  return (
    <div>
      <Greetings />
      <Greetings />
      <Greetings />
    </div>
  );
}

export default App;
```


index.js


```javascript
// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />,
);
```


위 코드는 index.js 파일은 렌더를 해주는 파일이고, 그안에 App 을 import하여 불러오고있다.


Greetings와 App은 컴포넌트로써 App내부에서 Greetings를 사용하는 것처럼


컴포넌트 안에 컴포넌트를 조합하여 사용할 수 있다.


⭐️ 리액트에서 컴포넌트를 작성할때는 맨 앞 글자를 대문자로 작성 해 주어야 한다.


## Props
> **Props**는 React에서 컴포넌트 간에 데이터를 전달하는 방법입니다. “Props”는 “properties”의 약자로, 컴포넌트의 속성을 의미합니다. React에서 컴포넌트는 함수 또는 클래스 형태로 정의되며, _**props를 통해 부모 컴포넌트로부터 자식 컴포넌트로 데이터를 전달할 수 있습니다.  
>   
> 👉🏻 props는 자식 컴포넌트에 전달될때, 자식 컴포넌트의 파라미터를 객체로 받게 된다.  
> 👉🏻props가 곧 객체이다.**_

# 특징

1. **단방향 데이터 흐름**:
    1. Props는 단방향으로 흐릅니다. 즉, 부모 컴포넌트에서 자식 컴포넌트로만 데이터를 전달할 수 있으며, 자식 컴포넌트에서 부모 컴포넌트로 데이터를 직접 변경할 수는 없습니다.
2. **읽기 전용:**
    1. Props는 자식 컴포넌트에서 읽기 전용으로 사용됩니다. 즉, 자식 컴포넌트는 props의 값을 변경할 수 없으며, 이를 통해 컴포넌트의 상태를 보호할 수 있습니다.
3. 동적 데이터:
    1. Props를 사용하여 컴포넌트에 동적 데이터를 전달할 수 있습니다. 이는 컴포넌트가 다른 데이터에 따라 다르게 렌더링될 수 있게 합니다.
4. **컴포넌트 재사용성**:
    1. Props를 통해 컴포넌트를 재사용할 수 있습니다. 동일한 컴포넌트를 다양한 데이터로 여러 번 사용할 수 있게 하여 코드의 재사용성을 높입니다.

# 사용 예시


```javascript
// 부모 컴포넌트
function ParentComponent() {
  const name = "Alice";
  return <ChildComponent name={name} />;
}

// 자식 컴포넌트
function ChildComponent(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```


## 예시 설명

1. **부모 컴포넌트 (**ParentComponent**)**:
    1. ParentComponent는 ChildComponent에 **name이라는 prop을 전달**합니다. 이 prop의 값은 "Alice"입니다.
    2. 자식 컴포넌트에 전달되는 **prop**는 `name : “Alice”`라는 객체로 전달된다.
2. **자식 컴포넌트 (**ChildComponent**)**:
    1. ChildComponent는 <u>**props 객체**</u>를 통해 전달된 name을 사용하여 “Hello, Alice!“라는 텍스트를 렌더링합니다.

# 사용 예시2 (Destructuring)


```javascript
// 부모 컴포넌트
function App(){
	return (
		<>
			<Dice color="red" num = {2} />
		</>
	)
}

// 자식 컴포넌트
const DICE_IMAGES = {
	blue: [diceBlue01, diceBlue02, diceBlue03],
	red: [diceBlue01, diceBlue02, diceBlue03],
}

function Dice({color = "blue" , num = 1}){
	const src = DICE_IMAGES[color][num -1];
	const alt = `${color} ${num}`;
	return <img src={src} alt={alt}/>;
}
```


## 예시 2의 다른 사용법


```javascript
import React from 'react';

// UserProfile 컴포넌트 정의
function UserProfile({ name, age, location }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

// App 컴포넌트 정의
function App() {
  const user = {
    name: 'Alice',
    age: 30,
    location: 'New York'
  };

  return (
    <div>
      <h2>User Profile</h2>
      <UserProfile {...user} />
      {/* 스프레드 구문으로 펼쳐서 props 전달 */}
    </div>
  );
}

export default App;
```


## defaultProps

> props의 기본값을 지정할 수 있게 해주는 메서드 ⇒ 객체 형태로 작성

```javascript
UserProfile.defaultProps = {
	age: Null,
}
```


# PropTypes

> React에서는 props의 타입을 검증하기 위해 PropTypes를 사용할 수 있습니다. 이를 통해 컴포넌트에 전달되는 props의 타입을 명시하고, 잘못된 타입이 전달될 경우 경고를 표시할 수 있습니다.

## 예시


```javascript
import PropTypes from 'prop-types';

function ChildComponent(props) {
  return <h1>Hello, {props.name}!</h1>;
}

ChildComponent.propTypes = {
  name: PropTypes.string.isRequired,
};
```


## Children Props
> **Children props**는 React에서 <u>_**컴포넌트의 자식 요소를 참조**_</u>하는 특별한 형태의 props입니다. 이를 통해 부모 컴포넌트가 자식 컴포넌트에 추가적인 내용을 전달할 수 있게 해줍니다.

# 주요 특징

1. **자식 요소 전달**: children props를 사용하면 컴포넌트의 시작 태그와 종료 태그 사이에 위치한 모든 요소를 자식으로 전달할 수 있습니다.
2. **단일 및 다중 자식 지원**: children props는 단일 요소 또는 여러 요소를 포함할 수 있습니다. 따라서 여러 개의 자식 컴포넌트를 처리할 수 있습니다.
3. **유연한 컴포넌트 구성**: 자식 요소를 사용함으로써 더 유연하고 재사용 가능한 컴포넌트를 만들 수 있습니다.

# 예시 코드


```javascript
import React from 'react';

// Card 컴포넌트 정의
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {children} {/* 자식 요소가 여기에 렌더링됩니다 */}
      </div>
    </div>
  );
}

// App 컴포넌트 정의
function App() {
  return (
    <div>
      <Card title="Card 1">
        <p>This is the content of Card 1.</p>
      </Card>
      <Card title="Card 2">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Card>
    </div>
  );
}

export default App;
```


## 코드 설명

1. **Card 컴포넌트**
    1. Card 컴포넌트는 title과 children이라는 두 개의 props를 받습니다.
    2. title은 카드의 제목을 나타내고, children은 카드의 내용이 들어갑니다. {children}을 사용하여 부모 컴포넌트에서 전달된 자식 요소를 렌더링합니다.
2. **App 컴포넌트**
    1. App 컴포넌트는 두 개의 Card 컴포넌트를 렌더링합니다.
    2. Card 컴포넌트의 시작과 종료 태그 사이에 자식 요소(문자열이나 JSX 요소)를 포함시킵니다. 이 자식 요소는 Card 컴포넌트의 children props로 전달됩니다.

# 일반 Props로 Children Props 흉내내기


```javascript
import React from 'react';

// Card 컴포넌트 정의 (children 대신 content 사용)
function Card({ title, content }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {content} {/* content라는 이름으로 자식 요소를 사용 */}
      </div>
    </div>
  );
}

// App 컴포넌트 정의
function App() {
  return (
    <div>
      <Card title="Card 1" content={<p>This is the content of Card 1.</p>} />
      <Card title="Card 2" content={
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      } />
    </div>
  );
}

export default App;
```

- 일반 Props로도 children props를 흉내 낼 수 있다.
- 단, children이라는 이름을 파라미터에서 작성하지않고, 이름을 변경 할 경우 부모 컴포넌트에서 전달할 값을 자식 컴포넌트 속성에 추가를 해줘야 한다.

## State
> **State**는 React에서 컴포넌트의 상태를 관리하는 데 사용되는 객체입니다. React 컴포넌트의 state는 <u>_**해당 컴포넌트의 데이터나 상태**_</u>를 나타내며, _**컴포넌트의 렌더링에 영향**_을 줍니다.

# 주요 특징

1. **동적 데이터**
    1. State는 컴포넌트의 데이터를 동적으로 관리할 수 있게 해줍니다. 사용자의 입력이나 API 호출 결과에 따라 상태가 변경될 수 있습니다.
2. **구성 요소의 재렌더링**
    1. State가 변경되면 해당 컴포넌트가 자동으로 다시 렌더링됩니다. 이 과정은 React의 가상 DOM 시스템 덕분에 효율적으로 처리됩니다.
3. **지역적 상태**
    1. State는 특정 컴포넌트에만 국한되며, 해당 컴포넌트의 하위 컴포넌트에게 `props`를 통해 전달될 수 있습니다.
4. **비동기적 업데이트**
    1. State 업데이트는 비동기적으로 이루어지기 때문에, 여러 번의 state 업데이트가 동시에 발생할 경우 최종 상태를 예측하기 어려울 수 있습니다.

# 사용 예시

1. **setState (클래스 컴포넌트) ⇒ 잘 사용되지않으니, 참고용으로만 보기!**
    1. setState 메서드를 사용하여 상태를 업데이트합니다. 이 메서드는 상태를 비동기적으로 업데이트하고, 필요할 경우 리렌더링을 트리거합니다.

```javascript
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // 초기 state 설정
    this.state = {
      count: 0
    };
  }

  increment = () => {
    // State 업데이트
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

1. **useState (함수형 컴포넌트)**
    1. [**`useState Hook`**](/1114ef56099480cba81cf61112f81742)을 사용하여 상태 변수를 생성하고 업데이트하는 함수를 반환받습니다. 이 함수도 비동기적으로 상태를 업데이트합니다.

```javascript
import React, { useState } from 'react';

function Counter() {
  // useState Hook을 사용하여 state 설정
  const [count, setCount] = useState(0);

  const increment = () => {
    // State 업데이트
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
```


## 참조형 State
> React에서 **참조형 State**는 객체, 배열 등의 참조형 데이터를 상태로 사용하는 것을 의미합니다. 참조형 데이터는 기본형 데이터(숫자, 문자열 등)와 다르게, <u>_**메모리에서 객체를 참조하는 방식으로 동작**_</u>합니다. 이 때문에 상태 관리 시 몇 가지 주의사항과 효율적인 방법이 필요합니다.

# 주요 특징

1. **참조 전달**
    1. 객체나 배열과 같은 참조형 데이터는 _**메모리에서 주소를 통해 전달**_됩니다. 즉, 동일한 객체를 여러 변수가 참조할 수 있습니다.
2. **불변성 유지**
    1. React에서는 상태를 직접 변경하는 것을 피하고, <u>_**상태를 업데이트할 때 새로운 객체나 배열을 생성하여 불변성을 유지하는 것이 중요**_</u>합니다. 이를 통해 React는 어떤 상태가 변경되었는지를 효율적으로 감지하고, 컴포넌트를 리렌더링합니다.
3. **상태 업데이트 시 주의사항**
    1. 상태를 업데이트할 때, **이전 상태를 직접 수정하는 것이 아니라 새로운 객체나 배열을 생성하여 업데이트**해야 합니다.

# 예시 코드


```javascript
import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState(['apple', 'banana']);

  const addItem = () => {
    // 불변성을 유지하며 새로운 배열을 생성
    setItems([...items, 'orange']); // 기존 배열을 복사하고 새로운 아이템 추가
  };

  const removeItem = (index) => {
    // 불변성을 유지하며 필터링하여 새로운 배열 생성
    setItems(items.filter((_, i) => i !== index)); // 특정 인덱스의 아이템 제거
  };

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default App;
```


# 결론


참조형 State는 React에서 객체나 배열을 상태로 사용할 때 매우 유용하지만, <u>_**불변성을 유지하는 것이 중요**_</u>합니다. 이를 통해 React의 렌더링 최적화 및 성능을 극대화할 수 있습니다. <u>_**상태 관리 시 새로운 객체를 생성**_</u>하고, 불변성을 유지하는 습관을 기르는 것이 React 애플리케이션 개발의 핵심입니다.


## React Hook
> Hook은 함수 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 “연동(hook into)“할 수 있게 해주는 <u>_**함수**_</u>입니다

👉🏻 [리액트 공식 문서](https://ko.legacy.reactjs.org/docs/hooks-overview.html)


# Hook 사용 규칙

- **최상위(at the top level)**에서만 Hook을 호출해야 합니다. 반복문, 조건문, 중첩된 함수 내에서 Hook을 실행하지 마세요.
- **React 함수 컴포넌트** 내에서만 Hook을 호출해야 합니다. 일반 JavaScript 함수에서는 Hook을 호출해서는 안 됩니다.

# React Hook의 종류


## State Hook

- `useState`는 배열을 반환합니다. 첫 번째 요소는 현재 상태 값을 나타내고, 두 번째 요소는 상태를 업데이트하는 함수입니다.
- `useState`를 호출할 때 초기 상태 값을 인자로 전달합니다.

### state Hook의 예시


```javascript
const [state, setState] = useState(initialState);
```

- **`useState(initialState)`** : useSatet는 아규먼트로 초기 state값을 하나 받습니다.
- **`[state, setState]`**:
    - **`state`** : 상태를 관리 할 변수명(state 변수)
    - **`setState`** **:** 해당 변수를 갱신할 수 있는 함수

### 선언한 state 변수를 변경하고 싶을 때


```javascript
setState(12);
```

- 함수 호출식으로 작성 한다.
- 값이 아닌 콜백 함수를 이용해서 해당 콜백의 return의 값을 받아오는 것도 가능하다.

## 리액트의 생명주기(lifecycle)
> React의 생명주기는 컴포넌트가 생성되고 업데이트되며, 소멸되는 일련의 과정을 의미합니다.

👉🏻 [리액트 공식 문서](https://ko.legacy.reactjs.org/docs/state-and-lifecycle.html)


# 생명주기 단계


## 마운트(Mount)

> 마운트는 컴포넌트가 처음으로 DOM에 삽입될 때 발생합니다.
- `constructor()`: 컴포넌트가 생성될 때 초기 상태를 설정하는 메서드입니다.
- `componentDidMount()`: 컴포넌트가 마운트된 후에 호출됩니다. 데이터 fetching이나 구독 같은 작업을 할 수 있습니다.

## 업데이트(Update)

> 업데이트는 컴포넌트의 상태나 props가 변경될 때 발생합니다.
- `componentDidUpdate(prevProps, prevState)`: 컴포넌트가 업데이트된 후 호출됩니다. 이전 `props`와 이전 `state`를 비교하여 특정 작업을 수행할 수 있습니다.
- `shouldComponentUpdate(nextProps, nextState)`: 컴포넌트가 업데이트될지 말지를 결정하는 메서드입니다. 성능 최적화를 위해 사용할 수 있습니다.

## 언마운트(**Unmount)**

> 언마운트는 컴포넌트가 DOM에서 제거될 때 발생합니다.
- `componentWillUnmount()`: 컴포넌트가 언마운트되기 직전에 호출됩니다. 이벤트 리스너를 제거하거나 구독을 해제하는 등의 작업을 수행할 수 있습니다.

# 함수형 컴포넌트에서의 생명주기

> 함수형 컴포넌트에서는 생명주기를 관리하기 위해 [**Hooks**](/1114ef56099480cba81cf61112f81742)를 사용합니다. 대표적인 Hook은 **`useEffect`**입니다.

## useEffect


컴포넌트가 마운트되고 업데이트될 때 특정 작업을 수행할 수 있습니다. 또한, `cleanup` 함수를 반환하여 컴포넌트가 언마운트될 때 실행할 코드를 작성할 수 있습니다.


### 예시 코드


```javascript
import React, { useEffect, useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted or updated');

    // Cleanup function
    return () => {
      console.log('Component unmounted');
    };
  }, [count]); // count가 변경될 때마다 호출됨

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```


## 그리고 useState


**useState**는 React의 Hooks 중 하나로, 함수형 컴포넌트에서 상태를 관리하는 기능을 제공합니다. 상태 관리는 컴포넌트의 생명주기와 밀접하게 연관되어 있으며, useState를 통해 컴포넌트가 렌더링되는 방식과 생명주기를 더욱 간편하게 제어할 수 있습니다.


### 생명주기와의 관계

1. **컴포넌트 마운트**
    1. 컴포넌트가 처음 마운트될 때 useState로 설정한 초기 상태 값이 할당됩니다. 이 상태 값은 이후 컴포넌트의 렌더링에 영향을 미칩니다.
2. **상태 업데이트**
    1. etState 함수를 호출하여 상태를 업데이트하면, React는 해당 컴포넌트를 리렌더링합니다. 이 과정에서 컴포넌트가 다시 그려지며 최신 상태 값이 반영됩니다.
3. **컴포넌트 업데이트**
    1. 상태가 변경되면 useEffect Hook을 사용하여 추가적인 부수 효과를 처리할 수 있습니다. 예를 들어, 데이터 fetching이나 외부 API 호출을 여기에 포함할 수 있습니다.
4. **컴포넌트 언마운트**
    1. 컴포넌트가 언마운트될 때 useEffect의 cleanup 함수를 활용하여 상태와 관련된 리소스(예: 이벤트 리스너, 타이머 등)를 해제할 수 있습니다.

```javascript
import React, { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0); // 상태 변수 'seconds' 초기값 0

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1); // 상태 업데이트
    }, 1000);

    // 컴포넌트 언마운트 시 클린업
    return () => {
      clearInterval(timer); // 타이머 해제
    };
  }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행

  return (
    <div>
      <h1>{seconds} seconds elapsed</h1>
    </div>
  );
}

export default Timer;
```


## 리액트 배포하기

```javascript
npm run build
```

> 웹 서버가 읽을 수 있는 파일로 만들어 업로드 하면 된다.

# 로컬에서 서버 실행하기


```javascript
npx serve build
```


위는 실제 웹 서버에 올라간 것이 아닌 로컬에서 확인을 위한 서버 방법이다.


해당 명령어를 입력하면 Local주소와 Network주소가 뜨는데,


Local주소는 말그대로 내 컴퓨터에서 확인이 가능한 Local 주소이며, Network주소는 같은 공유기 서버를 공유하고 있는 또 다른 컴퓨터에서 확인할 수 있는 주소이다.


예를들어, 회사에서 같은 공유기를 사용하고있는 팀에게 해당 Network주소를 공유하면, 팀 컴퓨터에서도 해당 주소로 페이지 확인이 가능하다.


# AWS S3을 이용한 배포

- 클라우드 컴포팅 서비스
1. AWS 관리 콘솔
2. 모든 서비스 > 스토리지 > S3 : S3는 구글 드라이브 같은 개념
3. 버킷 : 컴퓨터의 C: 와 D:를 나누듯이 S3에서 파일을 모아두는 큰 단위
4. 속성 > 정적 웹사이트 호스팅 > 활성화
5. 권한 > 버킷 정책 등록
6. 업로드 > build 파일 끌어다 놓기
7. 확인은 속성 > 정적 웹 사이트 호스팅 링크로 접속

# 커스텀 도메인 달기(비용발생)

> 사용할 도메인을 구매 후 변경 해주면 된다.

## AWS에서 도메인 구입하기

1. AWS 접속 > Route 53 검색
2. 도메인 > 등록된 도메인 > 도메인 등록
3. 구매 후 Route 53에 있는 호스팅 영역 메뉴로 들어가면 구입한 도메인 이름으로 호스팅 영역이 생성된다.

## 타 사이트에서 구매한 도메인 AWS에서 관리하기

1. AWS 접속 > Route 53 검색 > 호스팅 영역 클릭
2. 호스팅 영역 생성 클릭
3. 도메인 이름에 구입한 도메인 입력 > 호스팅 생성
4. NS 유형 네임서버 레코드를 도메인을 구입한 사이트에서 ‘네임서버 설정’을 해주어야 한다.
5. 커스텀 네임서버 > NS 유형 값/트래픽 라우팅 대상 복사 후 등록
6. 잘 등록되었는지 확인하려면 [https://dnschecker.org/](https://dnschecker.org/)
    1. 레코드 유형을 NS로 선택 후 도메인 이름 검색
7. 레코드 등록하기
    1. 호스팅 영역 > 레코드 생성
    2. 레코드 유형 A 선택 > 버킷이름과 도메인은 동일하게 설정 후 레코드 생성

## 리액트를 읽는 브라우저의 동작

# 트랜스파일링

> **트랜스파일링**은 최신 JavaScript (ES6+ 또는 JSX)를 브라우저가 이해할 수 있는 구 버전의 JavaScript로 변환하는 과정입니다. 트랜스파일러는 Babel과 같은 도구가 있으며, 이 도구는 리액트 코드와 최신 JavaScript 문법을 구 버전의 JavaScript로 변환하여 대부분의 브라우저에서 문제없이 실행될 수 있게 합니다.
- 리액트에서는 JSX(자바스크립트 XML)라는 문법을 사용하는데, 이는 HTML과 유사한 문법을 자바스크립트 내에서 사용하게 해줍니다. 그러나 브라우저는 JSX를 직접 이해하지 못하기 때문에, Babel과 같은 트랜스파일러를 사용하여 JSX를 일반 JavaScript로 변환합니다.

## 트랜스파일링 예시


JSX 코드 :


```javascript
const element = <h1>Hello, world!</h1>;
```


Babel로 트랜스파일 된 코드 :


```javascript
const element = React.createElement('h1', null, 'Hello, world!');
```


# 번들링

> **번들링**은 애플리케이션에서 사용되는 모든 모듈(파일, 라이브러리, 스타일시트 등)을 하나의 파일 또는 몇 개의 파일로 묶는 과정입니다. 번들러 도구로는 <u>_**Webpack, Parcel, Vite**_</u> 등이 있습니다. 번들링은 애플리케이션 성능을 향상시키고, 파일 로드 속도를 최적화하며, 의존성을 해결하는 데 도움을 줍니다.
- 리액트 프로젝트에서는 모듈화된 자바스크립트 파일들을 사용하게 되는데, 번들러는 이 모듈들을 하나로 묶어 브라우저가 읽을 수 있도록 변환합니다. 또한 <u>_**코드 스플리팅(code splitting)**_</u>이라는 기법을 통해, 필요할 때만 해당 모듈을 로드하여 성능을 최적화할 수도 있습니다.

## 번들링의 필요성

- 모듈 간의 의존성 해결
- 여러 파일을 하나의 파일로 묶어서 브라우저 요청을 줄임
- 애플리케이션의 코드 스플리팅, 최적화

## 번들링 예시


```javascript
import Button from './components/Button';
import Header from './components/Header';
// 많은 모듈이 존재하는 프로젝트
```


위 코드에서 여러 파일을 번들러(Webpack, Parcel 등)가 하나로 묶어서 브라우저가 해당 파일을 효율적으로 로드할 수 있게 합니다.


# 트랜스파일링과 번들링의 상호작용

1. **Babel**이 트랜스파일링을 담당하여 최신 JavaScript 및 JSX를 구 버전 JavaScript로 변환.
2. **Webpack**이나 **Parcel**과 같은 번들러가 애플리케이션의 여러 모듈을 하나의 번들 파일로 묶음.

## json파일을 이용한 데이터 다루기

## 데이터 가져와서 출력 시키기

# JSON 파일 불러와서 출력

> 기본적인 원리는 최상위 부모 컴포넌트에 JSON 파일을 import 한 후 자식 컴포넌트에 Props로 전달하여, 해당 데이터를 다룰 수 있도록 한다.

### 1. **JSON 파일 생성**


먼저 `data.json`이라는 파일을 `src` 폴더에 생성하고, 데이터를 추가합니다.


```json
// src/data.json
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 25
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "age": 30
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "age": 28
  }
]
```


### 2. **부모 컴포넌트에서 JSON 파일 불러오기**


부모 컴포넌트에서 JSON 파일을 import하여 자식 컴포넌트로 `props`로 전달합니다.


```javascript
// src/App.js
import React from 'react';
import data from './data.json';
import UserList from './components/UserList';

function App() {
  return (
    <div>
      <h1>User List</h1>
      <UserList users={data} />
    </div>
  );
}

export default App;
```


### 3. **자식 컴포넌트에서** **`props`****로 받은 데이터 출력**


자식 컴포넌트는 부모 컴포넌트로부터 `props`로 데이터를 받아 출력합니다.


```javascript
// src/components/UserList.js
import React from 'react';

function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
```


### 4. **결과**


이 코드를 실행하면 `data.json` 파일에 있는 사용자 정보가 부모 컴포넌트에서 자식 컴포넌트로 전달되어 화면에 출력됩니다.


### **설명**

1. `data.json` 파일에 JSON 형식으로 데이터를 정의.
2. `App.js` 파일에서 JSON 파일을 import하고, 자식 컴포넌트인 `UserList`에 `users`라는 이름으로 데이터를 전달.
3. `UserList.js` 자식 컴포넌트는 `props.users`를 받아서 `map` 메서드를 사용해 각각의 사용자 데이터를 화면에 출력.

## 데이터 정렬하기

## 예제


```javascript
import React, { useState } from 'react';

const ReviewList = ({ items }) => {
  // 정렬 기준을 상태로 관리 ("createdAt" 또는 "rating")
  const [order, setOrder] = useState("createdAt");

  // 동적으로 정렬 기준에 따라 배열을 정렬
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  // 최신순 버튼 클릭 핸들러
  const handleNewestClick = () => setOrder("createdAt");

  // 평점순 버튼 클릭 핸들러
  const handleBestClick = () => setOrder("rating");

  return (
    <div>
      <h1>Review List</h1>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleBestClick}>평점순</button>
      <ul>
        {sortedItems.map((item) => (
          <li key={item.title}>
            <h2>{item.title}</h2>
            <p>Rating: {item.rating}</p>
            <p>Date: {item.createdAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const reviews = [
    { title: 'Great Product', rating: 5, createdAt: 20241001 },
    { title: 'Average Item', rating: 3, createdAt: 20240929 },
    { title: 'Not so good', rating: 2, createdAt: 20240930 },
    { title: 'Excellent!', rating: 4, createdAt: 20240928 },
  ];

  return <ReviewList items={reviews} />;
};

export default App;
```


### **설명**

1. **정렬 기준을 관리**:
    - `useState`를 사용하여 `order` 상태 변수를 선언하고, 초기값으로 `"createdAt"`을 설정합니다. 이 상태는 정렬의 기준이 됩니다.
2. **정렬 로직**:
    - `sortedItems`는 배열을 `sort()` 메서드를 사용하여 정렬합니다. 여기서 `b[order] - a[order]`는 현재 `order` 상태에 따라 정렬을 결정합니다.
    - 예를 들어, `order`가 `"createdAt"`일 경우, `b.createdAt - a.createdAt`으로 최신순 정렬이 됩니다.
    - `order`가 `"rating"`이면, `b.rating - a.rating`으로 평점순 정렬이 됩니다.
3. **버튼으로 정렬 기준 변경**:
    - `handleNewestClick`: 이 함수는 버튼 클릭 시 `order`를 `"createdAt"`으로 변경합니다. 즉, 최신순 정렬을 선택하게 됩니다.
    - `handleBestClick`: 이 함수는 `order`를 `"rating"`으로 변경하여 평점순 정렬을 선택합니다.
4. **정렬된 데이터 렌더링**:
    - `sortedItems`는 정렬된 상태로 각 `item`을 순서대로 화면에 표시합니다.

## **핵심 포인트**

- `useState`로 정렬 기준을 동적으로 관리하고, 기준에 따라 데이터를 정렬합니다.
- 정렬 기준을 변경할 때는 버튼 클릭 핸들러를 사용하여 `setOrder`로 상태를 업데이트합니다.
- 배열의 속성을 동적으로 참조하는 방식(`b[order] - a[order]`)을 사용하여 다양한 기준으로 쉽게 정렬할 수 있습니다.

## 데이터 삭제하기

# 예시 코드


## App.js


```javascript
import { useState } from "react";
import ReviewList from "./components/ReviewList";
import mockItems from "./mock.json";

function App() {
  const [items, setItems] = useState(mockItems);
  const [order, setOrder] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");
  
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };
  
  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>인기순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
```


## App.js 설명


기존 `items` 로 불러오던 mock.json데이터를 `mockItems`로 이름을 변경하고,


해당 데이터를 `useState`로 관리하는 방식으로 변경해준다.


기존 `items`의 기본값은 `mockItems` 로 전체 데이터를 받고,


`handleDelete`함수에서 인자를 id로 받아 `filter`메서드를 통해 `item.id`와 일지하지않는 `id`들만 `nextItems`에 담기게 된다.


그렇게 인자로 받은 `id`와 동일한 데이터는 지워지고, 남겨진 데이터를 `setItems`에 담아 `items`를 업데이트 해준다.


해당 `handleDelete`함수를 `ReviewList`에 `onDelete`라는 이름으로 자식 컴포넌트에게 `Props`를 전달해준다.


## ReviewList.js


```javascript
import "./ReviewList.css";

/**
 * 주어진 날짜를 'YYYY. M. D' 형식으로 변환하는 함수
 * @param {string|number|Date} value - 변환할 날짜 (Date 객체, 타임스탬프 또는 날짜 문자열)
 * @returns {string} - 포맷된 날짜 문자열
 */
const formatDate = (value) => {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};

/**
 * ReviewListItem 컴포넌트는 리뷰 항목 하나를 표시합니다.
 * @example
 * <ReviewListItem item={item} />
 */
const ReviewListItem = ({ item, onDelete }) => {
  const handleDeleteClick = () => onDelete(item.id);

  return (
    <div className='ReviewListItem'>
      <img className='ReviewListItem-img' src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
};

/**
 * ReviewList 컴포넌트는 여러 리뷰 항목을 표시합니다.
 * @example
 * <ReviewList items={items} />
 */

const ReviewList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ReviewListItem item={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewList;
```


## ReviewList.js 설명


우선 `ReviewList`함수의 파라미터값으로 부모에게서 받아올 `props`인 `onDelete`를 받아오고, 해당 클릭이벤트를 담당할 `ReviewListItem` 컴포넌트에 부모컴포넌트에서 받았던것처럼 `onDelete` `Props`를 전달해준다.


`ReviewListItem`함수 또한 `ReviewList`(부모 컴포넌트)에서 `onDelete`를 전달받은 후, `handleDeleteClick` 함수 작성을 통해서 `onDelete`에게 `item`의 `id`값을 전달한다.


# 결과


삭제 버튼 `onClick` 함수에게 `handleDeleteClick` 함수를 등록해줌으로 삭제 버튼을 클릭 시 클릭한 요소의 `item.id`가 `onDelete`함수에 id값으로 넘겨지게되고, app.js 에서 `handleDelete` 함수를 통해 전달받은 id를 필터하여, 변경된 `items`를 화면에 그려지게 된다.


## 배열을 렌더링할때 필수인 key값

# 데이터 프로퍼티에 고유 값 지정


리액트 배열을 통해서 렌더링을 할때, 고유 키 값을 지정해주지않으면,


```plain text
Warning: Each child in a list should have a unique "key" prop.
```


위와 같은 에러를 마주 할 수 있다.


해당 에러는 ‘list child들은 반드시 고유한 key prop을 가지고 있어야 한다’는 경고 구문이다.


어떨때 발생하냐면


```javascript
<ul className='FoodList'>
  {items.map((item) => (
    <li>
      <FoodListItem item={item} onDelete={onDelete} />
    </li>
  ))}
</ul>
```


이렇게 li의 배열을 뽑을때 각 li 요소에 key값이 주어지지 않을때 발생한다.


이런 경우 해당 에러를 해결하기 위해서는 데이터들의 고유 키값이 필요하다.


대부분은 id 값으로 고유 키값을 지정해주는데,


```javascript
{
    "id": 1,
		...
  },
  {
    "id": 2,
		...
  },
  
  ...
```


이런 식으로 지정 되어있다. 이러한 고유 키값은 ‘하나의 객체의 고유한 값’ 이기 때문에 절때적으로 중복이 될 수 없다.


그렇기 때문에 위 코드를 통해 에러를 해결하고자 한다면


```javascript
<ul className='FoodList'>
  {items.map((item) => (
    <li key={item.id}>
      <FoodListItem item={item} onDelete={onDelete} />
    </li>
  ))}
</ul>
```


이렇게 작성하여, 고유 key prop을 지정해주면 해결 된다.


# key prop을 지정해줘야하는 이유?


React에서 배열을 렌더링할 때, 각 배열 요소에 `key` prop을 지정해야 하는 이유는 **React의 효율적인 재렌더링(업데이트) 처리**와 관련이 있습니다.


### 1. **React의 렌더링 과정**


React는 배열을 기반으로 여러 개의 요소를 렌더링할 때, 각 요소를 고유하게 식별해야 합니다. 이를 위해 `key` prop을 사용하여 각 요소에 고유한 식별자를 부여합니다. `key`는 배열의 각 요소가 고유하게 식별될 수 있도록 돕는 중요한 역할을 합니다.


### 2. **효율적인 업데이트**


React는 **Virtual DOM**을 사용하여 이전 상태와 새 상태를 비교한 후, 변경된 부분만 실제 DOM에 반영하는 최적화된 방식으로 동작합니다. 배열 요소에 고유한 `key`를 부여하면, React는 배열의 요소가 추가되거나 삭제될 때, 어느 요소가 변경되었는지를 효율적으로 파악할 수 있습니다. 반면, `key`가 없으면 React는 배열의 요소들을 하나씩 비교하며 전체 DOM을 다시 렌더링해야 할 수도 있습니다.


### 3. **불필요한 재렌더링 방지**


배열에서 `key` prop을 제공하지 않으면, React는 각 요소를 제대로 추적하지 못할 수 있어, 불필요하게 전체 배열을 다시 렌더링하는 일이 발생할 수 있습니다. 특히, 요소가 추가되거나 순서가 변경될 때, `key`가 없으면 React는 이전 요소와 새 요소를 구분하지 못해, 모든 요소를 새로 렌더링하려고 시도하게 됩니다. `key`를 통해 이러한 비효율적인 렌더링을 방지할 수 있습니다.


### 4. **배열 요소의 순서 변경 추적**


`key`는 배열의 요소가 재배열될 때도 중요한 역할을 합니다. 예를 들어, 사용자가 항목을 드래그하여 순서를 변경할 경우, `key` prop을 통해 React는 각 요소의 위치가 변경되었음을 정확히 파악하고, 이에 따라 적절히 업데이트할 수 있습니다.


### 5. **고유한 값으로** **`key`** **설정**


`key`는 배열 내에서 고유해야 하며, 배열 요소의 **고유한 ID** 또는 **배열의 인덱스**와 같은 값을 사용할 수 있습니다. 하지만 배열의 인덱스를 사용하는 것은 권장되지 않으며, 가능하면 고유한 ID 값을 사용하는 것이 좋습니다. 배열의 인덱스는 요소의 순서가 변경되었을 때, 예상치 못한 버그를 유발할 수 있기 때문입니다.


## 백엔드 서버 api를 이용한 데이터 다루기

## fetch함수 이용해서 데이터 가져오기

# 실습 예제 코드


```javascript
// api.js
export async function getFoodsList () {
	const response = await fetch("...");
	const body = await response.json();
	return body;
}
```


```javascript
// App.js
import { getFoodsList } from './api.js'

function App() {
  const [items, setItems] = useState([]);
	...

  const handleLoadClick = async () => {
    const { foods } = await getFoodsList();
    setItems(foods);
  };

  return (
    <div>
			...
      <button onClick={handleLoadClick}>불러오기</button>
    </div>
  );
}

export default App;
```


# 코드 설명


## api.js


우선 api.js를 만들어서 모든 비동기 데이터를 관리한다.


내보낼 api를 `export` 시키고 `async`함수를 작성함으로써 해당 함수는 비동기 함수임을 나타낸다.


알아보기 쉽게 `getFoodsList` 라는 함수명을 작성 후,


`await` `fetch`를 통해 api url을 가져온다.


위 api url을 “…”으로 표기한 이유는 실제 api 주소를 입력하는 곳이며,


해당 본문에서는 실제 학생들이 사용하는 실습용 api 주소가 들어감으로 혹여, 악용이 될까 실 주소로 작성하진 않았다.


이어, `fetch` 함수를 통해 데이터를 불러올 api 주소를 입력하고나면 해당 `response` 변수를 `json`으로 파싱하여, 가져오게 된다.


여기서 왜 가져온 데이터를 body로 표기했느냐면, 실습용 api body에는 `foods`의 데이터 뿐만 아닌 `paging`도 body에 담겨있기때문에 body로 네이밍을 해주었다.


## App.js


app.js에서 앞서 생성한 api.js의 `getFoodsList` 함수를 `import` 해준다.


그 후 클릭하면 데이터가 로드되는 형식을 만들기 위해서 `onClick`함수를 `handleLoadClick` 으로 생성해주었고,


비동기 함수를 가져오기 위해 `async` 입력 후 화살표 함수 내부에는 구조 분해 할당 방식을 이용해 body의 `foods`만 따로 가져왔다. 


그 후 가져온 데이터를 이전에 만들어놓은 `setItems` 함수에 넣어줌으로써 초기데이터 값을 지정해준다.


## useEffect,dependency array

useEffect란

> **React의 Hook 중 하나**로, **함수형 컴포넌트**에서 **부수적인 효과(side effects)**를 처리할 때 사용됩니다. React 컴포넌트는 주로 **상태에 따라 UI를 렌더링**하지만, 때로는 외부 데이터를 가져오거나 DOM을 직접 조작하는 등의 작업이 필요할 때가 있습니다. 이러한 부수 효과를 다루기 위해 useEffect를 사용합니다.

**dependency array 이란**

> `useEffect`에서 **dependency array**(디펜던시 배열)는 **`useEffect`****가 언제 실행되는지**를 제어하는 중요한 역할을 합니다. 디펜던시 배열에 명시된 값들이 변경될 때만 `useEffect`가 실행되며, 이를 통해 불필요한 재실행을 방지하거나, 원하는 시점에만 특정 작업이 실행되도록 할 수 있습니다.

# `useEffect` 기본 구조


```javascript
useEffect(() => {
  // 실행할 사이드 이펙트 코드
}, [dependencies]);
```

- 첫 번째 인자는 실행될 **사이드 이펙트**(부수 효과)를 정의하는 **함수**입니다.
- 두 번째 인자인 **dependency array**는 **`useEffect`****가 실행될 시점을 제어**합니다.

## 1. **디펜던시 배열이 없는 경우**


```javascript
useEffect(() => {
  console.log('컴포넌트가 렌더링 될 때마다 실행');
});
```

- 디펜던시 배열이 없는 경우, **컴포넌트가 렌더링 될 때마다**(즉, 초기 렌더링 및 모든 리렌더링 때마다) `useEffect`가 실행됩니다.
- 모든 상태 변화나 props 변화에도 실행되므로 불필요하게 반복 실행될 수 있습니다.

## 2. **빈 디펜던시 배열** **`[]`****인 경우**


```javascript
useEffect(() => {
  console.log('처음 한 번만 실행');
}, []);
```

- 빈 배열 `[]`을 전달하면, **컴포넌트가 처음으로 마운트될 때 딱 한 번**만 실행됩니다.
- 이후 상태나 props가 변경되어도 재실행되지 않습니다.
- 이를 통해 컴포넌트가 처음 마운트될 때 한 번만 실행되는 초기화 작업 등을 수행할 수 있습니다. (예: API 호출, 초기 데이터 로드)

## 3. **특정 값이 들어간 경우**


```javascript
useEffect(() => {
  console.log('count가 변경될 때마다 실행');
}, [count]);
```

- 배열 안에 상태 변수나 props 같은 **특정 값**이 포함되어 있으면, 그 값이 변경될 때만 `useEffect`가 실행됩니다.
- 위 예시에서는 `count` 값이 변경될 때마다 `useEffect`가 실행됩니다.
- 이를 통해 특정 상태나 props가 변할 때만 효과를 실행하도록 제한할 수 있습니다.

## 4. **여러 디펜던시를 설정하는 경우**


```javascript
useEffect(() => {
  console.log('count 또는 user가 변경될 때 실행');
}, [count, user]);
```

- 배열 안에 여러 개의 상태나 props를 넣으면, 그 중 하나라도 변경될 때 `useEffect`가 실행됩니다.
- `count` 또는 `user` 중 하나라도 변하면, `useEffect` 내의 코드가 실행됩니다.

## 정리

- **없음:** 컴포넌트가 렌더링될 때마다 실행 (모든 리렌더링 포함).
- **빈 배열** **`[]`****:** 컴포넌트가 마운트될 때 한 번만 실행.
- **특정 값이 있는 배열:** 해당 값이 변할 때만 실행.

### 예시 코드


```javascript
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count가 ${count}로 변경되었습니다.`);
  }, [count]);  // count가 변경될 때만 실행

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
    </div>
  );
}
```


이 예시에서는 `count`가 변경될 때만 `useEffect`가 실행됩니다.


## 버튼을 눌렀을때 Load가 아닌 진입 시 로드 되게 만들기 (useEffect)

# 예시 코드


```javascript
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
	...

  const handleLoad = async () => {
    const { reviews } = await getReviews();
    setItems(reviews);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>인기순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
```


## 코드 설명


우선 App.js 최상단에 `useEffect` 함수를 import 해준다.


다음 `useEffect()` 함수를 호출하는데, 콜백 함수와 빈배열로 실행하게 되면 딱 한 번만 실행할 수 있다.


이렇게 하면 버튼을 클릭하지않아도 처음 페이지를 열었을때 데이터가 로드되게 할 수 있다.


## 바로 `handleLoad()`를 호출하면 안되나요?


처음 페이지를 열때 App 함수에서 순차적으로 실행하게된다.


그러다 `handleLoad`라는 비동기 함수를 마주하게되는데, 비동기 함수를 예외하고 모든 코드를 실행시켰을때, 다시 비동기함수로 돌아가서 `getReviews`의 `response`를 받으면 `setItems`에 해당 `response` 결과를 업데이트 하게된다. `useState`의 경우 해당 변수 업데이트가 일어날 시 페이지를 재렌더링 하기 시작하는데,


그러면 다시 App 함수를 순차적으로 실행하게된다.


이로써 `useEffect`를 사용하지않고, 비동기 함수의 `response`를 바로 업데이트를 할 경우 무한 루프가 발생하기 때문에 `useEffect`를 사용하여, 로드될때 한 번만 실행될 수 있게 해야한다.


## 초기 로드할때 정렬해서 로드하기

# `api.js` 코드


```javascript
export async function getReviews(order = "createdAt") {
  const query = `order=${order}`; // 쿼리 문자열 생성
  const response = await fetch(`.../film-reviews?${query}`); // API에 요청
  const body = await response.json(); // 응답 데이터를 JSON으로 변환
  return body; // JSON 데이터 반환
}
```

1. **`getReviews`** **함수**
    - 이 함수는 `order`라는 매개변수를 받아, 해당 매개변수를 바탕으로 API 요청을 보내는 **비동기 함수**입니다. 기본값으로 `createdAt`을 설정해 두었기 때문에, 매개변수를 생략하면 기본적으로 최신순으로 데이터를 불러오게 됩니다.
2. **`order`** **매개변수**
    - `order`는 사용자가 데이터를 어떤 순서로 불러올지를 결정하는 값입니다. `createdAt`(최신순) 또는 `rating`(평점순)으로 지정될 수 있습니다. 이 값은 쿼리 문자열로 만들어져 API의 요청 URL에 포함됩니다.
    - `const query =` order=${order}`;`로 **쿼리 문자열을 생성**합니다. 이 문자열은 API 요청 시 서버에 어떤 정렬 기준으로 데이터를 가져올지를 알려줍니다.

## 쿼리의 역할

> **API 리퀘스트에서 쿼리값을 사용하는 것은 프론트엔드와 백엔드 간에 미리 정해진 약속된 형식에 따라 데이터를 요청하는 방식**입니다. 이 약속은 API 명세서나 문서에 명확하게 정의되어 있어, 프론트엔드는 특정 쿼리 파라미터를 사용해 원하는 데이터를 요청하고, 백엔드는 그 요청에 맞는 데이터를 반환해주는 방식으로 동작합니다.
- 쿼리 파라미터는 프론트엔드가 **백엔드에 특정 요구사항을 전달하는 방법**입니다.
- 이 값들은 백엔드 API가 미리 정의한 규칙에 따라 해석되고, 해당 조건에 맞는 데이터를 응답합니다.
- 이를 통해 **필터링, 정렬, 페이징** 등 다양한 요청을 유연하게 처리할 수 있습니다.

# `handleLoad` 함수


```javascript
const handleLoad = async (orderQuery) => {
  const { reviews } = await getReviews(orderQuery); // API로부터 데이터 가져옴
  setItems(reviews); // 가져온 데이터를 상태로 저장
};
```

1. **역할:**
    - `handleLoad` 함수는 **리뷰 데이터를 불러오는 역할**을 합니다. `orderQuery` 매개변수를 받아 이를 기반으로 리뷰 데이터를 정렬하여 가져옵니다.
    - 데이터를 불러오는 작업은 **비동기적**으로 이루어지며, API 요청을 보내는 `getReviews` 함수를 호출하여 **fetch API**로 데이터를 가져옵니다.
2. **동작:**
    - `orderQuery` 값에 따라 `createdAt`(최신순)이나 `rating`(평점순)으로 데이터를 가져옵니다.
    - 데이터를 가져온 후, 응답으로 받은 리뷰 목록(`reviews`)을 **상태로 저장**합니다 (`setItems(reviews)`).
    - 이 상태는 `items`라는 state에 저장되고, 컴포넌트가 재렌더링되면서 화면에 업데이트된 리뷰 목록이 반영됩니다.
3. **상태 업데이트:**
    - `setItems`는 가져온 리뷰 데이터를 상태(`items`)로 저장하므로, 화면에 표시되는 리뷰 목록이 업데이트됩니다.

# `useEffect` 훅


```javascript
useEffect(() => {
  handleLoad(order); // order 값이 변경될 때 handleLoad 함수 호출
}, [order]);
```

1. **역할:**
    - `useEffect`는 **사이드 이펙트를 처리**하는 리액트 훅입니다. 이 코드에서는 `order`가 변경될 때마다 **리뷰 데이터를 다시 불러오는 역할**을 합니다.
2. **동작:**
    - `useEffect` 훅은 배열 안에 전달된 **디펜던시**(`order`)가 변경될 때마다 실행됩니다. 즉, `order` 상태가 변화하면 **`handleLoad`** **함수가 호출**되어 해당 정렬 방식에 맞는 리뷰 데이터를 다시 불러옵니다.
    - 예를 들어, 사용자가 "최신순" 버튼을 클릭하면 `order`가 `createdAt`으로 변경되고, 그에 따라 `useEffect`가 실행되어 `handleLoad` 함수가 최신 리뷰 데이터를 가져옵니다. 반대로, "인기순" 버튼을 클릭하면 `order`가 `rating`으로 바뀌고, 다시 `handleLoad`가 호출되어 평점순으로 정렬된 데이터를 가져오게 됩니다.
3. **리렌더링 트리거:**
    - `order`가 변경될 때마다 `useEffect`가 호출되고, **`items`** **상태가 업데이트**되면 컴포넌트가 리렌더링되어 최신 또는 인기순으로 정렬된 리뷰 목록이 화면에 다시 렌더링됩니다.

# 정리

- **`handleLoad`**: 비동기적으로 API에서 리뷰 데이터를 불러와서 `items` 상태에 저장합니다. 이를 통해 화면에 필요한 데이터를 동적으로 가져옵니다.
- **`useEffect`**: `order` 상태가 변경될 때마다 `handleLoad`를 실행시켜, `order`에 맞는 리뷰 데이터를 다시 불러오고 렌더링합니다.

따라서 이 두 코드의 상호작용은 다음과 같이 이루어집니다:

1. 사용자가 버튼을 클릭하면 `order` 상태가 변경됩니다.
2. `order` 상태가 변경되면 `useEffect`가 실행되며 `handleLoad`를 호출합니다.
3. `handleLoad`가 새로운 리뷰 데이터를 API로부터 가져오고, 이를 `setItems`로 상태에 저장합니다.
4. 상태가 업데이트되면서 컴포넌트가 다시 렌더링되고, 정렬된 리뷰 목록이 화면에 표시됩니다.

## 페이지 네이션이란?

# 페이지 네이션이란?

> 많은 양의 데이터를 다룰때 데이터를 나누어서 표기하는 방법

# 페이지 네이션의 종류


## **오프셋 기반 페이지네이션 (Offset-Based Pagination)**


**오프셋 기반 페이지네이션**은 데이터를 특정한 시작점(**오프셋**)부터 일정 개수만큼 가져오는 방식입니다. 주로 SQL의 `LIMIT`과 `OFFSET`을 사용해 구현됩니다.


### 예시

- `LIMIT 10 OFFSET 30` → 31번째 데이터부터 10개의 데이터를 가져옴
- `GET /items?limit=10&offset=30` → API 요청에서 31번째 데이터부터 10개를 가져오는 방식

### 동작 방식

- **`limit`**: 가져올 데이터의 개수
- **`offset`**: 시작할 데이터의 위치

### 장점

- **간단하고 직관적**: 특정 위치에서 시작해 데이터를 일정 개수만큼 가져오는 방식이라 이해하기 쉽습니다.
- **정렬이 필요 없는 경우 사용 가능**: 데이터가 고정적이거나 삭제되지 않는 경우 매우 유용합니다.

### 단점

- **성능 문제**: 데이터가 많을수록 오프셋이 클 때 성능이 떨어질 수 있습니다. 예를 들어, `OFFSET 10000`처럼 많은 데이터를 건너뛸 경우, 데이터베이스는 10000개를 스캔한 후 그다음 데이터를 가져와야 합니다.
- **데이터의 변화에 취약**: 데이터가 삭제되거나 추가되면, 페이지 번호가 엉망이 될 수 있습니다. 예를 들어, 한 페이지를 보고 있는 동안 데이터가 삭제되면, 데이터가 한 칸씩 밀려 페이지네이션이 깨질 수 있습니다.

---


## **커서 기반 페이지네이션 (Cursor-Based Pagination)**


**커서 기반 페이지네이션**은 데이터의 특정 위치(**커서**)를 기준으로 데이터를 가져오는 방식입니다. 일반적으로 커서 값은 해당 데이터의 고유 ID나 정렬 기준이 되는 필드를 사용합니다. 다음 데이터를 요청할 때는 마지막으로 본 데이터의 커서를 기준으로 이후 데이터를 요청합니다.


### 예시

- 첫 번째 요청: `GET /items?limit=10` → 첫 10개의 데이터와 함께 마지막 데이터의 커서(예: `id=10`)를 반환
- 두 번째 요청: `GET /items?limit=10&cursor=10` → `id=10` 이후의 10개의 데이터를 가져옴

### 동작 방식

- **`limit`**: 가져올 데이터의 개수
- **`cursor`**: 마지막으로 본 데이터의 위치

### 장점

- **성능**: 오프셋 기반보다 성능이 더 좋습니다. 큰 오프셋을 건너뛸 필요가 없으므로, 데이터베이스 조회 성능이 더 뛰어납니다.
- **데이터의 변화에 강함**: 데이터를 추가하거나 삭제해도, 커서 기반으로 페이지네이션을 하면 이전 데이터를 놓치지 않고 정확하게 이어서 가져올 수 있습니다.

### 단점

- **구현 복잡성**: 커서를 관리하고, 다음 데이터를 요청할 때 커서를 전달해야 하므로 구현이 다소 복잡할 수 있습니다.
- **정렬이 필요함**: 커서가 데이터의 순서를 보장해야 하므로, 정렬 기준이 명확해야 합니다.

---


### **오프셋 기반 vs 커서 기반 차이점**


|              | **오프셋 기반 페이지네이션**    | **커서 기반 페이지네이션**   |
| ------------ | -------------------- | ------------------ |
| **속도**       | 대용량 데이터에서 느림         | 대용량 데이터에서 더 빠름     |
| **데이터 안정성**  | 데이터 삭제/추가 시 문제 발생 가능 | 데이터 삭제/추가에 안전      |
| **사용의 직관성**  | 더 직관적이고 간단           | 구현이 조금 더 복잡        |
| **주요 사용 사례** | 데이터가 변하지 않는 경우에 적합   | 데이터가 자주 변하는 경우에 적합 |


### 요약:

- **오프셋 기반**은 간단하고 이해하기 쉬우며 적은 양의 데이터를 처리할 때 적합하지만, 많은 데이터를 처리할 때 성능이 저하됩니다.
- **커서 기반**은 성능이 좋고 데이터의 변동에 강하지만, 구현이 다소 복잡하고 정렬을 신경 써야 합니다.

두 방식은 데이터의 성격과 요구 사항에 따라 선택할 수 있으며, 대량의 데이터와 빈번한 변동이 있는 경우 **커서 기반 페이지네이션**이 더 적합한 경우가 많습니다.


## 데이터 추가로 더 불러오기

# offset과 limit 이용하기


## api 리퀘스트 초기값 offset, limit 설정 및 변경될 값을 받기위해 파라미터 지정


```javascript
// api.js
export async function getReviews({ order = "createdAt", offset = 0, limit = 6 }) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(`.../film-reviews?${query}`);
  const body = await response.json();
  return body;
}
```

1. 우선 `getReviews`함수에서 파라미터의 값으로 `offset`과 `limitf`를 받아옵니다.
2. `query`변수에 url뒤에 들어갈 쿼리 파라미터를 작성해줍니다.

## 고정된 LIMIT 값 변수 설정


```javascript
const LIMIT = 6;
```

1. limit 쿼리 파라미터는 6이라는 값으로 고정적으로 받게끔 LIMIT 변수를 생성 해 줍니다.

## 첫 페이지 로드 시 offset: 0, limit: 6 지정 (useEffect)


```javascript
useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]);
```

1. 처음 페이지가 로드 됐을때, 받아올 초기값을 지정 해 줍니다.
2. 위처럼 `handleLoad` 함수에 `offset`과 `limit` 아규먼트를 전달하게 되는데, 그렇다면 `handleLoad` 함수 내부에서도 해당 아규먼트의 값을 파라미터로 받아야겠죠?

## handleLoad 파라미터 네임을 options로 변경(직관적인 네이밍 설정)


```javascript
const handleLoad = async (options) => {
    const { reviews } = await getReviews(options);
    setItems(reviews);
  };
```

1. 처음에는 `handleLoad` 함수의 파라미터에 `order`만 받고있었는데, 이제는 `order`뿐만 아닌 `offset`과 `limit`도 받아야 하기 때문에 해당 파라미터 이름을 `options`으로 변경 시켜 줍니다.

## 추가 데이터를 받기위한 버튼 이벤트 함수 작성


```javascript
const handleLoadMore = () => {
    handleLoad({ order, offset, limit: LIMIT });
  };
  
  return (
    <div>
			...
      <button onClick={handleLoadMore}>더보기</button>
    </div>
  );
```

1. 이제 버튼을 클릭했을때 새롭게 변경시킨 `offset`을 받아 `handleload`를 실행하기 위해 `handleLoadMore` 함수를 작성 합니다.
2. 그리고 더보기 버튼을 눌러 onClick이벤트로 `handleLoadMore`함수를 실행시키게끔 작성합니다.

## `offset` 값 업데이트 관리를 위한 `state` 생성


```javascript
const [offset, setOffset] = useState(0);
```

1. 이제 변경될 `offset` `state` 관리를 위해서 `offset` `state`를 생성해줍니다. 초기값은 처음 로드시 때와 동일하게 0으로 지정해줍니다.

## 변경 후 요청할 `offset`의 값을 이미 로드된 `reviews.length`를 통해 연산식 이용하여 `offset`값 업데이트하기


```javascript
const handleLoad = async (options) => {
    const { reviews } = await getReviews(options);
    setItems(reviews);
    setOffset([options.offset + reviews.length]);
  };
```

1. 이제 이 변경 된 `offset`값을 어떻게 관리해줄것인지 생각을 해야합니다.
2. 기본적으로 앞전에 설정해준 `LIMIT`값은 `6` 이었습니다.
처음 저희가 리퀘스트를 보낼때 `offset=0에 limit=6`의 쿼리 파라미터로 요청을 했습니다.
그럼 `reviews`에는 총 6개의 데이터를 불러왔겠죠?
3. 그렇게 불러온 데이터와 현재의 `offset`값을 더해서, ‘출력된 데이터에 추가 6개를 더 보여줘’를 요청하려면
`offset` 값과 `reviews.length`를 더한 값을 `setOffset`에 업데이트를 해주면, 다음 리퀘스트 요청 시 쿼리 파라미터는 `offset=6`이 됩니다. 즉, `?offset=6&limit=6`을 요청하게 되는것이죠.
4. 하지만 여기서 `setItems`는 `reviews`만 보여주고 있기때문에, 값이 변경되면 **기존에 로드되었던 데이터를 덮어서 보여주게 됩니다.**
이를 `offset`값이 바뀔때 변경된 `reviews`를 기존 렌더 된 데이터와 함꼐 보여주어야 하니 조건을 걸어주어야 합니다.

## `offset`이 0일때와 아닐때의 조건을 걸어, 아닐 경우 기존에 로드된 데이터와 추가 요청된 데이터의 배열을 함께 출력하기 위해 조건문 작성


```javascript
const handleLoad = async (options) => {
    const { reviews} = await getReviews(options);
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems([...items, ...reviews]);
    }
    setOffset(options.offset + reviews.length);
  };
```

1. 위 코드에서의 조건문은 `offset`의 값이 0일때는 초기에 불러왔던 `?offset=0&limit=6` 의 내용으로 `setItems`가 업데이트 됩니다.
2. 그리고 `offset`의 값이 0이 아닐때는 (버튼을 눌러서 변경시킨 값이 되겠죠?) `setItems`에 기존 출력된 `items`배열과 변경된 `reviews` 배열을 <u>_**합친 배열로 출력**_</u>하게 끔 합니다. ⇒ <u>**이렇게 하면 초기 로드 되었던 부분이 덮어지지않는다.**</u>
- 추가적으로 받아온 `getReviews`에는 `reviews`만 받아왔는데 사실 해당 api에는 `paging`이라는 또다른 파라미터가 존재합니다. `paging`은 현재의 <u>**총 페이지 개수와 다음페이지가 있는지 여부**</u>를 담고 있습니다.
- 다음페이지가 없을때는 더보기를 클릭해서 더이상 리퀘스트를 실행하지않도록 설정해주어야 합니다.

## paging 파라미터 받아오기(총 paging의 개수와 nextPaging 여부 확인가능)


```javascript
const handleLoad = async (options) => {
    const { reviews, paging } = await getReviews(options);
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems([...items, ...reviews]);
    }
    setOffset(options.offset + reviews.length);
  };
```

1. 그러기 위해서는 이렇게 `paging` 파라미터를 가져옵니다.

## nextPaging의 상태를 관리할 state 생성


```javascript
const [hasNext, setHasNext] = useState(false);
```

1. 그 다음 `paging`에서 hasNext boolean값을 이용해 상태 관리를 해야하니, `hasNext state`를 생성해주고 초기값은 fasle를 지정해줍니다.

## 더보기 버튼 비활성화, 활성화 컨트롤


```javascript
<button disabled={!hasNext} onClick={handleLoadMore}>더보기</button>
```

1. 앞전에 생성했던 더보기 버튼에 disabled 속성으로 `hasNext` 초기값의 반대인 `!hasNex`t를 지정해줍니다.
2. 이렇게 설정하면 만약 `disabled`가 `false`라면 더보기를 눌러 리퀘스트를 보낼 수 있고 `true`라면 더보기를 누를수없도록 설정됩니다.

### 더보기 버튼을 disabled로 관리하지않고, hasNext의 값이 true일땐 보이고 false일때는 안보이게 설정하기( 조건부 렌더링 )


```javascript
{hasNext && <button onClick={handleLoadMore}>더보기</button>}
```

- 조건부 렌더링은 앞전에 배웠던 모던 javascript > [AND와 OR의 연산방식](/0c8860e4cebd4e11aae565b74d00c95e?v=4cced0810b3645b690bad31283580ab1&p=1014ef5609948014bdcef823abd2e751&pm=s) 부분을 생각하면 된다
- 해당 논리 연산이 아니더라도 삼항 연산자를 통해서도 조건부 렌더링을 작성 할 수 있다.

> 🚨 **조건부 렌더링 주의사항**  
> 논리 연산에서는 0의 값은 falesy한 값이기 때문에  
> `{num && <p>num이 0 보다 크다!</p>}`  
> 이런식으로 작성하면 해당 구문이 렌더링이 되지않는다. 그렇기 때문에 명확한 논리식을 써주어야한다.  
> `{(num > 0) && <p>num이 0 보다 크다!</p>}`


## offset이 변경되면서 더이상 nextPaging이 false일때, hasNext 상태 업데이트


```javascript
const handleLoad = async (options) => {
    const { reviews, paging } = await getReviews(options);
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems([...items, ...reviews]);
    }
    setOffset(options.offset + reviews.length);
    setHasNext(paging.hasNext);
  };
```

1. 마지막으로 저희가 api에서 불러온 `paging` 파라미터의 상태가 변경될때 `setHasNext`에 업데이트를 해주어야하니, `handleLoad` 함수 내부에 `setHasNext(paging.hasNext)`를 작성해 paging의 상태를 업데이트 합니다.

## 최종 코드


```javascript
import { useEffect, useState } from "react";
import ReviewList from "./components/ReviewList";
import { getReviews } from "./api";

const LIMIT = 6;

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async (options) => {
    const { reviews, paging } = await getReviews(options);
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems([...items, ...reviews]);
    }
    setOffset(options.offset + reviews.length);
    setHasNext(paging.hasNext);
  };

  const handleLoadMore = () => {
    handleLoad({ order, offset, limit: LIMIT });
  };

  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]);

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>인기순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      <button disabled={!hasNext} onClick={handleLoadMore}>
        더보기
      </button>
    </div>
  );
}

export default App;
```


## 비동기로 state를 변경할때 주의할 점
> **비동기 함수의 실행 시점**과 **상태 업데이트 타이밍**의 문제

```javascript
const handleLoad = async (options) => {
    const { reviews} = await getReviews(options);
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems([...items, ...reviews]);
    }
    setOffset(options.offset + reviews.length);
  };
```


### 문제 상황

1. **데이터 로드와 삭제**:
    - `handleLoad` 함수는 비동기 함수로, 데이터를 서버에서 가져옵니다. 그 데이터는 `reviews`에 담기고, 이를 `setItems`를 사용해 상태로 업데이트합니다.
    - 사용자가 '더보기' 버튼을 누르고 새로운 데이터를 로드하는 과정에서, 만약 **동시에** 어떤 데이터를 삭제하면 문제가 발생할 수 있습니다.
2. **버그 발생 이유**:
    - 삭제를 하고, '더보기' 버튼을 눌러 데이터를 추가로 로드했을 때, 서버로부터 데이터를 받아서 현재 `items`와 결합해야 합니다. 그런데 `setItems([...items, ...reviews])`를 사용하게 되면 **삭제된 상태**의 `items`가 아니라, **이전 상태**의 `items`를 사용합니다. 즉, `items`는 삭제 전의 데이터를 여전히 가지고 있기 때문에, 삭제된 데이터를 다시 보여주는 문제가 생기는 것입니다.

### 해결 방법: `prevItems` 사용


```javascript
setItems((prevItems) => [...prevItems, ...reviews]);
```


이 코드는 **이전 상태**(`prevItems`)를 기반으로 새로운 상태를 업데이트하는 방식입니다. 즉, `setItems` 함수가 호출될 때 **현재의 최신 상태**를 기준으로 상태를 업데이트합니다. 비동기 환경에서는 상태가 변경될 때 정확한 상태를 유지하기 위해 이런 방식이 중요합니다.


> 💡 여기서 `prevItems`는 setter에서 전달한 아규먼트를 콜백함수로 넘겨주게 되는데,  
> 그 넘겨주는 콜백함수를 <u>**리액트가 현재 스테이트 값**</u>으로 전달해준다.  
> 즉, 콜백”함수”, 이 함수를 하나의 변수처럼 넘겨준다 라고 생각하면 되겠다.


### 비동기 함수의 마이크로태스크 큐와의 관계


비동기 함수가 실행되면 **마이크로태스크 큐**에서 처리되는 순서를 따릅니다. 하지만 이 문제는 **마이크로태스크 큐**와 직접적인 관계보다는 **비동기 함수의 실행 시점**과 **상태 업데이트 타이밍**의 문제입니다.


`setItems([...items, ...reviews])`에서는 **현재 함수 스코프**의 `items` 값을 사용하게 됩니다. 하지만 이 `items` 값이 실제로는 삭제되기 이전의 값일 수 있습니다. 즉, 비동기적으로 동작하는 `handleLoad` 함수는 서버로부터 데이터를 받아오기까지 시간이 걸리기 때문에, 그 사이에 발생한 상태 변경(삭제 등)이 반영되지 않을 수 있습니다.


그러나 `setItems((prevItems) => [...prevItems, ...reviews])`는 **최신 상태**인 `prevItems`를 보장하며, 항상 가장 최신의 상태로 업데이트를 합니다. 이는 React의 `setState`가 **상태 업데이트를 큐에 넣어 비동기적으로 처리**하기 때문에 발생하는 문제를 해결하는 방식입니다.


### 요약

- `setItems([...items, ...reviews])`는 비동기 환경에서 **오래된 상태**를 사용할 수 있어 버그가 발생할 수 있습니다.
- `setItems((prevItems) => [...prevItems, ...reviews])`는 **최신 상태**를 보장하므로, 비동기 작업과 상태 변경이 동시에 발생할 때 안전한 방식입니다.

## 네트워크 로딩 처리하기
> 서버에 리퀘스트를 보내는 동안 사용자에게 로딩중임을 알리는 처리를 하기 위한 방식

# 1. 로딩 상태관리 state 생성


```javascript
const [isLoading, setIsLoading] = useState(false);
```


# 2. 비동기 작업 부분에 try,catch,finally 추가


```javascript
const handleLoad = async (options) => {
    let result;
    try {
      setIsLoading(true);
      result = await getReviews(options);
    } catch (error) {
      console.log(error);
      return;
    } finally {
      setIsLoading(false);
    }
    const { reviews, paging } = result;
		...
  };
```


# 로딩처리부분을 state활용하여 처리


```javascript
<button disabled={isLoading} onClick={handleLoadMore}>더보기</button>
```


## 네트워크 에러 처리하기

# 1. 로딩에러를 관리할 state 생성


```javascript
const [loadingError, setLoadingError] = useState(null);
```


# 2. catch문으로 error 받아오기


```javascript
try {
      setIsLoading(true);
      // 정상작동
      setLoadingError(null);
      result = await getReviews(options);
    } catch (error) {
	    // 에러발생
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }
```


# 3. 옵셔널 체이닝을 통해 에러 출력


```javascript
{loadingError?.message && <span>{loadingError.message}</span>}
```


# 4. async 함수 내에 에러 체크


```javascript
if (!response.ok) {
    throw new Error("리뷰를 불러오는데 실패했습니다");
  }
```


## 입력 폼 다루기

## search 구현

# 코드


```javascript
import { useEffect, useState } from 'react';
import { getFoods } from '../api';
import FoodList from './FoodList';

function App() {
	...
  const [search, setSearch] = useState('');
  const [isSearch, setIsSearch] = useState(false);

	...

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target['search'].value);
  };


  useEffect(() => {
    handleLoad({
      order, search,
    });
  }, [order, search]);

  return (
    <div>
			...
      <form onSubmit={handleSearchSubmit}>
        <input name="search" />
        <button type="submit">검색</button>
        {isSearch && <p>검색 결과가 없습니다.</p>}
      </form>
			...
    </div>
  );
}

export default App;
```


## 코드 설명


우선 사용자가 입력한 input의 value의 상태를 관리하기 위해 아래와 같이 상태 변수를 생성한다.


```javascript
const [search, setSearch] = useState('');
```


그리고 사용자가 입력한 input value를 서버로 보내기 위해 **`handleSearchSubmit`** 함수를 작성 해준다.


```javascript
e.preventDefault();
```


위 코드는 form의 기본 이벤트 요소를 제거 해주는 함수 이다.


기본적으로 form의 동작 형태는 input에 사용자가 입력값을 넣으면 해당 input value가 서버로 보내지기때문에 사용자가 작성한 value값이 사라지게 된다.


이를 방지하기 위해 사용된다.


```javascript
setSearch(e.target['search'].value);
```


이 부분은 setSearch 함수에 타겟팅이 된 요소의 value를 serach에 할당하기 위한 코드이다.


여기서 **`target[’search’]`** 는 지금은 input이 하나만 있어서 사실 작성해주지않아도 크게 상관은 없지만, 서버에 전달할 input의 name (즉, key값 같은거)을 명확하게 짚기 위해서 작성되었다.


```javascript
useEffect(() => {
    handleLoad({
      order, search,
    });
  }, [order, search]);
```


그 후 **`useEffect`**에서 search값을 쿼리 파라미터로 request 요청을 하고, **`[order, search]`** 즉, search의 값이 변경될 때 요청한 데이터의 객체들이 리렌더링 되어 사용자에게 보여지게 된다.


## Form 구현하기

# 코드


```javascript
const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, rating, content });
  };
  return (
    <form className='ReviewForm' onSubmit={handleSubmit}>
      <input type='text' value={title} onChange={handleTitleChange} />
      <input type='number' value={rating} onChange={handleRatingChange} />
      <input type='text' value={content} onChange={handleContentChange} />
      <button type='submit'>확인</button>
    </form>
  );
```


## 설명

1. **`form`** 안에 button type을 **`submit`**으로 지정해준다.
2. **`handleSubmit`**을 하여 서버에 값을 전달해주기 위한 핸들러 함수를 작성한다.
    1. 여기서 **`preventDefault()`** 함수는 **`form`**의 기본동작인 새로고침을 방지하기위해 작성해준다.
3. **`form`** 태그에 **`onSubmit`** 이벤트를 통해 **`handleSubmit`**함수를 실행시킨다.

🔍 **`input`**의 경우 **`input`**에 커서가 있을때 엔터를 클릭해도, 전달되니 알아두자!


## 하나의 state로 여러 상태 관리하기

```javascript
import { useState } from "react";

function ReviewForm() {
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <form className='ReviewForm' onSubmit={handleSubmit}>
      <input type='text' name='title' value={values.title} onChange={handleChange} />
      <input type='number' name='rating' value={values.rating} onChange={handleChange} />
      <input type='text' name='content' value={values.content} onChange={handleChange} />
      <button type='submit'>확인</button>
    </form>
  );
}

export default ReviewForm;
```


## 설명

1. **`useState`** 함수 내부에 객체로 각 프로퍼티들의 초기값을 지정해준다.
2. **`handlechange`**함수에 이벤트 타겟이 되는 요소의 **`name`**과 **`value`**를 _**구조 분해 할당(키 이름을 가져와서 변수로 사용)**_을 통해, 나열해준다.
3. 변경되는 값을 **`setValues`**함수에 담아주는데, 익명함수로 실행시킬 콜백을 작성한다.

```javascript
(prevValue) => ({
      ...prevValue,
      [name]: value,
    })
```

1. 해당 **`handleChange`**함수가 실행될때, 전달되는 **이전의(가장 최신의 상태값)** **`values`** 들을 매개변수로 받아서, 해당  매개변수 객체를 스프레드 구문(객체의 얕은 복사)을 통해 풀어준다.
    1. **`useState`** 함수는 리액트가 전달해주는 **가장 최신의 상태 값을 전달**해준다.
2. 이벤트 타겟에서 가져온 **`name`**과 **`value`**를 객체 프로퍼티로 재할당 해준다.
    1. 여기서 **`name`**을 대괄호로 감싸준 이유는 <u>**해당 프로퍼티 키 이름을 동적으로 사용하기 위함**</u>이다.
    2. 만약 대괄호를 사용해 **`[name]`** 이 아닌 **`name : value`** 를 사용하게 될 경우 **`name`**이 동적인 키 이름이 아닌 **`‘name’`**으로써 _**문자열로 고정이 되기 때문이다.**_

```javascript
value={values.content}
...
```

1. 실제 **`values`** 변수에 담기는 값들은 객체로써 **`input value`**를 작성할때도, 점 표기법을 통해 해당 객체의 키값으로 접근을 한다.

## 제어 컴포넌트와 비제어 컴포넌트
> 리액트(React)에서 **제어 컴포넌트**(Controlled Component)와 **비제어 컴포넌트**(Uncontrolled Component)는 폼 요소의 입력 데이터를 어떻게 관리하는지에 따라 구분됩니다. 각각의 특성과 차이점을 살펴보겠습니다.

# 1. 제어 컴포넌트 (Controlled Component)


**제어 컴포넌트**는 컴포넌트의 상태(`state`)를 통해 입력 폼 요소의 값을 제어하는 방식입니다. 즉, 사용자가 입력한 값은 리액트 컴포넌트의 `state`에 저장되고, 이 `state`를 통해 폼 요소의 값이 유지, 변경됩니다.


### 특징:

- 입력값을 리액트의 상태(`state`)로 관리합니다.
- `onChange` 이벤트 핸들러를 통해 상태를 업데이트하고, 이 상태가 다시 폼 요소의 값에 반영됩니다.
- 폼 요소의 값과 리액트 상태가 동기화되어 있으므로, 데이터 흐름이 예측 가능하고 일관적입니다.

### 예시 코드 (제어 컴포넌트):


```javascript
import React, { useState } from 'react';

function ControlledComponent() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value); // 입력 값이 state로 업데이트됨
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>입력한 값: {value}</p>
    </div>
  );
}

export default ControlledComponent;
```

- 이 예시에서는 `input`의 `value`가 `useState`로 관리되고, `onChange` 이벤트를 통해 사용자가 입력할 때마다 `value`가 업데이트됩니다.
- 제어 컴포넌트는 상태를 즉시 반영하고 제어할 수 있어 입력값 유효성 검사, 입력값 형식 제한 등을 쉽게 처리할 수 있습니다.

# 2. 비제어 컴포넌트 (Uncontrolled Component)


**비제어 컴포넌트**는 DOM 자체에서 폼 요소의 값을 관리하는 방식입니다. 폼 요소의 값을 리액트의 상태로 관리하지 않고, DOM에서 직접적으로 접근해서 값을 가져옵니다. 주로 `ref`를 사용해 폼 요소에 접근합니다.


### 특징:

- 폼 입력값이 리액트 상태가 아닌 DOM에서 직접 관리됩니다.
- 폼 요소에 입력된 값을 가져오기 위해 `ref`를 사용합니다.
- 값이 리액트의 상태로 즉시 반영되지 않기 때문에, 제어가 다소 불편할 수 있습니다.

### 예시 코드 (비제어 컴포넌트):


```javascript
import React, { useRef } from 'react';

function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('입력한 값:', inputRef.current.value); // ref를 사용해 DOM 값에 직접 접근
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">제출</button>
    </form>
  );
}

export default UncontrolledComponent;
```

- 이 예시에서는 `ref`를 사용해 `input`의 값을 직접 DOM에서 가져오고 있습니다.
- 비제어 컴포넌트는 폼의 초기값만 설정하고, 나중에 폼 데이터를 한번에 처리할 때 유용할 수 있습니다.

# 제어 컴포넌트와 비제어 컴포넌트의 차이점


| 비교 항목     | 제어 컴포넌트 (Controlled)           | 비제어 컴포넌트 (Uncontrolled)    |
| --------- | ------------------------------ | -------------------------- |
| 데이터 관리 방식 | 리액트 `state`로 관리                | DOM에서 직접 관리                |
| 입력 값 동기화  | `state`와 항상 동기화                | 폼 요소의 값은 DOM에서 관리          |
| 즉시 상태 반영  | 입력값이 상태에 즉시 반영됨                | 값은 DOM에서 유지되며 필요 시 접근      |
| 사용 시기     | 입력 데이터 유효성 검사나 제어가 필요할 때       | 간단한 폼 입력 또는 제어가 필요 없는 상황에서 |
| 코드 복잡성    | 더 많은 코드 필요                     | 간단한 코드                     |
| 접근 방식     | `value`, `onChange`와 함께 상태를 관리 | `ref`로 DOM에 직접 접근          |


# 언제 제어 컴포넌트를 쓰고, 언제 비제어 컴포넌트를 사용할까?

- **제어 컴포넌트**는 폼 데이터를 즉시 검증하거나, 입력값을 엄격하게 관리하고 싶을 때 적합합니다. 상태와 UI가 동기화되므로 다양한 사용자 입력 처리 및 폼 제어가 더 수월합니다.
- **비제어 컴포넌트**는 폼 데이터를 즉시 검증하지 않고, 단순히 데이터를 수집하거나 처리할 때 사용하기 좋습니다. 폼 요소가 많고 모든 입력을 하나하나 관리하기 어려운 경우, 비제어 방식이 유리할 수 있습니다.

리액트에서는 **제어 컴포넌트**가 더 권장되며, 일관성 있는 데이터 흐름과 상태 관리가 가능하기 때문에 더 많이 사용됩니다.


# 제어 컴포넌트의 문제점?


제어 컴포넌트는 입력할때마다 렌더링을 진행하기 때문에, 불필요하게 리렌더링 되거나 API를 호출 할 수 있습니다.


이러한 문제점을 해결하는 방법으로는 Throttling(쓰로틀링)과 Debouncing(디바운싱)이 있습니다.

1. Throttling : 마지막 함수가 호출된 후 일정 시간이 지나기 전에 다시 호출되지 않도록 하는 것
2. Debouncing : 연이어 호출되는 함수들 중 마지막(혹은 맨 처음) 함수만 호출하도록 하는 것

## new FormData()
> `FormData` 객체는 웹 브라우저에서 HTML 폼 데이터를 쉽게 구성하고, 이를 서버로 전송할 수 있게 도와주는 기능입니다. 주로 파일 업로드나 폼 데이터의 비동기 전송에서 사용됩니다. `FormData`를 통해 여러 폼 데이터를 Key-Value 쌍으로 구성할 수 있으며, 파일 데이터도 함께 보낼 수 있습니다.

# `new FormData()` 사용 방법


## 1. **빈** **`FormData`** **객체 생성**


빈 `FormData` 객체를 생성하고, 데이터를 동적으로 추가할 수 있습니다.


```javascript
const formData = new FormData();
formData.append('username', 'johnDoe');
formData.append('age', 30);
```

- `append(key, value)` 메서드를 사용하여 데이터를 추가합니다.
- Key-Value 쌍으로 데이터를 저장합니다.

## 2. **HTML 폼 데이터 자동 수집**


`FormData` 객체는 특정 폼 요소를 기반으로 모든 데이터를 자동으로 수집할 수 있습니다. `new FormData(formElement)` 형태로 사용하면, 해당 폼의 모든 input, select, textarea 등의 데이터를 자동으로 읽어옵니다.


```html
<form id="myForm">
  <input type="text" name="username" value="johnDoe" />
  <input type="number" name="age" value="30" />
</form>
```


```javascript
const formElement = document.getElementById('myForm');
const formData = new FormData(formElement);

// 데이터를 자동으로 수집해 formData에 저장함
```


# 주요 메서드

- **`append(key, value)`**: FormData 객체에 데이터를 추가합니다. Key-Value 쌍으로 저장되며, 파일이나 Blob 객체도 Value로 추가할 수 있습니다.

    ```javascript
    formData.append('name', 'johnDoe');
    formData.append('profileImage', fileInput.files[0]); // 파일 추가
    ```

- **`delete(key)`**: 특정 키의 데이터를 제거합니다.

    ```javascript
    formData.delete('name');
    ```

- **`get(key)`**: 특정 키의 데이터를 가져옵니다. 해당 키에 데이터가 없으면 `null`을 반환합니다.

    ```javascript
    const name = formData.get('name');
    ```

- **`has(key)`**: 특정 키가 존재하는지 여부를 확인합니다.

    ```javascript
    const hasName = formData.has('name'); // true 또는 false 반환
    ```

- **`set(key, value)`**: 특정 키의 값을 설정합니다. 만약 키가 이미 존재한다면 덮어씁니다.

    ```javascript
    formData.set('name', 'janeDoe');
    ```


# 서버로 데이터 전송


`FormData`는 주로 `fetch` 또는 `XMLHttpRequest`를 사용해 서버로 전송할 때 활용됩니다. `multipart/form-data` 형식으로 폼 데이터를 쉽게 전송할 수 있습니다.


```javascript
fetch('/submit', {
  method: 'POST',
  body: formData, // FormData 객체 전송
});
```


# 특징

- **파일 전송 가능**: 파일이나 Blob 객체를 전송할 수 있습니다.
- **다중 데이터 추가**: 동일한 키에 여러 값을 추가할 수 있습니다.
- **인코딩 방식**: `multipart/form-data` 형식으로 데이터를 전송합니다. (주로 파일 업로드에 유리)

# 요약


`FormData` 객체는 HTML 폼 데이터를 쉽게 구성하고 서버로 전송하는 데 사용됩니다. `append`를 통해 Key-Value 형태로 데이터를 추가하고, `fetch` 또는 `XMLHttpRequest`로 서버에 전송할 수 있어 파일 업로드나 폼 데이터 처리에 유용합니다.


## input file을 이용한 state 리프팅

# 코드


```javascript
// ReviewForm.js
import { useState } from "react";
import FileInput from "./FileInput";

function ReviewForm() {
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
    imgFile: null,
  });

  const handleChange = (name, value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <form className='ReviewForm' onSubmit={handleSubmit}>
      <FileInput name='imgFile' value={values.imgFile} onChange={handleChange} />
      <input type='text' name='title' value={values.title} onChange={handleInputChange} />
      <input type='number' name='rating' value={values.rating} onChange={handleInputChange} />
      <input type='text' name='content' value={values.content} onChange={handleInputChange} />
      <button type='submit'>확인</button>
    </form>
  );
}

export default ReviewForm;
```


```javascript
// flinInput.js
function FileInput({ name, value, onChange }) {
  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  return <input type='file' onChange={handleChange} />;
}

export default FileInput;
```


# 설명


우선, input type=”file”의 경우에는 value 속성을 직접 설정하는 것은 HTML 및 브라우저 규격 상 허용되지않는 작업이다. 이는 보안과 관련된 이유 때문이며, 사용자가 파일을 직접 선택하도록 하기 위한 장치이다.

- 대부분의 브라우저에서는 파일 입력 필드에 대해 value를 프로그래밍적(예를들면 동적으로 리액트 상태를 통한 value 전달 ⇒ 제어 컴포넌트)으로 설정 할 수 없도록 명시적으로 금지 되고 있다.
- 파일 업로드 하는 것은 사용자의 의도를 존중해하는 작업 중 하나이기때문에, 사용자가 파일을 선택할 때에만 해당 파일을 서버로 전송하는 것이 허용되며, 동의 없이 파일을 강제로 업로드하는 동작을 막기위해서 이다.
- 즉, input type=”file”의 경우에는 “비제어 컴포넌트”이다.

### 1. **`ReviewForm`****에서 상태 관리**

- `ReviewForm` 컴포넌트는 `useState`를 사용해 폼 데이터(`values`)를 관리하고 있습니다. `values` 객체에는 `title`, `rating`, `content`, `imgFile` 등이 포함되어 있으며, 각각의 폼 필드에서 입력된 값들이 `values`에 저장됩니다.

```javascript
const [values, setValues] = useState({
  title: "",
  rating: 0,
  content: "",
  imgFile: null,
});
```


### 2. **자식 컴포넌트로 상태를 전달**

- `ReviewForm` 컴포넌트는 `FileInput`과 다른 `input` 컴포넌트들에게 상태를 관리하는 함수를 **props**로 전달합니다. 특히 `FileInput` 컴포넌트에는 `handleChange` 함수를 전달합니다.

```javascript
<FileInput name='imgFile' value={values.imgFile} onChange={handleChange} />
```

- 여기서 `name='imgFile'`로 설정되어 있기 때문에, 파일이 변경되면 `imgFile`이라는 키 값으로 상태가 업데이트됩니다.

### 3. **자식 컴포넌트에서 부모의 상태 변경 요청 (****`FileInput`****)**

- `FileInput`에서 사용자가 파일을 업로드할 때, `onChange` 이벤트가 발생합니다. 이때 `handleChange` 함수가 실행됩니다.

```javascript
// FileInput.js
const handleChange = (e) => {
  const nextValue = e.target.files[0]; // 선택된 파일을 가져옴
  onChange(name, nextValue); // 부모의 handleChange 함수를 호출해서 부모의 상태를 업데이트
};
```

- 이 `onChange`는 부모로부터 전달된 `handleChange` 함수입니다. 그래서 `handleChange` 함수가 실행되면 부모의 상태가 업데이트됩니다.

### 4. **부모의 상태 변경 (ReviewForm에서** **`handleChange`****)**

- 자식 컴포넌트가 `onChange`를 통해 상태 변경 요청을 하면, 부모 컴포넌트 `ReviewForm`의 `handleChange` 함수가 호출되어, 해당 파일을 `values` 객체 안의 `imgFile`에 저장합니다.

```javascript
// ReviewForm.js
const handleChange = (name, value) => {
  setValues((prevValue) => ({
    ...prevValue,
    [name]: value,  // name이 'imgFile'일 때 value는 업로드된 파일
  }));
};
```

- `setValues`로 상태를 업데이트하고, `values` 객체의 특정 필드(여기서는 `imgFile`)를 선택된 파일로 업데이트합니다.

### 6. **Form 제출 (****`handleSubmit`****)**

- 사용자가 폼을 제출하면, `handleSubmit` 함수가 호출되어 현재의 `values` 객체를 콘솔에 출력합니다. 이때 `values`에는 입력된 텍스트와 함께 파일 정보(`imgFile`)도 포함되어 있습니다.

```javascript
const handleSubmit = (e) => {
  e.preventDefault(); // 페이지 새로고침 방지
  console.log(values); // 현재 상태 (폼에 입력된 데이터 및 파일 정보)를 출력
};
```


### 결론:

- **State 리프팅**: 부모 컴포넌트(`ReviewForm`)가 상태(`values`)를 관리하고, 자식 컴포넌트(`FileInput`)는 부모의 상태 변경을 요청하는 방식으로 동작합니다.
- **동작 원리**:
    1. 사용자가 파일을 선택하면 `FileInput` 컴포넌트에서 부모 컴포넌트의 `handleChange`를 호출하여 상태를 업데이트합니다.
    2. 부모 컴포넌트는 상태가 변경되면 그 상태를 자식 컴포넌트에 전달합니다.
    3. 폼이 제출되면 부모 컴포넌트는 업데이트된 상태(`values`)를 처리하게 됩니다.

이 방식으로 `FileInput` 컴포넌트는 상태를 독립적으로 관리하지 않고, 부모 컴포넌트가 상태를 관리하게 됩니다.


## handleInputChange 함수를 하나로 합친다면?


만약 `handleChange` 함수를 분리하지 않고, `handleInputChange` 함수로 파일 입력도 처리하려고 시도하면 예상치 못한 동작이 발생할 수 있습니다. `input type="file"` 필드의 경우, `e.target.value`는 파일의 경로 문자열이 아니라, 파일 자체는 `e.target.files` 배열로 관리됩니다.


따라서 `handleInputChange` 함수에서 파일 입력 필드를 다루려면 `e.target.files`에서 파일 객체를 가져와서 처리해야 합니다. 단순히 `value` 속성을 사용하면 파일을 선택할 수 없고, `files` 속성을 사용해야 합니다.


### 왜 문제가 발생하나?


기존 `handleInputChange` 함수는 모든 `input` 필드에서 `e.target.value`를 기반으로 값을 처리하고 있지만, 파일 입력(`input type="file"`) 필드에서는 파일 경로가 아닌 파일 객체 자체를 처리해야 하기 때문에, 이 방식으로는 작동하지 않습니다.


### 문제 코드:


```javascript
const handleInputChange = (e) => {
  const { name, value } = e.target; // 파일 입력은 value 대신 files를 사용해야 함
  setValues((prevValue) => ({
    ...prevValue,
    [name]: value, // 파일 선택에서는 value 대신 파일 객체를 저장해야 함
  }));
};
```


### 해결 방법:


파일 입력 처리에서는 `value` 대신 `e.target.files[0]`를 이용해 파일 객체를 처리해야 합니다.


`handleInputChange`를 다음과 같이 수정하면 해결할 수 있습니다:


### 수정된 `handleInputChange` 함수:


```javascript
const handleInputChange = (e) => {
  const { name, value, files } = e.target;

  // 파일 입력 필드일 경우 처리
  if (e.target.type === 'file') {
    const file = files[0]; // 첫 번째 선택한 파일
    setValues((prevValue) => ({
      ...prevValue,
      [name]: file, // 파일 객체를 저장
    }));
  } else {
    // 다른 input 필드는 value로 처리
    setValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }
};
```


이렇게 하면 `FileInput` 컴포넌트에서도 `handleInputChange`를 그대로 사용할 수 있으며, 파일 선택 시에는 `e.target.files[0]`을 통해 파일 객체를 처리하고, 다른 일반적인 입력 필드에서는 `e.target.value`를 이용해 값을 처리할 수 있습니다.


### 적용 예시:


```javascript
<FileInput name='imgFile' onChange={handleInputChange} />
<input type='text' name='title' value={values.title} onChange={handleInputChange} />
```


이 방식으로 `FileInput`과 일반적인 `input` 필드를 모두 같은 함수로 처리할 수 있게 됩니다.


## useRef를 이용한 DOM 객체 직접 참조(접근)하기
> `useRef`는 리액트에서 제공하는 훅(Hook)으로, 함수형 컴포넌트 내에서 **DOM 요소** 또는 **값을 저장**할 수 있는 방법을 제공합니다. `useRef`를 사용하면 **리렌더링 없이 값이 유지**되는 변수를 만들 수 있으며, DOM에 접근하거나 직접 수정할 때도 자주 사용됩니다.

### `useRef`의 주요 특징

1. **리렌더링과 무관한 값 저장**:
    - `useRef`로 생성된 객체는 리렌더링 시에도 값이 유지되지만, 값이 변경되어도 컴포넌트는 다시 렌더링되지 않습니다. 이와 다르게, `useState`는 값이 변경되면 컴포넌트가 리렌더링됩니다.
2. **DOM 요소에 접근**:
    - `useRef`를 사용해 특정 DOM 요소를 직접 참조할 수 있습니다. 이를 통해 해당 요소에 접근하거나 이벤트를 트리거할 수 있습니다.
3. **초기값**:
    - `useRef`의 초기값을 설정할 수 있으며, `ref.current`에 저장됩니다. 이후 해당 값에 접근하거나 수정할 수 있습니다.

### 기본 사용법


```javascript
import React, { useRef } from 'react';

function ExampleComponent() {
  // useRef로 DOM 요소를 참조할 수 있는 객체 생성
  const inputRef = useRef(null);

  const handleClick = () => {
    // input 요소에 접근하여 focus 메서드 호출
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default ExampleComponent;
```


### 코드 설명

1. **`useRef(null)`**: `inputRef`라는 ref 객체를 생성하고, 초기값은 `null`로 설정합니다.
2. **`ref={inputRef}`**: `input` 요소에 ref를 설정하여 해당 요소를 `inputRef`로 참조합니다.
3. **`inputRef.current.focus()`**: 버튼 클릭 시 `inputRef.current`가 가리키는 `input` 요소에 접근하여, `focus()` 메서드를 호출해 포커스를 이동시킵니다.

### 주의 사항

- `useRef`는 값을 변경해도 **컴포넌트를 다시 렌더링하지 않습니다**. 따라서 DOM 조작이나 비렌더링 관련 데이터 저장에 적합합니다.
- 상태(state)가 아니라 단순한 변수로 값을 유지하고 싶을 때 사용합니다. 예를 들어, 타이머 ID, 이전 값 등을 저장할 때 유용합니다.

### `useRef`의 주요 용도

1. **DOM 요소 참조**: 특정 DOM 요소에 접근해서 이벤트를 트리거하거나 값을 읽을 때 사용.
2. **불필요한 리렌더링 방지**: 값을 저장하되, 그 값의 변경이 컴포넌트의 리렌더링을 유발하지 않게 할 때 사용.
3. **상태가 아닌 값 유지**: 컴포넌트가 리렌더링되더라도 값을 유지하고 싶을 때.

`useRef`는 상태(state)를 관리하지 않고, 값을 유지하거나 DOM에 접근해야 할 때 사용하는 강력한 도구입니다.


# useRef를 활용해 파일 입력을 초기화하기


```javascript
import { useRef } from "react";

function FileInput({ name, value, onChange }) {
  const inputRef = useRef();

  const handleChange = (e) => {
    const file = e.target.files[0];
    onChange(name, file);
  };

  const handleClearClick = () => {
    inputRef.current.value = "";
    onChange(name, null);
  };
  return (
    <div>
      <input type='file' ref={inputRef} onChange={handleChange} />
      <button type='button' onClick={handleClearClick}>
        삭제
      </button>
    </div>
  );
}

export default FileInput;
```


이 코드는 `useRef`를 활용해 파일 입력을 초기화하는 방법을 보여주는 예시다. 파일 업로드를 처리할 때, 한 번 선택한 파일을 제거하거나 입력값을 초기화해야 하는 상황이 종종 발생한다. HTML의 `input` 요소는 `file` 타입일 경우 직접 `value`를 조작할 수 없다. 따라서 이 경우 `useRef`를 사용해 직접 DOM 요소에 접근하여 값을 초기화한다.


### 코드 설명

1. **`useRef`****를 이용한 input 요소 참조**

    먼저, `useRef`를 사용해 `input` 요소를 참조하는 객체를 생성한다. `inputRef = useRef();`로 참조할 수 있으며, 이 참조를 통해 `input`의 `value`를 직접 조작할 수 있다.


    ```javascript
    const inputRef = useRef();
    ```

2. **파일 변경 시 onChange 이벤트**

    파일이 변경될 때마다 `handleChange` 함수가 호출된다. 이 함수는 파일 선택이 완료된 후, 파일 정보를 부모 컴포넌트로 전달한다. 선택된 파일은 `e.target.files[0]`을 통해 얻을 수 있다. 이 값을 `onChange`를 통해 상위 컴포넌트로 전달하여 상태를 업데이트한다.


    ```javascript
    const handleChange = (e) => {
      const file = e.target.files[0];
      onChange(name, file);
    };
    ```

3. **파일 삭제 기능**

    `handleClearClick` 함수는 파일 입력 필드를 초기화하는 역할을 한다. `useRef`로 참조한 `inputRef.current.value`에 빈 문자열을 할당하여 `input`의 값을 지운다. 이후, 상위 컴포넌트에도 `onChange`를 통해 파일 값이 `null`로 변경되었음을 전달하여 상태를 동기화한다.


    ```javascript
    const handleClearClick = () => {
      inputRef.current.value = "";
      onChange(name, null);
    };
    ```

4. **렌더링**

    `input` 요소에 `ref={inputRef}`를 지정하여 `useRef`로 해당 DOM 요소를 참조한다. 파일을 선택하면 `handleChange`가 호출되고, 삭제 버튼을 클릭하면 `handleClearClick`이 호출되어 파일이 제거된다.


    ```javascript
    return (
      <div>
        <input type='file' ref={inputRef} onChange={handleChange} />
        <button type='button' onClick={handleClearClick}>
          삭제
        </button>
      </div>
    );
    ```


### 동작 원리

1. 사용자가 파일을 선택하면, `handleChange` 함수가 호출되어 선택된 파일이 부모 컴포넌트로 전달된다.
2. 파일을 삭제하고 싶을 때는 '삭제' 버튼을 클릭하면 `handleClearClick` 함수가 호출되어 `input`의 값을 비우고, 부모 컴포넌트로도 `null` 값을 전달하여 상태를 초기화한다.

### 결론


`useRef`는 `input type="file"`과 같은 비제어 컴포넌트에서 값을 직접 초기화하거나 조작할 때 유용하게 사용할 수 있다. 이 코드에서는 파일 입력값을 쉽게 초기화하고, 상위 컴포넌트와 동기화하는 방법을 잘 보여주고 있다. `useRef`를 통해 DOM에 직접 접근함으로써 리액트의 제어 컴포넌트 패턴을 유지하면서도, 비제어적인 `file` 입력의 한계를 극복할 수 있다.


## 사용자가 올린 이미지 preview 만들기 (feat. side Effect)

# `useEffect`의 역할과 사이드 이펙트 처리


`useEffect` 훅은 리액트 컴포넌트가 렌더링된 이후에 추가적인 [**사이드 이펙트**](/1184ef560994801eb6f5d8e459177fc7#1184ef560994807d8c81d7f205d0334d)[**⁽¹⁾**](/1184ef560994801eb6f5d8e459177fc7#1184ef560994807d8c81d7f205d0334d)를 수행하기 위해 사용된다.


## 사이드 이펙트란

> 컴포넌트의 렌더링 과정 외에서 발생하는 모든 동작을 의미한다. 예를 들어, API 요청, 데이터 페칭, 타이머 설정 등이 대표적인 사이드 이펙트이다. 이 코드에서는 파일 미리보기를 생성하고, 미리보기를 해제하는 것이 사이드 이펙트이다.

### 코드 설명


```javascript
useEffect(() => {
  if (!value) return; // 파일이 없을 경우 아무 동작도 하지 않음
  const nextPreview = URL.createObjectURL(value); // 파일의 URL을 생성하여 미리보기 URL을 만듦
  setPreview(nextPreview); // 미리보기 이미지 URL을 상태로 설정

  return () => {
    setPreview(); // 컴포넌트가 언마운트되거나 파일이 변경되면 미리보기 상태를 초기화
    URL.revokeObjectURL(nextPreview); // 메모리 누수를 방지하기 위해 URL을 해제
  };
}, [value]); // value가 변경될 때마다 이 사이드 이펙트가 실행됨
```

- `useEffect` 내부에서, `value`가 변경될 때마다 새로운 **파일 미리보기 URL**을 생성한다. `URL.createObjectURL(value)`를 통해 파일을 미리보기할 수 있는 URL을 만들어, `preview` 상태에 저장하여 이미지를 보여준다.
- **사이드 이펙트**는 `return`문에 작성된 정리(cleanup) 함수로 관리된다. 컴포넌트가 언마운트되거나 파일이 변경되었을 때, `URL.revokeObjectURL(nextPreview)`를 통해 [메모리 누수](/1184ef560994801eb6f5d8e459177fc7#1184ef56099480d699fcdb20e245ef1b)[⁽²⁾](/1184ef560994801eb6f5d8e459177fc7#1184ef56099480d699fcdb20e245ef1b)를 방지한다. 이 작업을 **사이트 이펙트의 정리**라고 할 수 있다. 생성된 미리보기 URL을 해제하지 않으면 브라우저의 메모리에 쌓여 메모리 누수가 발생할 수 있기 때문이다.

### `preview`를 보여주는 방법


`useEffect`에서 파일 미리보기 URL을 생성한 후, `preview`라는 상태에 그 URL을 저장한다. `preview` 상태를 이용해 이미지 미리보기를 화면에 출력한다.


```javascript
<img src={preview} alt="이미지 미리보기" />
```

- `preview`는 파일을 선택할 때마다 업데이트되며, 이미지 미리보기를 `<img>` 태그로 렌더링한다.
- 만약 `value`가 없으면 미리보기가 표시되지 않는다.

### 메모리 관리


이 코드에서는 `URL.revokeObjectURL(nextPreview)`를 사용해 메모리 누수를 방지하고 있다. `URL.createObjectURL()`로 생성된 URL은 브라우저 메모리에 객체를 할당하기 때문에, 사용 후 이를 명시적으로 해제해야 한다. 그렇지 않으면 메모리가 점점 쌓이면서 성능에 악영향을 미치게 된다.


이를 방지하기 위해, 파일이 변경되거나 컴포넌트가 언마운트될 때마다 **정리(cleanup) 함수**에서 `URL.revokeObjectURL()`을 호출하여 미리보기 URL을 해제하는 것이 중요하다.


이 코드에서는 `useEffect` 훅을 사용해 사이드 이펙트(파일 미리보기 생성 및 메모리 해제)를 처리하고 있으며, 이를 통해 파일을 업로드할 때 발생할 수 있는 메모리 누수를 효과적으로 방지하고 있다.


---


### 각주


1. **사이드 이펙트** : 함수가 그 함수의 외부에 영향을 미치는 모든 행위를 의미한다. 프로그래밍에서 일반적으로 함수는 입력을 받아서 출력만을 반환하는데, 이 과정에서 외부 상태를 변경하거나 외부 데이터를 읽고 수정하는 행위를 **사이드 이펙트**라고 부른다.


2. **메모리 누수** : **사용하지 않는 메모리가 해제되지 않고 계속해서 남아 있는 상황**을 의미한다. 이는 주로 컴포넌트가 **언마운트**(즉, 화면에서 사라질 때)될 때, 여전히 메모리를 차지하는 리소스가 정리되지 않아서 발생한다.
👉🏻 [메모리 누수가 발생하는지 확인하기](/1184ef560994802b8877d4a6715719a1)


## input 별점 만들기

# 들어가기에 앞서..


해당 기능을 구현하기 위해서 알아야하는 것들이 있다.


## onSelect 이벤트 핸들러
> `onSelect` 이벤트 핸들러는 HTML 요소에서 **텍스트나 요소가 선택될 때** 호출되는 이벤트를 처리하는 함수입니다. 주로 사용자는 텍스트를 드래그하거나 클릭하여 선택할 때 이 이벤트가 발생합니다. 예를 들어, 사용자가 텍스트를 마우스로 드래그하여 선택하면 해당 이벤트가 발생합니다.

### 주요 특징

- **텍스트 선택**: 사용자가 텍스트를 선택할 때 발생합니다. 예를 들어, 사용자가 마우스를 드래그하여 텍스트를 강조 표시하면 `onSelect` 이벤트가 발생합니다.
- **입력 요소 선택**: 텍스트 입력 필드(`<input>`, `<textarea>`)에서 텍스트를 선택할 때도 사용할 수 있습니다.

### 예시 코드


```javascript
import React, { useState } from 'react';

function SelectableText() {
  const [selectedText, setSelectedText] = useState('');

  const handleSelect = (event) => {
    const selection = window.getSelection().toString();
    setSelectedText(selection);
  };

  return (
    <div>
      <p onSelect={handleSelect}>
        이 문장을 선택하면 선택된 텍스트가 아래에 표시됩니다.
      </p>
      {selectedText && <p>선택된 텍스트: {selectedText}</p>}
    </div>
  );
}

export default SelectableText;
```


### 설명

- **`onSelect`** **이벤트 핸들러**: `<p>` 태그 내에서 사용자가 텍스트를 선택할 때 `handleSelect` 함수가 호출됩니다.
- **`window.getSelection()`**: 사용자가 선택한 텍스트를 가져오는 메서드입니다. 이 예제에서는 `window.getSelection().toString()`을 통해 선택된 텍스트를 가져와 상태에 저장하고, 선택된 텍스트를 화면에 표시합니다. ⇒ `.toString()` 문자열 변환 메서드

### 주의점

- **지원하는 요소**: `onSelect`는 주로 텍스트 관련 요소(예: `<input>`, `<textarea>`, `<p>`)에서 유용합니다. 이미지나 다른 비텍스트 요소에서는 `onSelect` 이벤트가 발생하지 않을 수 있습니다.
- **브라우저 호환성**: 대부분의 브라우저에서 지원되지만 특정 요소나 상황에서는 다르게 동작할 수 있습니다.

따라서 `onSelect`는 사용자가 텍스트를 선택할 때 그 정보를 수집하거나 다른 동작을 실행하는 데 유용한 이벤트 핸들러입니다.


## onMouseOver , onMouseOut이벤트 핸들러
> `onHover`는 자바스크립트나 리액트에서 마우스가 특정 요소 위로 올려질 때(hover 상태일 때) 발생하는 **이벤트를 처리**하기 위한 이벤트 핸들러입니다. 웹에서는 CSS의 `:hover` 의사 클래스와 자바스크립트 이벤트를 통해 `hover` 동작을 구현할 수 있습니다.

### 웹에서 `hover` 상태란?

- **마우스가 요소 위에 있을 때**: 사용자가 마우스를 화면의 특정 요소(버튼, 이미지 등) 위에 올려놓으면 발생하는 상태를 뜻합니다. 이 상태에서 요소의 스타일을 변경하거나 추가 동작을 트리거할 수 있습니다.

### `onHover`와 관련된 자바스크립트 이벤트


자바스크립트에서 **hover 동작**을 구현하려면 다음 두 가지 이벤트를 사용할 수 있습니다:

1. **`onMouseOver`**: 마우스가 요소 위로 올려질 때 발생하는 이벤트.
2. **`onMouseOut`**: 마우스가 요소 밖으로 나갈 때 발생하는 이벤트.

### 리액트에서의 `onMouseOver`와 `onMouseOut`


리액트에서는 `onHover` 이벤트는 없지만, 대신에 **`onMouseOver`**와 **`onMouseOut`** 이벤트 핸들러를 사용해 `hover` 동작을 처리할 수 있습니다.


### 예시 코드 (리액트)


```javascript
import React, { useState } from 'react';

const HoverComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
        backgroundColor: isHovered ? 'lightblue' : 'lightgray',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      {isHovered ? 'Hovering!' : 'Hover over me!'}
    </div>
  );
};

export default HoverComponent;
```


### 설명:

- **`onMouseOver`**: 마우스가 요소 위로 올라가면 `handleMouseOver` 함수가 실행되며, 상태 `isHovered`가 `true`로 변경됩니다.
- **`onMouseOut`**: 마우스가 요소에서 벗어나면 `handleMouseOut` 함수가 실행되며, 상태 `isHovered`가 `false`로 변경됩니다.
- **결과**: 사용자가 해당 요소 위에 마우스를 올리면 배경색이 바뀌고, 텍스트가 변경됩니다.

### CSS로 hover 처리


보통은 간단한 UI 변경은 **CSS의** **`:hover`** **의사 클래스**를 사용하여 처리할 수 있습니다.


```css
.button {
  background-color: lightgray;
  padding: 10px;
  text-align: center;
}

.button:hover {
  background-color: lightblue;
}
```


이처럼 `onHover`와 관련된 기능을 구현하려면 자바스크립트에서는 `onMouseOver`와 `onMouseOut` 이벤트를 활용하고, CSS에서는 `:hover`를 이용하여 간단하게 처리할 수 있습니다.


# 숫자로 표기된 rating을 특문으로 꾸미기


## 별점을 표기할 Rating 컴포넌트 만들기


![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-10-08_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.29.51.png](/images/migrated-notion/react/_E1_84_89_E1_85_B3_E1_84_8F_E1_85_B3_E1_84_85_E1_85_B5_E1_86.png)


우선, 위와 같은 별점 UI를 생성하여, form input에도 해당 컴포넌트를 재사용 할 예정이다.


먼저 해야할 것은 Rating값을 넘겨받아, 받은 Rating 수만큼 별 모양에 class를 추가하여, 표현하려한다.


```javascript
// ReviewListItem.js
<Rating value={item.rating} />
```


이렇게 부모 컴포넌트에서 item.rating값을 받아 value props로 전달 할 예정이다.


```javascript
import './Rating.css';

const RATINGS = [1, 2, 3, 4, 5]; // 총 갯수를 표기할 배열 생성

function Star({ selected = false}) { // 초기값은 false
  const className = `Rating-star ${selected ? 'selected' : ''}`; // 삼항연산자를 이용한 class 확장 여부 조건 추가

  return (
    <span
      className={className}
    >
      ★
    </span>
  );
}

function Rating({ value = 0 }) {
  return (
    <div>
      {RATINGS.map((rating) => (
        <Star
          key={rating} // 배열을 나열할땐 key값이 필수
          selected={value >= rating} // 여기서 value는 props, rating은 RATINGS 배열을 순차적으로 돌면서 체크하는 것(1,2,3,4,5)
        />
      ))}
    </div>
  );
}

export default Rating;
```


위 코드에서 selected={value >= rating} 부분을 풀어서 말하면 아래와 같다.


```javascript
selected={value >= 1}
selected={value >= 2}
selected={value >= 3}
selected={value >= 4}
selected={value >= 5}
```


그다음 살펴볼것은 Star 컴포넌트인데, selected의 조건값이 true일때는 class를 붙혀서 별의 색상을 칠해줄것이다.


이렇게 하면 영화리스트의 별점 숫자값을 좀 더 이쁜 UI로 보여줄 수 있다.


# input rating에 rating 컴포넌트 재사용하기


앞서 우리는 rating 컴포넌트를 생성 해 주었다.


우선 input rating은 

- 사용자가 별점에 hover했을때 ⇒ 호버한 별점 만큼 미리 보여주기
- mouseout이 되었을 때 ⇒ 사용자가 클릭한 rating 값을 그대로 유지하여 보여주기
- click했을때 ⇒ 클릭 된 star의 가진 rating만큼 class 붙혀주기

이런 핸들러 동작이 필요하다.

1. RatingInput 컴포넌트 만들기

```javascript
import { useState } from 'react';
import './RatingInput.css';

function RatingInput({ value }) {
  const [rating, setRating] = useState(value);

  return (
    <Rating
      className="RatingInput"
      value={rating}

    />
  );
}
```


간단한 css와 함께 rating input의 rating 상태를 관리할 state를 추가해준다.


여기서 rating input이 받는 props는 input rating이 사용 될 reviewForm컴포넌트에서 관리되는 상태를 넘겨받는다.


```javascript
value={values.rating}
```


넘겨받은 value는 star에서도 사용이 되어야하기때문에, rating 컴포넌트에도 value로 props를 전달해준다.


이제 동작 핸들러를 생성해줘야하는데 별점을 클릭했을때의 핸들러를 등록해보자


상위 컴포넌트에서 사용되는 handleChange의 핸들러를 사용하기위해서 onChange props를 받아야한다.


그리고 해당 함수에게 전달해줄 아규먼트 중 name의 값도 필요하기때문에 name props도 전달받는다.


```javascript
import { useState } from 'react';
import Rating from './Rating';

function RatingInput({ name, value, onChange }) {
  const [rating, setRating] = useState(value);

  const handleSelect = (nextValue) => onChange(name, nextValue); // 가장 최신의 값 가져오기

  const handleMouseOut = () => setRating(value);

  return (
    <Rating
      className="RatingInput"
      value={rating}
      onSelect={handleSelect}
      onHover={setRating}
      onMouseOut={handleMouseOut}
    />
  );
}

export default RatingInput;
```


여기서 handleSelect와 handleMouseOut이 저렇게 작성된 이유는 실제 동작할 핸들러는 star에서 동작하기 때문이다.


이때 star에서 rating의 상태를 변경하는 핸들러를 추가할꺼지만, 자식 요소가 부모 요소에서 관리되는 상태를 변경하기 위해서는 state 리프팅이 필요하기때문에 star가 부모상태를 변경할수있게 도와주는 도구를 props로 내려주는 것과 같다.


```javascript
import './Rating.css';

const RATINGS = [1, 2, 3, 4, 5];

function Star({ selected = false, rating = 0, onSelect, onHover }) {
  const className = `Rating-star ${selected ? 'selected' : ''}`;

  const handleClick = onSelect ? () => onSelect(rating) : undefined;

  const handleMouesOver = onHover ? () => onHover(rating) : undefined;

  return (
    <span
      className={className}
      onClick={handleClick}
      onMouseOver={handleMouesOver}
    >
      ★
    </span>
  );
}

function Rating({ className, value = 0, onSelect, onHover, onMouseOut }) {
  return (
    <div className={className} onMouseOut={onMouseOut}>
      {RATINGS.map((rating) => (
        <Star
          key={rating}
          selected={value >= rating}
          rating={rating}
          onSelect={onSelect}
          onHover={onHover}
        />
      ))}
    </div>
  );
}

export default Rating;
```


최종적으로 star에서 onClick과 onMouseOver가 동작함으로 부모의 상태를 변경하기위해 필요한 함수들을 Rating 컴포넌트를 거쳐서 star까지 도구 전달을 하게 된다.


이렇게하면 star에서 일어난 이벤트를 통해 RatingInput의 상태를 변경할 수 있다.


## 데이터 보내기

## api로 post 요청하기

현재 사용되는 실습 api의 POST body 타입은 **`formData`** 형식으로 받고 있기때문에,


요청 로직 **`body`**에 **`formData`**(createReviews 함수에 받은 매개변수)를 입력해준다.


```javascript
export async function createReviews(formData) {
  const response = await fetch(`${BASE_URL}/film-reviews`, {

    method: "POST",
    body: formData, // get method 양식 중 이부분만 다름

  });
  if (!response.ok) {
    throw new Error("리뷰를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}
```


**`method : POST`**를 사용하는 방식은 기존의 **`GET`** 요청과 크게 다를바가 없다.


우리가 서버에 요청할 방식 **`method`** 입력과 전달할 **`body`**에 내용만 전달하면 되기 때문이다.


우선, 작성된 **`ReviewForm`**을 확인해보자


```javascript
import { useState } from "react";
import FileInput from "./FileInput";
import RatingInput from "./RatingInput";

import { createReviews } from "../api"; // 함수 import


const INITIAL_VALUES = {
  title: "",
  rating: 0,
  content: "",
  imgFile: null,
};

function ReviewForm() {

  const [isSubmitting, setIsSubmitting] = useState(false); // submit 상태 state


  const [submittingError, setSubmittingError] = useState(null); // error 상태

  const [values, setValues] = useState(INITIAL_VALUES);

  const handleChange = ...

  const handleInputChange = ...

  const handleSubmit = async (e) => {
    e.preventDefault();

    
const formData = new FormData(); // new FormData 객체 생성


    formData.append("title", values.title);
    formData.append("rating", values.rating);
    formData.append("content", values.content);
    formData.append("imgFile", values.imgFile); // formData객체에 추가

    try {
      
setIsSubmitting(true);

      
setSubmittingError(null);

      
await createReviews(formData); // POST 요청을 보낼 formData 전달 (비동기로 만들기 위해 await 사용)

    } catch (error) {
      
setSubmittingError(error);

      return;
    } finally {
      
setIsSubmitting(false);

    }

    setValues(INITIAL_VALUES); // values 초기화

  };
  return (
    <form className='ReviewForm' onSubmit={handleSubmit}>
      <FileInput
        name='imgFile'
        value={values.imgFile}
        onChange={handleChange}
      />
      <input
        type='text'
        name='title'
        value={values.title}
        onChange={handleInputChange}
      />
      <RatingInput
        type='number'
        name='rating'
        value={values.rating}
        onChange={handleChange}
      />
      <textarea
        name='content'
        value={values.content}
        onChange={handleInputChange}
      />
      <button type='submit' 
disabled={isSubmitting}
>
        확인
      </button>
      
{submittingError?.message && <div>{submittingError.message}</div>}

    </form>
  );
}

export default ReviewForm;
```


동작 형태와 참조에 대해서는 하이라이팅과 주석으로 표기하였으니, 참고하면 될 것 같다.


하지만 여기서 짚고 넘어가야할 부분은 아래와 같다.


## FormData와 `append()` 설명


```javascript
const formData = new FormData(); // new FormData 객체 생성


    formData.append("title", values.title);
    formData.append("rating", values.rating);
    formData.append("content", values.content);
    formData.append("imgFile", values.imgFile); // formData객체에 추가
```


### FormData 객체

> **`FormData`** **객체**는 HTML 폼에서 제출된 데이터를 쉽게 **JavaScript에서 조작**하거나 **Ajax를 통해 서버로 전송**하기 위해 제공되는 객체입니다.

### **`append()`** 메서드

> **`append()`** **메서드**는 **키-값 쌍**을 추가하여 폼 데이터를 만들 수 있게 합니다.  
> 이 메서드를 통해 폼 데이터에 **문자열, 파일, 숫자 등** 다양한 값을 추가할 수 있습니다.

### FormData 객체와 HTTP 요청

> `FormData` 객체는 보통 **Ajax 요청**을 통해 서버로 전송됩니다. 주로 **`fetch`** **API**나 `XMLHttpRequest`와 함께 사용됩니다.  
> **POST 요청**을 통해 서버로 데이터를 보낼 때, `FormData`는 **효율적이고 직관적인 방법**을 제공합니다.

## 리스폰스 반영하기

이전 포스팅에서 전달했던 POST 요청의 리스폰스를 받아와 기존 list에 추가해주는 동작을 넣으려고 한다.


```javascript
import { useState } from "react";
import FileInput from "./FileInput";
import RatingInput from "./RatingInput";
import { createReviews } from "../api";

const INITIAL_VALUES = {
  title: "",
  rating: 0,
  content: "",
  imgFile: null,
};

function ReviewForm(
{ onSubmitSuccess }
) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleChange = ...

  const handleInputChange = ...


  let result;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("rating", values.rating);
    formData.append("content", values.content);
    formData.append("imgFile", values.imgFile);
    try {
      setIsSubmitting(true);
      setSubmittingError(null);
      
result = await createReviews(formData);

    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }
    
const { review } = result; // response = review: {} 이런식으로 받아온다.

    
onSubmitSuccess
(
review
);
    setValues(INITIAL_VALUES);
  };
  return (
    <form className='ReviewForm' onSubmit={handleSubmit}>
			...
    </form>
  );
}

export default ReviewForm;
```


```javascript
import { useEffect, useState } from "react";
import ReviewList from "./components/ReviewList";
import { getReviews } from "./api";
import ReviewForm from "./components/ReviewForm";

const LIMIT = 6;
function App() {
  const [items, 
setItems
] = useState(
[]
);
	... // 다른 state들

	...

  const handleLoad = async ...

  const handleLoadMore = ...

  const 
handleSubmitSuccess
 = (
review
) => {
    
setItems
(
(prevItems)
 => [
review
, 
...prevItems
]);
  };

  useEffect(...);

  return (
    <div>
			...
      <ReviewForm 
onSubmitSuccess
={
handleSubmitSuccess
} />
      ...
    </div>
  );
}

export default App;
```


### state 리프팅 ( state 끌올 )

- 자식 : 나 **`item state`** 변경할껀데, 변경 할 수 있게 함수 내려줘
- 부모 : 그래 **`props`**로 함수 전달 해줄테니까 사용해

```javascript
// ReviewForm.js

onSubmitSuccess
(
review
);
```


```javascript
// App.js
const 
handleSubmitSuccess
 = (
review
) => {
  
setItems
(
(prevItems)
 => [
review
, 
...prevItems
]);
};
```


위 함수는 같은 함수이다.


부모 컴포넌트에서 선언을 해주고, 자식 컴포넌트에서 호출하여 사용한 것


## 글 수정하기

글 수정하는 기능을 구현하기 위해서는 기존에 보여줬던 영화 리스트에 수정 버튼을 추가하여, 해당 버튼을 눌렀을 때 ReviewForm이 나오는 것부터 구현을 해야한다.


여기서 중요한 핵심은 수정버튼을 눌렀을 때 **`ReviewList`**에서 <u>**현재 수정중인 요소를 기억**</u>해두고, 렌더링 할때는 <u>**수정중인 요소만 입력폼으로 렌더링 시키는 것**</u>이다.


## 1. 수정버튼을 눌렀을때 **`ReviewForm`** 나오게 하기


```javascript
import { useState } from "react";
import Rating from "./Rating";
import "./ReviewList.css";
import ReviewForm from "./ReviewForm";

const formatDate = ...

const ReviewList = ({ items, onDelete }) => {
  
const [editingId, 
setEditingId
] = useState(null); // 수정버튼을 누른 item의 id값을 받을 state


  return (
    <ul>
      {items.map((item) => {

        if (item.id === editingId) { // item.id값과 editingId가 같으면, ReviewForm을 보여주기
          return (
            <li key={item.id}>
              <ReviewForm />
            </li>
          );
        }

        return (
          <li key={item.id}>
            <ReviewListItem
              item={item}
              onDelete={onDelete}
              
onEdit
={
setEditingId
}

            />
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewList;
```


```javascript
const ReviewListItem = ({ item, onDelete, 
onEdit
 }) => {
  const handleDeleteClick = () => {
    onDelete(item.id);
  };


  const 
handleEditClick
 = () => {
    
onEdit(item.id)
;

  };


  return (
    <div className='ReviewListItem'>
      <img className='ReviewListItem-img' src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <Rating value={item.rating} />
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button 
onClick={
handleEditClick
}
>수정</button>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
```


여기까지 작성했을때 수정버튼을 누르면 해당 리뷰가 입력 폼으로 변경되는 것을 확인 할 수 있을것이다.


지금은 form input에 기존의 리뷰 내용이 담겨있지않기 때문에 **`ReviewForm`**을 수정해보자.


## 2. 입력폼에 기존의 내용이 들어가게 하기


```javascript
const INITIAL_VALUES = {
  title: "",
  rating: 0,
  content: "",
  imgFile: null,
};

function ReviewForm({
  
initialValues
 = INITIAL_VALUES,

  onSubmitSuccess,
}) {
	...
  const [values, setValues] = useState(
initialValues
);

  const handleChange = ...
  
  const handleInputChange = ...
  
  let result;
  const handleSubmit = async ...
  
  return (
    <form className='ReviewForm' onSubmit={handleSubmit}>
			...
    </form>
  );
}

export default ReviewForm;
```


```javascript
const ReviewList = ({ items, onDelete }) => {
  const [editingId, setEditingId] = useState(null);

  const handleCancel = () => setEditingId(null);
  return (
    <ul>
      {items.map((item) => {
        if (item.id === editingId) {
          const 
{ imgUrl, title, rating, content }
 = item;
          const 
initialValues
 = 
{ title, rating, content }
;
	          // 수정버튼을 누른 editingId와 item.id가 같으면 해당 item의 속성값을 가져온다.
          return (
            <li key={item.id}>
              <ReviewForm
                
initialValues
={
initialValues
}

              />
            </li>
          );
        }
        return (
          <li key={item.id}>
            <ReviewListItem
              item={item}
              onDelete={onDelete}
              onEdit={setEditingId}
            />
          </li>
        );
      })}
    </ul>
  );
};
```


## 3. 취소 버튼 만들기


이제 취소 버튼을 눌렀을때, 다시 기존의 값으로 돌아가기위한 코드를 작성해야한다.


취소버튼은 수정을 하려고 눌렀다가 취소를 하는거라서 ReviewForm일때만 취소가 나와야한다.


```javascript
const INITIAL_VALUES = {
  title: "",
  rating: 0,
  content: "",
  imgFile: null,
};

function ReviewForm({
  initialValues = INITIAL_VALUES,
  onSubmitSuccess,
  
onCancel
,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const [values, setValues] = useState(initialValues);

  const handleChange = ...

  const handleInputChange = ...

  let result;
  const handleSubmit = async ...

  return (
    <form className='ReviewForm' onSubmit={handleSubmit}>
			...
    
  {onCancel && <button onClick={
onCancel
}>취소</button>} // 조건부 렌더링을 통해서 onCancel가 있으면 취소버튼 노출

      <button type='submit' disabled={isSubmitting}>
        확인
      </button>
      {submittingError?.message && <div>{submittingError.message}</div>}
    </form>
  );
}

export default ReviewForm;
```


```javascript
const ReviewList = ({ items, onDelete }) => {
  const [editingId, setEditingId] = useState(null);

  
const handleCancel = () => setEditingId(null);

  return (
    <ul>
      {items.map((item) => {
        if (item.id === editingId) {
          const { title, rating, content } = item;
          const initialValues = { title, rating, content };
          return (
            <li key={item.id}>
              <ReviewForm
                initialValues={initialValues}
                
onCancel
={
handleCancel
}
              />
            </li>
          );
        }
        return (
          <li key={item.id}>
            <ReviewListItem
              item={item}
              onDelete={onDelete}
              onEdit={setEditingId}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewList;
```


### 이슈 발생


지금 여기까지 진행하다보면 한가지 이슈가 발생한다.


수정 버튼을 눌렀을때 input안에 선택한 리뷰의 텍스트 들이 잘 들어가있지만 이미지는 따라서 보여주지않는다.


그 이유는 이미 서버에 저장된 이미지 데이터는 이미지 주소값을 리턴하기때문에 그렇다.


그렇기 때문에 코드를 수정해주어야한다.


```javascript
const ReviewList = ({ items, onDelete }) => {
  const [editingId, setEditingId] = useState(null);

  const handleCancel = () => setEditingId(null);
  return (
    <ul>
      {items.map((item) => {
        if (item.id === editingId) {
        // 리스트 imgUrl 값 가져오기
          const { 
imgUrl,
 title, rating, content } = item;
          const initialValues = { title, rating, content };
          return (
            <li key={item.id}>
              <ReviewForm
                initialValues={initialValues}
                
initialPreview
={
imgUrl
}

                onCancel={handleCancel}
              />
            </li>
          );
        }
        return (
          <li key={item.id}>
            <ReviewListItem
              item={item}
              onDelete={onDelete}
              onEdit={setEditingId}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewList;
```


```javascript
...

function ReviewForm({
  initialValues = INITIAL_VALUES,
  onSubmitSuccess,
  onCancel,
  
initialPreview
,
}) {
	...
  return (
    <form className='ReviewForm' onSubmit={handleSubmit}>
      <FileInput
        name='imgFile'
        value={values.imgFile}
        
initialPreview
={
initialPreview
}

        onChange={handleChange}
      />
			...
    </form>
  );
}

export default ReviewForm;
```


```javascript
import { useEffect, useRef, useState } from "react";
// props로 전달받아서
function FileInput({ name, value, onChange, 
initialPreview
 }) {
  const inputRef = useRef();
  // 초기값으로 지정
  const [preview, setPreview] = useState(
initialPreview
);

  const handleChange = ...

  const handleClearClick = ...

  useEffect(() => {
    if (!value) return; // 검증
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
    // 클린업코드에도 초기값 지정
      setPreview(
initialPreview
);
      URL.revokeObjectURL(nextPreview);
    };
    // 수정한 이미지가 변경될때 리렌더링 되야하니, 디펜더스 배열에도 추가 시켜준다.
  }, [value, 
initialPreview
]);

  return (
   ...
  );
}

export default FileInput;
```


## 수정된 글을 서버에 올리고, 새로 글을 등록하는 HTTP 요청 함수를 props만 변경하면 같이 사용 할 수 있도록 수정


아래부터는 모든 코드를 작성하지않고 수정된 부분만 작성하도록 하겠다.


```javascript
function ReviewForm({ onSubmit }
```


우선 HTTP 요청방식을 props통해서 수정을 하여 사용해야하니, 받을 props를 **`onSubmit`**으로 지정해주겠다.


그리고 ReviewForm에서 작성했던, POST 요청 함수를 props이름으로 변경해준다.


```javascript
// 수정 전
result = await createReviews(formData);
// 수정 후
result = await onSubmit(formData);
```


그리고 해당 props를 내려줄 App 컴포넌트로 이동해서 ReviewForm에 props로 내려준다.


```javascript
<ReviewForm onSubmit={createReviews}/>
```


추가적으로, 기존에 작성해 두었던 `handleSubmitSuccess`은 좀 더 직관적인 이름으로 변경해준다.


```javascript
// 변경전
<ReviewForm onSubmit={createReviews} onSubmitSuccess={handleSubmitSuccess}/>
// 변경후
<ReviewForm onSubmit={createReviews} onSubmitSuccess={handleCreateSuccess}/>
```


우리가 이전에 만들었던 ReviewForm의 handleSubmit 함수를 보면,


```javascript
const { review } = result;
onSubmitSuccess(review);
```


네트워크 리퀘스트가 성공했을때 실행되는 함수를 작성해두었다.


이는, 처음에는 글을 등록할때 리스폰스가 도착한 데이터를 반영해주는 함수였는데, <u>**결과적으로는 어떤 네트워크 리퀘스트를 보내도 성공하면 실행되는 함수**</u>이기에 글 수정이 완료되었을때도 마찬가지로 리스폰스가 도착한 데이터를 반영할수있다.


즉, result에 담기는 요청값인 `result = await onSubmit(formData);` 저 onSubmit 이름만 변경해주면,


post, put 요청을 원하는 컴포넌트에 넣어 사용해줄 수 있다는 얘기인 것이다.


## 4. PUT 요청 함수 작성


```javascript
export async function updateReview(id, formData) {
  const response = await fetch(`${BASE_URL}/film-reviews/${id}`, {
    method: "PUT",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("리뷰를 수정하는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}
```


기존 POST와 다른 점은 해당 함수는 id값을 매개변수로 받는다는 것이다.


이제 이 함수를 App 컴포넌트로 와서, props로 요청 함수를 내려준다.


```javascript
<ReviewList
  items={sortedItems}
  onDelete={handleDelete}
  onUpdate={updateReview}
/>
```


그리고 수정되었을때 리스트도 업데이트 해야하기 때문에 `handleUpdateSuccess` 함수를 작성해준다.


```javascript
const 
handleUpdateSuccess
 = (review) => {
    setItems((prevItems) => {
      const splitIdx = prevItems.findIndex((item) => item.id === review.id);
      return [
        ...prevItems.slice(0, splitIdx),
        review,
        ...prevItems.slice(splitIdx + 1),
      ];
    });
  };
```


## map()을 사용해도 될 것 같은데요?

**React의 렌더링 최적화** 측면에서 `map()`과 `slice()`를 사용하는 방식은 실제로 **렌더링 방식**에 차이를 가져올 수 있습니다. 여기에서 두 코드의 차이를 설명드리겠습니다.


### 원래 코드와 최적화 고려


```javascript
const handleUpdateSuccess = (review) => {
  setItems((prevItems) => {
    const splitIdx = prevItems.findIndex((item) => item.id === review.id);
    return [
      ...prevItems.slice(0, splitIdx),
      review,
      ...prevItems.slice(splitIdx + 1),
    ];
  });
};
```


이 코드는 **수정된 요소만 교체**하고, 나머지 요소들을 그대로 유지하는 방식으로 작동합니다. `slice()`를 사용하여 배열을 나누고, **수정된 요소만 교체한 뒤 배열을 다시 병합**합니다. 이 과정에서 `React`는 **수정된 부분만 리렌더링**하려고 합니다.

- **렌더링 최적화 측면**에서, **새로 업데이트된 요소(****`review`****)는 새롭게 참조**되지만, 나머지 요소들은 기존 배열에서 **같은 참조를 유지**하기 때문에 React가 최적화하기 더 쉽습니다.
- 즉, 배열의 대부분이 **기존 참조와 동일**하기 때문에 React의 **렌더링 최적화 알고리즘(React의 "reconciliation")**에서 **변경된 요소만 리렌더링**하려고 합니다.

### 간소화된 코드 (`map()` 사용)


```javascript
const handleUpdateSuccess = (review) => {
  setItems((prevItems) =>
    prevItems.map((item) => (item.id === review.id ? review : item))
  );
};
```


이 코드는 **`map()`****을 사용하여 배열의 요소를 모두 순회**하면서, **조건에 따라 일부 요소만 교체**합니다.

- **모든 요소를 순회**하며 조건에 따라 요소를 반환하거나 교체하기 때문에, 배열의 요소들은 모두 **새로운 참조**를 가지게 됩니다.
- **React의 관점**에서는, `map()`을 통해 **새로운 배열이 생성**되며 **모든 요소가 새로운 참조**를 가지기 때문에, **모든 요소가 변경된 것으로 판단**하여 **배열의 모든 요소를 리렌더링**할 가능성이 높습니다.

### **React 렌더링 최적화 측면에서의 차이점**

- **`slice()`** **방식**:
    - **기존 배열의 대부분의 요소는 동일한 참조**를 유지하기 때문에, React는 변경되지 않은 요소들을 그대로 유지하고 **수정된 요소만 리렌더링**합니다.
    - 즉, **수정된 부분만 교체**되므로 **렌더링 최적화**에 유리합니다.
    - 이 방식은 **불필요한 리렌더링을 최소화**할 수 있어 성능에 유리합니다.
- **`map()`** **방식**:
    - **모든 요소를 새롭게 반환**하기 때문에, React는 **모든 요소가 변경된 것으로 판단**하여 **모든 요소를 리렌더링**할 수 있습니다.
    - 이 경우, 배열의 크기가 커질수록 **불필요한 리렌더링 비용**이 발생할 수 있습니다.

### **React의 Reconciliation 알고리즘과 렌더링 최적화**

- **React의 Reconciliation**: React는 **변경된 부분만 효율적으로 업데이트**하기 위해 **`===` 비교(참조 비교)**를 사용합니다.
    - 배열의 요소가 **동일한 참조를 유지**하면 변경되지 않았다고 판단하여 리렌더링을 생략합니다.
    - 반대로 **새로운 참조**를 가지게 되면 **변경된 것으로 판단**하고 리렌더링을 수행합니다.
- **`slice()`****를 사용하는 방식**은, 배열의 **대부분의 요소가 기존 참조를 유지**하기 때문에 React가 이를 최적화하여 **수정된 부분만 렌더링**하도록 합니다.
- 반면, **`map()`****을 사용하는 방식**은 모든 요소가 **새로운 참조**를 가지기 때문에 React가 **모든 요소를 다시 렌더링**할 수 있습니다.

### **결론**

- **`slice()`** **방식**: 특정 요소만 변경하는 작업을 수행하고 나머지 요소의 참조를 유지하기 때문에, **React에서 불필요한 리렌더링을 줄일 수 있습니다**. 이 방식은 특히 배열이 클 경우, **렌더링 성능 최적화**에 유리합니다.
- **`map()`** **방식**: 모든 요소가 **새로운 참조**를 가지므로, **모든 요소가 변경된 것처럼 인식**되어 **전체 리렌더링**이 발생할 가능성이 큽니다. **배열 크기가 작을 경우**에는 큰 문제가 없지만, 배열 크기가 클 경우 성능에 영향을 줄 수 있습니다.

따라서 **렌더링 최적화**가 중요한 경우라면, 원래의 `slice()` 방식이 더 유리할 수 있습니다. 반대로 **코드의 간결성**을 중요하게 생각하고, 배열이 크지 않다면 `map()` 방식을 사용하는 것이 가독성 측면에서 좋을 수 있습니다.


해당 함수도 ReviewList에 `onUpdateSuccess`라는 키값으로 `handleUpdateSuccess` 함수를 내려준다


위 부모요소에서 내려준 prop를 받아와야한다.


```javascript
const ReviewList = ({ items, onDelete, 
onUpdate
, 
onUpdateSuccess
 }) => {
  const [editingId, 
setEditingId
] = useState(null);

  const handleCancel = () => setEditingId(null);
  return (
    <ul>
      {items.map((item) => {
        if (item.id === editingId) {
          const { 
id
, imgUrl, title, rating, content } = item;
          const initialValues = { title, rating, content, imgUrl: null };

          const 
handleSubmit
 = (
formData
) => 
onUpdate
(
id
, 
formData
);


          const 
handleSubmitSuccess
 = (review) => {
            
onUpdateSuccess
(review);

            
setEditingId(null); 
// 업데이트 후 초기화

          };
          return (
            <li key={item.id}>
              <ReviewForm
                initialValues={initialValues}
                initialPreview={imgUrl}
                onCancel={handleCancel}
                onSubmit={
handleSubmit
}
                onSubmitSuccess={
handleSubmitSuccess
}
              />
            </li>
          );
        }
        return (
          <li key={item.id}>
            <ReviewListItem
              item={item}
              onDelete={onDelete}
              onEdit={setEditingId}
            />
          </li>
        );
      })}
    </ul>
  );
};
```


```javascript
import { useState } from "react";
import FileInput from "./FileInput";
import RatingInput from "./RatingInput";

const INITIAL_VALUES = {
  title: "",
  rating: 0,
  content: "",
  imgFile: null,
};

function ReviewForm({
  initialValues = INITIAL_VALUES,
  
onSubmitSuccess
,
  onCancel,
  initialPreview,
  
onSubmit
,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const [values, setValues] = useState(initialValues);

  const handleChange = (name, value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  let result;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("rating", values.rating);
    formData.append("content", values.content);
    formData.append("imgFile", values.imgFile);
    try {
      setIsSubmitting(true);
      setSubmittingError(null);
      result = await 
onSubmit
(formData);

    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }
    const { review } = result;
    
onSubmitSuccess
(review);

    setValues(INITIAL_VALUES);
  };
  return (
    <form className='ReviewForm' onSubmit={handleSubmit}>
      <FileInput
        name='imgFile'
        value={values.imgFile}
        initialPreview={initialPreview}
        onChange={handleChange}
      />
      <input
        type='text'
        name='title'
        value={values.title}
        onChange={handleInputChange}
      />
      <RatingInput
        type='number'
        name='rating'
        value={values.rating}
        onChange={handleChange}
      />
      <textarea
        name='content'
        value={values.content}
        onChange={handleInputChange}
      />
      {onCancel && <button onClick={onCancel}>취소</button>}
      <button type='submit' disabled={isSubmitting}>
        확인
      </button>
      {submittingError?.message && <div>{submittingError.message}</div>}
    </form>
  );
}

export default ReviewForm;
```


## 글 삭제하기

## 1. 삭제 api 작성


```javascript
export async function deleteReview(id) {
  const response = await fetch(`${BASE_URL}/film-reviews/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("리뷰를 삭제하는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}
```


## 2. 기존 handleDelete 함수 수정


```javascript
const handleDelete = async (id) => {
    const result = await deleteReview(id);
    if (!result) return;

    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
```


## 공통 로직 custom Hooks 만들어 사용하기
> 공통되는 로직을 커스텀 훅으로 묶어서 재사용성을 높히고, 가독성 좋게 만들기

### `App.js`와 `ReviewForm.js`에서 사용되는 공통 로직


```javascript
// App.js
  
  
const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

    
  const handleLoad = async (options) => {
    let result;

    try {
      setIsLoading(true);
      setLoadingError(null);
      result = await getReviews(options);
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }

    const { reviews, paging } = result;
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setOffset(options.offset + reviews.length);
    setHasNext(paging.hasNext);
  };
```


```javascript
// ReviewForm.js
  

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("rating", values.rating);
    formData.append("content", values.content);
    formData.append("imgFile", values.imgFile);
    let result;

    try {
      setIsSubmitting(true);
      setSubmittingError(null);
      result = await onSubmit(formData);
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }

    const { review } = result;
    onSubmitSuccess(review);
    setValues(INITIAL_VALUES);
  };
```


현재 두 파일에서 API 호출하고, 호출하는 과정 중 **API 호출 요청 상태**와 **error의 상태**를 관리하고 있다.


공통으로 사용되는 부분이니, 이 부분을 custom Hooks로 사용하면 좋을 것 같다.


### src 폴더에 hooks 폴더를 만들어 use로 시작하는 js 파일 생성

- 앞서 커스텀 훅은 다른 개발자들도 알아보기 쉽도록 use로 시작하여 네이밍 해주어야한다.
- 이는 함수명도 동일하다.

우선, API를 요청하는 비동기 함수를 나타내는 이름으로 만들어야하니 **`useAsync.js`**로 파일을 생성해준다.


# 커스텀 훅 만들기


## 코드 작성


```javascript
import { useState } from "react";

function 
useAsync
(
asyncFunction
) {
  const [
pending
, 
setPending
] = useState(false);
  const [
error
, 
setError
] = useState(null);

  const 
wrappedFunction
 = async (
...args
) => {
    try {
      
setError
(null);
      
setPending
(true);
      
return
 await 
asyncFunction
(
...args
);
    } catch (error) {
      
setError
(error);
      return;
    } finally {
      
setPending
(false);
    }
  };

  return [
pending
, 
error
, 
wrappedFunction
];
}

export default 
useAsync
;
```


## 살펴보기

- asyncFunction : 해당 부분은 API 요청 함수부분을 인자로 받을 부분이다.
- ...args : 여기는 API 요청 함수를 호출할때 필요한 인자값을 넘겨줄 부분이다.
- setPending ,setError : 이 setter 함수는 API 요청 상태와 Error의 상태를 업데이트해줄 함수이다.
- [pending, error, wrappedFunction] : 각각 API 요청 상태값과 Error의 상태값을 리턴하고, 비동기 함수 자체를 배열로 리턴한다는 뜻이다.
- return : 여기는 API 함수 호출의 결과를 반환해주는 부분이다. 만약 `asyncFunction`함수의 결과가 반환됐다면 try문 안에서 해당 결과를 반환시킬것이고, 그렇지않다면 catch문의 error를 보여줄 것이다. catch문에 있는 `return`의 값은 호출의 결과값이 없기때문에 `undefind`가 반환 될 것이다.

# 커스텀 훅 사용하기


## 코드 수정


```javascript
// App.js
  
  const [
isLoading
, 
loadingError
, 
getReviewsAsync
] = 
useAsync
(
getReviews
);
  
  const handleLoad = async (options) => {
    const 
result
 = await 
getReviewsAsync
(
options
);
    
if (!result) return;

    const { reviews, paging } = result;
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setOffset(options.offset + reviews.length);
    setHasNext(paging.hasNext);
  };
```


## 살펴보기

- useAsync : 우리가 만든 커스텀 훅 함수를 호출한 것이다.
- (getReviews) : API 요청 함수를 인자로 넘겨주는 것이다.
    - 커스텀 훅 부분에서 (asyncFunction) 해당 부분과 같다.
- [isLoading, loadingError, getReviewsAsync] : 해당 부분은 아래와 같다.
    - [pending, error, wrappedFunction]
    - 커스텀 훅에서 리턴하는 배열의 네이밍과 호출했을때 네이밍은 구조분해할당을 통해서, 좀 더 직관적인 네이밍을 지어주기 위해 변경하여 사용되었다.
- options
    - (...args) 와 같다
    - API 함수 호출 시 필요한 인자값을 전달 해준 것이다.
- if (!result) return; : 우리가 리턴한 값이 undefind 일 경우 아래코드를 실행하지않고, 바로 return을 시킨다. (즉, 에러가 발생했을 때)

나머지 `ReviewForm`에서도 해당 방식처럼 사용하면 된다.


# 커스텀 훅에서 객체로 전달 vs 배열로 전달


## 배열로 전달할 경우

- **배열로 리턴**하면 **구조 분해 할당**을 통해 값들을 간단하게 사용할 수 있습니다.
- 배열로 리턴하는 경우, **순서**가 중요합니다. 사용자가 반환된 요소를 받을 때 **순서대로** 사용해야 합니다.

```javascript
// 배열로 리턴
function useAsync(asyncFunction) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const wrappedFunction = async (...args) => {
    try {
      setPending(true);
      setError(null);
      return await asyncFunction(...args);
    } catch (error) {
      setError(error);
      return;
    } finally {
      setPending(false);
    }
  };

  return [pending, error, wrappedFunction];
}
```


```javascript
// 사용 시
const [isLoading, loadingError, getReviewsAsync] = useAsync(getReviews);
```


### 장점

- **구조 분해 할당**이 간단해서 가독성이 좋습니다.
- React의 **`useState`*처럼, 동일한 의미의 값을 나란히 쉽게 사용할 수 있습니다.

### 단점

- 배열로 리턴하면 **순서가 강제**되기 때문에, 어떤 값이 어떤 위치에 들어가는지 **순서를 기억해야** 합니다.
- 만약 반환값이 많아지면 **순서를 관리하기 어렵고 실수할 가능성**이 커집니다.

## 객체로 전달할 경우

- **객체로 리턴**하면, 반환된 값을 **키를 기준으로 구조 분해**하여 사용할 수 있습니다.
- 반환된 값을 **키 이름으로 접근**하기 때문에 **순서와 상관없이** 사용할 수 있습니다.

```javascript
// 객체로 리턴
function useAsync(asyncFunction) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const wrappedFunction = async (...args) => {
    try {
      setPending(true);
      setError(null);
      return await asyncFunction(...args);
    } catch (error) {
      setError(error);
      return;
    } finally {
      setPending(false);
    }
  };

  return {
    pending,
    error,
    execute: wrappedFunction, // 객체의 키 이름을 변경하여 리턴
  };
}
```


```javascript
// 사용 시
const { pending: isLoading, error: loadingError, execute: getReviewsAsync } = useAsync(getReviews);
```


### 장점

- **순서를 기억할 필요 없이**, 반환된 객체의 **키 이름을 기준**으로 필요한 값에 접근할 수 있습니다.
- 반환되는 값이 많아지더라도, **가독성**이 더 좋고, **실수할 가능성**이 줄어듭니다.
- 반환된 값에 **의미 있는 이름**을 부여할 수 있어서 더 직관적입니다.

### 단점

- **구조 분해 할당**할 때 코드가 **조금 더 길어질 수** 있습니다.
- 배열에 비해 **단순하게 값을 나열**하기 어렵기 때문에, 간단한 상황에서는 불필요하게 복잡해 보일 수 있습니다.

# **언제 어떤 방식으로 사용할까?**

- **배열을 리턴하는 경우**:
    - 반환해야 하는 값의 **순서가 중요**하고, 그 **순서가 직관적**일 때 배열을 사용하는 것이 좋습니다.
    - 예를 들어, **React의** **`useState`** 훅처럼 상태 값과 그 상태를 업데이트하는 함수를 **나란히 순서대로** 사용하는 경우 배열이 적합합니다.
    - 반환 값이 **2~3개 정도로 간단**할 때 **배열**이 더 가독성이 좋습니다.
- **객체를 리턴하는 경우**:
    - 반환할 값이 많거나, 반환된 값의 **순서가 중요하지 않은 경우** 객체를 사용합니다.
    - 각 값에 **의미 있는 이름**을 부여하여 코드를 **명확하게** 하고 싶을 때 객체를 사용하는 것이 좋습니다.
    - 만약 추가적인 반환 값들이 생겨날 가능성이 있다면, **객체로 리턴**하는 것이 유지보수와 가독성 측면에서 더 유리합니다.

## useCallBack()

# 시작하기에 앞서…


---


본문은 이전에 작성해두었던 custom Hooks 작성과 해당 custom Hooks를 사용하는 과정 중


`App.js`에서 사용되는 `useEffect`의 디펜더시 배열에 대한 오류 구문 해결 과정 입니다.


[공통 로직 custom Hooks 만들어 사용하기](https://www.notion.so/11a4ef56099480a3b9d1f1d6306692b4) 


우선, 위 방식대로 커스텀 훅을 호출하였다면, `App.js`에서 오류가 발생 할 것이다.


```plain text
WARNING in [eslint] 
src/App.js
  Line 70:6:  React Hook useEffect has a missing dependency: 'handleLoad'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

webpack compiled with 1 warning
```


이를 해석해보면 `useEffect` 훅에서 우리가 커스텀 훅을 사용했던 함수인 ‘`handleLoad`’가 디펜더시 배열에 빠져있으니, 추가해라 라는 소리이다.


이 문제를 해결하기 위해서 `useEffect` 훅의 디펜더시 배열에 `handleLoad`를 추가해보자.


그럼 다음 에러가 발생 할 것이다.


```plain text
WARNING in [eslint] 
src/App.js
  Line 36:9:  The 'handleLoad' function makes the dependencies of useEffect Hook (at line 70) change on every render. To fix this, wrap the definition of 'handleLoad' in its own useCallback() Hook  react-hooks/exhaustive-deps

webpack compiled with 1 warning
```


`handleload`가 `useEffect` 디펜더시에 추가는 되었지만, `handleload`는 렌더링 될때마다 바뀌는 값이니까 `useCallback()`을 이용해 불필요한 렌더링을 방지해라 라는 구문이다.


실제 해당 코드를 구동하여 크롬에서 확인해보면 무한 루프가 발생하게 된다.


```javascript
useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order, handleLoad]);
```


`useEffect`의 디펜더시 배열의 값이 변경되게 되면, 다시 페이지를 로드하게 되는데, `useEffect`안에는 `handleload`의 값을 변경해주는 로직이 작성되어있다. 그럼 디펜더시 배열인 `handleLoad`가 또 변경이 되는거기때문에 다시 또 페이지를 로드하게된다. 이렇게 무한 반복이 되면서 무한 루프에 빠지는 것이다.


이를 해결하기 위해서는 `handleLoad` 함수에 `useCallback`을 이용해주는 것인데


```javascript
const handleLoad = 
useCallback(
 async (options) => {
    const result = await getReviewsAsync(options);
    if (!result) return;
    const { reviews, paging } = result;
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setOffset(options.offset + reviews.length);
    setHasNext(paging.hasNext);
  }
,[])
;
```


이런식으로 불필요한 재렌더링 방지를 위해서 `useCallback` 함수로 감싸줘야한다.


`useCallback`은 `useCallback`안에 감싸진 인자를 기억해두기때문에 기억해두었다가 디펜더시의 값이 변경되지않으면,


다시 재렌더링하는 것이 아닌 기억해둔 것을 재사용하게 된다. 그렇기때문에 불필요한 리렌더링이 되는것을 방지할 수 있다.


그리고 `useCallBack`의 디펜더시는 해당 인자에 담긴 함수를 언제 새로 생성할 것인지 판단하는 기준이 된다.


이렇게 `useCallBack`의 디펜더시를 비워둔채로 저장하게된다면, 또 다른 오류가 발생한다


```javascript
WARNING in [eslint] 
src/App.js
  Line 47:6:  React Hook useCallback has a missing dependency: 'getReviewsAsync'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

webpack compiled with 1 warning
```


이번엔 getReviewsAsync 가 디펜더시에 추가되지않았다는 경고문이 뜬다.


`handleLoad` 함수를 살펴보면 setter 함수의 경우는 리액터에서 제공되는 함수이기에, 디펜더시에 추가해줄 필요가 없다.


경고창 대로 `useCallBack` 함수의 디펜더시에 `getReviewsAsync` 함수를 추가해준다.


여기서, 걱정되는 부분은 `getReviewsAsync` 함수도 매번 변경되는 값이 아닌지 생각해보게 된다.


해당 함수는 앞전에 커스텀 훅으로 만들어두었던, `wrappedFunction`을 가르키는데, 작성해둔 커스텀 훅으로 넘어가보자.


```javascript
function useAsync(asyncFunction) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const 
wrappedFunction
 = async (...args) => {
    try {
      setError(null);
      setPending(true);
      return await asyncFunction(...args);
    } catch (error) {
      setError(error);
      return;
    } finally {
      setPending(false);
    }
  };

  return [pending, error, wrappedFunction];
}
```


보다시피 해당 함수도 매번 새로 생성하기때문에 여기서도 `useCallBack`을 사용해주자.


그렇게 `useCallBack`을 추가해주면 또 디펜더시 에러가 발생한다.


그 이유는 `asyncFunction` 함수를 보면 되는데, `asyncFunction`함수에 변화가 생기면 `wrappedFunction`을 다시 새로만들어야 하니 `asyncFunction` 함수도 디펜더시에 추가해주자.


```javascript
import { useCallback, useState } from "react";

function useAsync(asyncFunction) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const wrappedFunction = useCallback(
    async (...args) => {
      try {
        setError(null);
        setPending(true);
        return await asyncFunction(...args);
      } catch (error) {
        setError(error);
        return;
      } finally {
        setPending(false);
      }
    },
    [asyncFunction]
  );

  return [pending, error, wrappedFunction];
}

export default useAsync;
```


여기서 `asyncFunction` 이 참조하는 값을 찾아서 가보면 app.js에서 해당 부분은 `getReviews` 함수를 인자로 받고있다.


`getReviews` 함수는 API 요청 함수인데 API 요청 함수는 한번 선언되면, 안에 선언되었던 내용들이 변경되지않기때문에 더이상 `useCallBack`을 사용할 필요가 없다.


이렇게 에러 구문을 따라서 에러를 해결해주었는데,


매번 새로 생성하는 함수는 디펜더시로 쓸수없기때문에 `useCallback` 함수로 고정시킬수있었다.


따라서 `useCallback`은 <u>_**함수를 매번 새로만들지않고 재사용하게 해주는 훅이라는 점**_</u>이다.


# 참고


---


[useCallBack()](https://www.notion.so/11a4ef56099480c086dafd308ade5426) 


[useMemo()](https://www.notion.so/11a4ef5609948059882fefbf81e53ade) 


[useCallBack vs useMemo](https://www.notion.so/11a4ef560994808aa86dc1424e4a4f26) 


## 전역 데이터 다루기

# props drilling 이란?


리액트 개발을 하다보면, 부모 컴포넌트에서 자식 컴포넌트까지 props를 전달해주는 과정에서,


최하위 자식 컴포넌트에게 해당 props를 전달해주기 위해, props를 사용하지않고 전달만 해주는 경우가 발생한다.


이런 경우가 2중, 3중 이상으로 발생 할 경우, 무의미한 props를 받아오는 컴포넌트들이 발생될 것이고,


역으로 최하위 자식 컴포넌트에서 해당 props를 관리하고있는 부모를 역으로 찾아갈때도, 한번에 파악하기 힘들다는 단점이 있다.


이를 prop drilling이라고 한다.


# Context api

> 많은 컴포넌트에서 사용하는 데이터를 반복적인 prop 전달 없이 공유할수 있게 도와주는 api이다.

이러한 props drilling을 막기 위해서 나온것이 `context api` 이다.


`context api`는 데이터를 전역으로 상태를 관리 할 수 있게 해주는데, `context api`를 사용할때는


해당 context에서 관리되고 있는 전역의 상태를 공유할 범위를 지정해줘야한다.


해당 범위는 `Context.Provider`로 `children`을 이용하여, 지정이 가능하다.


# 사용방법


---


## context api를 사용하는 방법

먼저 context 파일을 분리하기 위해 context 라는 이름의 폴더를 생성해준다.


우리가 만들것은 LocaleContext 이기 때문에 해당 이름으로 JS 파일을 만들어준다.


```javascript
const { createContext } = require("react");

const LocaleContext = createContext();

export default LocaleContext;
```


기본적으로 createContext를 입력하면 자동 완성으로 폼이 작성되는데, createContext를 LocaleContext 변수에 할당해준다.


우리가 실제로 사용하게 될 변수명이다.


export를 통해서 외부에서 import하여 사용할 수 있도록 만들어준다.


그 후 전역 상태를 적용시킬 범위를 생성해줘야하는데


```javascript
<LocaleContext.Provider value={...}>
</LocaleContext.Provider>
```


이렇게 감싸주면 된다. 그리고 자식에게 전달할 값은 해당 컴포넌트에 value로 넘겨주면 된다.


제대로 props가 전달되는지 테스트 하기 위해서 값을 넣어주고,


```javascript
<LocaleContext.Provider value={'ko'}>
	// movieList components
</LocaleContext.Provider>
```


사용할 부분에 useContext 함수를 호출하여, 우리가 만든 LocaleContext 변수를 불러와준다.


```javascript
const locale = useContext(LocaleContext);
```


이렇게 하면 해당 locale의 값을 props를 여러번 거치지 않고서도 바로 접근이 가능하다.


또한 state를 넘겨주는것도 가능하다.


우리는 select 태그와 options태그를 이용해 옵션을 선택하면 select값과 해당 state를 변경하게끔 할수있게 만들것이다.


```javascript
function LocaleSelect({ value, onChange }) {
  const handleChange = (e) => onChange(e.target.value);
  return (
    <select value={value} onChange={handleChange}>
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  );
}

export default LocaleSelect;
```


위와 같이 LocaleSelect 컴포넌트를 생성해주고, app.js에서 locale상태를 관리할 state를 생성해준다.


```javascript
const [locale, setLocale] = useState("ko");

<LocaleContext.Provider value={locale}>
<LocaleSelect value={locale} onChange={setLocale} />
```


그리고 이렇게 값을 전달해주면, value의 값이 변경될때, localeContext가 리렌더링 되면서, 새로받은 value를 보여주게된다.


여기서 context의 단점이있는데 저렇게 전체적으로 LocaleContext를 이용해서 내려주게되면


해당 값이 변경될때 변경되지않는 부분까지 전부 리렌더링 된다는 것이다.


이는 즉, 불필요한 렌더링이 발생하기때문에 적절한 때에 context api를 사용하는것이 중요하다.


## context안에서 state 관리하기

# 이전 포스팅


---


[context api를 사용하는 방법](https://www.notion.so/11a4ef56099480e5a304cf63d05b8c45) 


# 들어가기에 앞서…


---


우리가 이전에 작성했던 코드를 보면 한가지 단점이 있다.


전역으로 사용되는 `state`가 `App` 컴포넌트 안에 선언되어있기 때문에,


만약 `context`를 옮긴다면 해당 `state` 훅도 옮겨줘야하는 번거로움이 발생한다.


그렇기 때문에 해당 포스팅에서는 `context`안에 사용할 `state`를 직접 관리해주고,


전역으로 관리할 `state`를 `custom hooks`를 통해 쉽게 사용하는 방법에 대해서 설명할 예정이다.


## 코드


---


```javascript
// LocaleContext.js

import { createContext, useContext, useState } from "react";

const 
LocaleContext
 = createContext();

// LocaleContext Provider 함수
export function 
LocaleProvider
({ defaultValue = "ko", 
children
 }) {
 
 const [locale, setLocale] = useState(defaultValue);


  return (
    <
LocaleContext.Provider
 value={{ locale, setLocale }}>
      
{children}

    </LocaleContext.Provider>
  );
}

// custom Hooks
export function useLocale() {
  const 
context 
= useContext(
LocaleContext
);

  if (!context) {
    throw new Error("반드시 LocaleProvider 안에서 사용해야 합니다");
  }

  return 
context
; // { locale, setLocale }
}
```


```javascript
// App.js
function App() {
	...

  return (
    <
LocaleProvider 
defaultValue="ko">

      <div>
				...
      </div>

    </
LocaleProvider
>
  );
}

export default App;
```


## 코드 설명


---

1. **`LocaleProvider`**:
    - `LocaleProvider`는 **Context Provider** 컴포넌트로, `locale`과 **`setLocale`** 함수를 `value`로 설정하여 **자식 컴포넌트**들에게 제공합니다.
    - **리턴 값**: **`<LocaleContext.Provider>`*를 반환하며, **`children`** 컴포넌트들이 **locale**과 **setLocale**에 접근할 수 있게 해줍니다.
2. **`useLocale`**:
    - **`useLocale`** 훅은 `LocaleContext`로부터 `locale`과 `setLocale`을 가져옵니다.
    - **리턴 값**: **`context`** 객체(`{ locale, setLocale }`)를 반환합니다. 이 객체는 현재 언어 상태(`locale`)와 언어 변경 함수(`setLocale`)를 포함합니다.

## context 자식요소에 state 사용 방법


---


먼저 우리는 Locale 상태의 값을 변경 함수를 사용할 LocaleSelect 컴포넌트로 이동해서 useLocal 훅을 이용해 불러올것이다.


```javascript
import { useLocale } from "../contexts/LocaleContext";

function LocaleSelect() {
  const { locale, setLocale } = useLocale();

  const handleChange = (e) => setLocale(e.target.value);

  return (
    <select value={locale} onChange={handleChange}>
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  );
}

export default LocaleSelect;
```


그리고 변경된 값에 대해서 출력해줄 부분인 ReviewItem 컴포넌트에서 locale 값을 가져온다.


```javascript
const ReviewListItem = ({... }) => {
  const { locale } = useLocale();

	...

  return (
    <div className="ReviewListItem">
			...
      <div>
			...
        <p>현재 언어 : {locale}</p>
				...
      </div>
    </div>
  );
};
```


# 불필요한 리렌더링을 줄이기 위한 최적화


---


```javascript
const LocaleStateContext = createContext();
const LocaleUpdateContext = createContext();

export function LocaleProvider({ defaultValue = "ko", children }) {
  const [locale, setLocale] = useState(defaultValue);

  return (
    <LocaleStateContext.Provider value={locale}>
      <LocaleUpdateContext.Provider value={setLocale}>
        {children}
      </LocaleUpdateContext.Provider>
    </LocaleStateContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleStateContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}

export function useSetLocale() {
  const context = useContext(LocaleUpdateContext);
  if (context === undefined) {
    throw new Error("useSetLocale must be used within a LocaleProvider");
  }
  return context;
}
```


우리가 이전에 LocaleContext.Provider로 감쌌을때 해당 Locale부분이 변경되면, provider안에 모든 요소가 리렌더링 되게 된다.


지금 기능은 모든 페이지의 언어를 변경하는 부분이라 재렌더링 되는게 맞지만


그렇지 않는 경우에는 위에처럼 provider와 커스텀훅 부분을 분리해서 사용해주는게 최적화에 도움이 된다.


# 다국어 기능 만들기


---


## 다국어 기능 만들기

우선, 해당 언어설정에 맞게 번역을 한 데엍의 객체를 생성해주고,


변경 상태를 관리할 커스텀훅을 생성해준다.


```javascript
// useTranslate.js
import { useLocale } from "../contexts/LocaleContext";

const dict = {
  ko: {
    "confirm button": "확인",
    "cancel button": "취소",
    "edit button": "수정",
    "delete button": "삭제",
  },
  en: {
    "confirm button": "OK",
    "cancel button": "Cancel",
    "edit button": "Edit",
    "delete button": "Delete",
  },
};

function useTranslate() {
  const { locale } = useLocale(); // 변경된 값이 필요하기때문에 useLocale함수 호출하여 locale 값을 가져온다.
  const translate = (key) => dict[locale][key] || "";
  return translate;
}

export default useTranslate;
```


```javascript
// ReviewListItem.js
const ReviewListItem = ({ item, onDelete, onEdit }) => {
  const t = useTranslate(); // 커스텀 훅 호출 => translate 함수를 리턴함

  const handleDeleteClick = () => {
    onDelete(item.id);
  };

  const handleEditClick = () => {
    onEdit(item.id);
  };

  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <Rating value={item.rating} />
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleEditClick}>{t("edit button")}</button>
        <button onClick={handleDeleteClick}>{t("delete button")}</button>
      </div>
    </div>
  );
};
```


`t("edit button")` ⇒ `translate("edit button")` 같은 의미이다.


# 전역 상태 관리 라이브러리


---

- [Flux](https://facebook.github.io/flux/)
- [Redux](https://redux.js.org/)
- [React Query](https://react-query.tanstack.com/) 와 [SWR](https://swr.vercel.app/)
- [Recoil](https://recoiljs.org/ko/)

## 리액트로 웹사이트 만들기

## React Router

> 리액트 컴포넌트로 페이지를 나누는 라이브러리


# Router 사용하기


## BrowserRouter

- 리액트 라우터에서 사용하는 데이터를 모두 가지고있는 요소
- 현재 주소 or 페이지 기록 등을 가지고 있음
- 기본적으로 React Router를 쓰기위해선 필수 요소 이다.

```javascript
import {BrowserRouter} from 'react-router-dom'

function Main() {
	return <BrowserRouter>...</BrowserRouter>
}

export default Main;
```


## Routes, Route

- Routes 컴포넌트 안에서 Route 컴포넌트로 페이지 경로와 보여줄 컴포넌트를 지정해준다.

```javascript
<Routes>
	<Route path="/" element={<HomePage />}/>
	<Route path="courses" element={<CourseListPage />}/>
	<Route path="courses/1" element={<CoursePage />}/>
	<Route path="*" element={<NotFoudPage />}/>
</Routes>
```


여기서 `path=”*”`는 Route가 모든 path링크에 대해서 순회를 하고 순회를 했을때 해당 path와 일치하는값이 없을때 보여주는 페이지를 설정하기 위해서이다. 즉, 없는페이지 표시이다.


## Link

- 리액트 라우터 안에서 a 태그 대신 사용하는 컴포넌트이다.

```javascript
<Link to="/">홈페이지</Link>
<Link to="/courses">수업 탐색</Link>
<Link to="/questions">커뮤니티</Link>
```


# React Router 설치 명령어


```plain text
npm install react-router-dom
```


본 블로그 강의에서는 버전 6을 사용할거기때문에 해당 명령어 뒤에 `@6` 을 추가해서 설치해주었다.


# BrowserRouter 사용방법

- `Router`를 사용할 모든 요소를 `BrowserRouter` 컴포넌트로 감싸준다.

```javascript
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import HomePage from './pages/HomePage';

function Main() {
  return (
    <BrowserRouter>
      <App>
        <HomePage />
      </App>
    </BrowserRouter>
  );
}

export default Main;
```


## NavLink로 네비게이션 구현하기

## NavLink 사용

- `<Link>` 와 `<NavLink>`의 차이는 `<NavLink>`에는 style props로 인라인 스타일 함수를 내려 줄 수 있다.
- 해당 `<NavLink>` 는 style props로 내려줄 함수에 `isActive`를 인자로 받으면, 현재 링크의 경로와 맞는 곳에 지정한 스타일을 넣어줄 수 있다.

```javascript
const getLinkStyle = ({ isActive }) => {
	return {
		textDecoration: isActive ? 'underline' : undefined,
	}
}

<NavLink to="/" style={getLinkStyle}></NavLink>
```


## 하위 페이지 나누기
- 페이지를 작성하다보면 여러 페이지들이 나올텐데 그중 하위 라우트들을 중첩하여 좀더 직관적이고 편리하게 사용할 수 있다.

## 중첩 Route 사용하기


```javascript
<Routes>
  <Route path='/' element={
<HomePage />
} />
  <Route path='courses'>
    <Route index element={
<CourseListPage />
} />
    
// url/courses

		<Route path='react-frontend-development' element={
<CoursePage />
}/>
		
// url/courses/react-frontend-development

  </Route>
  <Route path='wishlist' element={
<WishlistPage />
} />
  <Route path='questions' element={
<QuestionListPage />
} />
  <Route path='questions/616825' element={
<QuestionPage />
} />
</Routes>
```


## 모든 페이지에 공통된 레이아웃을 추가하고싶다면?

- 해당 App.js는 공통 레이아웃을 관리하는 페이지이다.
- 라우터를 이용해서 해당 라우터 안에있는 컴포넌트들에게 공통 레이아웃을 적용시키고 싶다면 공통 레이아웃을 사용할 Route 컴포넌트들을 감싸고있는 Route를 추가해주면된다.

```javascript
// Main.js
<Routes>
  
<Route path='/' element={<App />}>

    <Route index element={<HomePage />} />
    <Route path='courses'>
      <Route index element={<CourseListPage />} />
      <Route path='react-frontend-development' element={<CoursePage />} />
    </Route>
    <Route path='wishlist' element={<WishlistPage />} />
    <Route path='questions' element={<QuestionListPage />} />
    <Route path='questions/616825' element={<QuestionPage />} />
  
</Route>

</Routes>
```

- 기존 App.js에서는 children props를 통해, 페이지를 보여줬는데 Route를 통해서 감싸주었으니, `<Outlet/>` 이라는 컴포넌트로 대신 받을 수 있다.

```javascript
import { Outlet } from "react-router-dom";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "./App.module.css";
import "./App.font.css";

function App() {
  return (
    <>
      <Nav className={styles.nav} />
      <div className={styles.body}>
        
<Outlet />

      </div>
      <Footer className={styles.footer} />
    </>
  );
}

export default App;
```


## useParams로 동적인 경로 만들기

# 들어가기 앞서..


---


[하위 페이지 나누기](https://www.notion.so/11b4ef560994809489e8cfeaa30bff52) 


이전에 만들어두었던 Route를 이용하여, 동적인 경로를 생성해보도록 하겠습니다.


```javascript
// Main.js
<BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}>
      <Route index element={<HomePage />} />
      <Route path='courses'>
        <Route index element={<CourseListPage />} />
        
<Route path='react-frontend-development' element={<CoursePage />} />

      </Route>
      <Route path='wishlist' element={<WishlistPage />} />
      <Route path='questions'>
        <Route index element={<QuestionListPage />} />
        <Route path='616825' element={<QuestionPage />} />
      </Route>
    </Route>
  </Routes>
</BrowserRouter>
```


위 Main.js는 여러 Route를 관리하고있습니다.


그 중 하이라이팅 된 부분을 보시면 path값이 react-frontend-development 로 지정되어있는데요.


해당 경로는 사실 **‘리액트 코스’** 에 대한 부분만 이동 시켜주고있습니다.


/courses 에는 다양한 토픽이 들어가있는데 해당 토픽을 클릭했을때, 클릭한 토픽 링크로 넘어가야겠죠?


그런데 토픽이 많은 갯수로 나열이 되어있다면, 이 많은 토픽들을 일일히 path로 지정해주기에는 무리가 있을 것 같습니다.


그렇기 때문에 동적인 경로로 이동하게끔 변경해주어야합니다.


우선 동적인 경로로 이동을 위해서는 해당 Route path에 `:courseflag` 라는 이름의 변수로 할당시켜주겠습니다.


```javascript
<Route path=':courseflag' element={<CoursePage/>} />
```


⭐️ Route path에 `:` 기호를 붙혀주면, <u>_**해당 변수를 동적 파라미터로 받겠다**_</u> 라는 의미 입니다. ⭐️


우리가 `CoursePage`로 넘어가기전에, `/courses` 경로로 이동해서 넘어가야하니, `CourseListPage` 컴포넌트에서 렌더되는 부분을 살펴보겠습니다.


```javascript
const courses = getCourses();

<div className={styles.courseList}>
  {courses.map((course) => (
    <CourseItem key={course.id} course={course} />
  ))}
</div>
```


미리 만들어둔 `getCourses`함수에서 가져온 `courses`라는 객체를 이용하여 각 리스트에 접근을 하여,


`CourseItem` 컴포넌트를 이용해 각자 리스트를 그려내고 있습니다.


`CourseItem`의 렌더 부분을 살펴봅시다


```javascript
<Card className={styles.courseItem}>
  <div className={styles.thumb} style={thumbStyle}>
    <CourseIcon photoUrl={course.photoUrl} />
  </div>
  <div className={styles.content}>
    <h2 className={styles.title}>
      
<Link to={`/courses/${course.slug}`}>{course.title}</Link>

    </h2>
    <p className={styles.description}>{showSummary && course.summary}</p>
    <div>
      <Tags values={[course.language, difficulty]} />
    </div>
  </div>
</Card>
```


앞전에 저희가 코스 리스트의 타이틀 부분에 Link를 걸어줬는데요.


이동하는 경로를 각 `course`객체의 `slug`라는 키를 가진 값에 접근하도록 되어있습니다. 이제 이 이동하는 경로를 Route path에 연결을 시켜줘야합니다.


이제 `CoursePage` 부분을 살펴볼까요


```javascript
const course = getCourseBySlug('react-frontend-development');
```


저희는 현재 getCourseBySlug 커스텀 함수에 특정한 값을 담아 `course` 변수에 담아주고있습니다.


이 부분을 동적으로 변경을 시켜줘야합니다.


⭐️ 여기서 `getCourseBySlug` 훅은 `Course` 객체의 파라미터로 받은 `slug` 키를 찾아 `slug`의 값과 동일한 **객체를 반환**하는 커스텀 훅 입니다.


## useParams 훅 사용하기


> 📌 useParams란?  
> - React Router에서 제공하는 훅(Hook)으로, **현재 경로에서 전달된 URL 파라미터 값**을 가져오기 위해 사용됩니다  
>   
> - 경로에서 정의한 파라미터 이름을 키로, 실제 값을 값으로 갖는 객체를 반환합니다.


지금 위 `CoursePage`에 작성된 `getCourseBySlug` 훅은 특정한 값만 담고있죠?


하지만 저희는 ‘특정한 값’ 이 아닌 `course 객체`의 `slug` 키의 값을 가져와야합니다.


```javascript
const { courseSlug } = useParams();
```


자, 여기서 저 `useParams` 함수의 구조분해 할당으로 가져온 `courseSlug`라는 값이 어떻게 나왔는지 궁굼할거에요


`useParams` 함수는 <u>_**현재 전달된 URL 파라미터 값을 가져온다**_</u> 고 했었습니다.


위에서 저희가 Route path의 경로를 `:courseSlug` 로 지정해주었죠? 이 친구는 현재 `useParams` 의 객체의 _**키 이름으로 등록**_된 겁니다.


그렇게 구조분해할당을 통해 저희가 지정해준 courseSlug 객체에 키를 


```javascript
const course = getCourseBySlug(
courseSlug
);
```


이렇게 미리 작성해둔 getCourseBySlug 훅에 courseSlug를 추가해줍니다.


---


자. 이렇게 작성이 끝났으니 거꾸로 올라가면서 흐름 이해를 해볼까요


`courseItem`의 타이틀에는


```javascript
<Link to={`/courses/${course.slug}`}>{course.title}</Link>
```


이렇게 클릭이 되었을때 `course`객체의 `slug`라는 키의 값을 넣어주고있습니다.

> 저기서 `course`는 `courseItem`이 파라미터로 받은 `course`의 각 리스트들 입니다.

그다음 coursePage로 넘어가면,


```javascript
const { 
courseSlug
 } = 
useParams
();
const 
course
 = 
getCourseBySlug
(
courseSlug
);
```

- course : 이 변수는 getCourseBySlug(courseSlug) 해당 훅이 리턴한 값을 담고 있습니다. 즉, `courseSlug`에 담긴 `course`객체의 `slug` 키 값과 동일한 객체를 반환해줍니다. 그럼 그 객체를 이용해서 페이지를 그려줄수있겠죠? 그렇게 접근할수있게끔 만든 변수가 저 course 변수 입니다.
- 이제 `useParams`에서 `courseSlug`(우리가 Route에 작성해준 파라미터 변수 `:courseSlug`)를 구조분해할당을 통해 가져오게 됩니다. 즉 _**현재 경로에서 전달된 URL 파라미터**_를 가져오는 함수 인거죠

이게 네이밍이 동일해서 헷갈리실 수 있습니다.


`courseItem`에 있는 `${course.slog}` 로 설명을 하자면 해당 값이


`useParams`에 들어갑니다.


`:coursSlog` = `${coures.slog}`


위 두개는 같은 값을 바라보고있고, `${coures.slog}`에 대한 값을 `coursSlog` 변수에 할당한거에요!


useParams 훅을 통해서 우리가 만든 coursSlog 변수를 가져옵니다!


```javascript
const ${coures.slog} = useParams()
```


예를 들면 이런 형태인거죠.


이제 getCourseBySlug에 해당 값을 넘겨줍니다.


```javascript
const course = getCourseBySlug(
${coures.slog}
);
```


`getCourseBySlug` 훅은 파라미터로 받은 값을 **course 객체의 slog 키값을 비교**해서, **같은 값이 있는 객체를 반환**해준다고했죠? 그 반환된 객체를 course 변수에 담아서


```javascript
<Container className={styles.content}>
  <CourseIcon photoUrl={course.photoUrl} />
  <h1 className={styles.title}>{course.title}</h1>
  <Button variant='round' onClick={handleAddWishlistClick}>
    + 코스 담기
  </Button>
  <p className={styles.summary}>{course.summary}</p>
</Container>
```


이런식으로 페이지를 그려줄때, 사용되는거죠


이런식으로 동적 경로지정이 가능합니다!


## Navigate로 리다이텍트 하기

# 시작하기 앞서..


### 리다이렉트란?


웹사이트에 로그인을 하고나서 갑자기 로그인이 풀리고 특정 페이지로 이동한 경험이 있을것이다.


이는, 해당 특정 링크로 이동을 했을때 **‘어떠한 사유’로 인해서 다른 페이지로 넘겨주는것**을 리다이렉트 라고 한다.


## 입력한 경로의 페이지가 없을 경우 처리


[React Router](https://www.notion.so/11b4ef560994803e80aec95b632f5f67) 


해당 게시글에서 <Route path=”*”> 를 이용하여, 없는 페이지에 접속 했을 경우를 표현했는데,


이는 해당 형제요소에 있는 Route의 주소들을 기준으로 보여주게 된다.


```javascript
<Routes>
  <Route path='/' element={<App />}>
    
<Route index element={<HomePage />} />

    
<Route path='courses'>

      <Route index element={<CourseListPage />} />
      <Route path=':courseSlug' element={<CoursePage />} />
    
</Route>

    
<Route path='wishlist' element={<WishlistPage />} />

    
<Route path='questions'>

      <Route index element={<QuestionListPage />} />
      <Route path=':questionsId' element={<QuestionPage />} />
    
</Route>

    
<Route path='*' element={<NotFoundPage />} />

  </Route>
</Routes>
```


위 코드를 보면 NotFoundPage를 보여주는 path의 형제요소들 경로를 확인해보자


Routes는 하나의 swich문이라고 생각하면 된다.


그렇기때문에 path=”*” 는 형제의 요소 path에만 적용이 된다.


즉, /courses, /wishlist, /questions 이라는 경로가 아닐때의 예외처리 인 것이다.


그렇다면 /courses/aaa 이렇게 이중첩 되어있는 경로로 이동한다면?


당연히 없는 페이지 이기에 에러화면이 뜨게 된다.


이를 방지하기위해서 이중첩 경로를 없는 경로로 접근했을때, 다른 페이지로의 강제 이동하게끔 리다이렉트 시켜준다.


# Navigate 사용하기


우리가 위 예시에서 :courseSlug 값이 없을때, /courses 로 리다이렉트 시키게 할 것이다.


해당 courseSlug 값을 받아 링크로 연결해주는 컴포넌트는 CoursePage.jsx에 가서 작성되어 있으니 해당 컴포넌트로 넘어가서 Navigate을 사용해보겠다.


```javascript
const { courseSlug } = useParams();
  const course = getCourseBySlug(courseSlug);
```


이전에 couresSlug를 useParams 객체의 키로 할당해서 해당 키값을 전달해서 화면을 그려주기 위한 문이다


여기서 courseSlug(즉, 객체의 키)가 존재하지않을때 리다이렉트를 시켜주려면 해당 courseSlug의 값을 가지고 조건문을 작성해주면 될것이다.


```javascript
if (!courseSlug) {
    return <Navigate to='
/courses
' />;
  }
```


Navigate 도 Link와 작성했던 방식과 동일하게, to를 이용해 경로를 지정해주면 된다.


이렇게 할 경우 courseSlug의 값이 없을경우에 해당 지정해준 경로로 리다이렉트 하게 된다.


## useSearchParams로 쿼리 사용하기

# useSearchParams란?


리액트 내장 훅이며, 쿼리 파라미터를 가져올 수 있는 훅이다.


여기서 쿼리 파라미터는 url뒤에 **`?key=value`** 이런식으로 작성되는것을 쿼리 파라미터라고 한다.


쿼리 파라미터의 키 값을 가져오기 위해서는 **`get`** 메서드를 함께 사용하면, 해당 쿼리 파라미터의 키값을 가져올 수 있다.


### useSearchParams 사용법


```javascript
const [searchParams, setSearchParams] = useSearchParams();
```


우리가 일반적인 state 훅 사용방식과 동일하다.


우선 우리가 사용할 쿼리 파라미터 키 네임은 keyword이다.


해당 키 값을 가져와 초기값으로 지정해주기위해서 initKeyword 변수에 할당해준다.


```javascript
const initKeyword = searchparams.get('keyword');
```


그 이후부터는 전체적인 코드의 흐름파악이 필요한데, 흐름파악을 위해서 전체코드를 보며, 설명을 이어하겠다.


```javascript
function CourseListPage() {
  // 쿼리파라미터의 키를 가져올 수 있는 훅
  const [
searchParams
, 
setSearchParams
] = useSearchParams();
  // get 메서드를 이용해서 쿼리파라미터의 키의 값을 가져올수있음.
  const 
initKeyword
 = 
searchParams
.get("keyword");
  // 2. 가져온 초기값을 keyword state의 초기값으로 설정해주는데, 문자열로만 받아야하기때문에
  // keyword의 값이 없을 경우에는 빈 문자열을 초기값으로 지정해준다.
  const [
keyword
, 
setKeyword
] = useState(
initKeyword
 || "");
  // 참조. getCourses는 코스목록을 가져오는 함수이며, 해당값을 키워드로 넘겨주면, 키워드에 맞는객체를 리턴하게 된다.
  const courses = getCourses(
initKeyword
);

	// 1. input의 입력값을 keyword state에 할당
  const handleKeywordChange = (e) => 
setKeyword(e.target.value)
;

	// 3. input에 값을 입력하고 submit을 보낼때 동작함수
	// 기본 form의 동작을 막아주고, setSearchParams 함수에 keyword가 ture 일땐, keyword 객체를 넣어주고,
	// 그렇지않을 경우 빈객체를 넘겨준다.
	// 여기서 객체로 넘겨주는 이유는 쿼리 파라미터를 생성할때, 객체값으로 넘겨줘야 하기 때문이다.
	// 즉, 여기서 쿼리 파라미터의 키 네임을 지정해주는 것이다.
	// 
keyword 
는 쿼리 파라미터의 키 값으로 들어가는 state 변수이고
	// 
keyword 
는 쿼리 파라미터의 키 이름으로 지정해준 것이다.
	// 만약 setSearchParams로 { age }를 넘겨주게되면, 쿼리파라미터는 ?age= 이런식으로 지정된다.
	// 그렇기때문에 해당 조건은 값이 있으면 keyword라는 객체의 키이름으로 지정해주고
	// 값이 없으면, 빈 객체 (즉, 쿼리 키 네임이 없음)로 지정해주는 것이다.
	// 그럼 해당 링크 자체에 쿼리 파라미터가 없기때문에 기존 페이지가 그대로 노출될것이다.

  const handleSubmit = (e) => {
    e.preventDefault();
    
setSearchParams
(
keyword
 ? { 
keyword
 } : {});
  };

  return (
    <ListPage variant='catalog' title='모든 코스' description='자체 제작된 코스들로 기초를 쌓으세요.'>
      <form className={searchBarStyles.form} onSubmit={handleSubmit}>
        <input name='keyword' value={
keyword
} onChange={handleKeywordChange} placeholder='검색으로 코스 찾기'></input>
        <button type='submit'>
          <img src={searchIcon} alt='검색' />
        </button>
      </form>

      <p className={styles.count}>총 {courses.length}개 코스</p>
			{/* 
				해당 조건은 키워드에 값이 있는데 courses의 목록이 나오지않는다면 에 대한 조건문이다. 
			*/}
      {
keyword
 && courses.length === 0 ? (
        <Warn
          className={styles.emptyList}
          title='조건에 맞는 코스가 없어요.'
          description='올바른 검색어가 맞는지 다시 한 번 확인해 주세요.'
        />
      ) : (
        <div className={styles.courseList}>
          {courses.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
        </div>
      )}
    </ListPage>
  );
}

export default CourseListPage;
```


# 요약


---


**`useSearchParams()`** 는 쿼리 파라미터의 생성과 **`get`** 메서드를 이용해서 해당 쿼리 파라미터 키의 값을 가져올수있게 해주는 훅이다.


## 사용법


---


```javascript
const [searchParams, useSearchParams] = useSearchParams();
```


## 쿼리 파라미터 생성


---


```javascript
useSearchParams({ keyName });
```


## 생성한 쿼리 파라미터 값 가져오기


---


```javascript
const initParams = searchParams.get("keyname");
```


# 네이밍을 변경하여 쉽게 설명


```javascript
const [searchParams, setSearchParams] = useSearchParams();

// get 메서드를 이용해서 쿼리 파라미터의 키 "keyword" 값을 가져옵니다.
const initKeyword = searchParams.get("keyword");

// 사용자가 입력한 검색어를 저장할 상태 변수 (초기값은 쿼리 파라미터에서 가져옴)
const [userInput, setUserInput] = useState(initKeyword || "");

// 쿼리 파라미터의 값에 따라 필터링된 코스 목록을 가져옵니다.
const courses = getCourses(initKeyword);

// 입력 필드 값이 변경될 때 사용자의 입력 상태를 업데이트합니다.
const handleKeywordChange = (e) => setUserInput(e.target.value);

// 폼이 제출될 때 쿼리 파라미터 값을 업데이트합니다.
const handleSubmit = (e) => {
  e.preventDefault();
  
setSearchParams(userInput ? { keyword: userInput } : {});

};
```

> 네이밍을 변경할때는 왜 `setSearchParams(userInput ? { keyword: userInput } : {});` 여기 부분이 이렇게 변경된걸까?  
> 그 전에는 `setSearchParams(keyword ? { keyword } : {});` 이렇게 였는데,  
> 그럼 `setSearchParams(userInput ? {keyword} : {})` 이렇게 되어야하는게 아닌가?

### 이전 코드


```javascript
setSearchParams(keyword ? { keyword } : {});
```

- 여기서 `{ keyword }`는 [**ES6 객체 리터럴 단축 속성**](/11d4ef56099480d78277f0e8fcce4836)을 이용한 문법입니다.
- `{ keyword }`라고 작성했을 때 이는 `{ keyword: keyword }`로 해석됩니다.
- 즉, 변수 `keyword`의 값을 쿼리 파라미터의 키 `"keyword"`에 할당하게 됩니다.

이 방식은 간단히 변수 이름과 쿼리 파라미터 키 이름이 **동일할 때** 사용하기에 유용합니다.


### 네이밍을 변경한 후 코드


```javascript
setSearchParams(userInput ? { keyword: userInput } : {});
```

- 여기서는 상태 변수의 이름을 `userInput`으로 변경했습니다.
- 이 경우 쿼리 파라미터 키 이름은 여전히 `"keyword"`이고, 사용자 입력을 저장하는 상태 변수는 `userInput`이 됩니다.
- 따라서 `{ keyword: userInput }` 형태로 작성하여 **쿼리 파라미터의 키 이름** (`keyword`)와 **변수 값** (`userInput`)을 명시적으로 매핑해야 합니다.
- `{ keyword: userInput }`는 `keyword`라는 쿼리 파라미터 키에 `userInput` 값을 할당하는 것을 의미합니다.

만약 변경 후에도 이렇게 작성했다면:


```javascript
setSearchParams(userInput ? { keyword } : {});
```

- 이 경우, 객체 `{ keyword }`는 `{ keyword: keyword }`로 해석되는데, 이는 변수 이름이 `keyword`여야 합니다.
- 하지만 변수 이름이 현재는 `userInput`이므로 `setSearchParams`가 제대로 작동하지 않게 됩니다.

따라서 변수 이름을 `userInput`으로 변경하면서 명확하게 **키-값** 쌍을 `{ keyword: userInput }`로 지정해 준 것입니다. 이 방법으로 쿼리 파라미터 키 (`keyword`)와 사용자가 입력한 값 (`userInput`)을 정확히 연결할 수 있습니다.


## useNavigate를 이용해 페이지 이동하기

`useNavigate`는 **React Router v6**에서 페이지를 **프로그래밍적으로 이동**(navigation)하기 위해 사용하는 훅입니다. 이를 통해 사용자가 특정 조건을 충족하거나 버튼을 클릭했을 때 **코드로 페이지 이동**을 쉽게 구현할 수 있습니다.


# `useNavigate` 기본 개념


`useNavigate`는 페이지를 특정 경로로 **리다이렉트하거나 이동**할 수 있도록 도와주는 훅입니다. **SPA(Single Page Application)**에서 컴포넌트를 프로그래밍적으로 특정 경로로 이동시키고 싶을 때 자주 사용됩니다.


# `useNavigate` 사용법


`useNavigate`는 React Router 패키지에서 제공하며, 사용하려면 컴포넌트 내에서 `useNavigate`를 호출해 사용할 수 있습니다.

1. **설치** (React Router v6 기준):

    ```shell
    npm install react-router-dom
    ```

2. **사용 예시**:
다음은 `useNavigate` 훅을 사용해 버튼 클릭 시 다른 페이지로 이동하는 예시입니다.

    ```javascript
    import React from 'react';
    import { useNavigate } from 'react-router-dom';
    
    function HomePage() {
      const navigate = useNavigate();
    
      const handleButtonClick = () => {
        // '/about' 경로로 이동
        navigate('/about');
      };
    
      return (
        <div>
          <h1>Home Page</h1>
          <button onClick={handleButtonClick}>Go to About Page</button>
        </div>
      );
    }
    
    export default HomePage;
    ```


    위 코드에서 `useNavigate`를 사용하여 `navigate` 함수를 가져옵니다. `navigate` 함수는 이동하고자 하는 경로를 인수로 전달하여 해당 페이지로 이동시킬 수 있습니다.


# `useNavigate` 함수의 인수


`useNavigate` 함수는 단순히 경로(`path`)를 전달하는 기본적인 형태 이외에도 다양한 옵션을 함께 사용할 수 있습니다.


```javascript
navigate(to, options);
```

- **`to`**: 이동하고자 하는 경로를 나타내는 문자열입니다 (예: `'/about'`).
- **`options`**: 객체 형태로 추가적인 옵션을 전달할 수 있습니다.
    - `replace`: `true`로 설정하면 **브라우저 기록을 대체**하여 사용자가 뒤로 가기를 눌렀을 때 이전 페이지로 돌아갈 수 없도록 만듭니다.
    - `state`: 이동 시 특정 데이터를 함께 전달할 수 있습니다.

## `replace` 옵션 예시


`replace` 옵션을 사용하면 이동하는 페이지가 브라우저 기록을 덮어쓰기 때문에 뒤로 가기가 불가능합니다. 보통 로그인 페이지나 인증 과정에서 유용하게 사용됩니다.


```javascript
const navigate = useNavigate();

// replace 옵션 사용 예시
const handleLogin = () => {
  // 로그인 성공 시 홈으로 이동하면서 기록을 대체
  navigate('/home', { replace: true });
};
```


## `state` 옵션을 통한 데이터 전달 예시


페이지를 이동할 때 특정 데이터를 전달하고 싶을 때 `state` 옵션을 사용할 수 있습니다. 다음은 `state`를 통해 데이터를 전달하고 이동하는 예시입니다.


```javascript
// 페이지 A
const navigate = useNavigate();

const handleNavigate = () => {
  navigate('/details', { state: { from: 'homepage', userId: 12345 } });
};

// 페이지 B (Details Page)
import { useLocation } from 'react-router-dom';

function DetailsPage() {
  const location = useLocation();
  const { from, userId } = location.state || {}; // state에서 데이터 가져오기

  return (
    <div>
      <h1>Details Page</h1>
      <p>From: {from}</p>
      <p>User ID: {userId}</p>
    </div>
  );
}
```

- `navigate('/details', { state: { from: 'homepage', userId: 12345 } })`는 `/details`로 이동할 때 데이터를 함께 전달합니다.
- `useLocation` 훅을 사용하여 `state` 데이터를 받아 사용할 수 있습니다.

### 주요 특징

1. **프로그램적 이동**: 사용자의 특정 액션에 따라 페이지 이동을 코드로 구현할 수 있습니다.
2. **브라우저 기록 관리**: `replace` 옵션을 통해 브라우저 기록을 조작하여 뒤로 가기 기능을 제어할 수 있습니다.
3. **데이터 전달**: `state`를 통해 페이지 간에 데이터를 전달할 수 있습니다.

### 요약

- *`useNavigate`*는 **React Router v6**에서 페이지 이동을 코드로 처리할 수 있도록 도와주는 훅입니다.
- 이동할 때 `replace` 옵션으로 기록을 덮어쓰거나, `state` 옵션으로 데이터를 전달할 수 있습니다.
- 사용자 인터랙션에 따른 페이지 이동을 간단하게 구현할 수 있으며, 페이지 간 데이터를 공유할 때 매우 유용합니다.

## 페이지가 변경될때 타이틀 변경하기

우리가 페이지를 이동하게되면 처음에 index.html에 지정해둔 title로 유지가 된다.


하지만, 예를 들어 home 페이지에서는 home, login 페이지에서는 Login 


이렇게 동적인 타이틀을 설정해주고 싶다면 라이브러리를 사용하면 된다.


## react-helmet 라이브러리


`react-helmet`은 **React 컴포넌트**에서 HTML 문서의 `<head>` 내용을 **동적으로 관리**할 수 있도록 도와주는 라이브러리입니다. 이를 통해 페이지의 **타이틀(title)**, **메타(meta)** 태그, **스크립트(script)** 등을 쉽게 설정할 수 있습니다. 주로 **SEO(Search Engine Optimization)**와 **소셜 미디어 공유**를 위한 메타데이터 설정에 자주 사용됩니다.


### 설치


`react-helmet`을 사용하려면 프로젝트에 설치해야 합니다.


```shell
npm install react-helmet
```


또는


```shell
yarn add react-helmet
```


### 기본 사용법


`react-helmet`은 페이지 컴포넌트 안에서 `<Helmet>` 컴포넌트를 사용하여 HTML `<head>` 영역을 설정할 수 있습니다. 예시를 통해 살펴보겠습니다.


```javascript
import React from 'react';
import { Helmet } from 'react-helmet';

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Home Page - My Website</title>
        <meta name="description" content="This is the home page of my awesome website" />
        <meta name="keywords" content="home, website, awesome" />
      </Helmet>
      <h1>Welcome to My Website</h1>
    </div>
  );
}

export default HomePage;
```


### 코드 설명

- **`import { Helmet } from 'react-helmet';`**: `Helmet` 컴포넌트를 import 합니다.
- **`<Helmet>`**: 이 컴포넌트 안에 **페이지의 타이틀**과 **메타 태그** 같은 `<head>` 요소들을 설정합니다.
    - `<title>`: 브라우저 탭에 표시되는 페이지 제목을 설정합니다.
    - `<meta>`: SEO나 페이지의 설명을 설정하기 위해 사용합니다.

### 다양한 사용 예시

1. **페이지 타이틀 변경**:

    ```javascript
    <Helmet>
      <title>About Us - My Website</title>
    </Helmet>
    ```


    페이지의 제목을 설정하여 브라우저 탭이나 검색 결과에 표시될 제목을 변경할 수 있습니다.

2. **메타 태그 설정** (SEO 및 소셜 미디어):

    ```javascript
    <Helmet>
      <meta name="description" content="Learn more about our company and team." />
      <meta property="og:title" content="About Us - My Website" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="<https://mywebsite.com/about>" />
      <meta property="og:image" content="<https://mywebsite.com/about-image.jpg>" />
    </Helmet>
    ```

    - **Open Graph 태그 (****`og:title`****,** **`og:type`****,** **`og:url`****,** **`og:image`****)**: 소셜 미디어 공유 시 나타나는 콘텐츠의 정보를 설정할 수 있습니다.
3. **언어 및 특수 메타 태그 설정**:

    ```javascript
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
    </Helmet>
    ```

    - `<html lang="en" />`: `<html>` 태그의 `lang` 속성을 설정합니다.
    - `<meta charSet="utf-8" />`: 페이지의 문자 인코딩을 설정합니다.
4. **다른** **`<head>`** **요소 추가 (예: 링크 및 스크립트)**:

    ```javascript
    <Helmet>
      <link rel="canonical" href="<https://mywebsite.com/home>" />
      <script type="application/ld+json">
        {`
          {
            "@context": "<https://schema.org>",
            "@type": "WebSite",
            "name": "My Website",
            "url": "<https://mywebsite.com>"
          }
        `}
      </script>
    </Helmet>
    ```

    - **`<link rel="canonical" />`**: 페이지의 정규 URL을 설정하여 중복 콘텐츠 문제를 해결합니다.
    - **`<script>`**: JSON-LD 스키마를 추가하거나 스크립트를 동적으로 삽입할 수 있습니다.

### 동적 페이지에서 `react-helmet` 사용하기


페이지가 동적이고 props나 상태에 따라 `<title>`이나 `<meta>` 내용이 달라져야 하는 경우에도 `react-helmet`을 사용할 수 있습니다. 예를 들어, 블로그 포스트의 제목을 동적으로 설정할 수 있습니다.


```javascript
import React from 'react';
import { Helmet } from 'react-helmet';

function BlogPost({ post }) {
  return (
    <div>
      <Helmet>
        <title>{post.title} - My Blog</title>
        <meta name="description" content={post.description} />
      </Helmet>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPost;
```


여기서 `post`는 부모 컴포넌트로부터 전달받은 prop이며, `post.title`과 `post.description`에 따라 `<title>`과 `<meta>` 내용이 동적으로 설정됩니다.


### `react-helmet-async` 사용 고려


`react-helmet`은 동기적으로 동작하므로, SSR(Server-Side Rendering)과 관련된 프로젝트에서는 **`react-helmet-async`**라는 대안을 고려할 수 있습니다. 이 라이브러리는 여러 컴포넌트에서 `<Helmet>`을 사용해도 비동기적으로 처리되므로 **SSR 프로젝트**에 적합합니다.


설치 방법:


```shell
npm install react-helmet-async
```


사용법은 `react-helmet`과 유사하지만, `HelmetProvider`로 감싸야 합니다.


### 요약

- *`react-helmet`*은 HTML `<head>`의 내용을 **동적으로 설정**할 수 있게 도와주는 라이브러리입니다.
- 주로 **페이지 타이틀**, **메타 태그**, **스크립트 및 링크 태그** 등을 설정할 때 사용됩니다.
- SEO 최적화와 소셜 미디어 공유 정보를 설정하기에 매우 유용합니다.
- **SSR 프로젝트**에서는 비동기 처리를 지원하는 **`react-helmet-async`*를 사용하는 것이 좋습니다.

이렇게 `react-helmet`을 사용하면 각 페이지에서 필요한 메타정보를 설정하여 검색엔진 최적화(SEO)와 사용자 경험을 향상시킬 수 있습니다.


## 쿠키, 세션 스토리지, 로컬 스토리지 이해하기

## 웹브라우저 쿠키

> 📌 쿠키란?  
> 웹사이트가 사용자의 컴퓨터 또는 장치에 저장하는 작은 데이터 파일을 뜻한다.  
> 사용자의 세션 정보를 유지하거나 웹사이트에서 사용자 맞춤 설정을 하는데 사용이 된다.  
>   
> <u>**브라우저와 서버 간의 상태 정보를 관리할 수 있는 중요한 수단 중 하나**</u>입니다.

- 서버로부터 리스폰스로 쿠키를 받으면, 클라이언트에서는 별도로 작업을 해주지 않아도 알아서 웹 브라우저가 알아서 저장하고 리퀘스트를 보낼 때도 웹 브라우저가 알아서 보냅니다.
- 자바스크립트를 통해서 쿠키 값을 추가, 수정, 참조할 수 있습니다.
- 수명을 지정할 수 있습니다. 수명이 다한 쿠키는 알아서 지워집니다.

## styled components(css in js)

`styled-components`는 React에서 CSS를 JavaScript 파일 내부에 직접 작성할 수 있게 해주는 라이브러리입니다. 이를 통해 컴포넌트 단위로 스타일을 작성하고, 유지보수와 재사용성을 높일 수 있습니다.


### 1. 설치


먼저 프로젝트에 `styled-components`를 설치해야 합니다. npm이나 yarn을 사용하여 설치할 수 있습니다.


```shell
npm install styled-components
```


### 2. 기본 사용법


`styled-components`를 사용하면 특정 HTML 태그나 React 컴포넌트를 스타일링할 수 있습니다. 다음은 버튼을 스타일링하는 기본적인 예제입니다.


```javascript
// StyledButton.js
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export default StyledButton;
```


위 코드에서 `styled.button`은 HTML `<button>` 요소에 스타일을 정의합니다. 스타일은 백틱(```)을 사용하여 작성됩니다.


### 3. 컴포넌트 사용


이제 StyledButton을 다른 컴포넌트에서 사용할 수 있습니다.


```javascript
// App.js
import React from 'react';
import StyledButton from './StyledButton';

function App() {
  return (
    <div>
      <h1>Styled Components Example</h1>
      <StyledButton>Click Me</StyledButton>
    </div>
  );
}

export default App;
```


이렇게 `StyledButton`을 마치 일반적인 React 컴포넌트처럼 사용할 수 있습니다.


### 4. 동적 스타일링 (props 사용)


`styled-components`를 사용하면 props를 통해 동적으로 스타일을 변경할 수 있습니다.


```javascript
// StyledButton.js
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.primary ? "#4CAF50" : "#f44336"};
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.primary ? "#45a049" : "#e53935"};
  }
`;

export default StyledButton;
```


위 코드에서 `primary`라는 props를 사용하여 버튼의 배경색을 동적으로 변경하고 있습니다.


```javascript
// App.js
import React from 'react';
import StyledButton from './StyledButton';

function App() {
  return (
    <div>
      <StyledButton primary>Primary Button</StyledButton>
      <StyledButton>Secondary Button</StyledButton>
    </div>
  );
}

export default App;
```


이렇게 하면 `primary` props가 전달된 버튼은 녹색으로, 전달되지 않은 버튼은 빨간색으로 스타일이 적용됩니다.


### 5. 스타일 확장 (Styled Component 확장)


`styled-components`는 기존의 스타일을 확장하여 새로운 컴포넌트를 생성할 수 있습니다. 예를 들어, `StyledButton`을 기반으로 한 새로운 버튼을 만들어 보겠습니다.


```javascript
// ExtendedButton.js
import styled from 'styled-components';
import StyledButton from './StyledButton';

const ExtendedButton = styled(StyledButton)`
  font-size: 20px;
  border-radius: 5px;
`;

export default ExtendedButton;
```


`ExtendedButton`은 `StyledButton`의 스타일을 확장하며, 추가적으로 글자 크기와 테두리 모서리 둥글기를 적용합니다.


### 6. 글로벌 스타일


전체 애플리케이션에 공통으로 적용될 스타일을 정의하기 위해 `createGlobalStyle`을 사용할 수 있습니다.


```javascript
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
  }
`;

export default GlobalStyle;
```


글로벌 스타일을 애플리케이션에 적용하려면 다음과 같이 사용합니다.


```javascript
// App.js
import React from 'react';
import GlobalStyle from './GlobalStyle';
import StyledButton from './StyledButton';

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Styled Components Example</h1>
      <StyledButton primary>Click Me</StyledButton>
    </>
  );
}

export default App;
```


### 요약

- `styled-components`를 사용하여 JavaScript 파일에서 스타일을 컴포넌트 단위로 작성할 수 있습니다.
- 스타일은 `styled.[태그명]`으로 정의하며, 백틱(```)을 사용해 작성합니다.
- props를 사용하여 동적으로 스타일을 변경할 수 있습니다.
- 기존 컴포넌트를 확장해 새로운 스타일을 정의할 수 있습니다.
- `createGlobalStyle`을 사용해 글로벌 스타일을 정의할 수 있습니다.

이런 식으로 스타일을 작성하면 각 컴포넌트가 독립적인 스타일을 가지므로, 유지보수가 쉬워지고 CSS 클래스 이름 충돌 문제를 방지할 수 있습니다.


## 알면 좋은 지식


---


## 리액트의 코딩 컨벤션

## 명명 규칙

- 상수는 영문 대문자, 스네이크 표기법을 사용

```javascript
const USER_NAME;
```

- 변수 및 함수는 카멜케이스 사용

```javascript
// 배열 : 복수형 이름으로 사용
const datas = [];

// 정규표현식 : 'r'로 시작
const rName = /.*/;

// 이벤트 핸들러 : 'on'으로 시작
const onClick = () => {};
const onChange = () => {};

// 변환 값이 불린 인 경우 : 'is'로 시작
const isLoading = false;

// Fetch 함수 : method(get, post, put, del) 로 시작
const getEnginList = () => {};
```


## 블록 구문

- 한 줄 짜리 블록 일 경우라도 {} 를 생략하지 않고, 명확히 줄 바꿈 하여 사용한다.

```javascript
// bad
if(true) return 'hello'

// good
if(true){
	return 'hello';
}
```


## 함수

- 함수는 함수 표현식을 사용하며, 화살표 함수를 사용한다.

```javascript
// bad
function fnName () {};
[1,2,3].map(function(x){
	return {};
})

// good
const fnName = () => {};
```

- 바로 return 하는 경우

```javascript
// bad
const foo = () => {return 'bar';}

// good
const foo = () => 'bar';
```

- 컴포넌트의 경우 function 함수 방식을 사용한다

```javascript
// bad
const Components = () => {
return <p>컴포넌트</p>
}

// good
function Components(){
	return <p>컴포넌트</p>
}
```


## 주석

- [Comment Anchors](https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors)를 사용한다

![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-10-09_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.28.16.png](/images/migrated-notion/react/_E1_84_89_E1_85_B3_E1_84_8F_E1_85_B3_E1_84_85_E1_85_B5_E1_86.png)


## 태그 네이밍

- Styled-component태그 생성 시 아래 네이밍 규칙을 준수하여 **의미 전달을 명확하게** 한다.
- 태그명이 길어지더라도 의미 전달의 **명확성**에 목적을 두어 작성한다
- 레이아웃 네이밍으로 사용한다 (잘못된 예 : `const StyledDiv = styled.div`)
- 전체 영역 : Container
- 영역의 묶음 : {Name}Area
    - 추가 작명 후첨
- 의미없는 태그 : <>

```javascript
<Container>
	<ContainerArea>
		<Contents />
		...
	</ContainerArea>
</Container>
```


## 폴더 네이밍

- **카멜 케이스**(ex: componentName)를 기본으로 하며, **컴포넌트 폴더일 경우에만 파스칼 케이스**(ex: ComponentName)로 사용한다.

## 파일 네이밍

- 컴포넌트일 경우만 .jsx 확장자를 사용한다( 그 외에는 .js)
- customHook을 사용해야하는 경우 : use + 함수명
- context 사용시 뒤에 context 붙혀서 사용

## 이벤트 핸들러 네이밍

- props의 경우(이벤트 리스너) : on~
- 함수인 경우(동작 함수) : handle~

```javascript
<MyComponent onClick={handleClick} />

function MyComponent({ onClick }){
	return <p onClick={onClick}>클릭</p>
}
```


## 별첨


---


## 강의 외 찾아본 것들(메모장)

## SSR과 CSR

# SSR(Server-Side Rendering)

> **SSR (Server-Side Rendering)**은 웹 애플리케이션을 서버에서 먼저 렌더링하여, 사용자가 요청할 때 서버가 HTML을 생성해 응답하는 방식입니다. 이 방식은 브라우저에서 자바스크립트가 실행되기 전에, HTML이 완전하게 제공되어 **빠른 초기 화면 로딩**을 가능하게 합니다.

## **SSR의 동작 방식**

1. **요청**: 사용자가 웹 페이지에 접근하면, 브라우저가 서버에 페이지 요청을 보냅니다.
2. **서버 렌더링**: 서버는 요청을 받아 자바스크립트 코드와 백엔드 데이터를 사용해 HTML을 생성합니다.
3. **응답**: 생성된 HTML은 서버에서 브라우저로 전달됩니다.
4. **클라이언트 실행**: 브라우저는 전달받은 HTML을 빠르게 렌더링하고, 이후 자바스크립트가 실행되어 **동적 기능**을 추가합니다.

## **SSR의 장점**

1. **빠른 초기 렌더링**: 서버에서 이미 완전한 HTML을 보내기 때문에 사용자가 더 빠르게 웹사이트를 볼 수 있습니다. 특히 **SEO(Search Engine Optimization)**가 중요한 페이지에서 유리합니다. 검색 엔진은 SSR 방식으로 렌더링된 페이지를 쉽게 인덱싱할 수 있습니다.
2. **SEO 친화적**: 자바스크립트가 실행되지 않은 상태에서도 HTML이 완전하기 때문에 검색 엔진이 웹사이트의 콘텐츠를 쉽게 크롤링할 수 있습니다.
3. **느린 네트워크 환경에서 유리**: 클라이언트 측에서 모든 자바스크립트를 다운로드하고 실행하기 전에, 사용자는 이미 컨텐츠를 볼 수 있습니다.

## **SSR의 단점**

1. **서버 부하 증가**: SSR은 모든 요청에 대해 서버에서 HTML을 렌더링해야 하기 때문에, 서버에 부하가 더 많이 걸릴 수 있습니다.
2. **복잡한 설정**: 클라이언트 측 렌더링(CSR)에 비해 SSR을 구현하고 설정하는 것이 더 복잡할 수 있습니다.
3. **동적 콘텐츠 반영 시간**: 클라이언트 렌더링과 다르게, 페이지가 변경될 때마다 서버에서 새 HTML을 생성해야 하므로, 동적 콘텐츠를 실시간으로 반영하는 데 더 느릴 수 있습니다.

## **SSR을 사용하는 대표적인 프레임워크**

- **Next.js**: React 기반으로 **SSR**과 **정적 사이트 생성(SSG)**, **CSR**을 모두 지원하는 대표적인 프레임워크입니다.
- **Nuxt.js**: Vue.js를 기반으로 하는 SSR 지원 프레임워크입니다.

# CSR (Client-Side Rendering)란?

> **CSR (Client-Side Rendering)**은 웹 애플리케이션을 사용자의 **브라우저**에서 렌더링하는 방식입니다. 즉, 서버는 기본적인 HTML 페이지를 제공하고, 나머지 콘텐츠는 브라우저가 자바스크립트를 통해 동적으로 렌더링하는 방식입니다.

## **CSR의 동작 방식**

1. **요청**: 사용자가 웹 페이지에 접근하면, 브라우저는 서버에 HTML 요청을 보냅니다.
2. **HTML 제공**: 서버는 보통 매우 간단한 HTML을 제공합니다. 이 HTML 파일은 스크립트 파일을 포함하고 있습니다.
3. **자바스크립트 로드**: 브라우저가 HTML 파일을 받으면, 자바스크립트 파일을 다운받고 실행하여 웹 애플리케이션의 구조를 동적으로 생성합니다.
4. **렌더링**: 자바스크립트가 데이터와 결합해 브라우저에서 HTML 콘텐츠를 렌더링합니다. 이후 웹 페이지가 사용자에게 보입니다.

## **CSR의 장점**

1. **클라이언트 측에서 빠른 인터랙션**: 페이지가 한 번 로드되면, 이후의 페이지 전환은 브라우저에서만 이루어져 매우 빠르게 동작합니다. 서버로부터 전체 페이지를 다시 받아오는 대신, 필요한 데이터만 요청하고 업데이트할 수 있습니다.
2. **유연한 사용자 경험 제공**: **싱글 페이지 애플리케이션(SPA)**처럼 동작하여, 사용자 경험이 매우 매끄럽습니다. 페이지가 새로고침 없이 빠르게 전환됩니다.
3. **서버 부하 감소**: 서버는 모든 요청에 대해 HTML을 생성할 필요가 없고, 대신 클라이언트에 자바스크립트와 필요한 데이터를 제공하기만 하면 됩니다. 덕분에 서버의 부하가 줄어듭니다.
4. **동적 웹 애플리케이션에 적합**: CSR은 자주 변경되는 동적 콘텐츠가 많은 애플리케이션에서 유용합니다. 데이터를 서버에서 받아와 동적으로 렌더링하는 데 강점이 있습니다.

## **CSR의 단점**

1. **초기 로딩 속도 느림**: 페이지를 처음 로드할 때, 모든 자바스크립트 파일을 다운로드하고 실행해야 하므로 초기 로딩 속도가 느립니다.
2. **SEO 문제**: 기본 HTML에 콘텐츠가 없고, 자바스크립트를 통해 동적으로 콘텐츠를 생성하므로, 검색 엔진이 사이트를 제대로 크롤링하지 못할 수 있습니다. 검색 엔진은 자바스크립트를 실행하지 않거나, 실행에 제약이 있기 때문입니다. 그러나 이를 해결하기 위해 **Pre-rendering** 또는 **Hydration**과 같은 기술을 사용합니다.
3. **자바스크립트 의존성**: CSR은 브라우저에서 자바스크립트를 실행해야만 동작합니다. 사용자의 브라우저가 자바스크립트를 비활성화하거나, 네트워크가 느릴 경우 웹 페이지가 제대로 동작하지 않거나, 매우 느리게 작동할 수 있습니다.

## **CSR을 사용하는 대표적인 프레임워크**

- **React.js**: CSR을 위한 대표적인 라이브러리. CSR 방식으로 웹 애플리케이션을 구축할 수 있습니다.
- **Vue.js**: React와 마찬가지로, Vue.js도 CSR을 기본적으로 지원하는 프레임워크입니다.
- **Angular**: 구글에서 개발한 프레임워크로, 주로 CSR 방식으로 작동합니다.

## **CSR의 사용 예시**


```javascript
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
```


이 코드에서 `React`는 CSR 방식으로 동작합니다. 사용자가 버튼을 클릭하면, 전체 페이지를 다시 로드할 필요 없이, 브라우저에서 즉각적으로 페이지가 업데이트됩니다.


## **CSR을 사용하는 이유**

- **사용자 경험 개선**: 초기 로딩 후, 빠르고 매끄러운 사용자 경험을 제공합니다. 애플리케이션의 동작이 부드러워져, 사용자 만족도를 높일 수 있습니다.
- **동적 애플리케이션**: 자주 변경되는 콘텐츠나 빠른 인터랙션이 필요한 애플리케이션에서는 CSR 방식이 적합합니다.

CSR은 **싱글 페이지 애플리케이션(SPA)**처럼 동적인 사용자 인터랙션이 필요한 곳에 적합한 반면, SEO와 초기 로딩 시간 측면에서 약점을 보완할 필요가 있습니다.


# **SSR  vs CSR**


## **SSR vs CSR 비교 표**


| 특징            | SSR (Server-Side Rendering) | CSR (Client-Side Rendering) |
| ------------- | --------------------------- | --------------------------- |
| **렌더링 위치**    | 서버                          | 클라이언트(브라우저)                 |
| **초기 로딩 속도**  | 빠름                          | 느림                          |
| **페이지 전환 속도** | 느림 (서버 요청 발생)               | 빠름 (클라이언트에서 즉시 처리)          |
| **SEO**       | 유리                          | 불리 (추가 설정 필요)               |
| **서버 부하**     | 높음                          | 낮음                          |
| **복잡성**       | 상대적으로 복잡                    | 상대적으로 간단                    |
| **사용 사례**     | 블로그, 뉴스 사이트, 이커머스           | SPA, 대화형 웹 애플리케이션           |
| **네트워크 상태**   | 느린 네트워크 환경에서 유리             | 빠른 네트워크 환경에서 유리             |


## **SSR과 CSR의 선택 기준**

- **SEO가 중요한가?**

    SEO가 중요한 웹사이트(블로그, 뉴스 사이트 등)에서는 **SSR**이 유리합니다. 검색 엔진이 SSR로 렌더링된 페이지를 더 쉽게 크롤링하고 인덱싱할 수 있습니다.

- **빠른 사용자 인터랙션이 중요한가?**

    사용자 경험이 중요하고, 페이지 전환 시 빠른 응답이 필요하다면 **CSR**이 적합합니다. SPA(싱글 페이지 애플리케이션)와 같이, 사용자가 화면에서 빠른 반응을 요구하는 경우 CSR이 더 좋은 선택입니다.

- **서버 부하를 고려해야 하는가?**

    서버에서 많은 요청을 처리해야 하는 상황에서는 **CSR**이 서버 부하를 줄일 수 있습니다. 서버는 HTML을 렌더링할 필요가 없고, 자바스크립트 파일과 API 요청만 처리하면 됩니다.

- **복잡성**

    **SSR**은 클라이언트와 서버 모두에서 코드를 관리해야 하기 때문에 복잡할 수 있습니다. 반면, **CSR**은 클라이언트에서 대부분의 로직이 처리되므로 비교적 단순합니다.


## **SSR과 CSR의 혼합 (Hydration)**


현대 웹 애플리케이션에서는 **SSR**과 **CSR**을 혼합한 방식이 많이 사용됩니다. 초기 로딩은 서버에서 HTML을 제공하여 빠르게 화면을 렌더링하고, 이후에는 클라이언트에서 **CSR**로 전환하여 페이지의 인터랙션을 처리하는 방식입니다. 이를 **Hydration**이라고 하며, **Next.js**와 같은 프레임워크가 이를 지원합니다.


## 메모리 누수가 발생하는지 확인하는 방법

메모리 누수가 발생하는지 확인하려면 **개발자 도구**나 **전문적인 메모리 분석 도구**를 사용해 메모리 사용량을 모니터링하고 분석해야 한다. 리액트 애플리케이션에서도 메모리 누수를 추적하는 일반적인 방법은 아래와 같다.


### 1. **브라우저 개발자 도구 사용 (Chrome 기준)**

1. **메모리 탭** 사용:
    - Chrome 개발자 도구를 열고, 상단의 **Memory** 탭을 클릭합니다.
    - 메모리 탭에서 **Heap snapshot**(힙 스냅샷)을 찍어 메모리 상태를 기록할 수 있습니다.
        - **Heap snapshot**: 앱의 메모리 상태를 기록하고 분석하는 데 사용됩니다.
        - **Allocation instrumentation on timeline**: 메모리 할당이 발생한 시점을 시간에 따라 분석할 수 있습니다.
    - 애플리케이션을 일정 시간 동안 사용한 후 다시 **Heap snapshot**을 찍습니다.
    - 여러 스냅샷을 비교하여 메모리 사용량이 비정상적으로 증가하는지 확인할 수 있습니다. 메모리 누수가 있는 경우, 해제되지 않은 객체들이 메모리에 남아 있는 것을 확인할 수 있습니다.
2. **프로파일링 (Performance 탭)**:
    - **Performance** 탭에서 **Record** 버튼을 눌러 애플리케이션의 성능을 기록할 수 있습니다.
    - 기록 후, 메모리 사용량의 추세를 확인해보세요. 시간이 지날수록 메모리 사용량이 계속 증가한다면 메모리 누수가 의심됩니다.
    - **Record Allocation Timeline** 옵션을 사용하여 메모리 할당 시점을 시간 순으로 확인할 수 있습니다.

### 2. **메모리 누수 확인 방법**

1. **메모리 그래프 분석**:
    - 개발자 도구의 **Performance**나 **Memory** 탭을 통해 **메모리 사용량의 그래프**를 볼 수 있습니다.
    - 일반적으로, 메모리 사용량은 **일정한 주기**를 보입니다. 애플리케이션을 여러 번 사용하면서 메모리 그래프가 **주기적으로 감소하지 않고 지속적으로 증가**한다면, 메모리 누수일 가능성이 있습니다.
2. **Garbage Collection (GC) 후에도 메모리가 해제되지 않음**:
    - 애플리케이션이 특정 작업을 한 후, 메모리가 **Garbage Collection**을 통해 해제되지 않고 계속 남아 있는지 확인합니다.
    - 메모리 누수가 있는 경우, **사용하지 않는 객체**들이 메모리에 남아 있을 수 있습니다.
3. **DOM 트리 검사**:
    - 메모리 누수는 종종 **DOM 트리**에서 발생합니다. 이벤트 리스너를 제거하지 않거나 컴포넌트가 언마운트될 때 메모리 정리가 이루어지지 않으면, 여전히 메모리를 점유하고 있는 DOM 노드가 있을 수 있습니다.
    - **Elements** 탭에서 DOM 트리를 확인해, 애플리케이션이 예상대로 DOM을 제거했는지 확인합니다.
4. **디버깅 도구 (React DevTools)**:
    - **React DevTools**는 리액트 컴포넌트의 상태, Props, 트리를 확인할 수 있는 유용한 도구입니다. 메모리 누수를 추적할 때 컴포넌트가 언마운트된 후에도 메모리에 남아 있는지 확인할 수 있습니다.
    - **Profiler** 기능을 통해 성능 및 메모리 사용량을 추적할 수 있습니다.

### 3. **메모리 누수를 추적하는 도구**

1. **LeakCanary (모바일 환경)**:
    - 모바일 앱(특히 안드로이드)에서 메모리 누수를 추적하는 도구입니다. 애플리케이션의 메모리 상태를 모니터링하여 메모리 누수가 발생했는지 확인할 수 있습니다.
2. **Valgrind (네이티브 애플리케이션)**:
    - 네이티브 애플리케이션에서 메모리 누수를 추적하는 데 사용되는 도구입니다. C, C++ 같은 네이티브 언어로 작성된 애플리케이션에서 매우 유용합니다.

### 4. **실제로 메모리 누수를 의심해야 할 상황**

1. **메모리 그래프가 지속적으로 상승할 때**: 정상적인 애플리케이션은 메모리 그래프가 상승했다가, 필요하지 않은 객체들이 GC에 의해 해제된 후 다시 감소합니다. 그러나, 메모리 누수가 발생하면 그래프가 계속 상승만 합니다.
2. **애플리케이션이 비정상적으로 느려질 때**: 메모리 누수가 발생하면 애플리케이션의 성능이 저하될 수 있습니다. 특히, 메모리 누수가 많이 발생하면 애플리케이션이 느려지거나 멈추는 현상이 발생할 수 있습니다.

### 5. **메모리 누수 해결을 위한 모범 사례**

- **useEffect의 Cleanup 함수 사용**: 컴포넌트가 언마운트될 때 타이머나 이벤트 리스너 같은 리소스를 해제합니다.
- **useRef로 DOM 직접 접근을 관리**: DOM 객체에 직접 접근하는 경우, 이를 관리하기 위해 `useRef`를 적절히 사용하여 메모리 누수를 방지합니다.
- **외부 라이브러리 사용 시 주의**: 외부 라이브러리를 사용하여 데이터 구독이나 이벤트 바인딩을 할 때, 반드시 컴포넌트 언마운트 시 구독 해제 또는 정리를 해야 합니다.

따라서, 메모리 누수를 확인하고 예방하려면 개발자 도구를 이용해 메모리 사용량을 주기적으로 모니터링하고, 정리(cleanup)를 적절히 관리해야 합니다.


## 나만의 리액트 규칙만들기
> 앞서 다양한 실습 프로젝트를 하면서, 마치 css 속성 작성 우선순위 규칙을 세우듯 컴포넌트 생성 시 나만의 규칙을 만들고 정리해보기로 했다.

아무래도 리액트로 컴포넌트를 생성하다보면 개발자들이 가장 많이 사용하는 방식이 **`화살표 함수`**를 가장 많이 이용하고 있을 것이다.


나도 초기에는 간편한 표기 때문에 컴포넌트를 만들 당시 화살표 함수 방식을 이용했었는데, 나중에 보니 이벤트 핸들러 함수와 추가 컴포넌트를 하나의 컴포넌트 파일 안에서 작성할때, 보기가 너무 힘들었다는 점이었다.


그리고 JS와 JSX 파일 표기도 규칙을 정하기로 했는데,


> 💡 UI가 그려지는 파일은 `JSX`로, 기능 또는 state, 핸들러는 `js`로 표기


처음에는 이렇게 지정해보기로 했다.


vs code 상에서 폴더 icon을 꾸며주는 확장 프로그램을 쓰다 보니,


확실히 `jsx`파일과 `js` 파일의 구분이 쉬웠다.


> 💡 ui를 그려주는 컴포넌트 함수는 `function ComponentsName(){}` 으로 표기.  
> 그 안에 동작하는 핸들러는 `const handleClick = () ⇒ {}` 화살표 함수로


이렇게 하니까, 시각적으로의 구분이 잘 되는것같아 해당 규칙으로 진행하기로했다.


그리고 하나의 컴포넌트를 만들때 **아토믹 디자인 패턴**을 사용해서,


작은 단위로 쪼갠 컴포넌트를 합쳐서 하나의 컴포넌트를 만들때,


처음에는 작은 단위 컴포넌트는 components 폴더에


그 컴포넌트가 모여서 생성된 컴포넌트는 다른 폴더에


이렇게 저장을 했었는데, 나중에 여러 컴포넌트들이 만들어지면,


해당 조합한 컴포넌트를 하나하나 찾아가야한다는 불편함이 있어서


<u>**아예 components 폴더에 몰아넣기로했다.**</u>


최근 진행한 토이 프로젝트로 만든 todo list의 파일트리를 보면,


```javascript
📦
├─ .gitignore
├─ README.md
├─ package-lock.json
├─ package.json
├─ public
│  └─ index.html
└─ src
   ├─ App.js
   ├─ components
   │  └─ todo
   │     ├─ TodoApp.jsx
   │     ├─ TodoInput.jsx
   │     ├─ TodoItem.jsx
   │     ├─ TodoList.jsx
   │     └─ context
   │        └─ TodoContext.js
   └─ index.js
```


이런식으로 구성했다.


하나의 기능을 완성하는 기능 네이밍 폴더를 만들어 그 안에 작은 단위의 컴포넌트들도 모아놨다.


`TodoInput`과 `TodoItem`, `TodoList`를 조합해서 나온 한 덩어리의 컴포넌트는 **`TodoApp`**으로 표기했다.


그리고 그안에 사용되는 **`context + custom Hoos`**를 따로 모은 **context 폴더**를 만들어 넣어줬다.

> context를 활용한 이유는 props drilling을 방지하기 위함.

확실히 해당 기능에 대한 명확한 컴포넌트 구분이 또렷하게 보여서, 유저(또다른 개발자) 입장에서도 보기 편할 것 같다는 생각을 했다.


> 💡 작은 컴포넌트들이 모여서 만들어진 큰 컴포넌트는 **App**으로 표기


현재까지는 작은 단위라 그런지 해당 방식이 보기 괜찮다고 생각했는데,


이 방식의 문제점은 좀 더 기능과 컴포넌트들을 추가해보고, 재사용에 불편함은 없는지 실험을 해봐야 할 것 같다.


## 강사님께 폴더 구조에 대해 여쭤본 후..


```javascript
/src
  /assets
  /components
  /hooks
  /pages (or /views)
  /services
  /utils
  /store (or /redux)
  index.js
  App.js
```


위 파일트리가 대체적으로 리액트에서 자주 사용되는 규칙이라고 한다.


components폴더의 경우 pages에 사용되는 컴포넌트들을 폴더별로 묶어서 정리 한 후, 안에 세부적인 컴포넌트들은 별도로 묶지않고, 위에 내가 사용했던 방식처럼 파일 네이밍을 통해서 구분하는게 좋다고 한다. ⚠️ 폴더가 너무 많아져도 유저의 입장에서 보기 불편할 수 있다.


### 큰 단위의 프로젝트가 될때는…


```javascript
/src
  /api        # API 호출 관리
  /config     # 환경 설정 관련 파일
  /features   # 특정 도메인이나 기능별로 나눈 컴포넌트들
  /styles     # 전역 스타일 및 테마 관리
```


지금처럼 작은 개발 단위의 프로젝트의 경우, 첫번째 방식을 사용해도 무관하지만 큰 단위의 프로젝트의 경우는


위와 같이 폴더구조를 나눠볼 수 있다.


> 💡 위의 방식이 정답은 아니다.  
> 프로젝트 규모에 따라, 프로젝트를 담당한 팀의 규칙에 따라서 언제든지 변경 될 수 있다.  
>   
> 나만의 리액트 네이밍 규칙을 갖는 것은 좋은 방식이라고 하셨으니, 조금 더 다듬어서 참조 컴포넌트를 찾아 헤메는 일이 없도록 연구해봐야겠다!


## useState

# `useState`란?


`useState`는 **React의 Hook 중 하나**로, **함수형 컴포넌트**에서 상태(state)를 관리할 수 있도록 도와줍니다. React에서는 컴포넌트의 상태가 변경되면 UI가 자동으로 다시 렌더링되기 때문에, 상태 관리는 매우 중요한 요소입니다. `useState`를 사용하면, **컴포넌트 내부에서 상태를 선언하고, 그 상태를 업데이트하는 함수**를 제공받을 수 있습니다.


# `useState`의 기본 구조


```javascript
const [state, setState] = useState(initialValue);
```

- `state`: 현재 상태의 값을 나타내는 변수입니다. 초기값은 `useState(initialValue)`에 전달된 **`initialValue`*로 설정됩니다.
- `setState`: 상태를 업데이트하는 함수입니다. 이 함수를 호출하면 React는 상태를 변경하고, 컴포넌트를 다시 렌더링합니다.
- `initialValue`: 상태의 초기값을 설정합니다.

### 예시


```javascript
import React, { useState } from 'react';

function Counter() {
  // count라는 상태 변수와 그 상태를 변경하는 setCount 함수를 선언합니다.
  const [count, setCount] = useState(0); // 초기값은 0

  // 버튼을 클릭할 때마다 setCount를 호출해 상태를 업데이트합니다.
  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
    </div>
  );
}

export default Counter;
```


### 동작 방식

- `useState(0)`에서 `count`의 초기값은 `0`으로 설정됩니다.
- `setCount`를 호출하면 `count` 값이 업데이트되며, 이 변경 사항에 따라 컴포넌트가 다시 렌더링됩니다.
- 버튼을 클릭할 때마다 `setCount(count + 1)`이 실행되어 `count` 값이 1씩 증가하고, 화면에 반영됩니다.

# 상태 값 초기화


`useState`의 초기값은 **숫자, 문자열, 객체, 배열** 등 다양한 자료형으로 설정할 수 있습니다.


```javascript
const [name, setName] = useState('John');   // 문자열 초기값
const [age, setAge] = useState(25);         // 숫자 초기값
const [tasks, setTasks] = useState([]);     // 배열 초기값
const [user, setUser] = useState({});       // 객체 초기값
```


# `useState`로 상태를 업데이트하는 방법


상태를 업데이트할 때는 `setState` 함수를 호출합니다. 이때 **기존 상태를 복사**한 후 필요한 부분만 변경하는 것이 일반적입니다.


```javascript
const [user, setUser] = useState({ name: 'John', age: 25 });

const updateUser = () => {
  setUser({ ...user, name: 'Jane' });  // 기존 상태를 복사하고, name만 변경
};
```


# `useState`의 특징

1. **비동기적 업데이트**: `setState`는 비동기적으로 상태를 업데이트합니다. 즉, 상태가 즉시 변경되지 않고 React가 렌더링 사이클을 통해 상태 변경을 반영합니다.
2. **초기값 설정 함수**: `useState`에 초기값을 설정하는 함수를 전달할 수 있습니다. 이 함수는 컴포넌트가 처음 렌더링될 때만 호출되며, 성능 최적화에 유리합니다.

    ```javascript
    const [value, setValue] = useState(() => computeInitialValue());
    ```


# 결론


`useState`는 React에서 **상태를 선언하고 관리**하는 핵심적인 기능입니다. 이를 통해 컴포넌트의 상태를 쉽게 업데이트하고, 상태 변경에 따라 **자동으로 UI를 다시 렌더링**할 수 있습니다.


## useEffect

# `useEffect`란?

> `useEffect`는 **React의 Hook 중 하나**로, **함수형 컴포넌트**에서 **부수적인 효과(side effects)**를 처리할 때 사용됩니다. React 컴포넌트는 주로 **상태에 따라 UI를 렌더링**하지만, 때로는 외부 데이터를 가져오거나 DOM을 직접 조작하는 등의 작업이 필요할 때가 있습니다. 이러한 부수 효과를 다루기 위해 `useEffect`를 사용합니다.

# `useEffect`의 기본 구조


```javascript
useEffect(() => {
  // 실행할 side effect 코드
}, [dependencies]);  // dependencies는 의존성 배열
```

- **첫 번째 인자**: 수행할 **side effect 코드**가 들어가는 콜백 함수입니다. 이 함수는 컴포넌트가 렌더링되거나 의존성(dependencies)이 변경될 때 실행됩니다.
- **두 번째 인자**: **의존성 배열**(dependencies array)로, 이 배열에 있는 값이 변경될 때만 `useEffect`가 실행됩니다. 이 배열이 비어 있으면 컴포넌트가 처음 마운트될 때만 실행됩니다.

## 예시


### 1. 기본 사용 예시 (컴포넌트 마운트 시 한 번 실행)


```javascript
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log('컴포넌트가 마운트될 때 실행됩니다.');
  }, []);  // 빈 배열이므로 처음 마운트될 때만 실행

  return <div>Hello, World!</div>;
}
```


### 2. 상태 변화에 따라 실행


```javascript
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count가 업데이트되었습니다: ${count}`);
  }, [count]);  // count가 변경될 때마다 실행

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
    </div>
  );
}
```


이 예제에서 `count` 값이 변경될 때마다 `useEffect`가 실행됩니다.


### 3. 정리(clean-up) 함수 사용


컴포넌트가 **언마운트**되거나 의존성이 변경되기 전에 **정리 작업**이 필요할 때 정리(clean-up) 함수를 반환합니다.


```javascript
useEffect(() => {
  const timer = setInterval(() => {
    console.log('타이머 실행 중');
  }, 1000);

  return () => {
    clearInterval(timer);  // 컴포넌트가 언마운트되기 전에 타이머를 정리
  };
}, []);  // 빈 배열이므로 컴포넌트가 마운트될 때만 실행
```


# `useEffect` 동작 방식

- **처음 마운트될 때**: 의존성 배열이 비어 있으면 컴포넌트가 처음 렌더링될 때만 실행됩니다.
- **의존성이 변경될 때**: 배열에 있는 값이 변경될 때마다 실행됩니다.
- **언마운트될 때**: 컴포넌트가 제거되기 직전에 정리 함수가 실행됩니다.

# 의존성 배열 (dependencies array)


의존성 배열을 통해 **어떤 값이 변경될 때 effect가 다시 실행될지**를 제어할 수 있습니다.

- 빈 배열(`[]`): 처음 마운트될 때만 한 번 실행되고 이후에는 실행되지 않습니다.
- 값이 포함된 배열(`[count]`): 배열에 있는 값이 변경될 때마다 실행됩니다.
- 의존성 배열이 없을 경우: **매 렌더링마다** `useEffect`가 실행됩니다.

### 예시: 데이터 가져오기


주로 **API 요청** 같은 부수 효과를 처리할 때 `useEffect`를 사용합니다.


```javascript
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('<https://api.example.com/data>')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);  // 컴포넌트가 처음 마운트될 때만 데이터 가져오기

  return <div>{data ? JSON.stringify(data) : '로딩 중...'}</div>;
}
```


### 정리 함수 (clean-up function)

- **이벤트 리스너 제거**나 **타이머 정리** 같은 작업을 수행할 때 유용합니다.
- `return`을 사용해 정리 작업을 정의할 수 있습니다.

# 결론


`useEffect`는 React에서 **side effect**(데이터 가져오기, 구독, 타이머 설정 등)를 처리하기 위해 사용되는 중요한 Hook입니다. 의존성 배열을 사용해 언제 effect를 실행할지 제어할 수 있으며, 정리(clean-up) 함수를 통해 컴포넌트가 사라지기 전에 필요한 작업을 처리할 수 있습니다.


## useCallBack()
- *`useCallback()`*은 **React의 훅** 중 하나로, **함수의 메모이제이션**을 통해 **성능을 최적화**하는 데 사용됩니다. 이 훅은 **컴포넌트가 다시 렌더링될 때마다 함수가 새로 정의되지 않도록** 이전에 만들어둔 함수를 재사용합니다. 이를 통해 **불필요한 함수 재생성**과 **리렌더링**을 방지할 수 있습니다.

### **`useCallback()`** **기본 개념**

- **메모이제이션**이란, **반복적으로 실행할 필요가 없는 연산 결과를 기억**해 두었다가 동일한 연산 요청이 들어올 때 저장된 결과를 사용하는 기법입니다.
- *`useCallback(callback, dependencies)`*는 **콜백 함수와 의존성 배열을 인자로 받는 함수**입니다. **의존성 배열에 있는 값이 변경되지 않는 한, 기존의 콜백 함수를 재사용**하게 됩니다.

### **사용법**


```javascript
import { useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // useCallback을 사용하여 함수 메모이제이션
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // 의존성 배열이 비어있으면 처음 생성된 함수를 재사용

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```


### **`useCallback()`** **동작 방식**

1. **의존성 배열(dependencies)**:
    - `useCallback`은 두 번째 인자로 **의존성 배열**을 받습니다.
    - 이 배열에는 **콜백 함수가 의존하는 변수**들이 포함됩니다.
    - 배열에 있는 변수들이 **변경될 때만** 새로운 함수가 생성됩니다.
    - 만약 의존성 배열이 **비어 있다면**(`[]`), 이 함수는 **컴포넌트가 처음 렌더링될 때** 한 번만 생성되고, 이후에는 **재사용**됩니다.
2. **함수의 재사용**:
    - 일반적으로 **React 컴포넌트가 다시 렌더링될 때마다** 함수들이 새로 정의됩니다.
    - *`useCallback`*은 **의존성 배열의 값이 변경되지 않으면** 이전에 생성한 함수를 재사용합니다.
    - 이를 통해 불필요한 함수 재생성으로 인한 **성능 저하**를 방지할 수 있습니다.

### **언제 사용해야 하나요?**

- **자식 컴포넌트에 콜백 함수를 전달**할 때 `useCallback`을 사용하면 성능 최적화에 도움이 됩니다.
    - *React의 `props`*를 통해 자식 컴포넌트에 함수를 전달할 때, 부모 컴포넌트가 리렌더링되면 **새로운 함수**가 생성되기 때문에 자식 컴포넌트도 **불필요하게 리렌더링**됩니다.
    - `useCallback`을 사용하면 **함수가 동일한 참조**를 유지하므로, 자식 컴포넌트도 리렌더링되지 않게 됩니다.
- **비싼 연산을 하는 함수**:
    - 특정 함수가 **비싼 연산**을 한다면, 컴포넌트가 리렌더링될 때마다 함수가 **다시 생성되는 것을 방지**하기 위해 `useCallback`을 사용할 수 있습니다.

### **예시: 자식 컴포넌트로 함수 전달**


```javascript
import React, { useState, useCallback } from 'react';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // 메모이제이션된 콜백 함수 생성
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
  }, []); // 의존성 배열이 비어 있으므로 한 번 생성 후 재사용

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Click me</button>;
});

export default ParentComponent;
```


### **설명**:

- **`handleClick`** **함수**는 `useCallback`으로 **메모이제이션**되어 **참조가 유지**됩니다.
- *`ChildComponent`*는 `React.memo()`로 **메모이제이션**되어, 부모 컴포넌트가 리렌더링될 때 **`props`****가 변경되지 않으면 리렌더링되지 않습니다**.
- 이렇게 하면 **부모 컴포넌트가 리렌더링되어도** `handleClick`의 참조가 변경되지 않기 때문에, **자식 컴포넌트도 불필요한 리렌더링을 방지**할 수 있습니다.

### **`useCallback()`** **vs** **`useMemo()`**

- *`useCallback`*은 **함수를 메모이제이션**하기 위해 사용되고,
- *`useMemo`*는 **값을 메모이제이션**하여 **값의 계산 결과**를 저장하고 **재사용**하기 위해 사용됩니다.

예를 들어, `useCallback`은 **함수의 정의 자체를 캐싱**하는 데 사용되고, `useMemo`는 **어떤 계산된 결과**를 캐싱하고 싶을 때 사용합니다.


### **주의할 점**

- `useCallback`을 **모든 함수에 무조건적으로 사용**하는 것은 좋지 않습니다. **불필요하게 사용**하면 오히려 **성능을 저하시킬** 수 있습니다. 사용 자체에도 **약간의 오버헤드**가 있기 때문에, **컴포넌트 트리가 복잡하거나 리렌더링 비용이 큰 경우**에만 사용하는 것이 좋습니다.

### **요약**

- *`useCallback`*은 **함수를 메모이제이션**하여 **불필요한 함수 재생성**을 방지하고, 특히 **자식 컴포넌트에 콜백을 전달**할 때 유용합니다.
- 이를 통해 **불필요한 리렌더링**을 막고, **React 애플리케이션의 성능 최적화**에 기여할 수 있습니다.
- 그러나 무조건적으로 사용하기보다는, **리렌더링 비용**이 크거나 **자식 컴포넌트가 자주 리렌더링될 가능성이 있을 때** 사용하는 것이 좋습니다.

`useCallback`은 **반복적으로 리렌더링되면 비효율적인 함수**를 관리하는 데 중요한 도구로, 올바르게 사용하면 React 애플리케이션의 **성능 최적화**에 큰 도움이 됩니다. 😊


## useMemo()
- *`useMemo()`*는 **React의 훅**으로, 특정 값이 **비용이 큰 계산 결과**일 때 **메모이제이션**을 통해 **불필요한 재계산을 방지**하고 성능을 최적화하기 위해 사용됩니다. 간단히 말해서, **특정 연산의 결과**를 **기억해두고 재사용**하여 성능을 개선하는 데 도움을 줍니다.

### **`useMemo()`** **기본 개념**

- **메모이제이션**: 특정 계산 결과를 저장해두었다가 **이전과 동일한 연산이 필요할 때 저장된 결과를 재사용**하는 것을 말합니다. 이렇게 하면 동일한 연산을 **반복적으로 수행하지 않아도 되기 때문에 성능을 향상**시킬 수 있습니다.
- *`useMemo(create, dependencies)`*는 **값을 생성하는 함수(`create`)**와 **의존성 배열(`dependencies`)**을 인자로 받습니다. **의존성 배열의 값이 변경되지 않는 한** `create` 함수의 결과를 **기억하여 재사용**합니다.

### **사용법**


```javascript
import { useMemo } from 'react';

const MyComponent = ({ items }) => {
  // useMemo로 비싼 연산의 결과를 메모이제이션
  const computedValue = useMemo(() => {
    console.log('Computing...');
    return items.reduce((acc, item) => acc + item.value, 0);
  }, [items]);

  return (
    <div>
      <p>Computed Value: {computedValue}</p>
    </div>
  );
};
```


### **`useMemo()`** **동작 방식**

1. **의존성 배열(dependencies)**:
    - `useMemo`는 두 번째 인자로 **의존성 배열**을 받습니다.
    - 이 배열에는 메모이제이션된 값이 **어떤 값들에 의존하는지**를 명시합니다.
    - 배열에 있는 값들이 **변경되지 않는 한**, **`useMemo`****는 이전에 계산된 결과를 그대로 재사용**합니다.
2. **메모이제이션된 값 재사용**:
    - `useMemo`는 **렌더링 시점에 호출**되며, 이전에 계산된 결과를 메모이제이션해서 **불필요한 연산을 방지**합니다.
    - 의존성 배열의 값이 변경될 때만 **새로 계산**되므로, 값의 변경이 없는 경우 **이전 값을 그대로 사용**합니다.

### **언제 사용해야 하나요?**

- **비용이 큰 연산이 있는 경우**: 반복해서 계산하는 비용이 큰 **연산**이 있을 때, `useMemo`를 사용해 그 결과를 **기억**하고 재사용하여 성능을 개선합니다.
- **리렌더링 최적화**: 특정 값이 **자주 사용**되지만, **의존성이 변경되지 않는 한 재계산할 필요가 없는 경우** `useMemo`를 사용하여 **불필요한 재계산을 방지**합니다.

### **예시**


### **1. 비용이 큰 계산을 방지**


```javascript
import React, { useState, useMemo } from 'react';

const ExpensiveComponent = ({ items }) => {
  // 비용이 큰 계산 (예: items의 총합 계산)
  const expensiveCalculation = (items) => {
    console.log('Calculating...');
    return items.reduce((total, item) => total + item.value, 0);
  };

  // useMemo를 통해 계산 결과를 메모이제이션
  const totalValue = useMemo(() => expensiveCalculation(items), [items]);

  return <div>Total Value: {totalValue}</div>;
};
```


### **설명**:

- `expensiveCalculation(items)`는 **비용이 큰 계산**으로, 매번 렌더링될 때마다 계산하지 않도록 `useMemo`로 **메모이제이션**합니다.
- *`[items]`*가 의존성 배열로 들어가므로, **`items`** **배열이 변경될 때만** 다시 계산합니다.
- 이 덕분에 **불필요한 계산**을 방지하여 성능을 개선할 수 있습니다.

### **2. 렌더링 성능 최적화**


```javascript
import React, { useMemo } from 'react';

const ListComponent = ({ items }) => {
  // 정렬된 리스트 메모이제이션
  const sortedItems = useMemo(() => {
    console.log('Sorting items...');
    return items.sort((a, b) => a.value - b.value);
  }, [items]);

  return (
    <ul>
      {sortedItems.map((item) => (
        <li key={item.id}>{item.value}</li>
      ))}
    </ul>
  );
};
```


### **설명**:

- **`items`** **배열을 정렬하는 작업**은 컴포넌트가 리렌더링될 때마다 비용이 큰 작업일 수 있습니다.
- `useMemo`를 사용해서 **정렬된 결과를 메모이제이션**하면, **`items`****가 변경될 때만 정렬 작업**을 수행하고, 그렇지 않으면 이전에 계산된 정렬된 결과를 재사용하게 됩니다.

### **`useMemo()`** **vs** **`useCallback()`**

- **`useMemo`**:
    - 특정 **값의 계산 결과를 메모이제이션**하는 훅입니다.
    - 반환값은 **메모이제이션된 값**입니다.
    - 주로 **비용이 큰 연산 결과**를 저장하고 재사용할 때 사용합니다.
- **`useCallback`**:
    - **함수 자체를 메모이제이션**하는 훅입니다.
    - 반환값은 **메모이제이션된 함수**입니다.
    - 주로 **함수가 불필요하게 재생성되지 않도록** 하기 위해 사용됩니다.

### **주의할 점**

- **모든 연산에** **`useMemo`****를 사용하지는 마세요**:
    - `useMemo` 자체에도 **약간의 비용**이 있습니다. 따라서 **불필요한 연산을 줄이는 것이 중요할 때만** 사용하는 것이 좋습니다.
    - 간단한 연산에는 굳이 사용할 필요가 없으며, **비용이 큰 연산**을 최적화하기 위해 사용하는 것이 바람직합니다.
- **참조 무결성 문제**:
    - 객체나 배열을 의존성 배열로 사용할 때는, **참조 무결성** 때문에 `useMemo`가 **다시 실행**될 수 있습니다.
    - 만약 배열이나 객체가 **매번 새로운 참조**를 가지면, `useMemo`는 이를 **변경된 것으로 간주하고 다시 실행**합니다. 따라서 이를 해결하기 위해 **객체나 배열을 관리할 때는 메모이제이션을 잘 설계**해야 합니다.

### **요약**

- *`useMemo(create, dependencies)`*는 특정 **값의 계산 결과를 메모이제이션**하여 **불필요한 재계산**을 방지하는 훅입니다.
- 주로 **비용이 큰 연산 결과**를 저장하고 **재사용**하기 위해 사용하며, 컴포넌트의 **렌더링 성능 최적화**에 유용합니다.
- *의존성 배열(dependencies)**의 값이 변경되지 않으면 이전의 계산된 결과를 **그대로 재사용**합니다.
- *`useCallback()`*은 **함수를 메모이제이션**하고, **`useMemo()`*는 **값을 메모이제이션**한다는 차이점이 있습니다.

`useMemo`를 통해 성능을 최적화하면 **컴포넌트가 불필요하게 반복 계산하는 것을 막아** **React 애플리케이션의 렌더링 성능**을 개선할 수 있습니다. 😊


## useCallBack vs useMemo

물론이죠! **`useCallback`**과 **`useMemo`**는 둘 다 **React의 훅**으로, **메모이제이션**을 통해 **성능을 최적화**하는 데 사용됩니다. 두 훅은 비슷한 목적을 가지고 있지만, **메모이제이션하는 대상**이 다릅니다. 이제 각각의 차이점과 **언제 어떤 것을 사용하는지**를 구체적으로 설명해 드리겠습니다.


### **`useCallback`****과** **`useMemo`****의 기본 목적**

- **`useCallback`**: **함수를 메모이제이션**하여 불필요한 **함수의 재생성**을 방지합니다.
- **`useMemo`**: **값의 계산 결과를 메모이제이션**하여 불필요한 **비용이 큰 연산을 반복하지 않도록** 최적화합니다.

이 둘은 결국 **참조를 유지**하는 방식으로 **성능 최적화**를 한다는 점에서 비슷하지만, **메모이제이션의 대상**이 다르다는 점이 가장 큰 차이입니다.


### **1.** **`useCallback`** **- 함수를 메모이제이션**


### **사용 목적**

- **함수를 다시 정의하는 것**을 피하고 **같은 참조**를 유지하고 싶을 때 사용합니다.
- 주로 **자식 컴포넌트에 함수(****`props`****)를 전달**하는 경우 사용됩니다.

### **사용 예시**


```javascript
import React, { useState, useCallback } from 'react';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // 매번 렌더링될 때 새로운 함수가 생성되지 않도록 useCallback 사용
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```


### **왜** **`useCallback`****이 필요한가?**

- **React에서 부모 컴포넌트가 리렌더링될 때마다**, 자식 컴포넌트에 전달되는 **함수도 새로 생성**됩니다. 이로 인해 **자식 컴포넌트가 불필요하게 리렌더링**될 수 있습니다.
- `useCallback`을 사용하면 부모 컴포넌트가 리렌더링되더라도, **의존성 배열이 변경되지 않는 한 함수 참조가 유지**되기 때문에 **자식 컴포넌트의 불필요한 리렌더링**을 방지할 수 있습니다.

### **어떤 상황에서 유용한가?**

- **자식 컴포넌트에 콜백 함수(****`props`****)를 전달할 때** 자식 컴포넌트가 그 함수 참조의 변경으로 인해 불필요하게 리렌더링되는 것을 방지합니다.
- **성능 최적화**가 필요한 경우, 특히 **함수 생성 비용**이 클 때 유용합니다.

### **2.** **`useMemo`** **- 값의 메모이제이션**


### **사용 목적**

- **비용이 큰 계산**을 피하고 **계산 결과를 기억**하여 **불필요한 재계산을 방지**하고 싶을 때 사용합니다.

### **사용 예시**


```javascript
import React, { useMemo } from 'react';

const MyComponent = ({ items }) => {
  // useMemo를 통해 비싼 연산의 결과를 메모이제이션
  const totalValue = useMemo(() => {
    console.log('Calculating...');
    return items.reduce((acc, item) => acc + item.value, 0);
  }, [items]);

  return <div>Total Value: {totalValue}</div>;
};
```


### **왜** **`useMemo`****가 필요한가?**

- *렌더링 중 비용이 큰 계산(예: 배열의 복잡한 정렬, 필터링, 합계 계산 등)**이 있을 경우, 이 계산이 **매번 다시 수행되면 성능에 큰 영향을 줄 수 있습니다**.
- `useMemo`를 사용하면, **의존성 배열의 값이 변경되지 않는 한** 이전에 계산된 결과를 **그대로 재사용**하기 때문에 **불필요한 계산**을 피할 수 있습니다.

### **어떤 상황에서 유용한가?**

- **리스트의 필터링, 정렬, 합계 계산 등** 비용이 큰 연산이 있고, 해당 연산을 **다시 계산할 필요가 없을 때** 사용합니다.
- **값의 변경이 적고**, 결과를 **계속 재사용할 필요**가 있을 때 유용합니다.

### **`useCallback`** **vs** **`useMemo`** **요약 비교**


| **특징**        | **`useCallback`**                              | **`useMemo`**                 |
| ------------- | ---------------------------------------------- | ----------------------------- |
| **목적**        | **함수의 메모이제이션** (불필요한 함수 재생성 방지)                | **값의 메모이제이션** (불필요한 계산 반복 방지) |
| **반환값**       | **메모이제이션된 함수**                                 | **메모이제이션된 값**                 |
| **사용 대상**     | **함수**                                         | **비용이 큰 계산 결과**               |
| **의존성 배열**    | 함수가 사용하는 **의존성** (값이 변경될 때만 새 함수)              | 값의 **계산 결과에 영향을 주는 의존성**      |
| **사용 예시**     | **자식 컴포넌트로 콜백 전달**                             | **비용이 큰 연산의 결과를 저장**          |
| **성능 최적화 사례** | 함수가 매번 새로 생성됨으로 인해 자식 컴포넌트가 불필요하게 리렌더링되는 것을 방지 | 반복적으로 비용이 큰 계산이 수행되는 것을 방지    |


### **실제 사용 사례**

1. **함수를 자식 컴포넌트에 전달하는 경우**:
    - **자식 컴포넌트**에 `props`로 **콜백 함수를 전달**할 때, 부모 컴포넌트가 리렌더링되면 **함수도 새로 정의**됩니다.
    - `useCallback`을 사용하면 **자식 컴포넌트가 불필요하게 리렌더링되는 문제를 방지**할 수 있습니다.
2. **리스트 정렬과 같은 비용이 큰 연산**:
    - **리스트를 정렬**하거나 **필터링**하는 연산이 매번 다시 수행되면 성능에 큰 영향을 줄 수 있습니다.
    - `useMemo`를 사용하여 **값을 메모이제이션**하면, **의존성 배열의 값이 변경될 때만** 다시 계산되므로 성능을 개선할 수 있습니다.

### **결론**

- *`useCallback`*과 **`useMemo`*는 둘 다 성능 최적화를 위해 사용됩니다.
- *`useCallback`*은 **함수 참조의 불필요한 변경**을 방지하여, 특히 **자식 컴포넌트가 불필요하게 리렌더링되지 않도록** 도와줍니다.
- *`useMemo`*는 **비용이 큰 계산을 메모이제이션**하여, **불필요한 재계산을 방지**함으로써 성능을 최적화합니다.
- 두 훅 모두 **의존성 배열(dependencies)**을 사용하여, **의존성이 변경될 때만 다시 수행**되도록 하여 **최적화된 상태**를 유지합니다.

이렇게 `useCallback`과 `useMemo`는 각각 **함수와 값의 메모이제이션을 통해 불필요한 작업을 피하고 성능을 최적화**하는 역할을 하므로, **상황에 따라 적절한 훅을 사용하는 것**이 중요합니다. 😊


## 커스텀 훅과 Context API

> 💡 *커스텀 훅(Custom Hooks)**과 **Context API**는 둘 다 리액트에서 코드 재사용성을 높이고, 상태 관리를 더 효율적으로 하기 위한 도구입니다. 하지만 두 가지는 목적과 사용 방식에서 차이가 있습니다. 상황에 따라 둘 중 어느 것을 선택하는 것이 더 적합할지 달라질 수 있습니다.


### 1. **커스텀 훅(Custom Hooks)**


### 커스텀 훅이란?

- **커스텀 훅**은 여러 컴포넌트에서 반복적으로 사용되는 로직을 모아서 재사용 가능한 함수로 만드는 것입니다.
- 기본적으로 리액트에서 제공하는 훅들(`useState`, `useEffect` 등)을 사용하여 새로운 기능을 정의합니다.
- **로직 재사용**에 중점을 둡니다.

### 커스텀 훅의 특징:

- **독립적 상태 관리**: 커스텀 훅을 사용하는 각 컴포넌트는 자신의 상태를 독립적으로 가집니다.
- **데이터 공유 없음**: 여러 컴포넌트가 같은 커스텀 훅을 사용해도, 각각의 상태는 독립적입니다.
- **데이터 처리 및 API 호출**: 주로 데이터 처리나 API 호출 로직을 재사용할 때 유용합니다.

### 언제 커스텀 훅을 사용할까?

- 컴포넌트 간에 **공통된 로직을 여러 번 반복**해서 사용할 때 (예: 입력값 처리, API 호출).
- **상태가 컴포넌트별로 독립적**이어야 할 때.

### 예시:


```javascript
function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

// 여러 컴포넌트에서 이 훅을 사용할 수 있음
```


### 2. **Context API**


### Context API란?

- **Context API**는 애플리케이션의 전역 상태를 관리하고, 여러 컴포넌트에서 중복 없이 데이터를 쉽게 공유할 수 있도록 하는 도구입니다.
- 중간 컴포넌트들을 거치지 않고 데이터가 필요한 곳에서 바로 접근할 수 있게 해줍니다.
- **데이터 공유**에 중점을 둡니다.

### Context API의 특징:

- **전역 상태 관리**: Context는 하나의 상태를 여러 컴포넌트가 공유할 수 있도록 해줍니다.
- **데이터 전파**: 부모에서 자식 컴포넌트로 `props drilling`을 할 필요 없이 데이터에 접근할 수 있습니다.
- **Redux 같은 상태 관리 라이브러리의 대체**로 사용할 수 있는 간단한 전역 상태 관리 도구.

### 언제 Context API를 사용할까?

- 여러 컴포넌트가 **같은 데이터를 공유**해야 할 때 (예: 사용자 정보, 테마 설정, 언어 설정).
- **전역 상태 관리**가 필요할 때 (애플리케이션의 전역적으로 공유해야 할 데이터가 있을 때).

### 예시:


```javascript
// Context 생성
const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ name: 'John' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  const { user } = useContext(UserContext); // Context에서 값 가져오기
  return <div>Welcome, {user.name}</div>;
}
```


### 설명:

- **UserContext.Provider**: 전역적으로 `user` 데이터를 제공하며, 이를 감싼 모든 컴포넌트가 `user`에 접근할 수 있습니다.
- **useContext**: `Profile` 컴포넌트에서 중간 `props` 전달 없이 `user` 데이터를 바로 사용할 수 있습니다.

---


### 커스텀 훅 vs Context API


| 항목              | **커스텀 훅(Custom Hook)**              | **Context API**                                  |
| --------------- | ----------------------------------- | ------------------------------------------------ |
| **목적**          | 로직 재사용                              | 전역 상태 관리                                         |
| **상태 관리 방식**    | 독립적인 상태 관리                          | 여러 컴포넌트가 같은 상태를 공유                               |
| **데이터 공유**      | 각 컴포넌트가 자신의 상태를 가짐                  | 여러 컴포넌트에서 동일한 데이터를 공유                            |
| **사용 상황**       | 여러 컴포넌트에서 비슷한 로직을 반복할 때 (예: API 호출) | 전역적으로 데이터를 관리하고, 중간 컴포넌트들을 거치지 않고 데이터를 전달하고자 할 때 |
| **중복 props 전달** | 해결하지 않음 (독립적인 상태 유지)                | `props drilling` 문제를 해결                          |
| **예시**          | 상태 관리 로직, API 호출, 폼 데이터 관리          | 사용자 정보, 테마 설정, 인증 상태                             |


### 언제 커스텀 훅을 사용하고 언제 Context API를 사용할까?


### 커스텀 훅 사용 시점:

1. 여러 컴포넌트에서 **반복되는 로직**을 재사용해야 할 때 (예: 입력 필드 관리, API 호출).
2. 상태가 **컴포넌트별로 독립적**이어야 할 때 (예: 컴포넌트마다 다른 상태를 가져야 하는 경우).

### Context API 사용 시점:

1. 여러 컴포넌트에서 **같은 데이터**를 필요로 할 때 (예: 로그인 정보, 테마 설정).
2. 중간 컴포넌트를 거치지 않고 **전역적으로 데이터를 공유**해야 할 때.
3. **props drilling**을 피하고자 할 때.

### 어떤 것이 더 좋을까?

- **작은 규모의 상태 관리**: 작은 프로젝트나 한정된 상태 관리는 **Context API**가 더 적합할 수 있습니다. 특히, 전역으로 공유되는 데이터(예: 사용자 정보, 다크 모드 설정 등)에 접근할 때 유용합니다.
- **복잡한 로직 재사용**: 동일한 로직을 여러 컴포넌트에서 재사용하고 싶을 때는 **커스텀 훅**이 적합합니다. 컴포넌트마다 상태가 독립적이어야 하거나 로직이 복잡할 때, 커스텀 훅은 코드를 효율적으로 재사용할 수 있게 도와줍니다.
- **대규모 상태 관리**: 상태가 복잡하고 여러 곳에서 관리해야 할 때는 **Redux** 같은 상태 관리 라이브러리를 사용하는 것이 더 나은 선택일 수 있습니다. Context API는 전역 상태 관리를 도와주지만, 상태 관리가 너무 많아지면 복잡해질 수 있습니다.

### 결론:

- **커스텀 훅**은 로직 재사용을 위한 도구이고, 각 컴포넌트가 독립적으로 상태를 관리할 때 유용합니다.
- **Context API**는 전역적인 상태를 관리하고, 여러 컴포넌트에서 데이터를 쉽게 공유할 때 적합합니다.
- 두 가지는 상호 배타적인 것이 아니며, 필요에 따라 **커스텀 훅과 Context API를 함께 사용**할 수도 있습니다. 예를 들어, 커스텀 훅 안에서 Context API를 사용해 전역 상태에 접근하는 방식으로도 활용할 수 있습니다.

## 심플하게 설명하는 커스텀 훅과 context API

# 1. **커스텀 훅(Custom Hooks)**

- **목적**: 반복되는 로직(예: API 호출, 상태 관리)을 여러 컴포넌트에서 재사용할 때 사용.
- **특징**: 각 컴포넌트마다 **독립된 상태**를 가집니다.
- **언제 사용하나?**: 컴포넌트에서 동일한 로직을 여러 번 사용할 때. 예를 들어, 폼 데이터를 처리하거나 API 호출 로직을 재사용할 때.

## 커스텀 훅 예시:


```javascript
function useTodo() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => setTodos([...todos, text]);
  return { todos, addTodo };
}
```


# 2. **Context API**

- **목적**: 여러 컴포넌트가 **같은 데이터를 공유**해야 할 때 사용.
- **특징**: 한 번 선언한 데이터를 **모든 자식 컴포넌트**가 쉽게 사용할 수 있음. 중간에 `props`를 계속 전달할 필요가 없음.
- **언제 사용하나?**: 사용자 정보, 테마 설정, 로그인 상태 등 **전역적으로 공유할 데이터**가 있을 때.

## Context API 예시:


```javascript
const UserContext = createContext();
function App() {
  const [user, setUser] = useState("John");
  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}
function Profile() {
  const user = useContext(UserContext); // 중간 단계 없이 데이터 접근
  return <div>{user}</div>;
}
```


# **차이점 요약**

- **커스텀 훅**: **로직을 재사용**하는 도구로, 상태나 함수를 여러 컴포넌트에서 독립적으로 사용하고 싶을 때 적합.
- **Context API**: **전역 상태 관리** 도구로, 여러 컴포넌트에서 **같은 데이터를 공유**해야 할 때 사용.

# 언제 뭐가 더 좋을까?

- **같은 데이터를 여러 컴포넌트가 공유해야 한다** → Context API
- **여러 컴포넌트에서 비슷한 로직을 반복해서 사용해야 한다** → 커스텀 훅

Context API는 **데이터 공유**, 커스텀 훅은 **로직 재사용**이 목적이에요.


## 리액트의 디자인 패턴

[리액트의 디자인 패턴](https://velog.io/@dnr6054/%EC%9C%A0%EC%9A%A9%ED%95%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%8C%A8%ED%84%B4-5%EA%B0%80%EC%A7%80)

- 후첨

## state 리프팅

`State 리프팅`(State Lifting)은 리액트에서 여러 컴포넌트가 공통된 상태(state)를 공유해야 할 때, 상태를 상위 컴포넌트로 올려서 관리하는 패턴입니다. 각 자식 컴포넌트가 독립적으로 상태를 관리하는 대신, 부모 컴포넌트에서 상태를 관리하고 그 상태와 상태를 업데이트하는 함수 등을 자식 컴포넌트에 **props**로 전달하는 방식입니다.


### 왜 State 리프팅을 해야 하나?


리액트의 데이터 흐름은 단방향(부모 -> 자식)입니다. 자식 컴포넌트 간에는 상태를 직접 공유할 수 없습니다. 하지만 경우에 따라 두 개 이상의 자식 컴포넌트가 같은 데이터를 필요로 하거나, 동일한 데이터를 변경해야 할 때가 있습니다. 이때, 그 데이터를 **부모 컴포넌트로 올려서** 관리하면 모든 자식 컴포넌트가 해당 데이터를 공유할 수 있습니다. 이를 **state 리프팅**이라고 합니다.


### 예시 코드


### 1. 자식 컴포넌트 간에 상태를 공유해야 하는 상황


두 개의 자식 컴포넌트가 있고, 이 두 컴포넌트가 같은 상태를 공유한다고 가정합니다. 하나의 컴포넌트에서 값을 변경하면, 다른 컴포넌트에도 해당 변경이 반영되어야 합니다.


### 2. State 리프팅을 적용하기 전


```javascript
// TemperatureInput.js
import { useState } from 'react';

function TemperatureInput() {
  const [temperature, setTemperature] = useState('');

  return (
    <div>
      <input
        type="text"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
      />
    </div>
  );
}

export default TemperatureInput;
```


위 컴포넌트를 두 번 렌더링하면 각 컴포넌트는 독립적인 상태를 가지고 있기 때문에 서로의 값에 영향을 주지 않습니다.


### 3. State 리프팅을 적용한 후


```javascript
// Parent.js
import { useState } from 'react';
import TemperatureInput from './TemperatureInput';

function Parent() {
  const [temperature, setTemperature] = useState('');

  const handleTemperatureChange = (newTemp) => {
    setTemperature(newTemp); // 상위 컴포넌트에서 상태를 업데이트
  };

  return (
    <div>
      <TemperatureInput
        temperature={temperature}
        onTemperatureChange={handleTemperatureChange}
      />
      <TemperatureInput
        temperature={temperature}
        onTemperatureChange={handleTemperatureChange}
      />
    </div>
  );
}

export default Parent;
```


```javascript
// TemperatureInput.js
function TemperatureInput({ temperature, onTemperatureChange }) {
  return (
    <div>
      <input
        type="text"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </div>
  );
}

export default TemperatureInput;
```


### State 리프팅이 적용된 결과

- **상태**는 이제 부모 컴포넌트 `Parent`에서 관리되고 있습니다.
- *`Parent`*는 상태를 자식 컴포넌트 **`TemperatureInput`** 두 개에 **props**로 전달하고 있습니다.
- 자식 컴포넌트에서 상태를 변경할 때는 부모 컴포넌트에서 전달한 `onTemperatureChange` 함수를 호출하여 부모의 상태를 변경합니다.
- 결과적으로, 자식 컴포넌트 중 하나에서 상태를 변경하면 다른 컴포넌트에도 그 변화가 반영됩니다.

### 장점

- **상태 관리의 일관성**: 상태를 상위 컴포넌트에서 일관되게 관리할 수 있어 여러 자식 컴포넌트 간에 데이터를 쉽게 공유할 수 있습니다.
- **컴포넌트 간 데이터 동기화**: 여러 컴포넌트가 동일한 데이터를 필요로 할 때, 이를 쉽게 동기화할 수 있습니다.

### 요약


State 리프팅은 리액트 컴포넌트 간에 상태를 공유해야 할 때, 해당 상태를 부모 컴포넌트로 올려서 관리하는 패턴입니다. 상태를 상위에서 관리하고 자식 컴포넌트들은 props로 상태와 상태 변경 함수를 전달받아 사용함으로써, 여러 자식 컴포넌트가 동일한 상태를 공유할 수 있게 됩니다.


## 재사용 가능한 컴포넌트 설계 과정

좋은 질문이에요! **재사용 가능한 컴포넌트를 설계**하는 과정에서, **상위 컴포넌트부터 설계**하는 방식과 **하위 컴포넌트부터 설계**하는 방식 모두 유용하지만, 접근하는 방법이 달라질 수 있어요. 여기서 중요한 점은 컴포넌트를 얼마나 **독립적이고 재사용 가능**하게 설계할 수 있는지입니다.


**당신의 상황**에서는 별점 컴포넌트를 활용하여 **리뷰 리스트**와 **별점 입력 기능**을 모두 구현해야 합니다. 이 상황에서 **하향식 설계(상위에서 시작)**와 **상향식 설계(하위에서 시작)**에 대해 각각 어떻게 접근할 수 있는지 설명해 볼게요.


### 설계 방식 설명


### 1. **상위 컴포넌트에서 시작하는 방식 (Top-Down Approach)**


**상위 컴포넌트부터 필요한 프롭스와 기능을 정의**하고, 그에 따라 **하위 컴포넌트를 설계**해 나가는 방식입니다.


### 단계:

1. **상위 컴포넌트 설계**: 우선 **전체 별점 시스템**을 책임지는 상위 컴포넌트를 작성합니다. 예를 들어, 리뷰 등록 폼을 포함한 **`ReviewForm`*이라는 컴포넌트가 있다고 가정합니다. 여기서 **별점 컴포넌트**를 재사용하고 싶기 때문에, `rating`과 `onChangeRating` 같은 프롭스를 정의합니다.
2. **별점 컴포넌트의 역할 결정**: 상위 컴포넌트에서 **별점 컴포넌트의 역할**을 정의합니다. 예를 들어, 클릭 이벤트(`onClick`)과 마우스 오버(`onMouseOver`)가 발생했을 때 어떻게 작동해야 하는지를 정의합니다.
3. **별점 컴포넌트 작성**: 별점 컴포넌트에서 필요한 프롭스(`rating`, `onClick`, `onMouseOver`, `onMouseOut`)을 정의하고, 이를 사용해 컴포넌트를 작성합니다.
4. **상위 컴포넌트에서 프롭스 내려주기**: 상위 컴포넌트에서 별점 컴포넌트에게 **현재 별점 값**, **별점 선택 시 처리할 함수**, **마우스 오버 처리 함수**를 프롭스로 내려줍니다.

### 예시:


```javascript
function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleMouseOver = (value) => {
    setHoverRating(value);
  };

  const handleMouseOut = () => {
    setHoverRating(0);
  };

  return (
    <div>
      <Rating
        rating={hoverRating || rating} // 마우스 오버 중일 때는 hoverRating, 아닐 때는 rating
        onClick={handleRatingClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
}
```

- **상위 컴포넌트**에서 **`Rating`** 컴포넌트를 사용하고, 상태(`rating`, `hoverRating`)와 이벤트 핸들러(`handleRatingClick`, `handleMouseOver`, `handleMouseOut`)를 정의합니다.
- **`Rating`** 컴포넌트는 이를 통해 별점이 표시되며, 사용자의 상호작용에 따라 별점을 설정합니다.

### 2. **하위 컴포넌트부터 시작하는 방식 (Bottom-Up Approach)**

- *하위 컴포넌트(별점 컴포넌트)**부터 작성하고, 이후 상위 컴포넌트를 구성하는 방식입니다.

### 단계:

1. **별점 컴포넌트 작성**: 먼저 **별점 컴포넌트**를 작성합니다. 예를 들어, **`Star`*라는 컴포넌트를 만든 후 이 컴포넌트를 반복하여 여러 개의 별을 보여주는 **`Rating`** 컴포넌트를 만듭니다.
2. **필요한 프롭스 정의**: **각각의 별(Star)** 컴포넌트에 필요한 프롭스가 무엇인지 정의합니다. 예를 들어, `selected`, `onClick`, `onMouseOver`, `onMouseOut` 등이 필요할 수 있습니다.
3. **별점 컴포넌트 재사용**: 별 컴포넌트를 여러 번 렌더링하여 **전체 별점 컴포넌트**를 구성합니다.
4. **상위 컴포넌트 작성**: 상위 컴포넌트를 작성하고, 상태와 이벤트 핸들러를 관리하며 하위 컴포넌트에서 사용하는 프롭스를 전달합니다.

### 예시:


```javascript
function Star({ selected, onClick, onMouseOver, onMouseOut }) {
  return (
    <span
      className={selected ? "star selected" : "star"}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      ★
    </span>
  );
}

function Rating({ rating, onClick, onMouseOver, onMouseOut }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          selected={value <= rating}
          onClick={() => onClick(value)}
          onMouseOver={() => onMouseOver(value)}
          onMouseOut={onMouseOut}
        />
      ))}
    </div>
  );
}
```

- **`Star`** 컴포넌트는 각 별을 나타내며, **`selected`*에 따라 **스타일링**을 다르게 합니다.
- **`Rating`** 컴포넌트는 **5개의 별을 렌더링**하며, 각 별에 클릭, 마우스 오버, 마우스 아웃 이벤트 핸들러를 전달합니다.

### 상위부터 vs 하위부터 설계할 때의 차이점:

- **상위부터 설계할 때**: 전체적인 **흐름과 구조**를 먼저 파악하고, 각각의 하위 컴포넌트를 필요한 만큼 작성합니다. 이 경우, 전체적인 로직을 먼저 생각한 후 하위 컴포넌트에서 기능을 구현해 나갑니다.
- **하위부터 설계할 때**: **재사용 가능한 작은 컴포넌트**들을 먼저 만들고, 이를 조합하여 상위 기능을 만듭니다. 하위 컴포넌트의 **기능을 잘 이해하고 설계**하는 것이 중요합니다.

### 제안:

- 이번 별점 컴포넌트와 같이 **재사용 가능한 기능을 가진 컴포넌트**를 만들 때는 **하위 컴포넌트부터 설계**하는 것이 유리합니다. 별 컴포넌트(`Star`)와 별점 컴포넌트(`Rating`)를 먼저 설계한 후, 이를 사용하는 상위 컴포넌트(`ReviewForm`)에서 적절히 연결할 수 있습니다.
- **하위 컴포넌트(****`Star`****와** **`Rating`****)는 최대한 독립적**으로 설계하고, 상위에서 필요한 상태나 동작을 **프롭스로 내려주어** 관리하면, 재사용성과 유지보수성이 높은 컴포넌트를 만들 수 있습니다.

### 설계 시 팁:

1. **하위 컴포넌트를 독립적으로 설계**:
    - 별점 표시 기능은 여러 곳에서 사용되므로, 하위 컴포넌트가 독립적이고 재사용 가능하게 설계되어야 합니다.
    - 이벤트 처리에 대한 부분은 **상위 컴포넌트에서 관리**하고, 하위 컴포넌트에서는 **프롭스로 받은 동작을 호출**하도록 설계합니다.
2. **상태 관리 위치**:
    - 상태는 **최소한의 공통 조상**에서 관리하도록 합니다. 별점 입력 상태가 여러 컴포넌트에 걸쳐 사용된다면, 이 상태를 공통된 상위 컴포넌트에서 관리하고, 그 상태를 하위 컴포넌트에 전달합니다.

이런 식으로 설계하면, 각각의 컴포넌트를 **독립적**으로 설계하면서도 **재사용성**을 높일 수 있어 더 쉽게 유지보수할 수 있는 코드 구조를 만들 수 있습니다.


## exhaustive-deps 규칙
- *`exhaustive-deps`*는 **React Hooks ESLint 플러그인**의 규칙 중 하나로, **`useEffect`, `useCallback`, `useMemo`*와 같은 **훅**에서 **의존성 배열**이 올바르게 설정되었는지 검사하여 **잠재적인 버그**를 방지합니다. 이 규칙은 훅이 의존하는 모든 변수를 **의존성 배열에 포함**하도록 권장하여 **훅의 동작이 의도한 대로 이루어지게 보장**합니다.

### **`exhaustive-deps`****의 목적**

- *의존성 배열(dependency array)**을 통해 훅(`useEffect`, `useCallback`, `useMemo` 등)이 **어떤 값들이 변경될 때 다시 실행되어야 하는지**를 지정합니다.
- **의존성 배열에 모든 필요한 변수가 포함되지 않으면**, 훅이 의도한 대로 작동하지 않을 수 있으며, 이로 인해 **버그**가 발생할 가능성이 높습니다.
- *`exhaustive-deps`*는 이러한 문제를 사전에 방지하기 위해, **훅 내부에서 참조된 모든 변수를 의존성 배열에 포함하도록 권장**합니다.

### **경고 메시지 예시**


```javascript
import { useEffect } from 'react';

const MyComponent = ({ someProp }) => {
  const handleLoad = () => {
    console.log(someProp);
  };

  useEffect(() => {
    handleLoad();
  }, []);  // ESLint warning: Missing dependency 'someProp'
};
```


### **설명**

- 위 코드에서 `useEffect`는 **빈 배열(`[]`)**을 의존성 배열로 가지고 있어서, **컴포넌트가 마운트될 때**만 `handleLoad`가 호출됩니다.
- 하지만 **`handleLoad` 함수 내부에서 `someProp`*을 참조하고 있습니다. 따라서 **`someProp`****이 변경되면** **`useEffect`****가 재실행**되어야 합니다.
- `exhaustive-deps` 규칙은 이러한 상황에서 **`someProp`****을 의존성 배열에 추가하도록 경고**를 표시합니다.

### **권장되는 수정 방법**

- **모든 참조된 변수를 의존성 배열에 추가**하여, 훅이 **필요할 때마다 올바르게 실행**되도록 합니다.

```javascript
useEffect(() => {
  handleLoad();
}, [someProp]);  // someProp을 의존성 배열에 추가
```


### **왜** **`exhaustive-deps`** **규칙이 중요한가?**

1. **불완전한 리렌더링 방지**:
    - `useEffect` 훅을 사용하면, 컴포넌트가 마운트될 때, 언마운트될 때, 또는 **특정 값이 변경될 때**만 실행되도록 **제어**할 수 있습니다.
    - **의존성 배열에 필요한 변수를 누락**하면, **특정 값이 변경되어도** **`useEffect`****가 다시 실행되지 않게 되어** **버그**가 발생할 수 있습니다.
2. **의존성 배열의 자동 관리**:
    - *`useCallback`*이나 **`useMemo`** 같은 훅에서, **의존하는 모든 값이 정확히 관리되지 않으면** 컴포넌트가 **의도하지 않은 값**을 사용하게 될 수 있습니다.
    - `exhaustive-deps`는 이러한 경우를 자동으로 감지하여, 필요한 의존성을 누락하지 않도록 **코드 품질을 유지**하는 데 도움을 줍니다.

### **`exhaustive-deps`** **규칙을 사용하는 방법**

1. **React Hooks ESLint 플러그인 설치**:
    - *`exhaustive-deps`*는 **React Hooks ESLint 플러그인**의 일부입니다.
    - 해당 플러그인을 설치하고 ESLint 설정에 추가하면, `useEffect`, `useCallback`, `useMemo`와 같은 훅의 **의존성 배열 관리**를 도와줍니다.

    ```shell
    npm install eslint-plugin-react-hooks --save-dev
    ```

2. **ESLint 설정에 추가**:
    - `.eslintrc.js` 혹은 `.eslintrc.json` 파일에서 설정을 추가합니다.

    ```json
    {
      "plugins": ["react-hooks"],
      "rules": {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
      }
    }
    ```


### **경고 해결 방법**

1. **의존성 배열에 필요한 변수를 추가**:
    - `useEffect`, `useCallback`, `useMemo`와 같은 훅 내부에서 사용한 모든 변수나 함수는 **의존성 배열에 추가**해야 합니다.

    ```javascript
    const [count, setCount] = useState(0);
    
    const handleIncrement = () => {
      setCount(count + 1);
    };
    
    useEffect(() => {
      handleIncrement(); // count를 사용 중
    }, [count]); // count를 의존성 배열에 추가
    ```

2. **`useCallback`** **또는** **`useMemo`****를 사용하여 메모이제이션**:
    - 만약 **의존성 배열에 추가하려는 함수가 매번 새로 정의**되는 경우에는, `useCallback`이나 `useMemo`를 사용하여 **메모이제이션**하여 해결할 수 있습니다.

    ```javascript
    const handleLoad = useCallback(() => {
      console.log(someProp);
    }, [someProp]);
    
    useEffect(() => {
      handleLoad();
    }, [handleLoad]);  // handleLoad를 의존성 배열에 추가
    ```

3. **참조 무결성 문제 해결**:
    - 객체나 배열 같은 경우, 매번 **참조가 변경**되면 `useEffect`가 **계속해서 재실행**될 수 있습니다.
    - 이럴 때는 **메모이제이션**을 사용하거나 **참조 무결성을 유지하는 방식**으로 관리해야 합니다.

### **`exhaustive-deps`** **경고를 무시하고 싶은 경우**

- 특정 상황에서는 의도적으로 의존성을 추가하지 않을 수도 있습니다. 이때 **`eslint-disable-next-line`*을 사용하여 경고를 무시할 수 있습니다.

    ```javascript
    useEffect(() => {
      handleLoad();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);  // 경고를 무시하고 빈 배열을 사용
    ```

- 그러나, 이 방법은 **버그의 원인이 될 수 있으므로** 정말로 그 **훅의 의존성이 필요하지 않은지 확신**이 있을 때만 사용해야 합니다.

### **주의사항**

- **의존성 배열에 불필요한 변수를 추가하지 마세요**:
    - 불필요한 변수를 추가하면 **훅이 자주 다시 실행되어 성능에 영향을 줄 수 있습니다**.
- **함수나 객체는 항상 새로운 참조를 가지기 때문에**, **의존성 배열에 넣으면 컴포넌트가 리렌더링될 때마다 재실행**될 수 있습니다. 이러한 경우에는 **`useCallback`이나 `useMemo`*로 해당 함수나 객체를 메모이제이션해주는 것이 좋습니다.

### **요약**

- *`exhaustive-deps`*는 **React 훅(****`useEffect`****,** **`useCallback`****,** **`useMemo`****)에서 의존성 배열을 정확히 관리하도록 요구하는 ESLint 규칙**입니다.
- 이 규칙은 **의존성 배열에 모든 필요한 변수가 포함**되어, **훅이 정확히 의도한 시점에 다시 실행**되도록 보장합니다.
- 훅 내부에서 참조하는 모든 변수나 함수는 **의존성 배열에 포함**하는 것이 **React 애플리케이션의 예상 가능한 동작**을 보장하는 중요한 방법입니다.
- 경고를 무시하고 싶은 경우도 있지만, **의존성 배열 관리가 잘못되면 버그**로 이어질 수 있으므로, 주의해서 다루는 것이 중요합니다.

이렇게 **`exhaustive-deps`** 규칙은 **안정적인 훅의 동작**을 보장하여 React 컴포넌트가 예상대로 동작하도록 돕는 중요한 역할을 합니다. 😊


## React children 순회 후 조건 체크

```javascript
import React from "react";
import styles from "./HeadingTitleArea.module.scss";

import classNames from "classnames";


let 
headingStyle
 = "";

function HeadingTitleArea({ 
children
 }) {
  // HeadingTitleArea components children 순회
  
React.Children.forEach
(
children
, (child) => {
    // 조건 여부 체크
    if (
React.isValidElement
(child)) {
      if (child.type === "h2") {
        headingStyle = styles.h2Margin;
      } else if (child.type === "h3") {
        headingStyle = styles.h3Margin;
      }
    }
  });

  return (
    <div className={
classNames
(styles.heading, 
headingStyle
)}>{children}</div>
  );
}

export default HeadingTitleArea;
```


[조건부 스타일 적용 classNames](https://www.notion.so/11c4ef560994809eae6bde0bb1406e14) 


[React children 순회하기](https://www.notion.so/11c4ef5609948099bd29ff59eac6ebdc) 


위 코드는 해당 컴포넌트 자식 요소를 순회하여, 존재여부를 체크한다.


그리고 `child.type`이 `h2`일 경우 `headingstyle` 변수에 `styles.h2Margin` 을 할당해준다.


여기서 `styles.classname` 은 _**css 모듈을 활용한 방식**_인데,


위에 Import 문을 확인해보면 현재 해당 컴포넌트는 **모듈 scss를 사용하고 있기때문에 가능한 문법**이다.


css 모듈을 활용하면 `classname`을 객체 형태로 사용이 가능하다.


## 조건부 스타일 적용 classNames

## classnames 란?


**조건부로 CSS 클래스를 조합**하고 쉽게 적용할 수 있도록 도와주는 **JavaScript 유틸리티 라이브러리** 이다.


### 1. 기본 사용 방법


```javascript
import classNames from "classnames";

const MyComponent = ({ isPrimary, isLarge }) => {
  return (
    <div
      className={classNames(
        "base-class",
        isPrimary && "primary-class",
        isLarge && "large-class"
      )}
    >
      Hello World!
    </div>
  );
};

export default MyComponent;
```

- `"base-class"`: 항상 적용되는 클래스.
- `isPrimary && "primary-class"`: **`isPrimary`****가 참일 때만** `"primary-class"`를 추가.
- `isLarge && "large-class"`: **`isLarge`****가 참일 때만** `"large-class"`를 추가.

### 2. 객체를 이용한 방법


```javascript
import classNames from "classnames";

const MyComponent = ({ isPrimary, isDisabled }) => {
  return (
    <button
      className={classNames("button", {
        "button-primary": isPrimary,
        "button-disabled": isDisabled,
      })}
    >
      Click Me
    </button>
  );
};

export default MyComponent;
```

- `"button"`은 항상 적용되는 기본 클래스입니다.
- `"button-primary"`는 **`isPrimary`****가 참일 때만 적용**됩니다.
- `"button-disabled"`는 **`isDisabled`****가 참일 때만 적용**됩니다.

### 3. 동적 class 사용하기


```javascript
import classNames from "classnames";
import styles from "./Button.module.scss";

const MyComponent = ({ isPrimary }) => {
  return (
    <button
      className={classNames(styles.button, {
        [styles.primary]: isPrimary,
      })}
    >
      Click Me
    </button>
  );
};

export default MyComponent;
```

- `styles.button`은 항상 적용되는 클래스입니다.
- `[styles.primary]`는 **`isPrimary`****가 참일 때** 적용되는 **모듈화된 스타일**입니다.

## React children 순회하기

# React children 요소를 순회하여 확인할때


해당 방식은 컴포넌트의 자식요소를 순회하여, 조건을 지정할 수 있는 리액트 객체이다.


```javascript
import React from "react";

function Components({ children }){
	React.Children.forEach(chilren, (chile) => {
		// 조건 작성
	});
}

export default Components;
```


여기에 추가적으로 조건을 달아줄 수 있는데,


```javascript
import React from "react";

function Components({ children }){
	React.Children.forEach(chilren, (chile) => {
		// 조건 작성
		if(
React.isValidElement(child)
){
		}
	});
}

export default Components;
```


**`React.isValidElement(chile)`**는 **React 엘리먼트가 유효한지 여부를 확인하는 함수**로, 불리언 값 을 반환 한다.


## ES6 객체 리터럴 단축 속성

### 기본 개념


객체 리터럴 단축 속성은 객체를 생성할 때 속성의 이름과 할당할 값이 동일한 변수를 사용하는 경우, **속성 이름과 값을 반복해서 쓰지 않아도** 되는 문법입니다.


### 예시


아래 예시에서 객체 리터럴 단축 속성을 사용하기 전과 후의 차이를 보여드리겠습니다:


**1. 단축 속성 없이 객체 생성하기:**


```javascript
const name = "Alice";
const age = 25;

const person = {
  name: name,
  age: age
};

console.log(person); // { name: "Alice", age: 25 }
```


위 코드에서 객체 `person`을 생성할 때, `name` 속성은 `name` 변수의 값을 할당받고, `age` 속성은 `age` 변수의 값을 할당받습니다. 속성 이름과 변수 이름이 같을 때 **반복적으로 작성해야** 하는 것이 비효율적일 수 있습니다.


**2. 객체 리터럴 단축 속성을 사용하여 생성하기:**


```javascript
const name = "Alice";
const age = 25;

const person = {
  name,
  age
};

console.log(person); // { name: "Alice", age: 25 }
```


여기서, `name: name`과 `age: age`를 각각 작성하는 대신, 단축 속성을 사용해 **`name`**과 **`age`**만 적어도 됩니다. 자바스크립트는 속성 이름과 변수 이름이 같다면 자동으로 **속성 이름과 변수 값을 매핑**해줍니다. 결과적으로 코드가 훨씬 간결해졌습니다.


### 사용 예시


**함수의 매개변수를 객체로 반환할 때** 이 기능을 자주 사용합니다. 예를 들어, 함수에서 여러 변수들을 모아서 객체로 반환하고 싶을 때 유용합니다.


```javascript
function createUser(name, age, location) {
  return {
    name,
    age,
    location
  };
}

const user = createUser("Bob", 30, "New York");
console.log(user); // { name: "Bob", age: 30, location: "New York" }
```


위 코드에서 `name`, `age`, `location`이 모두 같은 이름으로 객체의 속성으로 사용되므로, 객체 리터럴 단축 속성을 통해 간편하게 작성할 수 있습니다.


### 장점

1. **코드 간결성**: 속성 이름과 값이 같은 경우 중복된 코드를 줄일 수 있어 코드가 간결해집니다.
2. **가독성 향상**: 변수 이름과 속성 이름이 동일하기 때문에 가독성이 좋아지고, 객체가 어떤 값들을 포함하는지 쉽게 알 수 있습니다.

### 주의할 점


객체 리터럴 단축 속성을 사용하려면 **변수 이름과 속성 이름이 동일**해야 합니다. 만약 속성 이름을 다르게 지정하고 싶다면 단축 속성을 사용할 수 없습니다.


```javascript
const firstName = "John";

// 단축 속성을 사용할 수 없는 경우
const user = {
  name: firstName // 이렇게 속성 이름을 다르게 지정하고 싶으면 단축 속성을 사용할 수 없음
};

console.log(user); // { name: "John" }
```


### 요약

- **객체 리터럴 단축 속성**은 ES6에서 도입된 기능으로, 속성 이름과 변수 이름이 같을 때 객체 속성을 더 간결하게 정의할 수 있습니다.
- 이 문법을 사용하면 코드가 더 간단하고 읽기 쉽게 됩니다.
- 단축 속성을 사용하려면 속성 이름과 변수 이름이 동일해야 합니다.

이 기능 덕분에 객체를 생성할 때 불필요한 반복을 줄이고, 더 명확하고 직관적인 코드를 작성할 수 있게 됩니다.


## Link, Navigate, useNavigate는 언제 쓰는게 좋을까?

# **Link, Navigate, useNavigate는 언제 쓰는게 좋을까?**


세 가지 모두 다 페이지를 이동할 때 쓸 수 있다는 점에서 비슷한데요.


이것들을 언제 사용하면 좋을지 예시랑 같이 한번 살펴봅시다.


## **Link**


**사용자가 클릭해서 페이지를 이동하도록 할 때** 사용하면 됩니다.


하이퍼링크 텍스트나 페이지를 이동하는 버튼, 이미지 등에 사용하면 되겠죠?


대부분의 경우 `Link` 만으로도 충분합니다.


## **Navigate**


특정 경로에서 **렌더링 시점에 다른 페이지로 이동시키고 싶을 때** 사용하면 됩니다.


**예시:**

- 쇼핑몰의 회원 전용 페이지에 로그인없이 들어와서 로그인 페이지로 리다이렉트하는 경우
- 쇼핑몰의 상품 상세 페이지에서 제품이 품절되었거나 삭제되어서 다른 페이지로 이동시키는 경우

## **useNavigate**


**특정한 코드의 실행이 끝나고 나서 페이지를 이동시키고 싶을 때** 사용하면 됩니다.


**예시:**

- 쇼핑몰에서 장바구니에 담기를 눌렀을 때 리퀘스트를 보내고 장바구니 페이지로 이동시키는 경우
- 쇼핑몰에서 결제하기 버튼을 누르고 나서 모든 결제가 완료된 후에 페이지를 이동시키는 경우
- 리다이렉트된 로그인 페이지에서 로그인을 완료한 후에 처음 진입했던 페이지로 돌아가는 경우

## 한눈에 모아보기


---


## 리액트 Hook 정리

# **Hook의 규칙**

- 반드시 리액트 컴포넌트 함수(Functional Component) 안에서 사용해야 함
- 컴포넌트 함수의 최상위에서만 사용 (조건문, 반복문 안에서 못 씀)

# useState


### **State 사용하기**


```javascript
const [state, setState] = useState(initialState);
```


### **콜백으로 초깃값 지정하기**


초깃값을 계산하는 코드가 복잡한 경우에 활용


```javascript
const [state, setState] = useState(() => {
  // ...
  return initialState;
});
```


### **State 변경**


```javascript
setState(nextState);
```


### **이전 State를 참조해서 State 변경**


비동기 함수에서 최신 State 값을 가져와서 새로운 State 값을 만들 때


```javascript
setState((prevState) => {
  // ...
  return nextState
});
```


# useEffect

> 컴포넌트 함수에서 사이드 이펙트(리액트 외부의 값이나 상태를 변경할 때)에 활용하는 함수

### **처음 렌더링 후에 한 번만 실행**


```javascript
useEffect(() => {
  // ...
}, []);
```


### **렌더링 후에 특정 값이 바뀌었으면 실행**

- 참고로 처음 렌더링 후에도 한 번 실행됨

```javascript
useEffect(() => {
  // ...
}, [dep1, dep2, dep3, ...]);
```


### **사이드 이펙트 정리(Cleanup)하기**


```javascript
useEffect(() => {
  // 사이드 이펙트

  return () => {
    // 정리
  }
}, [dep1, dep2, dep3, ...]);
```


# useRef


### **생성하고 DOM 노드에 연결하기**


```javascript
const ref = useRef();

// ...

return <div ref={ref}>안녕 리액트!</div>;
```


### **DOM 노드 참조하기**


```javascript
const node = ref.current;
if (node) {
  // node를 사용하는 코드
}
```


# useCallback

> 함수를 매번 새로 생성하는 것이 아니라 디펜던시 리스트가 변경될 때만 함수를 생성

```javascript
const handleLoad = useCallback((option) => {
  // ...
}, [dep1, dep2, dep3, ...]);
```


# Custom Hook


반드시 맨 앞에 `use` 라는 단어를 붙여서


다른 개발자들이 Hook이라는 걸 알 수 있게 해줘야 합니다.


[useHooks](https://usehooks.com/) 나 [streamich/react-hooks](https://github.com/streamich/react-use) 라는 사이트를 보시면


다양한 Custom Hook이 소개되어 있는데요.


이 사이트들에서 다른 리액트 개발자들은 어떻게 사용하는지 살펴보시면 재미있을 겁니다.


## SPA, CSR, SSR, SSG

# SPA란?


싱글 페이지 어플리케이션 이라는 뜻으로


하나의 HTML 문서 안에서 JS로 여러 페이지를 보여주는 사이트를 뜻한다


# CSR이란?


웹브라우저에서 JS로 HTML 페이지를 만드는 것을 뜻한다.


여기서 클라이언트는 웹브라우저를 뜻한다.


# SSR이란?


서버에서 HTML을 만들고 리스폰스를 보내주는 것을 뜻한다.


대표적인 프레임워크는 Next.js이다.


# SSG란?


정적 사이트 생성(**Static Site Generation**)


미리 HTML 파일을 만들어서 서버에 배포하는 것을 뜻한다.


데이터가 거의 바뀌지 않는다면 매번 새로 만드는 건 낭비가 아닐까요? 그래서 미리 HTML 파일로 만들고 이걸 서버로 배포하는 방법을 사용하는데, 이런 방식을 '정적 사이트 생성'이라고 합니다.


정적인 사이트를 만들때는 Gatsby를 사용하는것을 추천한다.

- 회사 소개 사이트
- 포트폴리오 등

## DOM의 렌더링 과정
1. **HTML 파싱**: 브라우저가 HTML을 파싱하여 **DOM 트리**를 생성합니다.
2. **CSSOM 생성**: CSS를 파싱하여 **CSSOM**을 생성합니다.
3. **Render Tree 생성**: DOM과 CSSOM을 결합하여 **Render Tree**를 만듭니다.
4. **레이아웃(Layout, 리플로우)**: 요소들의 위치와 크기를 계산하여 레이아웃을 배치합니다. **리플로우**는 레이아웃 변경이 발생할 때(예: 요소의 크기, 위치 변경) 적용됩니다.
5. **페인팅(Painting, 리페인팅)**: 계산된 레이아웃을 실제 화면에 **그리는 과정**입니다. **리페인팅**은 요소의 스타일이 바뀌어 시각적인 변화가 있을 때(예: 색상, 배경 변경) 발생합니다.
- **리플로우**: 레이아웃 변경 시 발생하며, 브라우저가 요소의 위치와 크기를 다시 계산합니다.
    - **리페인팅**: 시각적인 속성의 변경(예: 색상 변경) 시 발생하여 화면을 다시 그립니다.

![%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-10-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.01.52.png](/images/migrated-notion/react/_E1_84_89_E1_85_B3_E1_84_8F_E1_85_B3_E1_84_85_E1_85_B5_E1_86.png)


## 기술면접


---


## useRef

useRef는 React에서 제공하는 훅(Hook) 중 하나로, 함수형 컴포넌트에서 DOM 요소나 값을 직접적으로 참조할 때 사용됩니다. useRef는 크게 두 가지 주요 용도로 사용됩니다


첫번쨰 DOM 요소에 접근할 때 사용합니다
React에서는 일반적으로 DOM 요소를 직접적으로 다루지 않지만, 가끔은 특정 DOM 요소에 직접 접근해야 할 때가 있습니다. 예를 들어, 특정 입력 필드에 포커스를 주거나, 스크롤 위치를 조작하는 경우입니다. 이때 useRef를 사용해 DOM 요소에 직접 접근할 수 있습니다.


두번째로는 렌더링 간 값 저장입니다. useRef는 렌더링 간에 값을 저장할 때도 사용됩니다. useRef로 저장된 값은 리렌더링 시에도 그대로 유지되며, 컴포넌트가 다시 렌더링 되어도 값이 초기화되지 않습니다. 하지만 값이 변경되어도 리렌더링을 트리거하지 않는다는 점에서 상태(state)와 다릅니다.
이렇게 useRef는 주로 DOM 조작이나 렌더링과 관계없이 값이 지속적으로 유지되어야 할 때 사용하는 중요한 훅입니다.


## useEffect

useEffect는 React에서 컴포넌트의 생명 주기 동안 발생하는 부수 효과(side effects)를 처리하기 위해 사용하는 중요한 훅(Hook)입니다. 대표적인 부수 효과로는 데이터 페칭, 구독(subscription), DOM 조작 등이 있습니다.
useEffect의 실행 순서는
1-마운트 시: 컴포넌트가 처음 화면에 그려진 후 실행됨.
2-업데이트 시: 의존성 배열에 지정된 값이 변경될 때마다 실행됨.
3-언마운트 시: 컴포넌트가 사라지거나, useEffect가 다시 실행되기 전에 정리 작업 수행


이런 실행 순서를 잘 이해하고 활용하면, React 애플리케이션에서 효율적인 리소스 관리 및 부수 효과 처리가 가능합니다.


