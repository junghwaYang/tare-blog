---
title: "TypeScript"
description: "📌 타입 스크립트란? TypeScript는 JavaScript의 상위 집합(Superset)으로, <u정적 타입 검사</u(Static Type Checking) 기능을 추가한 프로그래밍 언어입니다. TypeScript는 Microsoft에서 개발했으며, JavaScript 코드를 더 안전하고 유지보수하기 쉽게 만들어줍니다. 학습내용 타입 스크립트 기초 "
pubDate: 2024-11-09T02:16:00.000Z
updatedDate: 2025-06-17T02:49:00.000Z
tags: []
category: "study"
slug: "typescript"
draft: false
originalUrl: "https://www.notion.so/1394ef56099480a78addffdf4f044615"
---


> 📌 타입 스크립트란?  
> **TypeScript**는 JavaScript의 상위 집합(Superset)으로, <u>**정적 타입 검사**</u>**(Static Type Checking)** 기능을 추가한 프로그래밍 언어입니다. TypeScript는 Microsoft에서 개발했으며, JavaScript 코드를 더 안전하고 유지보수하기 쉽게 만들어줍니다.


## 학습내용


---


## 타입 스크립트 기초

## 타입 스크립트 설치 방법

# 설치방법

1. `npm init`
2. `npm install --save-dev typescript`
3. `npx tsc --init` (tsc : 타입 스크립트 컴파일러)
4. `build` 명령어로 tsc 실행하기 및 `start` 명령어로 js 파일 실행하기

    ```json
    // package.json
     "scripts": {
       "build": "tsc",
       "start": "node main.js"
     },
    ```


### 추천 JS 런타임 라이브러리 : [deno](https://deno.com/)


## 타입의 종류

# **타입의 종류**


```typescript
let itemName: string = '코드잇 블랙 후드';
let itemPrice: number = 129000;
let membersOnly: boolean = true;
let owner: undefined = undefined;
let seller: null = null;
```


## **배열과 튜플**

- 배열의 타입을 지정해줄때는 아래와 같이 작성해준다.

```typescript
const cart: strong[] = [];
const carts string[][] = [
  ['c001', 'c002'],
  ['c003'],
];
```

- 위는 배열의 크기가 정해지지않았지만, 아래는 배열의 크기를 정하고 싶을때 사용한다 -> <u>**튜플 타입**</u>

```typescript
let mySize: [number, number] = [167, 28];
```

- 튜플의 경우 모든 요소가 같은 타입일 필요는 없다.

```typescript
let mySize: [number, number, string] = [167, 28, '홍길동'];
```


## **객체 타입 정하기**

- 객체는 기존에 ,(콤마)를 쓰는게 아닌 ;(콜론)을 사용한다.

```typescript
let product: {
  id: string;
  name: string;
  price: number;
  membersOnly: boolean;
  sizes: string[];
} = {
  // 여기서 cmd + I를 입력하면 알아서 이름을 추천해준다.
}
```

- 필수가 아닌 프로퍼티는 옵셔널을 이용해서 표현한다.

```typescript
let product: {
  id: string;
  name: string;
  price: number;
  
membersOnly?: boolean;

  sizes: string[];
} = {

}
```

- 객체 프로퍼티의 키네임을 지정하고싶지 않을때는 타입만 지정하게끔 작성도 가능하다.

```typescript
let stock : {
  
[id: string]
: number; // 여기서 id는 어떤 이름이 들어가든 상관없다.
}
```


## any 타입

# **any**


> 📌 any라는 타입은 명시적으로 타입을 지정할 수 없을때 사용하며 JS와 같은 형태로 타입을 검사하지않는 상태로 만들 때 사용된다. 그러나 TypeScript 자체가 타입 검사를 위해 사용되는 문법이기에 any를 자주 사용하는 것은 바람직하지 않다. 다만, 불가피하게 any 타입을 사용해야 하는 경우가 있을 수 있다.

- any 타입 인 경우 예시

```typescript
const parsedProduct = JSON.parse(
  '{"name": "상품명", "price": 12000}'
)
```

- 위와 같이 JSON 문자열을 파싱하는 경우에는 어떤 타입이 들어올지 정확히 판별할수 없기에, 자동으로 any 타입이 배졍 받는다.
- 그렇기 때문에 위 JSON 문자열 파싱의 경우는 `as`를 이용하여, 타입을 명시적으로 지정해주거나, :(콜론)을 이용하여, 타입을 지정해주어야 한다.
- :(콜론) 예시

```typescript
const parsedProduct: {
  name: string;
  price: number;
} = JSON.parse(
  '{"name": "상품명", "price": 12000}'
)
```

- `as` 예시

```typescript
const parsedProduct = JSON.parse(
  '{"name": "상품명", "price": 12000}'
) as {
  name: string;
  price: number;
}
```


## 함수에 타입 정의하기

# **함수에 타입 정의하기**

- 예제 코드

```typescript
// 상품명(키)과 재고수를 나타내는 파라미터 객체
const stock: {[id : string]: number} = {
  c001: 3,
  c002: 1,
};
// 사용자에게 담아서 보여줄 cart 배열
const cart: string[] = [];
```

- 함수 예제

```typescript
function addToCart (id: string, quantity: number):boolean {
  if(stock[id] < quantity){
    return false;
  }

  stock[id] -= quantity;
  for(let i = 0; i < quantity; i++){
    cart.push(id);
  }

  return true;
}
```

- 기본적으로 선언한 함수의 파라미터에 타입을 정해줄때는 직접 넣어주면 된다.
- :(콜론)뒤에는 리턴되는 값의 타입을 넣어주면 된다.
- 지금은 `return` 되는 값을 미리 `boolean`으로 명시가 되어있기때문에 사실 리턴되는 값의 타입을 지정해줄 필요는 없다.
> 여기서 추가적으로 `quantity`라는 파라미터를 쓸 수도 있고 안 쓸수도 있다고 할 경우, `quantity?: number` 옵셔널을 이용해서 작성해주면 되는데, 이때 해당 값이 없을 경우, 기본값을 지정해줄 필요가 있다. 함수 파라미터의 기본값을 정해줄때는 `quantity?: number = 1`과 같은 식으로 기본 값을 지정해주면 된다.
- 위 예제는 선언한 함수의 타입을 지정해줄 때 사용하는 방식이라 함은, 아래는 객체에서 함수 메서드에 타입을 지정해주는 예시를 보여주겠다

```typescript
// 새로 생성한 mall이라는 객체
const mall: {
  stock: {[id: string] : number};
  cart: string[];
  addToCart: (id: string, quantity?: number) => boolean; // 이렇게 stock이라는 객체의 메서드로 addToCard 함수의 타입을 지정해주었다. 일반 익명 함수를 사용하듯이 사용하면 되며, 화살표 함수의 리턴값도 동일하게 타입으로 지정해주면 된다.
} = {
  // 아래는 기본값 지정
  stock: {
    c001: 3,
    c002: 1,
  },
  cart: [],
  addToCart,
};
```


## rest 파라미터를 사용하는 경우에 타입 지정하기

> 아래는 선언된 rest 파라미터에 타입을 지정해주는 방식이다.

```typescript
function addManyToCart(...id: string[]){
  for(const id of ids){
    addToCart(id);
  }
}
```


## 함수를 값으로 이용하는 경우

- 위와 같이 함수 자체에 타입을 지정해주면된다. rest 파라미터의 경우는 항상 배열로 오기때문에 배열타입으로 지정해줘야한다.

```typescript
const mall: {
  stock: {[id: string] : number};
  cart: string[];
  addToCart: (id: string, quantity?: number) => boolean;
  addManyToCard: (...ids: string[]) => void;
} = {
  stock: {
    c001: 3,
    c002: 1,
  },
  cart: [],
  addToCart,
  addManyToCard,
};
```


## `void` 타입이란?

- `void` 타입은 리털하는 값이 없을때 사용하는 타입이이다. 즉, 위 `addManyCart`는 리턴 하는 값이 없기때문에 없다는 표현인 `void`를 사용해주어야한다.

## Enum

# **Enum**


> 📌 Enum이란 값의 종류를 나열할때 사용된다. 열거 타입이라고도 한다.

- 예제

```typescript
let product: {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
  sizes: string[];
} = {
  id: 'c001',
  name: '후드티',
  price: 129000,
  sizes: ['M','L'],
}
```

- 위 예제처럼 `sizes`의 값이 문자열 배열로 지칭하기에 너무 범위가 광범위 할때, 값을 지정해서 나열해주고 싶을때 사용하면 된다.
- 사용 예제

```typescript
// 1. 이렇게 enum으로 객체형식으로 나열을 해서
enum Size: {
  S, M, L, XL,
}

let product: {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
  sizes: Size[]; // 2. 배열 타입을 지정하듯 작성해준다
} = {
  id: 'c001',
  name: '후드티',
  price: 129000,
  sizes: [Size.M, Size.L], // 3. 접근할때는 객체 접근 때 처럼 점 표기법을 이용해서 접근이 가능하다.
}
```


⚠️ 다만, 주의할 점으로는 해당 `enum`의 값을 실행시켜보면 `console.log(Size.S..L)` 결과값이 0부터 정수로 지정이 된다.


그렇기 때문에 해당 `enum`의 조건식을 사용하게 될 경우 '0'은 `false`에 해당하기 때문에 예상했던 output과 다르게 출력 될 수있다.


이를 방지 하기 위해서는 확실하게, 해당 값을 정해놓고 쓰는 것이 좋다.


```typescript
enum Size: {
  // =(이퀄)을 이용하여, 값을 지정해주자.
  S = 'S', M = 'M', L = 'L', XL = 'XL',
}
```


## interface

# **interface**

- 반복되는 타입을 여러번 지정해줄 필요없이, `interface`를 통해 커스텀 타입을 지정할 수 있다.
- 아래와 같이 사용할 경우 문자열 타입과, 숫자형 타입처럼 또다른 `Product` 타입 이라는 것을 생성한 것이다.

```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
}

// 사용 시에도 일반 타입을 지정할때 처럼 interface의 타입을 작성 해주면 된다.
const product: Product = {
  id: 'c001',
  name: '후드티',
  price: 129000,
}
// 함수도 동일하다.
function printProduct(product: Product){
  console.log(`${product.name}의 가격은 ${product.price}원 입니다.`);
}
```


## interface의 상속


```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
}

// 아래와 같이 Product 타입에 ClothingProduct라는 추가 타입을 extends를 통해 Product에 상속 시켜 주었다.
interface ClothingProduct extends Product {
  sizes: Size[];
}


const product: ClothingProduct = {
  id: 'c001',
  name: '후드티',
  price: 129000,
  sizes: [Size.M, Size.L], // 위 예제들의 enum을 통해 만들어진 객체를 인용
}

// interface는 함수에 대한 타입도 지정할 수 있는데, 익명함수로 파라미터의 타입을 지정해주고, 리턴의 타입도 지정해주면 된다.
interface PrintProductFunction {
  (product: Product) : void;
}

// 지정한 함수 타입을 사용할때는 이런식으로 간략하게 사용이 가능하다.
const printProduct : PrintProductFunction = (product) => {
  console.log(`${product.name}의 가격은 ${product.price}원 입니다.`);
}
```


## 리터럴 타입, 타입 별칭, Union 타입

# **리터럴 타입**

- 값 그 자체를 타입으로 가지는 것
- 예제

```typescript
let productName = '후드티';
const productName2 = '맨투맨';
```

- 위 예제를 타입 스크립트로 작성하고보면 `let`의 경우는 재할당이 가능한 변수이기에 `string`으로 타입이 추론되며, `const`는 재할당이 불가하기때문에 '맨투맨' 이라는 값 자체를 타입으로 가지게 된다.

# **타입 별칭**

- 타입 별칭은 선언된 변수에 값을 타입으로 지정해주는 것이 아닌, 타입 그 자체를 변수명처럼 지정해서 사용하는 것을 뜻한다.
- 이 타입 별칭은 변수, 함수, 객체에도 동일하게 사용이 가능하지만 객체의 경우는 `interface`를 쓰는걸 추천한다.
- 타입 별칭을 지정해줄때는 앞 첫글짜를 대문자로 작성하는것 원칙이다.
- 예제

```typescript
type Cart = string[];
type CartResultCallback = (result: boolean) => void;
interface Product {
  id: string;
  name: string;
}
```


# **Union 타입**

- 한 타입이거나 또다른 타입이거나 or로 지정을 해줄때 사용하는 방식이다.
- 일반적으로 문자열의 배열을 담는 타입이라고 가정했을 경우, `exports`를 통해 확장된 타입이 있다고 가정해보자.
- 확장된 타입은 공통된 파라미터를 가지고있고, 그외에 다른 부분이 있는데 공통된 부분을 구분해서 쓰고싶을때 `a | b` 이런식으로 <u>**a 또는 b를 지정해주는 것을 유니온 타입**</u>이라고 한다.
- 일반적인 변수 타입에 사용하기보다는 리터럴 타입에서 사용된다.

## intersection

# **Intersection 타입**

- 여러 객체 타입을 합치는 것을 `intersection` 타입이라고 한다.
- 에제(`Intersection` 사용 전)

```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
}

interface User {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Review {
  id: string;
  productId: string;
  userId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
```

- 이렇게 공통되는 타입들이 있을 경우에는 `interface`를 `type`으로 바꿔주고, 공통으로 사용할 `type`을 `interface`로 지정해준 후 재사용한다.
- 에제(`Intersection` 사용 후)

```typescript
interface Id {
  id: string;
}

interface Timestamp {
  createdAt: Date;
  updatedAt: Date;
}

type Product = Id &  {
  name: string;
  price: number;
  membersOnly?: boolean;
}

type User = Id & Timestamp {
  username: string;
  email: string;
}

type Review = Id & Timestamp {
  productId: string;
  userId: string;
  content: string;
}
```

> ~~interface의 상속을 이용해서 표현 해줄 수도 있지만, intersection과 interface의 상속의 비교에 대해서는 후에 다루도록 하겠다.~~

해당 비교에는 ‘우아한 테크 컨벤션’을 참고하면 좋을 듯 하다.


[우아한테크 Interface와 type 컨벤션 등](https://www.notion.so/13c4ef56099480d18bb6ebc1b3684b05) 


## keyof와 typeof 연산자

# **keyof와 typeof 연산자**

- `keyof 연산자`란 객체 타입의 키들로 이루어진 문자열 리터럴 유니온 타입을 반환 한다. <u>**객체의 키들을 타입으로 사용하고싶을때 유용하다.**</u>
- 예제

```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
}

// type ProductProperty = 'id' | 'name' | 'price' | 'membersOnly';
// const productTableKeys: ProductProperty[] = ['name', 'price', 'membersOnly'];

/*
위 처럼 사용하면, Product에 다른 key가 추가되었을때 수기로 작성해줘야한다는 불편함이 있다.
그렇기에 keyof를 이용해서 넣어주면 Product에 key가 추가되어도 수기로 작성해줄 필요없이 타입으로써 사용이 가능하다.
*/

const productTableKeys: (keyof Product)[] = ['name', 'price', 'membersOnly'];
```

- typeof 연산자란 **javascript**에서는 _런타임에서 값의 자료형을 반환하고, 해당 값의 타입을 문자열로 반환_하지만 **typescript**에서는 _컴파일 타임에 사용되는_ <u>_타입 추론 연산자_</u>_로써,_ <u>_변수의 타입을 가져와서 코드 내에 타입 선언에서 사용이 가능_</u>하다.

```typescript
// JavaScript에서의 typeof 사용
const value = 123;
console.log(typeof value); // "number"

// TypeScript에서의 typeof 사용
const num = 123;
type NumType = typeof num; // NumType은 'number' 타입
```


## 제네릭 타입

# **제네릭 타입**


> 📌 타입 변수를 사용하는 타입이다. 타입 변수는 마치 함수의 매개변수처럼 어떤 타입이든 받아들일 수 있는 변수 역할을 한다.


## 기본적인 제네릭 타입


```typescript
type Box<T> = {
  value: T;
};

// 타입을 지정해주지않아도 알아서 타입을 추론 해준다.
const numberBox: Box = { value: 123 }; // 'number' 타입 추론
const stringBox: Box = { value: "Hello" }; // 'string' 타입 추론
// 선언할때 타입을 지정한다.
const numberBox: Box<number> = { value: 123 }; // 'number' 타입 지정
const stringBox: Box<string> = { value: "Hello" }; // 'string' 타입 지정
```


### 1. 제네릭 인터페이스


```typescript
// Pair<T, U>는 두 개의 제네릭 타입 변수를 받는 인터페이스입니다.
interface Pair<T, U> {
  first: T;
  second: U;
}

// numberPair는 number 타입의 값 두 개를 가지는 객체이고, mixedPair는 string과 boolean 타입의 값을 가집니다.
const numberPair: Pair<number, number> = { first: 1, second: 2 };
const mixedPair: Pair<string, boolean> = { first: "key", second: true };
```


### 2. 제네릭 타입 별칭


```typescript
// Result<T>는 data의 타입이 T로 지정된 제네릭 타입 별칭입니다.
type Result<T> = {
  success: boolean;
  data: T;
};

// successResult는 string 타입의 데이터를 가지고, errorResult는 null 타입의 데이터를 가집니다.
const successResult: Result<string> = { success: true, data: "Completed" };
const errorResult: Result<null> = { success: false, data: null };
```


### 3. 제네릭 제약 조건

- 제네릭 타입에 제약 조건을 추가하여 특정 타입만 허용하도록 할 수 있다.

```typescript
type Lengthwise = {
  length: number;
};

// T extends Lengthwise: T는 Lengthwise 타입을 확장해야 합니다. 즉, length 프로퍼티를 가져야 합니다.
// logLength 함수는 length 프로퍼티가 있는 타입만 받을 수 있습니다.
function logLength<T extends Lengthwise>(arg: T): void {
  console.log(arg.length);
}

logLength({ length: 10 }); // 출력: 10
logLength("Hello"); // 출력: 5
// logLength(123); // 오류: 'number' 타입에는 'length' 프로퍼티가 없습니다.
```


### 4. 제네릭 타입의 기본값


```typescript
// Response<T = string>: T의 기본값을 string으로 지정했습니다.
type Response<T = string> = {
  data: T;
  error: string | null;
};

const response1: Response<number> = { data: 42, error: null };
// response2는 string 타입의 data를 가지며, 타입을 명시적으로 지정하지 않아도 기본값이 적용됩니다.
const response2: Response = { data: "Hello", error: null }; // 기본값 'string' 사용
```


### 5. 제네릭 유틸리티 타입 예시

- `Partial` (모든 프로퍼티를 선택적으로 만든다.)

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;

const user: PartialUser = { id: 1 }; // 'name'과 'email'이 없어도 오류가 없습니다.
```

- `Readonly` (모든 프로퍼티를 읽기 전용으로 만든다.)

```typescript
type ReadonlyUser = Readonly<User>;

const readonlyUser: ReadonlyUser = { id: 1, name: "Alice", email: "alice@example.com" };
// readonlyUser.name = "Bob"; // 오류: 읽기 전용 프로퍼티는 수정할 수 없습니다.
```


# **제네릭 타입 중에서 알아두면 유용한 것**


## Javascript 기능들


### `querySelector()` 함수

- 기본적으로 어떤 DOM 노드가 리턴될지 모르기 때문에 `HTMLElement`라는 일반적인 타입으로 정의됩니다. 하지만 타입을 확신할 수 있는 경우에는 아래 코드처럼 직접 제네릭 타입을 정의해 주면 됩니다.

```typescript
const elem = document.querySelector<HTMLInputElement>('input.username');
```


### `Map`

- 키와 밸류를 갖는 자료구조입니다. 타입 파라미터로 키와 밸류의 타입을 정의하고 사용할 수 있습니다.

```typescript
const productMap = new Map<string, Product>();
productMap.set(product1.id, product1);
productMap.set(product2.id, product2);
```


### `Set`

- 배열과 비슷하지만 중복된 요소를 추가할 수 없는, 수학에서 집합에 해당하는 자료구조입니다. 타입 파라미터로 요소의 타입을 정의하고 사용할 수 있습니다.

```typescript
const productSet = new Set<Product>();
productSet.add(product1);
productSet.add(product2);
```


## 유용한 타입들


### 키와 벨류 정하기 : `Record`

- 객체에 키와 밸류 타입을 정해놓고 싶을 때 사용합니다. Map과 비슷하지만 차이점은 순수한 객체에 타입만 추가한다는 점입니다.

```typescript
const productMap: Record<string, Product> = {}
productMap['c001'] = product1;
productMap['c002'] = product2;
```


### 객체 프로퍼티 고르기 : `Pick`


```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
}

type ProductInfo = Pick<Product, 'name' | 'price'>;
```

- Pick으로 만든 타입은 아래와 같습니다. name 프로퍼티와 price 프로퍼티만 골라서 타입을 만들었습니다.

```typescript
type ProductInfo = {
    name: string;
    price: number;
}
```


### 객체 프로퍼티 생략하기 : `omit`


```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
}

type ProductInfo = Omit<Product, 'id' | 'membersOnly'>;
```

- `Omit`으로 만든 타입은 아래와 같습니다. `id`와 `membersOnly`를 제외하고 타입을 만들었습니다.

    ```typescript
    type ProductInfo = {
    name: string;
    price: number;
    }
    ```


### Union 제거하기 : `Exclude`

- Union을 사용해서 `PromotionCoupon` 또는 `EmployeeCoupon` 또는 `WelcomCoupon` 또는 `RewardCoupon`인 타입을 `Coupon`이라고 했습니다. 여기서 `EmployCoupon`에 해당하는 것만 제거를 하고 싶을 때 `Exclude`를 사용할 수 있습니다.

```typescript
type Coupon =
| PromotionCoupon
| EmployeeCoupon
| WelcomCoupon
| RewardCoupon
;type InternalCoupon = EmployeeCoupon;
type PublicCoupon = Exclude
// type PublicCoupon = PromotionCoupon | WelcomCoupon | RewardCoupon
```


### 함수 파라미터 타입 가져오기 : `Parameters`

- 함수 파라미터들의 타입을 함수의 타입을 통해 정의할 수 있습니다. 만약 함수의 타입이 아니라, 선언된 함수라면 `typeof` 연산자로 함수의 타입으로 만들어서 사용하면 됩니다.

```typescript
function addToCart(id: string, quantity: number = 1): boolean {
  // ...
  return true;
}

type AddToCartParameters = Parameters<typeof addToCart>;
// type AddToCartParameters = [id: string, quantity: number | undefined]
```


### 함수 리턴 타입 가져오기 : `ReturnType`

- `Parameters`와 마찬가지로 함수의 리턴 타입을 가져옵니다.

```typescript
function addToCart(id: string, quantity: number = 1): boolean {
  // ...
  return true;
}

type AddToCartResult = ReturnType<typeof addToCart>;
// type AddToCartResult = boolean
```


## tsconfig 모듈 사용하기

# **모듈 사용하기**

- typescript는 별다른 설정을 해주지않으면, 내가 생성한 ts파일과 동일한 경로 루트에 빌드된 js파일이 그대로 저장되게 된다.
- 이렇게 빌드된 js 파일과 ts파일이 같이 있다면, 나중에는 프로젝트가 커지면 커질 수록 파일 관리가 힘들것이고 이런 부분을 해결하기 위해 `tsconfig.json`을 이용하여 설정해 줄 수 있다.

## `"outDir": "./"`


기본적으로 설정되어있는 경로인 outDir은 빌드한 파일들을 모아놓을 경로를 지정할 수 있다. 빌드된 파일은 dist 폴더에 모아놓는것이 일반적이기에 `"outDir": "./dist"`라고 수정한 후 build를 진행한다.


## `"include"`와 `"exclude"`


해당 두 옵션은 `"compilerOptions"`가 아닌 외부 옵션으로 지정해주어야한다.


```json
{
  "compilerOptions": {...},
  "include": ["src/**/*"], // 빌드를 진행할 파일과 경로 지정 (이는 src안에있는 모든 폴더와 그 폴더안에 있는 파일 경로를 뜻한다.)
  "exclude": [], // 빌드에서 예외 시킬 경로 및 파일명을 작성해주면 된다.
}
```


## `"rootDir": "./"`

- 해당 옵션은 컴파일 하는 파일들의 공통된 조상폴더를 찾아서 그 경로를 기본값으로 가진다.
- 해당 옵션을 활성화 할 경우 프로젝트 디렉토리를 기준으로 폴더구조를 생성하기 때문에 `dist/src/...` 와 같은 구조로 컴파일 되게 된다.
- 대체적으로 src 경로까지 필요가 없을 경우 `"rootDir": "./src"`로 지정을 하게 되면 src경로 안에있는 폴더구조를 따라 `dist`에 폴더 구조를 따라 컴파일 하게 된다.

# **꼭 알아야 할 컴파일러 옵션들**


## `target`: 어떤 ECMAScript 버전으로 변환할지

- [웹 브라우저 별 지원 여부 참고 사이트](https://caniuse.com/?search=ECMAScript)

## `module`: 어떤 방식으로 모듈을 만들지

- 자바스크립트 모듈에는 크게 두 가지 방식이 있습니다. ES6부터 도입된 import/export 문법을 사용하는 ESM(ECMAScript Module) 방식이 있고요, Node.js 같은 데서 기본적으로 사용하는 CJS(CommonJS) 방식이 있는데요. 이 옵션에서는 자바스크립트 코드로 트랜스파일할 때 어떤 모듈 문법으로 변환할지 선택할 수 있습니다. 다양한 옵션 값을 지원하는데요. ESM을 쓰시려면 es6, es2020 같이 es로 시작하는 값을 쓰면 되고, CJS를 쓰시려면 commonjs라고 쓰시면 됩니다. 보통 Node.js 환경에서는 CJS를 사용하고, 프론트엔드 개발을 할 때는 보통 번들러에서 모듈을 알아서 처리해 주기 때문에 ESM, CJS 상관없이 쓰실 수 있을 겁니다. 어떤 걸 선택할지 잘 모르겠다면 commonjs로 설정하는 걸 추천드릴게요.

## `esModuleInterop`: ES 모듈을 안전하게 사용

- ESM 문법에서 import * as moment from 'moment'라든가 import moment from 'moment'라는 문법은 서로 다른데요. 이 옵션을 false로하면 CJS로 변환했을 때 두 코드는 같은 형태의 코드 const moment = require('moment')로 변환됩니다. 안전하게 모듈을 사용하려면 esModuleInterop 옵션은 true로 해놓는 것을 권장드립니다. [(참고)](https://www.typescriptlang.org/tsconfig/#esModuleInterop)

## `forceConsistentCasingInFileNames`: 파일의 대소문자 구분하기

- macOS를 사용하시는 분들은 main.ts라는 파일과 Main.ts라는 파일이 서로 다른데요. Windows와 같이 어떤 운영체제에서는 종종 main.ts라는 파일과 Main.ts라는 파일을 동일하게 취급하기도 합니다. 이런 환경에서 개발하더라도 반드시 대소문자 구분을 명확하게 하겠다는 옵션입니다. 이 옵션도 반드시 true로 해 놓는 걸 권장드립니다.

## `strict`: 엄격한 규칙들 켜기


## `noImplicitAny` : 기존 자바스크립트 코드처럼 타입 없이 사용

- 새로 시작하는 타입스크립트 프로젝트라면 무조건 켜는 걸 추천드리지만, 기존에 자바스크립트로 만든 프로젝트를 타입스크립트로 옮기는 중이라면 이 옵션을 잠시 끄는 것도 좋습니다. 아래처럼 설정하면 strict 규칙들을 한꺼번에 설정하지만 noImplicitAny는 설정하지 않을 수 있습니다.

```json
"strict": true,
"noImplicitAny": false,
```


## `strictNullChecks` : null이 될 가능성이 있다면, 이런 경우를 반드시 처리하도록 하는 옵션입니다. 이것도 되도록이면 켜 놓으시는 걸 추천합니다.


## `skipLibCheck`: 설치한 패키지의 타입 검사하지 않기

- node_modules 폴더에 설치된 패키지들의 타입 검사를 하지 않는 옵션입니다. 패키지 개발 과정에서 대부분 타입 검사가 이뤄지기 때문에, 중복으로 하지 않아도 됩니다. 그래서 이 옵션을 사용하시길 추천드립니다.

## `rootDir`: 최상위 폴더


## `outDir`: 자바스크립트 파일을 생성할 폴더


## `resolveJsonModule`: JSON 파일 임포트하기


## `include`와 `exclude`


## 그 밖의 타입은 [타입스크립트 공식 문서 참고](https://www.typescriptlang.org/tsconfig/)


# **tsconfig.json 파일 불러오기**


아래와 같이 `extends` 옵션으로 원하는 설정 파일의 경로를 적어주면 `tsconfig.json` 파일을 불러올 수 있습니다. 그리고 추가로 옵션을 사용해서 덮어쓸 수도 있죠.


```json
{
  "extends": "<설정 파일 경로>"
}
```


### tsconfig/bases 예시


예를 들어서 권장하는 tsconfig.json 설정들을 모아놓은 [tsconfig/bases](https://github.com/tsconfig/bases) 리포지토리에 있는 설정 파일을 패키지로 설치한 다음, 불러와서 사용해 볼게요.

1. 패키지 설치하기 `npm install --save-dev @tsconfig/recommended`
2. `extends` 설정하기

```json
{
  "extends": "@tsconfig/recommended/tsconfig.json",
  "compilerOptions": {
  }
}
```

1. 옵션 덮어쓰기

```json
{
  "extends": "@tsconfig/recommended/tsconfig.json",
  "compilerOptions": {
    "target": "ES2016" // 이렇게 덮어쓸 옵션만 적어주면 된다.
  }
}
```


## React에 typescript 적용하기

### 프로젝트에 따른 마이그레이션 방법


---


## typescript로 생성하기

# 새로 생성하기


```shell
npx create-react-app . --template typescript
```


# **JavaScript 프로젝트를 TypeScript로 마이그레이션 하기**


### **기존 소스코드 파일 복사하기**

1. 생성된 typescript 파일 내에 해당 경로에 있는 파일을 제외하고, 모두 지워준다.
> 성능 측정 기능(`reportWebVitals.ts` 파일) 그리고 테스트 기능(`setupTests.ts` 파일)을 사용하지 않는다면 지워도 상관없다. 하지만 `src/react-app-env.d.ts` 파일은 반드시 남겨두어야 한다.

```shell
src/react-app-env.d.ts 
// 필수 파일

src/reportWebVitals.ts 
// 성능 측정 기능

src/setupTests.ts 
// 테스트 기능
```

1. 기존 프로젝트의 소스코드에서 `src` 폴더에 있는 파일들을 복사해서 새로운 프로젝트의 `src` 폴더로 붙여 넣습니다. 마찬가지로 새로운 프로젝트의 `public` 폴더에 있는 파일들을 지우고, 기존 프로젝트의 코드도 옮겨줍니다.
2. 파일 확장자 바꾸기

이제 `src` 폴더에 있는 자바스크립트 파일의 확장자를 타입스크립트로 변경한다.


파일에 JSX 문법이 있다면 `.tsx`로 확장자를 바꾸고, 일반적인 자바스크립트 파일이라면 `.ts`로 확장자를 바꿔주자.


## (추가) Vite 프로젝트

Create React App과 비교했을 때 좀 더 가벼운 기능의 프로젝트를 만들어주고, 빌드 속도가 조금 더 빠르다고  알려져 있다. 그리고 리액트 프로젝트 말고도 다양한 프로젝트를 생성하는 데 사용할 수 있다는 장점도 있다.


### 1. Vite 프로젝트 생성


```shell
npm create vite@latest . -- --template react-ts
```


### 2. 패키지 설치


```shell
npm install
```


## 마이그레이션 하기

1. 새롭게 생성한 프로젝트의 `src` 폴더에서 `src/vite-env.d.ts` 파일을 제외하고 모두 지운다.
2. 기존 프로젝트의 소스코드에서 `src` 폴더에 있는 파일들을 복사해서 새로운 프로젝트의 `src` 폴더로 붙여 넣는다.
3. 기존 프로젝트의 소스코드에서 `index.html` 파일과 `index.html` 에서 사용하는 `favicon.ico` 같은  파일들이 있다면 같이 복사해서 새로운 프로젝트로 옮긴다.
4. 확장자 변경
    1. 파일에 JSX 문법이 있는 `.jsx` 파일은 `.tsx`로 확장자를 바꾸고, 일반적인 `.js` 자바스크립트 파일이라면 `.ts`로 확장자를 바꾸어 주자.
5. main.tsx 파일 생성
    1. Vite 버전 5에서는 리액트 프로젝트를 만들 때 `src/main.tsx`라는 파일을 진입점으로 만듭니다. 만약 이전 프로젝트에서 `src/index.js` 또는 `src/index.jsx` 파일을 쓰고 있었다면 `src/main.tsx`로 파일 이름을 바꾸어 주세요.
6. 리액트 버전 확인하기

    만약 기존 프로젝트의 리액트 코드가 버전 17 이하였다면 `index.js` 파일에서 `render()` 함수를 실행하는 방식이 다를 겁니다. 버전 18 이후부터는 `createRoot()` 함수로 `root`를 먼저 만들고 `root.render()`를 실행해 줘야 하는데요. 아래와 같은 문법 차이가 있습니다.


    ```javascript
    // React 17 이전
    import { render } from 'react-dom';
    const container = document.getElementById('root');
    render(<App />, container);
    ```


    ```javascript
    // React 18 이후
    import { createRoot } from 'react-dom/client';
    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(<App />);
    ```


    `package.json` 파일에서 `react` 패키지의 버전을 확인해 보고, 만약 버전이 다르다면 `render()` 함수 코드도 현재 프로젝트 버전에 맞게 수정해 주세요.


## (추가) Next.js 프로젝트

# **TypeScript로 프로젝트 생성하기**


```javascript
npx create-next-app .
```


![directory=wq0pxyujm-image.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=6828&version=&directory=wq0pxyujm-image.png&name=wq0pxyujm-image.png)


그럼 이렇게 타입스크립트를 사용할 거냐고 물어보는데요. Yes를 선택하고 엔터를 입력하고, 프로젝트 생성을 계속 진행하면 됩니다


# **프로젝트를 TypeScript로 마이그레이션 하기**


아이폰에 있던 주소록을 안드로이드로 옮기는 것처럼 프로그래밍에서 데이터나 소프트웨어 같은 걸 한 시스템에서 다른 시스템으로 옮기는 걸 마이그레이션(Migration)이라고 합니다. Next.js에서는 마이그레이션도 편리하게 제공합니다.


## **파일 확장자 바꾸기**


우선 폴더에 있는 자바스크립트 파일의 확장자를 타입스크립트로 바꿔줍니다. 파일에 JSX 문법이 있는 `.jsx` 파일은 `.tsx`로 확장자를 바꾸고, 일반적인 `.js` 자바스크립트 파일이라면 `.ts`로 확장자를 바꿔주세요.


## **개발모드 실행하기**


터미널에서 아래 명령어를 입력해 Next.js 개발모드를 실행합니다. 한 번 실행하면 타입스크립트 파일을 인식해고 알아서 `tsconfig.json` 같은 필요한 파일들을 생성해 줍니다.


```javascript
npm run dev
```


## 기존 패키지에서 타입을 찾을 수 없을때

기존에 프로젝트에서 리액트 말고도 다른 패키지를 쓴 게 있나요? 그런 경우에는 추가로 타입을 설치해줘야 할 수도 있는데요. 이번 레슨에서는 기존 패키지에서 타입을 찾을 수 없을 때 대처하는 방법에 대해 알아보겠습니다.


# **`@types`** **타입 설치하기**


사용하던 패키지 중에  타입스크립트 파일로 바꾸고 나면 가끔 아래 스크린샷처럼 import 구문에서 주의 표시가 나오는 경우가 있습니다.


![directory=rij5udiqo-image.png](https://bakey-api.codeit.kr/api/files/resource?root=static&seqId=6829&version=&directory=rij5udiqo-image.png&name=rij5udiqo-image.png)


에러 메시지를 읽어보면 타입 정의 파일이 없다고 하는데요. `@types/react-modal` 이라는 패키지를 설치하라고 가이드하고 있네요. 가이드에 따라서 설치하면 해결됩니다. 이때 타입스크립트는 개발할 때만 사용하는 거니까 `--save-dev` 옵션으로 설치하는 것 잊지마세요.


```javascript
npm install --save-dev @types/패키지_이름
```


참고로 모든 패키지를 이렇게 설치해야 하는 건 아닙니다. 어떤 패키지들은 `@types` 패키지를 사용하고 어떤 패키지는 사용하지 않아도 되는데요. 타입을 찾을 수 없다고 오류가 난다면 `@types/`를 패키지 이름 앞에 붙여서 설치해주면 됩니다. `@types` 를 사용하는 이유가 궁금하신 분들은 [[타입스크립트에서 @types 패키지를 쓰는 이유]](https://www.codeit.kr/tutorials/91/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C%20%40types%20%ED%8C%A8%ED%82%A4%EC%A7%80%EB%A5%BC%20%EC%93%B0%EB%8A%94%20%EC%9D%B4%EC%9C%A0)에서 더 자세히 알아보세요.


### React에 적용하기


---


## HTMLElement & Event

### HTMLElement

- 일반적으로 DOM Node의 type을 지정해줄때는 `as`를 사용해서 `HTMLElement` 타입을 지정해주면되는데, `HTMLElement`들 중에서도 실제 가르키고있는 시멘틱 태그의 이름과 동일한 (ex: `HTMLInputElement`) 이름의 타입을 지정 할 수 있습니다
    > 사용할 때에는 `HTMLElement`만 입력해도, 자동완성으로 어떤 종류가 있는지 보여주니, 다 외운다기 보다는 필요할때 에디터에서 띄어주는 미리보기를 통해 확인하는 것이 좋습니다.

### Event

- 이벤트 리스너의 경우에도 타입을 지정해주어야 하는데, 포괄적으로 사용되는 타입으로는 `Event` 타입이 있고, 해당 타입 또한 `HTMLElement`처럼 `UIEvent`, `MouseEvent`, `InputEvent` 와 같이 타입을 지정 할 수 있으니 자동완성을 통해 필요한 타입을 지정해주면 될 것 같습니다.
- 예제

```typescript
const usernameInput = document.getElementById('username') as 
HTMLInputElement
;
const submitButton = document.getElementById('submit') as 
HTMLButtonElement
;

usernameInput.focus();
submitButton.addEventListener('click', handleClick);

function handleClick(e: 
Event
) {
e.preventDefault();
const message = `${usernameInput.value}님 반갑습니다!`;
alert(message);
}
```


## children의 type & HTMLAttributes

### children


기본적으로 `children`의 type은 React에서 제공되는 `ReactNode` 타입을 사용하면 됩니다.


### HTMLAttributes


`HTMLAttributes`는 _HTML의 기본 태그들의 속성으로 props 타입으로 지정하고 싶을때_ 사용 됩니다. `HTMLElement`와 동일하게 에디터 내에서 `HTMLAttributes`를 작성하면, 자동완성 미리보기가 나오게 됩니다.


그리고 제네릭을 이용하여, `HTMLAttributes<HTMLElement>` 이런식으로 사용해주면 됩니다만,


추가적으로 `interface`로 만든 타입에 `extends`를 이용하여, 타입 상속을 통해 사용하면 됩니다.

- 예제

```typescript
interface Props extends 
InputHTMLAttributes
<
HTMLInputElement
>{}
```


---


🤔 HTML 기본 속성이 너무 많은데 그걸 다 props로 지정해줘야하나요?

> 아닙니다. 이럴때는 어떤 속성을 props로 받을지 정확히 판별할 수 없기 때문에 _rest 파라미터_를 이용하는 것이 좋습니다. 하지만, 받아야하는 속성이 확실하게 있다면 직접 지정해주는것도 괜찮습니다.
- rest 파라미터 활용 예제

```typescript
export default function Input({
...rest
}: 
Props
){
	return <input {
...rest
}/>;
}
```

> 이렇게 작성 되었을때, 에디터에서 **`…rest`**에 마우스를 올려봤을때, 아래와 같은 상세한 HTML 속성 타입을 확인 할 수 있습니다.

![image.png](/images/migrated-notion/typescript/image.png)


## useState, useRef type

## useState


`useState`의 경우 초기값을 지정해줄 때, 알아서 타입 추론을 통해 타입이 지정되지만 원하는 타입으로 추론되지않거나 명시적인 타입 지정이 필요할 경우 제네릭을 이용해서 타입을 지정해주면 된다


### 예시


```typescript
const [user, setUser] = useState<{
	name: string;
	age: string;
}>({
	name: '',
	age: '',
});
```


🔍 빈 배열과 `never` 타입


`useState`를 사용할때, 객체 뿐만 아니라 빈 배열을 사용할 때도 있다.


예를 들어 아래와 같이 초기값을 빈 배열로 사용하는 `state`가 있다고 가정해보자.


```typescript
const [names, setNames] = useState([]);
```


이때 에디터에서 마우스 커서를 올려보면 해당 타입은 `never` 타입으로 뜨는 것을 확인 할 수 있다.


![image.png](/images/migrated-notion/typescript/image.png)


이 `never` 타입은 _**절때 있을 수 없는 값**_을 나타낸다.


그렇기에 빈 배열을 초기값으로 사용하는 배열 `state`에도 제네릭을 통해서 타입을 명시해주는 것이 좋다.


```typescript
const [names, setNames] = useState<string[]>([]);
```


---


## useRef


`useRef`의 경우는 HTML DOM node를 직접 참조하기 때문에 `HTMLElement` 타입을 제네릭을 통해 명시적으로 타입을 지정해주어야한다.


하지만, `useRef`의 초기값을 지정해주지않으면 실제 참조하는 DOM의 type이 `undefined`로 나오기 때문에


`null` 이라는 초기값을 넣어줘야 타입 에러가 발생하지않는다.


아래 예시는 `<form>` 태그에 접근한다는 가정하에 작성되었다.


### 예시


```typescript
const getRef = useRef<HTMLFormElemenet>(null);
```



 [HTMLElement & Event](https://www.notion.so/13e4ef560994804abf22c9705641c19c) 


---


## useEffect


번외로 `useEffect`의 타입은 어떻게 정하나요? 라는 궁굼증이 들 때 있다.


하지만 `useEffect`는 타입을 지정해줘야하는 경우가 대체로 없기때문에 따로 설명하진않겠다.


## 이벤트 핸들러 타입 정하기

## 이벤트 핸들러의 타입


우리가 일반적으로 이벤트 핸들러 함수를 만들때, handle이라는 명칭을 가지고 사용할 것 이다.


그 중에서 유저가 어떤 액션을 취했을 때 이런 아웃풋을 보내라는 식으로 함수를 작성할텐데,


이때의 e.target의 타입도 지정할 수 있다.


### 예제


```typescript
// input을 작성했을 때 동작하는 함수
const handelChange = (e) => {
	const { name, value } = e.target;
	...
}

// 클릭 했을 때 동작하는 함수
const handelClick = (e) => {
	e.preventDefault;
	...
}
```


위 예제와 같이 `input`을 작성했을 때 동작하는 함수와 클릭했을 때 동작하는 함수가 있다.


이벤트 핸들러의 타입은 리액트에서 기본적으로 제공되는 `Event` 타입이라는게 있다.


하지만 좀 더 명확하게 어떤 이벤트 타입인지 명시해주기 위해서 `~Event`로 사용해주어야한다.


우선 `handelChange` 함수에서의 이벤트는 input change가 발생했을때 실행되는 함수이니 아래와 같이 작성해주면 될 것 이다.


```typescript
const handelChange = (e: 
ChangeEvent
) => {
	const { 
name, value
 } = e.target;
	...
}
```


그런데 이벤트 핸들러의 타입을 지정해주고나니 `e.target`의 속성 타입을 찾을 수 없다며 에러가 발생한다.


왜냐하면 `input` 입력에 대한 이벤트이기때문에 dom을 직접 참조하고 있기에 해당 input에 대한 타입도 `HTMLElement`로 지정해주어야한다.


```typescript
const handelChange = (e: ChangeEvent<
HTMLInputElement
>) => {
	const { name, value } = e.target;
	...
}
```


이제 클릭 했을때의 동작 함수를 살펴보자


‘클릭’ 이라는 것 자체가 마우스를 통해서 이루어지는 이벤트이기 때문에 리액트에서 지원하는 `MouseEvent`라는 타입을 사용해볼 수 있다.

- 추가적으로 `HTMLButtonElement`를 명시해주지않아도 상관은 없다. 명확해질때 작성하자.

```typescript
const handelClick = (e: 
MouseEvent
) => {
	e.preventDefault;
	...
}
```


💡 명확하게 이벤트 타입을 정하고 싶지 않거나, 타입을 작성하기 귀찮을 때(?)


리액트에서 제공되는 보편적인 이벤트 타입중에는 `SyntheticEvent`가 있는데 해당 이벤트 타입은 리액트에서 브라우저의 기본 이벤트를 그대로 가져다쓰는 것이 아닌 리액트에서 추가적인 기능을 덧붙힌 객체를 사용하기때문에 `SyntheticEvent`라는 타입으로 사용해야한다.


이 `SyntheticEvent`는 `ChangeEvent` 또는 `MouseEvent` 타입들의 조상격 타입이다.


<u>**되도록 명확하게 이벤트 타입을 지정해주는것을 권장한다. (알아만 두자)**</u>


## props에서 기본 이벤트 타입


위는 우리가 handel 함수에 대한 이벤트 타입을 지정해준것이다.


그렇다면 컴포넌트 함수에서 사용되는 매개변수의 이벤트 타입은 어떻게 지정해주어야하는걸까?


위에 `handelClick` 함수를 기준으로 작성해보자


사실 이미 `props`로 내려줄 이벤트 함수의 이벤트 핸들러에 타입을 지정해줬기때문에 그걸 그대로 가져와서 해당 `props`를 받을 컴포넌트의 이벤트 타입으로 넣어주면 된다.


```typescript
interface Props {
	onClick: (e: MouseEvent) => void;
}
```


