---
title: "JavaScript"
description: "학습 내용 자세한 객체와 배열 객체란 💡 객체란 💡 객체는 키값 쌍으로 구성된 데이터 구조로, 여러 값(속성)과 메서드(함수)를 하나의 단위로 묶어 관리할 수 있습니다. 1. 객체(Object)의 기본 개념 객체 생성 JavaScript에서 객체를 생성하는 방법은 여러 가지가 있습니다. 대표적인 방법은 객체 리터럴과 생성자 함수를 사용하는 방법입니다. "
pubDate: 2024-10-08T16:38:00.000Z
updatedDate: 2025-06-17T02:49:00.000Z
tags: ["javascript", "자바스크립트"]
category: "javascript"
slug: "javascript"
draft: false
originalUrl: "https://www.notion.so/1194ef5609948040ad5bed8170c1adcf"
---


## 학습 내용


---


## 자세한 객체와 배열

## 객체란

> 💡 객체란


> 💡 객체는 **키-값 쌍**으로 구성된 데이터 구조로, 여러 값(속성)과 메서드(함수)를 하나의 단위로 묶어 관리할 수 있습니다.


### 1. 객체(Object)의 기본 개념


### 객체 생성


JavaScript에서 객체를 생성하는 방법은 여러 가지가 있습니다. 대표적인 방법은 **객체 리터럴**과 **생성자 함수**를 사용하는 방법입니다.


### 객체 리터럴 방식:


```javascript
let person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

console.log(person.name); // 출력: John
person.greet(); // 출력: Hello, John
```

- **설명**: 객체 `person`은 `name`, `age` 속성과 `greet` 메서드를 가지고 있습니다. 속성은 **데이터**를 저장하며, 메서드는 **기능**을 수행합니다.

### 생성자 함수 방식:


```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log("Hello, " + this.name);
  };
}

let john = new Person("John", 30);
john.greet(); // 출력: Hello, John
```

- **설명**: `Person` 함수는 객체 생성자입니다. `new` 키워드를 사용해 `Person` 객체의 인스턴스를 만들고, `john`이라는 객체를 생성합니다.

# 2. 객체의 주요 메서드와 내장 함수


JavaScript에는 객체를 다루기 위한 다양한 **내장 메서드**와 **함수**가 있습니다. 여기서는 자주 사용되는 몇 가지를 소개하겠습니다.


### 2.1 `Object.keys()`


이 메서드는 객체의 **모든 키**를 배열로 반환합니다.


```javascript
let person = { name: "John", age: 30, gender: "male" };
let keys = Object.keys(person);
console.log(keys); // 출력: ["name", "age", "gender"]
```

- **설명**: `Object.keys()`는 객체의 속성 이름(키)을 배열로 반환합니다.

### 2.2 `Object.values()`


이 메서드는 객체의 **모든 값**을 배열로 반환합니다.


```javascript
let person = { name: "John", age: 30, gender: "male" };
let values = Object.values(person);
console.log(values); // 출력: ["John", 30, "male"]
```

- **설명**: `Object.values()`는 객체의 속성 값을 배열로 반환합니다.

### 2.3 `Object.entries()`


이 메서드는 객체의 **키-값 쌍**을 배열의 배열로 반환합니다.


```javascript
let person = { name: "John", age: 30, gender: "male" };
let entries = Object.entries(person);
console.log(entries); // 출력: [["name", "John"], ["age", 30], ["gender", "male"]]
```

- **설명**: `Object.entries()`는 객체의 각 키-값 쌍을 배열로 묶어 배열 안에 담아 반환합니다.

### 2.4 `Object.assign()`


이 메서드는 **하나 이상의 소스 객체**를 **타겟 객체**에 복사하여 새로운 객체를 만듭니다. 주로 객체를 **얕은 복사**할 때 사용됩니다.


```javascript
let target = { a: 1 };
let source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // 출력: { a: 1, b: 2, c: 3 }
```

- **설명**: `Object.assign()`은 `target` 객체에 `source` 객체의 속성을 복사하여 반환합니다. 기존의 `target` 객체도 변경됩니다.

### 2.5 `Object.freeze()`


이 메서드는 객체를 **동결(freeze)**하여 **변경할 수 없도록** 만듭니다. 동결된 객체는 속성 추가, 삭제, 수정이 모두 불가능해집니다.


```javascript
let person = { name: "John", age: 30 };
Object.freeze(person);

person.age = 31; // 무시됨
console.log(person.age); // 출력: 30
```

- **설명**: `Object.freeze()`는 객체를 동결하여, 속성 값 변경이 불가능하게 합니다.

### 2.6 `Object.seal()`


이 메서드는 객체를 **밀봉(seal)**하여 **새로운 속성 추가**는 불가능하지만, **기존 속성 값의 수정**은 가능합니다.


```javascript
let person = { name: "John", age: 30 };
Object.seal(person);

person.age = 31; // 수정 가능
person.gender = "male"; // 추가 불가능
console.log(person); // 출력: { name: "John", age: 31 }
```

- **설명**: `Object.seal()`은 객체를 밀봉하여, 새로운 속성을 추가할 수 없게 하지만 기존 속성은 수정할 수 있습니다.

### 2.7 `Object.getPrototypeOf()`와 `Object.setPrototypeOf()`


이 메서드들은 객체의 **프로토타입**을 가져오거나 설정하는 데 사용됩니다.


### `Object.getPrototypeOf()`:


```javascript
let arr = [];
console.log(Object.getPrototypeOf(arr)); // 출력: []
```


### `Object.setPrototypeOf()`:


```javascript
let obj = {};
let proto = { greet() { console.log("Hello!"); } };
Object.setPrototypeOf(obj, proto);

obj.greet(); // 출력: Hello!
```

- **설명**: `Object.getPrototypeOf()`는 객체의 프로토타입을 반환하고, `Object.setPrototypeOf()`는 객체의 프로토타입을 설정합니다.

# 3. 객체를 순회하는 방법


객체의 속성들을 순회(반복)하는 방법으로는 **`for...in`** **문**과 **`Object`** **메서드**들을 사용할 수 있습니다.


### `for...in` 문


이 문은 객체의 **열거 가능한 모든 속성**을 순회합니다.


```javascript
let person = { name: "John", age: 30 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// 출력:
// name: John
// age: 30
```

- **설명**: `for...in` 문은 객체의 각 키를 반복하며, 해당 키의 값을 `person[key]`로 출력합니다.

### `Object.keys()`와 `forEach()`


`Object.keys()`와 `forEach()`를 함께 사용하여 객체의 키와 값을 순회할 수 있습니다.


```javascript
let person = { name: "John", age: 30 };
Object.keys(person).forEach(key => {
  console.log(key + ": " + person[key]);
});
// 출력:
// name: John
// age: 30
```

- **설명**: `Object.keys()`는 객체의 키들을 배열로 반환하고, `forEach()`는 그 배열을 순회하며 각 키와 그에 대응하는 값을 출력합니다.

# 4. 객체의 비밀번호 역할 (Symbol)


객체의 **고유한 속성**을 만들기 위해 `Symbol`을 사용할 수 있습니다. `Symbol`은 **유일한 값**을 생성하며, 다른 속성이나 메서드와 충돌하지 않도록 합니다.


```javascript
let password = Symbol('password');
let user = {
  username: "user1",
  [password]: "secret123"
};

console.log(user.password); // 출력: undefined
console.log(user[password]); // 출력: secret123
```

- **설명**: `Symbol`을 사용하면 객체에 고유한 속성을 추가할 수 있으며, 이 속성은 `for...in` 또는 `Object.keys()` 같은 방법으로 순회되지 않습니다. 이로 인해 비밀스럽게 관리하고 싶은 데이터를 저장하는 데 유용합니다.

# 5. 객체의 구조 분해 할당 (Destructuring)


구조 분해 할당을 통해 객체의 속성을 쉽게 추출할 수 있습니다.


```javascript
let person = { name: "John", age: 30 };

// 구조 분해 할당
let { name, age } = person;

console.log(name); // 출력: John
console.log(age);  // 출력: 30
```

- **설명**: `let { name, age } = person;`은 `person` 객체의 `name`과 `age` 값을 변수로 추출하는 간단한 방법입니다.

# 요약

- **객체 생성**: 객체 리터럴과 생성자 함수를 통해 생성.
- **객체 메서드**: `Object.keys()`, `Object.values()`, `Object.entries()`, `Object.assign()`, `Object.freeze()` 등.
- **객체 순회**: `for...in` 문과 `Object.keys()` 등을 활용한 순회.
- **구조 분해 할당**: 객체의 속성을 쉽게 추출.
- **Symbol**: 객체의 고유한 속성을 관리.

## 배열이란

JavaScript에서 **배열(Array)**은 여러 데이터를 한 곳에 모아 저장할 수 있는 **리스트형 자료구조**입니다. 배열은 숫자, 문자열, 객체, 함수 등 **다양한 자료형**을 포함할 수 있으며, **순서**를 가지는 데이터의 집합입니다. 배열의 각 요소는 **인덱스(index)**로 접근할 수 있으며, 인덱스는 0부터 시작합니다.


# 1. 배열의 생성


배열을 생성하는 방법은 크게 두 가지가 있습니다: **배열 리터럴**과 **`Array`** **생성자**.


### 1.1 배열 리터럴


가장 일반적인 배열 생성 방법은 배열 리터럴을 사용하는 것입니다. **대괄호 `[]`**를 사용하여 배열을 만듭니다.


### 예시:


```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits); // 출력: ["apple", "banana", "orange"]
```

- **설명**: 배열 리터럴을 사용하면 간단하게 배열을 만들 수 있습니다. 이 배열에는 세 개의 문자열 요소가 포함되어 있습니다.

### 1.2 `Array` 생성자


`Array` 생성자를 사용하여 배열을 생성할 수도 있습니다.


### 예시:


```javascript
let numbers = new Array(3);
console.log(numbers); // 출력: [empty × 3]
```

- **설명**: `new Array(3)`는 길이가 3인 배열을 생성합니다. 이 배열은 세 개의 빈 슬롯을 가지고 있습니다.

```javascript
let numbers = new Array(1, 2, 3);
console.log(numbers); // 출력: [1, 2, 3]
```

- **설명**: `new Array(1, 2, 3)`는 요소가 `1`, `2`, `3`인 배열을 생성합니다. 배열 생성자에 여러 개의 인자를 전달하면 각각의 인자가 배열의 요소가 됩니다.

# 2. 배열의 기본 작업


### 2.1 배열에 요소 추가


배열에 요소를 추가하는 가장 일반적인 방법은 **`push()`**와 **`unshift()`** 메서드를 사용하는 것입니다.

- **`push()`**: 배열의 **끝**에 요소를 추가합니다.
- **`unshift()`**: 배열의 **앞**에 요소를 추가합니다.

### 예시:


```javascript
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // 출력: ["apple", "banana", "orange"]

fruits.unshift("mango");
console.log(fruits); // 출력: ["mango", "apple", "banana", "orange"]
```


### 2.2 배열에서 요소 삭제


배열에서 요소를 삭제하는 가장 일반적인 방법은 **`pop()`**과 **`shift()`** 메서드를 사용하는 것입니다.

- **`pop()`**: 배열의 **끝**에서 요소를 제거합니다.
- **`shift()`**: 배열의 **앞**에서 요소를 제거합니다.

### 예시:


```javascript
let fruits = ["apple", "banana", "orange"];
fruits.pop();
console.log(fruits); // 출력: ["apple", "banana"]

fruits.shift();
console.log(fruits); // 출력: ["banana"]
```


### 2.3 배열의 특정 위치에 요소 추가 및 삭제


**`splice()`** 메서드를 사용하면 배열의 특정 위치에서 요소를 추가하거나 삭제할 수 있습니다.

- **`splice(index, deleteCount, ...items)`**: `index` 위치에서 `deleteCount`만큼 요소를 삭제하고, 삭제된 위치에 새로운 `items`를 추가합니다.

### 예시:


```javascript
let fruits = ["apple", "banana", "orange"];

// 인덱스 1에서 1개의 요소 삭제 후 "grape" 추가
fruits.splice(1, 1, "grape");
console.log(fruits); // 출력: ["apple", "grape", "orange"]
```

- **설명**: `splice(1, 1, "grape")`는 인덱스 `1`에서 `"banana"`를 삭제하고 그 자리에 `"grape"`를 추가합니다.

# 3. 배열의 순회


배열의 요소를 순회(반복)하는 방법은 여러 가지가 있습니다. 그중 자주 사용하는 방법은 **`for`** **문**, **`for...of`** **문**, **`forEach()`** 메서드입니다.


### 3.1 `for` 문


`for` 문을 사용하여 배열의 각 요소를 순회할 수 있습니다.


### 예시:


```javascript
let fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// 출력: apple, banana, orange
```

- **설명**: `for` 문은 인덱스를 사용해 배열의 각 요소에 접근합니다.

### 3.2 `for...of` 문


`for...of` 문을 사용하면 배열의 각 요소를 보다 간결하게 순회할 수 있습니다.


### 예시:


```javascript
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
  console.log(fruit);
}
// 출력: apple, banana, orange
```

- **설명**: `for...of` 문은 인덱스를 사용하지 않고 배열의 각 요소에 직접 접근합니다.

### 3.3 `forEach()` 메서드


`forEach()` 메서드는 배열의 각 요소에 대해 주어진 함수를 호출합니다.


### 예시:


```javascript
let fruits = ["apple", "banana", "orange"];

fruits.forEach(function(fruit, index) {
  console.log(`${index}: ${fruit}`);
});
// 출력: 0: apple, 1: banana, 2: orange
```

- **설명**: `forEach()` 메서드는 배열의 각 요소와 인덱스를 콜백 함수의 인자로 전달합니다.

# 4. 배열의 변환 메서드


### 4.1 `map()` 메서드


`map()` 메서드는 배열의 각 요소에 주어진 함수를 적용한 **새로운 배열**을 반환합니다.


### 예시:


```javascript
let numbers = [1, 2, 3];
let doubled = numbers.map(function(number) {
  return number * 2;
});
console.log(doubled); // 출력: [2, 4, 6]
```

- **설명**: `map()` 메서드는 `numbers` 배열의 각 요소에 2를 곱한 값을 새로운 배열로 반환합니다.

### 4.2 `filter()` 메서드


`filter()` 메서드는 주어진 조건을 만족하는 요소만을 포함한 **새로운 배열**을 반환합니다.


### 예시:


```javascript
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // 출력: [2, 4]
```

- **설명**: `filter()` 메서드는 `numbers` 배열에서 짝수인 요소들만을 포함한 새로운 배열을 반환합니다.

### 4.3 `reduce()` 메서드


`reduce()` 메서드는 배열의 모든 요소를 **하나의 값**으로 줄이는(누적) 작업을 수행합니다.


### 예시:


```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum); // 출력: 15
```

- **설명**: `reduce()` 메서드는 `numbers` 배열의 모든 요소를 더해 하나의 값 `sum`으로 줄입니다.

# 5. 배열의 정렬 메서드


### 5.1 `sort()` 메서드


`sort()` 메서드는 배열을 **정렬**합니다. 기본적으로 요소를 문자열로 변환한 후 유니코드 순서에 따라 정렬하지만, 숫자나 특정 조건에 따라 정렬하려면 비교 함수를 전달해야 합니다.


### 예시:


```javascript
let numbers = [3, 1, 4, 1, 5, 9];
numbers.sort((a, b) => a - b);
console.log(numbers); // 출력: [1, 1, 3, 4, 5, 9]
```

- **설명**: `sort((a, b) => a - b)`는 배열을 오름차순으로 정렬합니다.

### 5.2 `reverse()` 메서드


`reverse()` 메서드는 배열의 요소 순서를 **반대로** 바꿉니다.


### 예시:


```javascript
let numbers = [1, 2, 3];
numbers.reverse();
console.log(numbers); // 출력: [3, 2, 1]
```

- **설명**: `reverse()` 메서드는 배열의 요소 순서를 역순으로 정렬합니다.

# 6. 배열의 복사와 병합


### 6.1 배열 복사 (`slice()`)


`slice()` 메서드는 배열의 일부를 잘라내어 **새로운 배열**로 반환합니다.


### 예시:


## 객채와 배열

### 1. 객체(Object)


### 객체에 값 추가하기


객체는 **키(key)**와 **값(value)**으로 이루어져 있습니다. 객체에 새로운 키-값 쌍을 추가하는 것은 간단합니다.


### 예시:


```javascript
let person = { name: "John", age: 30 };

// 새로운 키-값 쌍 추가
person.gender = "male";  // 점 표기법 사용
// 또는
person["nationality"] = "American";  // 대괄호 표기법 사용

console.log(person);
// 출력: { name: 'John', age: 30, gender: 'male', nationality: 'American' }
```

- **설명**: `person.gender = "male"`는 `gender`라는 새로운 키와 `"male"`이라는 값을 객체에 추가합니다. 대괄호 표기법(`person["nationality"] = "American"`)은 키를 문자열로 사용할 때 유용합니다.

### 객체에서 값 삭제하기


객체에서 특정 키-값 쌍을 삭제하려면 `delete` 키워드를 사용합니다.


### 예시:


```javascript
let person = { name: "John", age: 30, gender: "male" };

// 키-값 쌍 삭제
delete person.age;

console.log(person);
// 출력: { name: 'John', gender: 'male' }
```

- **설명**: `delete person.age`는 `age` 키와 그 값을 객체에서 삭제합니다. 이제 `person` 객체에는 `name`과 `gender`만 남아 있습니다.

### 객체에서 값 수정하기


객체의 값을 수정하는 것도 간단합니다. 추가할 때와 마찬가지로 키에 접근하여 새로운 값을 할당하면 됩니다.


### 예시:


```javascript
let person = { name: "John", age: 30 };

// 값 수정
person.age = 31;

console.log(person);
// 출력: { name: 'John', age: 31 }
```

- **설명**: `person.age = 31`는 `age` 값을 30에서 31로 변경합니다.

### 2. 배열(Array)


### 배열에 값 추가하기


배열에 값을 추가하는 방법에는 여러 가지가 있습니다. **배열의 끝**에 추가하거나, **앞**에 추가하거나, **중간**에 추가할 수 있습니다.


### 예시:


```javascript
let fruits = ["apple", "banana"];

// 배열 끝에 추가
fruits.push("orange");  // ["apple", "banana", "orange"]

// 배열 앞에 추가
fruits.unshift("mango");  // ["mango", "apple", "banana", "orange"]

// 배열 중간에 추가
fruits.splice(2, 0, "grape");  // ["mango", "apple", "grape", "banana", "orange"]

console.log(fruits);
```

- **`push()`**: 배열의 **끝**에 `"orange"`를 추가합니다.
- **`unshift()`**: 배열의 **앞**에 `"mango"`를 추가합니다.
- **`splice()`**: 인덱스 `2`에 `"grape"`를 추가합니다.

### 배열에서 값 삭제하기


배열에서 값을 삭제하는 방법도 비슷합니다. **끝**에서 삭제하거나, **앞**에서 삭제하거나, **중간**에서 삭제할 수 있습니다.


### 예시:


```javascript
let fruits = ["apple", "banana", "orange"];

// 배열 끝에서 삭제
fruits.pop();  // ["apple", "banana"]

// 배열 앞에서 삭제
fruits.shift();  // ["banana"]

// 배열 중간에서 삭제
fruits.splice(0, 1);  // []

console.log(fruits);
```

- **`pop()`**: 배열의 **끝**에서 `"orange"`를 삭제합니다.
- **`shift()`**: 배열의 **앞**에서 `"apple"`을 삭제합니다.
- **`splice()`**: 인덱스 `0`에서 **1개의 요소**를 삭제합니다.

### 배열에서 값 수정하기


배열의 값을 수정하려면 배열의 특정 위치에 접근하여 새로운 값을 할당하면 됩니다.


### 예시:


```javascript
let fruits = ["apple", "banana", "orange"];

// 값 수정
fruits[1] = "grape";  // ["apple", "grape", "orange"]

console.log(fruits);
```

- **설명**: `fruits[1] = "grape"`는 `"banana"`를 `"grape"`로 변경합니다. 배열의 두 번째 요소가 수정된 것입니다.

### 요약:

- **객체에서**:
    - **추가**: `person.gender = "male";`
    - **삭제**: `delete person.age;`
    - **수정**: `person.age = 31;`
- **배열에서**:
    - **추가**:
        - 끝에 추가: `fruits.push("orange");`
        - 앞에 추가: `fruits.unshift("mango");`
        - 중간에 추가: `fruits.splice(2, 0, "grape");`
    - **삭제**:
        - 끝에서 삭제: `fruits.pop();`
        - 앞에서 삭제: `fruits.shift();`
        - 중간에서 삭제: `fruits.splice(0, 1);`
    - **수정**: `fruits[1] = "grape";`

## 객체의 얕은복사 & 깊은복사

# 1. **객체의 얕은 복사 (Shallow Copy)**


얕은 복사는 객체의 **참조(레퍼런스) 값**만 복사하는 방식입니다. 즉, 새로운 객체를 만들지만, 그 내부의 **중첩된 객체나 배열은 원본 객체와 동일한 참조**를 가집니다. 이로 인해 원본 객체나 복사된 객체 중 하나를 수정하면, **다른 객체에도 영향을 미칩니다.**


### 얕은 복사의 방법

- `Object.assign()`
- Spread 연산자 (`...`)

### 예시


```javascript
const original = { name: 'Alice', details: { age: 25 } };

// 얕은 복사 (Object.assign)
const shallowCopy = Object.assign({}, original);

// 얕은 복사 (Spread 연산자)
const shallowCopy2 = { ...original };

shallowCopy.details.age = 30;

console.log(original.details.age); // 30 -> 원본 객체도 영향을 받음
console.log(shallowCopy.details.age); // 30
```


위의 예시에서 `shallowCopy`는 얕은 복사로 인해 `details` 객체의 참조값을 복사받습니다. 따라서 `shallowCopy`에서 `details`의 값을 수정하면 `original`의 값도 바뀌는 것을 볼 수 있습니다.


# 2. **객체의 깊은 복사 (Deep Copy)**


깊은 복사는 객체의 모든 속성과 중첩된 객체(혹은 배열)를 **새로운 객체로 재귀적으로 복사**하는 방식입니다. 즉, 복사된 객체는 원본 객체와 **독립적인 메모리**를 가집니다. 깊은 복사를 하면, 원본 객체나 복사된 객체 중 하나를 수정해도 **서로 영향을 주지 않습니다.**


### 깊은 복사의 방법

- `JSON.parse()`와 `JSON.stringify()`
- 재귀적으로 직접 구현
- 외부 라이브러리 사용 (예: Lodash의 `cloneDeep()`)

### 예시


```javascript
const original = { name: 'Alice', details: { age: 25 } };

// 깊은 복사 (JSON 방식)
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.details.age = 30;

console.log(original.details.age); // 25 -> 원본 객체는 영향을 받지 않음
console.log(deepCopy.details.age); // 30
```


`JSON.stringify()`와 `JSON.parse()`를 사용한 방식은 간단한 객체에서는 잘 동작하지만, **함수,** **`undefined`****,** **`Date`** **객체 등은 제대로 복사되지 않는** 한계가 있습니다. 따라서 더 복잡한 객체의 깊은 복사가 필요할 때는 재귀적인 방법을 직접 구현하거나 외부 라이브러리를 사용하는 것이 좋습니다.


# 요약

- **얕은 복사**는 객체의 참조만 복사하기 때문에 중첩된 객체는 원본과 공유됩니다.
- **깊은 복사**는 중첩된 객체까지 모두 새로운 메모리에 복사되므로, 원본과 독립적인 객체가 만들어집니다.

## JS 인터랙티브

## 인터랙티브 자바 스크립트

## JS로 태그 선택하기

| 메소드                                            | 의미                       | 결과                                  |
| ---------------------------------------------- | ------------------------ | ----------------------------------- |
| **`document.getElementById('id')`**            | **HTML id속성으로 태그 선택하기**  | **id에 해당하는 태그 하나**                  |
| **`document.getElementsByClassName('class')`** | **class에 해당하는 태그 모음**    | **class에 해당하는 태그 모음**               |
| **`document.getElementsByTagName('tag')`**     | **HTML 태그 이름으로 태그 선택하기** | **tag에 해당하는 태그 모음**                 |
| **`document.querySelector('css')`**            | **css 선택자로 태그 선택하기**     | **css 선택자에 해당하는 태그 중 가장 첫번째 태그 하나** |
| **`document.querySelectorAll('css')`**         | **css 선택자로 태그 선택하기**     | **css 선택자에 해당하는 태그 모음**             |


## 유사 배열 이란?
- 배열과 유사하지만 결코 배열은 아닌 객체를 뜻한다.

### 유사배열의 특징

- 숫자 형태의 인덱싱이 가능하다
- `length` 프로퍼티가 존재한다.
- 배열의 기본 메소드를 사용할 수 없다.
- `Array.isArray(유사배열)`의 리털값은 false다

## 이벤트, 이벤트 핸들링, 이벤트 핸들러

### 이벤트

- 웹 페이지에서 발생하는 대부분의 일(사건)들 (ex: 버튼 클릭, 스크롤, 키보드 입력 등)

### 이벤트 핸들링

- JS를 통해 이벤트를 다루는 일(이벤트 리스너가 발생되는 과정)

### 이벤트 핸들러

- 이벤트가 발생했을 때 일어나야하는 구체적인 동작들을 표현한 코드(**이벤트 리스너(EventListener)** 라고도 부른다)

---


## 이벤트 핸들러를 등록,삭제하는 방법

# 등록

1. JS로 해당 DOM 객체의 onclick 프로퍼티에 등록하기

```javascript
const btn = document.querySelector('#myBtn');

btn.onclick = function() {
  console.log('Hello Codeit!');
};
```

- 👍🏻 장점 : 간단하게 이벤트 설정 가능
- 👎🏻 단점 : 동일한 이벤트에 여러개 핸들러를 사용할 수 없음. 이전에 등록한 핸들러는 덮어쓰여짐.
1. HTML 요소에 직접 추가 하기

```javascript
<button onclick="alert('Button clicked!')">Click Me</button>
```

- 👍🏻 장점 : 빠르고 간단하게 이벤트 설정
- 👎🏻 단점 : html과 js코드가 분리되지않고 섞여 있어 유지보수가 어려움
1. JS에서 `addEventListener`를 사용한 등록

```javascript
<button id="myButton">Click Me</button>

<script>
  const button = document.getElementById('myButton');
  button.addEventListener('click', function() {
    alert('Button clicked!');
  });
</script>
```

- 👍🏻 장점
    - 여러개의 핸들러를 하나의 이벤트에 등록 가능
    - 유지보수 용이함
    - 이벤트 [<u>**캡처링/버블링**</u>](/e2faf4c40a15439398040b1bf1dd6d0f#d45d55312e17466693487ae36d623104), `removeEvenetListener`를 통한 핸들러 제거 가능
- 👎🏻 단점 : 코드가 다소 길어질 수 있음. 하지만 구조적인 면에서 권장 되는 방식

# 삭제


`addEventListener` 메소드를 활용해서 이벤트 핸들러를 등록했다면, `Element.removeEventListner('type', 'handler')`를 통해서 이벤트 핸들러를 삭제할 수 있습니다.


## 이벤트 객체

이벤트 객체는 이벤트가 발생했을 때 브라우저가 생성하여 이벤트 핸들러에 전달하는 객체입니다. 이 객체는 이벤트에 대한 다양한 정보를 포함하고 있으며, 이벤트를 처리할 때 유용한 속성과 메서드를 제공합니다.

- **`event.type`**: 발생한 이벤트의 유형을 나타냅니다.
- **`event.target`**: 이벤트가 발생한 실제 DOM 요소를 나타냅니다
- **`event.currentTarget`**: 이벤트 핸들러가 붙어 있는 요소를 나타냅니다
- **`event.preventDefault()`**: 기본 브라우저 동작을 방지합니다
- **`event.stopPropagation()`**: 이벤트 전파를 중지합니다. 이벤트 버블링을 막아 부모 요소의 이벤트 핸들러가 실행되지 않도록 할 때 사용합니다.
- **`event.key`**: 키보드 이벤트에서 눌린 키의 값을 나타냅니다

## 이벤트 버블링

이벤트 버블링은 DOM 트리에서 이벤트가 발생할 때, 이벤트가 최상위 요소까지 전파되는 과정입니다. 기본적으로, 이벤트는 이벤트가 발생한 요소에서 시작하여 그 부모 요소들로 전파됩니다. 이 과정에서 부모 요소에 등록된 이벤트 핸들러가 차례로 호출됩니다.

- **이벤트 버블링의 과정**:
    1. **이벤트 타겟에서 시작**: 이벤트는 이벤트가 발생한 요소(이벤트 타겟)에서 시작됩니다.
    2. **부모 요소로 전파**: 이벤트가 타겟 요소의 부모 요소로 전파됩니다. 이 과정은 문서의 최상위 요소까지 계속됩니다.
    3. **최상위 요소까지 전파**: 이벤트는 문서의 최상위 요소까지 전파됩니다. 이 과정에서 부모 요소에 등록된 이벤트 핸들러가 실행됩니다.
- 예시

```html
<!DOCTYPE html>
<html>
<head>
  <title>Event Bubbling Example</title>
</head>
<body>
  <div id="parent">
    <button id="child">Click me</button>
  </div>

  <script>
    document.getElementById('parent').addEventListener('click', function() {
      alert('Parent clicked');
    });

    document.getElementById('child').addEventListener('click', function(event) {
      alert('Child clicked');
      event.stopPropagation(); // 이벤트 버블링을 중지합니다.
    });
  </script>
</body>
</html>
```


위 예시에서 버튼을 클릭하면 “Child clicked”가 먼저 표시되고, `event.stopPropagation()` 메서드로 인해 부모 요소의 이벤트 핸들러는 호출되지 않습니다. 만약 `stopPropagation()`을 호출하지 않으면, 버튼 클릭 후 “Parent clicked”도 표시됩니다.


이벤트 버블링은 이벤트 처리를 보다 유연하게 만들 수 있으며, [<u>**이벤트 위임(event delegation)**</u>](/e2faf4c40a15439398040b1bf1dd6d0f#0eb588b9e9fa4261b798a27e93ee5537) 등의 기법을 사용할 때 유용합니다.


## 이벤트 위임

이벤트 위임(Event Delegation)은 이벤트 리스너를 개별적인 자식 요소가 아닌, <u>**부모 요소에 등록하여 자식 요소에서 발생하는 이벤트를 처리하는 기법**</u>입니다. 이 방식은 DOM 요소가 동적으로 추가되거나 제거되는 경우에도 유용하며, _**코드의 효율성과 유지보수성을 높이는 데 도움을 줍니다.**_

- 작동 방식
    1. 부모 요소에 이벤트 리스너를 등록합니다.
    2. 자식 요소에서 발생한 이벤트는 부모 요소로 전파됩니다.
    3. 부모 요소의 이벤트 리스너가 자식 요소에서 발생한 이벤트를 감지하고, 필요한 로직을 처리합니다.
- 이벤트 위임의 장점
    - **성능 향상**: 많은 자식 요소에 개별적으로 이벤트 리스너를 등록하는 대신, 하나의 부모 요소에 이벤트 리스너를 등록하면 메모리 사용과 성능이 개선됩니다.
    - **동적 요소 처리**: 페이지 로드 후 동적으로 추가된 자식 요소에도 이벤트 리스너가 적용되므로, 추가된 요소에 대해 별도로 이벤트 리스너를 설정할 필요가 없습니다.
    - **코드 간결화**: 이벤트 리스너를 한 곳에만 등록하면 되므로 코드가 간결하고 관리하기 쉬워집니다.
- 예시

```html
<!DOCTYPE html>
<html>
<head>
  <title>Event Delegation Example</title>
</head>
<body>
  <ul id="itemList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <script>
    // 부모 요소에 이벤트 리스너 등록
    document.getElementById('itemList').addEventListener('click', function(event) {
      // 클릭된 요소가 <li>인지 확인
      if (event.target.tagName === 'LI') {
        alert('Item clicked: ' + event.target.textContent);
      }
    });
  </script>
</body>
</html>
```

- 코드 설명
    1. <ul> 요소에 클릭 이벤트 리스너를 등록합니다.
    2. 클릭 이벤트가 발생하면, event.target을 사용하여 실제 클릭된 요소를 확인합니다.
    3. 클릭된 요소가 <li>인지 확인한 후, 해당 요소의 텍스트를 알림으로 표시합니다.

## 다양한 이벤트(마우스,키보드)

---


---


### **MouseEvent.button**


| 값 | 내용                       |
| - | ------------------------ |
| 0 | 마우스 왼쪽 버튼                |
| 1 | 마우스 휠                    |
| 2 | 마우스 오른쪽 버튼               |
| 3 | X1(브라우저 뒤로 가기 버튼)        |
| 4 | X2(일반적으로 브라우저 앞으로 가기 버튼) |


### **MouseEvent.type**


| 이벤트 타입        | 설명                                   |   |
| ------------- | ------------------------------------ | - |
| `mousedown`   | 마우스 버튼을 누르는 순간                       |   |
| `mouseup`     | 마우스 버튼을 눌렀다 떼는 순간                    |   |
| `click`       | 왼쪽 버튼을 클릭한 순간                        |   |
| `dblclick`    | 왼쪽 버튼을 빠르게 두 번 클릭한 순간                |   |
| `contextmenu` | 오른쪽 버튼을 클릭한 순간                       |   |
| `mousemove`   | 마우스를 움직이는 순간                         |   |
| `mouseover`   | 마우스 포인터가 요소 위로 올라온 순간                |   |
| `mouseout`    | 마우스 포인터가 요소에서 벗어나는 순간                |   |
| `mouseenter`  | 마우스 포인터가 요소 위로 올라온 순간 (버블링이 일어나지 않음) |   |
| `mouseleave`  | 마우스 포인터가 요소에서 벗어나는 순간 (버블링이 일어나지 않음) |   |


### **MouseEvent.위치프로퍼티**


| 프로퍼티               | 설명                        |
| ------------------ | ------------------------- |
| `clientX, clientY` | 마우스 포인터의 브라우저 표시 영역에서의 위치 |
| `pageX, pageY`     | 마우스 커서의 문서 영역에서의 위치       |
| `offsetX, offsetY` | 마우스 포인터의 이벤트 발생한 요소에서의 위치 |
| `screenX, screenY` | 마우스 포인터의 모니터 화면 영역에서의 위치  |


### **MouseEvent.relatedTarget**


`mouseenter, mouseleave, mouseover, mouseout` 이벤트에는 `relatedTarget`이라는 프로퍼티가 존재한다.


`target` 프로퍼티가 **이벤트가 발생한 요소**를 담고 있다면, `relatedTarget` 프로퍼티는 **이벤트가 발생하기 직전(또는 직후)에 마우스가 위치해 있던 요소**를 담고 있음.


### **KeyboardEvent.type**


| 이벤트 타입     | 설명                                                                        |
| ---------- | ------------------------------------------------------------------------- |
| `keydown`  | 키보드의 버튼을 누르는 순간                                                           |
| `keypress` | 키보드의 버튼을 누르는 순간 ('a', '5' 등 출력이 가능한 키에서만 동작하며, Shift, Esc 등의 키에는 반응하지 않음) |
| `keyup`    | 키보드의 버튼을 눌렀다 떼는 순간                                                        |


### **KeyboardEvent.key vs KeyboardEvent.code**

- `key`는 **사용자가 누른 키가 가지고 있는 값**을 나타내고 `code`는 **누른 키의 물리적인 위치**를 나타낸다

### input 태그 다루기


| 이벤트 타입     | 설명                               |
| ---------- | -------------------------------- |
| `focusin`  | 요소에 포커스가 되는 순간                   |
| `focusout` | 요소에 포커스가 빠져나가는 순간                |
| `focus`    | 요소에 포커스가 되는 순간 (버블링이 일어나지 않음)    |
| `blur`     | 요소에 포커스가 빠져나가는 순간 (버블링이 일어나지 않음) |
| `change`   | 입력된 값이 바뀌는 순간                    |
| `input`    | 값이 입력되는 순간                       |
| `select`   | 입력 양식의 하나가 선택되는 순간               |
| `submit`   | 폼을 전송하는 순간                       |


### 스크롤 이벤트


`scroll` 이벤트는 보통 `window` 객체에 이벤트 핸들러를 등록하고 `window` 객체의 프로퍼티와 함께 자주 활용된다.


특히 `scrollY` 프로퍼티를 활용하면 스크롤된 특정한 위치를 기준으로 이벤트 핸들러가 동작하게 하거나 혹은 스크롤 방향(위로 스크롤 중인지/아래로 스크롤 중인지)을 기준으로 이벤트 핸들러가 동작하게끔 활용할 수도 있다.


## 브라우저와 JS

> ## window 객체  
>   
> `window` 객체는 브라우저 창을 대변하면서 자바스크립트에서 최상단에 존재하는 객체입니다.  
> 자바스크립트 코드 어느 곳에서나 항상 접근할 수 있는 객체이기 때문에 전역 객체, 영어로는 **Global Object** 라고 부릅니다.  
> 어떤 프로퍼티나 메소드를 사용하든 결국 전역 객체 내부의 것이기 때문에 앞에 `.window`을 생략할 수도 있습니다


> ## DOM(**Document Object Model**), **문서 객체 모델**  
>   
> 간단하게 표현하면 웹 페이지에 나타나는 HTML 문서 전체를 객체로 표현한 것으로 생각하면 됩니다.  
> 이때 각 객체를 노드(Node)라는 용어로 표현하고, 태그는 <u>**요소 노드**</u>, 문자는 <u>**텍스트 노드**</u>로 구분됩니다


## DOM 트리

HTML의 계층구조를 나무에 비유해서 <u>**DOM 트리**</u>라고 부릅니다.
각 노드 간의 관계는 _**부모, 자식, 형제**_라는 용어로 표현합니다.


### DOM 이동 시 활용 가능한 프로퍼티


    | 프로퍼티                             | 유형       | 결과                                          |
    | -------------------------------- | -------- | ------------------------------------------- |
    | `element.children`               | 자식 요소 노드 | element의 자식 요소 모음(HTMLCollection)           |
    | `element.firstElementChild`      | 자식 요소 노드 | element의 첫 번째 자식 요소 하나                      |
    | `element.lastElementChild`       | 자식 요소 노드 | element의 마지막 자식 요소 하나                       |
    | `element.parentElement`          | 부모 요소 노드 | element의 부모 요소 하나                           |
    | `element.previousElementSibling` | 형제 요소 노드 | element의 이전(previous) 혹은 좌측(left)에 있는 요소 하나 |
    | `element.nextElementSibling`     | 형제 요소 노드 | element의 다음(next) 혹은 우측(right)에 있는 요소 하나    |
    | `node.childNodes`                | 자식 노드    | node의 자식 노드 모음(NodeList)                    |
    | `node.firstChild`                | 자식 노드    | node의 첫 번째 자식 노드 하나                         |
    | `node.lastChild`                 | 자식 노드    | node의 마지막 자식 노드 하나                          |
    | `node.parentNode`                | 부모 노드    | node의 부모 요소 하나                              |
    | `node.previousSibling`           | 형제 노드    | node의 이전(previous) 혹은 좌측(left)에 있는 노드 하나    |
    | `node.nextSibling`               | 형제 노드    | node의 다음(next) 혹은 우측(right)에 있는 노드 하나       |


### 주요 요소 노트 프로퍼티


    | 프로퍼티                  | 내용                                         | 참고사항                                                   |
    | --------------------- | ------------------------------------------ | ------------------------------------------------------ |
    | `element.innerHTML`   | 요소 노드 _**내부의 HTML코드 문자열로 리턴**_             | 요소 안의 정보를 확인할 수도 있지만,내부의 HTML 자체를 수정할 때 좀 더 자주 활용      |
    | `element.outerHTML`   | 요소 노드 자체의 _**전체적인 HTML 코드를 문자열로 리턴**_      | outerHTML은 새로운 값을 할당하면요소 자체가 교체되어 버리기 때문에 주의           |
    | `element.textContent` | 요소 노드 내부의 내용들 중에서 _**HTML을 제외하고 텍스트만 리턴**_ | textContent는 말그대로 텍스트만 다루기 때문에HTML태그를 쓰더라도 모두 텍스트로 처리됨 |


## 요소 노드, HTML 속성, 스타일 다루기

## 요소 노드 다루기
1. 요소 노드 만들기: `document.createElement('태그이름')`
2. 요소 노드 꾸미기:
    - `element.textContent` : 요소의 _**텍스트 콘텐츠**_를 설정하거나 가져옵니다. 이 속성에 값을 할당하면 요소의 기존 콘텐츠가 새로운 텍스트로 대체됩니다.
    - `element.innerHTML` : 요소의 _**HTML 콘텐츠**_를 설정하거나 가져옵니다. 이 속성에 값을 할당하면 요소의 기존 HTML 내용이 새로운 HTML로 대체됩니다.
3. 요소 노드 추가 혹은 이동하기:
- **`element.prepend`****(childElement)**: 지정한 _자식 요소_를 <u>**현재 요소의 가장 앞에 추가**</u>합니다.
- **`element.append`****(childElement)**: 지정한 _자식 요소_를 <u>**현재 요소의 가장 뒤에 추가**</u>합니다.
- **`element.after`****(newElement)**: _현재 요소_의 <u>**뒤에**</u> 새로운 요소를 삽입합니다.
- **`element.before`****(newElement)**: _현재 요소_의 <u>**앞에**</u> 새로운 요소를 삽입합니다.
1. 요소 노드 삭제하기: `element.remove()`

## HTML 속성 다루기
1. 속성에 접근하기: `element.getAttribute('속성')`
2. 속성 추가(수정)하기: `element.setAttribute('속성', '값')`
3. 속성 제거하기: `element.removeAttribute('속성')`

## 스타일 다루기

### 스타일 프로퍼티 활용하기

- **`element.style.styleName = 'value';`** **:** styleName은 적용하려는 CSS 속성의 이름이며, 'value'는 그 속성의 값입니다. 이 속성 이름은 대소문자를 구분하지 않으며, 하이픈(-)이 포함된 경우 카멜 케이스로 작성해야 합니다.

```javascript
// 배경색을 빨간색으로 설정
element.style.backgroundColor = 'red';

// 글씨 색상을 파란색으로 설정
element.style.color = 'blue';

// 폰트 크기를 20픽셀로 설정
element.style.fontSize = '20px';
```


### 클래스 변경을 통한 스타일 적용하기

- **`element.className`**: 요소의 클래스 속성을 직접적으로 설정하거나 가져올 수 있습니다. 이 속성을 사용하면 요소에 적용된 모든 클래스를 문자열로 설정하거나 가져올 수 있습니다.

```javascript
// 요소의 클래스 속성을 'my-class'로 설정
element.className = 'my-class';

// 기존 클래스에 추가로 'another-class'를 추가
element.className += ' another-class';
```

- **`element.classList`**: 이 속성은 요소의 클래스 목록을 조작하기 위한 메서드를 제공합니다. classList는 클래스 목록을 배열처럼 다룰 수 있어 클래스를 추가하거나 제거하는 데 유용합니다.
    - **`element.classList.add('className')`**: 클래스 이름을 추가합니다. 요소에 이미 해당 클래스가 존재하는 경우 중복 추가하지 않습니다.
    - **`element.classList.remove('className')`**: 클래스 이름을 제거합니다. 해당 클래스가 요소에 없으면 아무 작업도 하지 않습니다.
    - **`element.classList.toggle('className')`**: 클래스 이름이 요소에 있으면 제거하고, 없으면 추가합니다. 두 상태를 번갈아 가며 변경할 수 있습니다.
    - **`element.classList.contains('className')`**: 요소가 특정 클래스를 가지고 있는지 여부를 확인합니다. 해당 클래스가 있으면 true, 없으면 false를 반환합니다.

## 비표준 속성 (dataset)

> 💡 HTML에서 **비표준 속성**(Non-standard attributes)이란, HTML 표준에서 정의되지 않은 사용자 정의 속성입니다. data-* 속성은 이런 비표준 속성을 허용하는 방법으로, HTML5에서 공식적으로 도입된 **데이터 속성**(Custom Data Attributes)을 의미합니다.


### **data-* 속성의 특징:**

- data-로 시작하는 모든 속성은 **유효한 HTML5** 속성으로 간주됩니다.
- 사용자는 원하는 이름으로 data- 뒤에 값을 붙여서 속성을 만들 수 있습니다. 예를 들어, data-id, data-user, data-title 등입니다.
- 이 속성은 **프로그래밍적으로** 데이터를 저장하는 데 매우 유용합니다. 특히, 해당 요소와 관련된 메타 정보를 자바스크립트와 함께 관리할 때 사용됩니다.

### **dataset 객체:**


data-* 속성에 저장된 값은 자바스크립트의 **dataset** 객체를 통해 접근할 수 있습니다. dataset은 data-*로 시작하는 모든 속성을 객체 형태로 제공하며, 이를 통해 속성에 접근하고 값을 읽거나 수정할 수 있습니다.


```javascript
<div id="example" data-id="123" data-name="효준이네 집" data-title="타이틀"></div>
```


```javascript
const element = document.getElementById('example');

// dataset을 통해 비표준 속성에 접근
console.log(element.dataset.id); // "123"
console.log(element.dataset.name); // "효준이네 집"
console.log(element.dataset.title); // "타이틀"

// dataset 속성 값 수정
element.dataset.title = "새로운 타이틀";
console.log(element.dataset.title); // "새로운 타이틀"
```


### **data-* 속성 이름 변환 규칙:**

- HTML에서는 data-* 속성 이름에 하이픈(-)을 사용하지만, 자바스크립트에서는 camelCase 표기법으로 변환됩니다.
- 예: data-user-id → dataset.userId

### **사용 시 주의 사항:**

1. **데이터 크기**: data-* 속성에 저장된 데이터는 HTML 파일의 크기를 늘리므로 너무 많은 데이터를 저장하는 것은 피하는 것이 좋습니다.
2. **보안 문제**: data-* 속성에 저장된 데이터는 클라이언트 측에서 누구나 확인할 수 있으므로, 민감한 정보를 저장하는 것은 피해야 합니다.

## 모던 Javascript

![image](https://images.unsplash.com/photo-1655196601100-8bfb26cf99e9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb)


> 💡 _**모던 JS란?**_  
> 현시점에 사용하기 적합한 범위 내에서 **최신 버전의 표준을 준수하는 자바스크립트**


## 모던 JS의 함수 다루기

## 🌐 ECMAScript에 대해서…


**ECMA**라는 표준기구에서 ECMA-262 이라는 이름의 문서로 관리되는 것이 **ECMAScript**이다.

- ECMAScript의 첫 버전은 1997년에 등장했다. 이를, 버전별로 지칭하기 위해 ES1~식으로 불리는데,
ES6 부터는 매년 새로운 버전들이 출시되면서 그 이후로는 연호를 붙여 **ES2015(ES6), ES2016(ES7)**으로 부르게 된다.
- **JavaScript**(ECMAScript의 결과)는 _**프로그래밍 언어**_를 뜻하고, **ECMASciprt**(JS의 설명서)는 _**프로그래밍 언어의 표준**_ 이다.

---


## 데이터 타입
- js의 데이터 타입은 다른 프로그래밍 언어에 비해 유연하다고 할 수 있다.
    - 다른 프로그래밍 언어에서는 데이터 타입을 명확히 명시를 해줘야 하나,
    JS는 타입을 지정해주지않아도 된다.
- 데이터 타입은 _**기본형(Number, String, Boolean, Null, undefined)**_과 _**참조형(Object,function)**_으로 나뉜다.
    - 여기서 ES2015에는 **`Symbol`**(유일한 값을 만들때 사용), ES2020에는 **`BigInt`**(큰 수를 다룰 때)가 추가 되었다.

    ### Symbol

        - 심볼은 _**코드 내에서 유일한 값을 가진 변수 이름을 만들 때 사용**_한다.

        ```javascript
        const user = Symbol();
        ```


        코드 내에서 유일한 값을 가진 변수를 만들 때 라고 했는데, 왜 유일한 값이라고 지칭하느냐면,


        예를들어, 아래의 user 변수를 Symbol type으로 명시했다고 하자.


        ```javascript
        const user = Symbol('값');
        ```


        이렇게 _Symbol type_인 `user` 변수가 선언 되었다.


        이를 비교 연산자(===)를 통해 비교하게 될 경우
        어떠한 타입과 비교를 해도 결과는 **`false`**를 출력한다.


        또한, 같은 내용을 가진 변수를 Symbol type으로 명시하고 비교를 해본다면


        ```javascript
        const userA = Symbol('값');
        const userB = Symbol('값');
        
        console.log(userA === userB); // false
        ```


        이 또한 `false`값을 출력한다.


    ### BigInt

        - BigInt는 아주 큰 정수를 표현하기 위한 데이터 타입이다.
            - JS의 _**숫자형 값에는 9000조 정도의 정수 표현의 한계가 존재**_ 하기 때문이다.

        이걸 풀어서 설명하자면,


        ```javascript
        console.log(9007199254740991 + 1 === 9007199254740991 + 2); // true
        console.log(9007199254740991 + 2); /// 9007199254740992
        console.log(9007199254740993); /// 9007199254740992
        ```


        위 코드를 보면
        **9007199254740991 + 1, 9007199254740991 + 2** 이 두 연산의 결과는
        원래 우리가 알고있는 연산이라면 서로 다른 값이기에 `false`가 출력되야하지만 `true`가 나온다.


        그 이유가 JS에서는 _**정수 표현의 한계가 있기 때문에**_ 두 연산의 모든 값이 <u>9007199254740992</u> 가 되어버린다.


        이런 문제를 해결하기 위해 BigInt라는 새로운 타입이 추가 된 것인데, 정수를 표현하기 위한 데이터 타입이다보니,
        _**정수가 아닌 소수 형태로 결과가 리턴 될 경우 소수점 아래자리는 버려지고 정수 형태로 리턴 된다.**_


        또한, _**BigInt는 BigInt type끼리만 연산이 가능**_하기 때문에 서로 다른 타입끼리의 연산은 명시적으로 타입 변환이 필요하다.


        위와 같은 제한 사항때문에 BigInt type은 대체로 잘 사용 되지 않는다.


        해당 타입이 있다는 정도만 기억해두고, 필요할때 사용하도록 하자.


## typeof 연산자
- typeof 연산자는 데이터 값을 확인할 때 사용 된다

> 🤔 `typeof null` 을 하면 _**object**_가 리턴 돼요  
> 이는 JS가 처음 구현될 때의 [특별한 문법 설계](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof#null) 때문이다. 그냥 null은 obj라고 기억해두자.


> 🤔 _**함수는 무슨 타입 일까?**_  
> ```javascript  
> function sayHi() {  
>   console.log('Hi!?');  
> }  
>   
> typeof sayHi; // function  
> ```  
>   
> JS에서 함수는 obj가 아닌 function이 리턴 된다.  
>   
> 따로 궁굼해서 찾아봤더니 JS에서 함수도 객체에 포함이 되긴하지만, **함수임을 명확히 구분하기 위해서** function이라고 출력 된다고 한다.  
>   
>   
> _**그렇다면 객체와 배열을 typeof로 확인한다면?**_  
> 객체와 배열은 **object**를 리턴한다.  
> 좀 복잡한 면이 없잖아 있는데 <u>**함수는 특별한 객체로 취급되기때문에 function으로 출력된다**</u>는 것만 알고있자.


## 불린 타입 형변환

JS에서 여러가지의 타입들이 맥락에 따라 불린 값으로 형변환 되는 현상


| **Falsy**   | **Truthy**         |
| ----------- | ------------------ |
| _false_     | _true_             |
| _null_      | _문자열_              |
| _nudefined_ | _숫자값_              |
| _NaN_       | _객체({}, [])_       |
| _0_         | _함수_               |
| _‘’_        | _심볼 및 Date() 등등.._ |


## null 병합 연산자 ?? 

null 병합 연산자란 _**null 혹은 undefined 값을 가려내는 연산자**_ 이다.


```javascript
const example1 = null ?? 'I'; // I
const example2 = undefined ?? 'love'; // love
const example3 = 'Codeit' ?? 'JavaScript'; // Codeit

console.log(example1, example2, example3); // I love Codeit
```

- 연산자의 **왼편의 값이 null이나 nudefined**라면
연산자 _**오른편의 값이 리턴**_ 된다.
- 반대로 **왼편의 값이 null이나 nudefined**가 아니라면
연산자 _**왼편의 값이 리턴**_된다

### OR 연산자(||)와 비교


null 병합 연산자(??)는 OR 연산자와 동작하는 원리가 유사하다.


하지만 병합 연산자(??)는 왼편의 값이 null이나 undefined인지를 확인하고,


OR 연산자(||)는 왼편의 값이 falsy인지를 확인하기 때문에 <u>**null이나 undefined가 아닌 값이 falsy값을 활용 할 때 결과가 서로 다르다.**</u>


```javascript
const title1 = false || 'codeit';
const title2 = false ?? 'codeit';

console.log(title1); // codeit
console.log(title2); // false

const width1 = 0 || 150;
const width2 = 0 ?? 150;

console.log(width1); // 150
console.log(width2); // 0
```


## 변수와 스코프
- 자바스크립트에서 _**변수가 어디에서 유효하게 사용될 수 있는지**_를 정의하는 개념
1. **전역 스코프(Global Scope)**
    - 전역 스코프는 _**프로그램 전체**_에서 접근 할 수 있는 범위
    - 함수나 블록 바깥에서 변수를 선언하면 그 변수는 전역 스코프에 속하고, <u>**어디서든 접근 가능**</u>
2. **지역 스코프(Local Scope)**
    - 함수나 _**블록 내에서 선언된 변수**_의 범위
    - 함수 또는 블록 내에서만 유효하며, <u>**외부에서 접근이 불가하다**</u>.

    **1️⃣ 함수 스코프**

        - 함수 내에 선언된 변수는 _**함수 내부에서만 유효**_하며, <u>**함수 외부에서는 접근이 불가하다.**</u>

    **2️⃣ 블록 스코프**

        - 블록 스코프는 `let`이나 `const` 를 사용하여 선언한 변수에만 적용된다.
        - `{}` 로 감싸진 블록 내에서만 해당 변수가 유효하다.
        - `var`로 선언된 변수는 블록 스코프를 따르지 않고 함수 스코프를 따른다.
3. `var`의 **스코프 범위**와 **호이스팅**
- var는 _**함수 스코프**_를 따른다. 하지만 <u>**블록 스코프는 지원하지 않는다.**</u>
`if, for, while` 등 블록 내부에 선언된 `var` 변수가 해당 블록을 벗어나도 여전히 유효하다는 걸 의미함

```javascript
if (true) {
  var blockScopedVar = "Hello";
}
console.log(blockScopedVar);  // "Hello" (블록 외부에서도 접근 가능)
```

- **⭐️ 호이스팅(Hoisting)**
    - 호이스팅은 자바스크립트가 **변수 선언을 코드의 최상단으로 끌어올리는 동작**을 말한다.
    하지만 이때 변수의 **선언**만 끌어올려지며, **초기화**는 그대로 남습니다.
    즉, 변수는 선언되기 전에 사용할 수 있지만, 선언 전에 값을 할당하기 전에는 undefined로 초기화됩니다.

```javascript
var hoistedVar; // 선언
console.log(hoistedVar);  // undefined
hoistedVar = "Hello"; // 초기화
console.log(hoistedVar);  // "Hello"
```

- 함수 스코프에서의 호이스팅
    - 함수 내부에서 `var`로 선언된 변수는 함수의 <u>**최상단**</u>으로 호이스팅 된다.
    이를 통해 함수의 어느 위치에서든 변수를 사용할 수 있지만,
    _**선언 전에 접근하면 undefined로 초기화된 값을 얻게 된다.**_

```javascript
function myFunction() {
  console.log(hoistedVar);  // undefined (선언되었지만 초기화되지 않음)
  var hoistedVar = "Hello";
  console.log(hoistedVar);  // "Hello"
}
```


## 함수 표현식의 종류
1. <u>_**Named Function Expression(기명 함수 표현식)**_</u>
    1. 함수 표현식으로 함수가 할당된 변수에는 자동으로 name이라는 프로퍼티를 가지게 된다.
    2. 이름이 없는 함수를 변수에 할당할 때는 변수의 name 프로퍼티는 변수 이름 그 자체를 문자열로 가지게 된다.

    ```javascript
    const sayHi = function () {
      console.log('Hi');
    };
    
    console.log(sayHi.name); // sayHi
    ```


    ⚠️ 이 함수 이름은 함수 내부에서 함수 자체를 가리킬 때 사용할 수 있고 함수를 외부에서 함수를 호출할 때 사용할 수 없다.


    ```javascript
    const sayHi = function printHiInConsole() {
      console.log('Hi');
    };
    
    console.log(sayHi.name); // printHiInConsole
    
    printHiInConsole(); // ReferenceError
    ```

2. <u>_**재귀 함수(Recursive function)**_</u>
    1. 자기 자신을 부르는 함수

    ```javascript
    //이 함수를 복사하려고 다른 변수에 똑같이 담았다가, countdown 변수에 담긴 값이 변하게 되면 문제가 발생
    let countdown = function(n) {
      console.log(n);
      if (n === 0) {
        console.log('End!');
      } else {
        countdown(n - 1);
      }
    };
    
    // 에러 방지를 위해 함수 내부에서 함수 자신을 사용하려고 하면 함수표현식에서는 반드시 기명 함수 표현식을 사용하는 것이 좋음.
    let countdown = function printCountdown(n) {
      console.log(n);
      if (n === 0) {
        console.log('End!');
      } else {
        printCountdown(n - 1);
      }
    };
    
    let myFunction = countdown; // 변수 값이 변경된 부분
    
    countdown = null;
    
    myFunction(5);
    ```

3. <u>_**즉시 실행 함수 (IIFE)**_</u>
    1. 함수가 선언 된 순간 실행 되는 것
    2. 외부에서 재사용할 수 없다(일회성 함수)
    3. **함수의 리턴값을 바로 변수에 할당하고 싶을 때** 활용

    ```javascript
    (function () {
      console.log('Hi!');
    })();
    
    // 
    함수의 리턴값을 바로 변수에 할당하고 싶을 때
    
    const firstName = 'Young';
    const lastName = 'Kang';
    
    const greetingMessage = (function () {
      const fullName = `${firstName} ${lastName} `;
    
      return `Hi! My name is ${fullName}`;
    })();
    ```

4. <u>**콜백 함수**</u>
    1. 콜백 함수는 다른 함수에 인자로 전달되고, 그 함수의 작업이 완료된 후 호출되는 함수.

    ```javascript
    function fetchData(callback) {
      setTimeout(() => {
        // 비동기 작업 (예: 데이터 가져오기)
        const data = 'Fetched Data';
        callback(data); // 작업 완료 후 콜백 호출
      }, 1000);
    }
    
    function handleData(data) {
      console.log('Received:', data);
    }
    
    fetchData(handleData);
    ```

    - **콜백 지옥 (Callback Hell)**: 여러 비동기 작업이 중첩되면서 코드가 복잡하고 읽기 어려운 상태를 말합니다. 이 문제를 해결하기 위해 Promises나 async/await를 사용할 수 있다.
    - **Promises**: 비동기 작업의 결과를 나타내는 객체로, 콜백 함수보다 더 나은 방식으로 비동기 작업을 처리할 수 있다.
    - **async/await**: Promises를 더 쉽게 사용할 수 있도록 도와주는 문법

## 아규먼트(arguments)

```javascript
function firstWords() {
  let word = '';

  for(let argument of arguments){
    word += argument[0];
  }

  console.log(word);
}

firstWords('나만', '없어', '고양이');
firstWords('아니', '바나나말고', '라면먹어');
firstWords('만두', '반으로', '잘라먹네', '부지런하다');
firstWords('결국', '자바스크립트가', '해피한', '지름길');
firstWords('빨간색', '주황색', '노란색', '초록색', '파란색', '남색', '보라색');
```

- 위와 같이 함수 내에 아규먼트가 따로 지정되지않았다면 유동적으로 `arguments` 를 통해 유사배열로 다룰 수 있다.
- 아규먼트는 유사배열이기때문에 배열 메소드를 사용 할 수 없다.
- 또한, 해당 방식은 어떤 값이 들어오든 유연하게 사용은 가능하지만 전체를 다루기때문에 일부만 다룰때는 인덱싱을 통해서 한번 더 세분화 과정이 필요하다.
- 하지만 2015 이후에 아쉬운 아규먼트를 해결해주는 `Rest Parameter`가 등장하게 된다.

    ### Rest Parameter(…arg)


    ```javascript
    function firstWords(...args) {
    	console.log(args.splice(0,2));
    
      console.log(word);
    }
    
    firstWords('나만', '없어', '고양이'); // ["나만","없어"]
    ```


    아래와 같이 유사배열을 배열로 만들어준다.


    ```javascript
    function firstWords(first, second, ...args) {}
    ```


    그리고 이처럼 다른 파라미터와도 함께 사용이 가능하다.


    👉🏻 아규먼트를 유연하게 다룰 수 있다.


## Arrow Function(ES2015 이후)
- 이름이 없는 익명 함수이다.
- 이름이 있는 변수에 선언하거나, 함수의 아규먼트로 함수를 선언할때 사용한다.

```javascript
// 사용방법1
const getTwince = (number) => {
	return number * 2;
}
// 사용방법2
const myBtn = document.querySelector('#myBtn);
myBtn.addEventListener('click', () =>){
	console.log('button js clicked!);
};
// 사용방법3 (더 간단하게 줄이기)
// 해당 방법은 파라미터가 한개 일 때만 사용가능.
// 파라미터가 두개 이상이거나 없을 경우에는 () 소괄호가 필수이다.
// 또한, 리턴문이 하나일 때 {} 중괄호 생략이 가능함.
// 내부에 조건문 또는 변수가 선언 될 경우 {} 중괄호와 return 문은 필수 작성.
const getTwince = number => number * 2;

//리턴문을 객체 작성할때
const getCodeit =  () => ({name : 'Codeit',});
```


⚠️ Arrow Function은 `arguments` 객체가 없다.


## this
- 함수를 호출한 객체를 가르킨다.
- 함수가 호출될 때 어떤 객체가 그 함수를 호출했는지에 따라 상대적으로 값이 바뀜
1. **일반 함수**와 **Arrow Function**의 `this` 차이
    1. **arrow function**이 선언 되기 직전에 그때 유효한 `this`와 같은 값을 가지고 동작한다.
    2. 위와 같은 동작때문에 _**객체 안에 메소드를 만들때는 arrow function보다는 일반 함수를 사용하는 것을 권장한다.**_
    3. 바인딩 시 `call`, `bind`, `apply`를 사용해서 바인딩을 해줘야한다. 🔍 추가적으로 찾아보기

    | 특징    | call     | apply      | bind       |
    | ----- | -------- | ---------- | ---------- |
    | 정의    | 즉시 함수 호출 | 즉시 함수 호출   | 새로운 함수 반환  |
    | 인자 전달 | 개별적으로 전달 | 배열로 전달     | 초기 인자 설정   |
    | 리턴값   | 없음       | 없음         | 새로운 함수     |
    | 사용 예  | 단일 호출    | 배열을 사용한 호출 | 나중에 호출할 함수 |

    - **`call`**: 함수를 즉시 호출하고 `this` 값을 설정합니다. 인자는 개별적으로 전달합니다.
    - **`apply`**: 함수를 즉시 호출하고 `this` 값을 설정합니다. 인자는 배열로 전달합니다.
    - **`bind`**: 함수를 즉시 호출하지 않고, 나중에 사용할 수 있는 새로운 함수를 반환합니다. `this` 값을 설정합니다.

## call, bind, apply ⇒ this의 바인딩 방법
1. **`call`**
    1. `call` 메서드는 함수를 호출하면서 `this` 값을 지정할 수 있게 해줍니다. _**인자는 개별적으로 전달**_합니다.
<details>
<summary>**code**</summary>

```javascript
//구문의 사용법
func.call(thisArg, arg1, arg2, ...);

function greet() {
  console.log(`Hello, ${this.name}`);
}

const person = { name: 'Alice' };
greet.call(person); // "Hello, Alice"
```


</details>

2. **`bind`**
    1. `bind` 메서드는 함수를 호출하지 않고, <u>**새로운 함수를 반환합니다**</u>. 반환된 함수는 지정된 `this` 값과 _**초기 인자를 사용**_합니다.
<details>
<summary>**code**</summary>

```javascript
// 구문
const boundFunc = func.bind(thisArg, arg1, arg2, ...);

function greet() {
  console.log(`Hello, ${this.name}`);
}

const person = { name: 'Charlie' };
const greetCharlie = greet.bind(person);
greetCharlie(); // "Hello, Charlie"
```


</details>

3. **`apply`**
    1. `apply` 메서드도 `this` 값을 지정하면서 함수를 호출하지만, _**인자를 배열로 전달**_합니다
<details>
<summary>**code**</summary>

```javascript
// 구문
func.apply(thisArg, [argsArray]);

function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const person = { name: 'Bob' };
greet.apply(person, ['Hi']); // "Hi, Bob"
```


</details>


## 문법과 표현

## 문장(statements)과 표현식(expressions)
- 문장 : <u>_**어떤 동작이 일어나도록 작성된 최소한의 코드 덩어리**_</u>
    - 선언문, 할당문, 조건문, 반복문
- 표현식 : <u>_**결과적으로 하나의 값이 되는 모든 코드**_</u>
    - 연산자를 이용한 연산식선언된 변수를 호출하거나, 객체의 프로퍼티에 접근하는 것도 결국에는 하나의 값으로 평가 되기 때문에 ⇒ 표현식
- _**표현식이면서 문장인 것 || 문장이면서 표현식 인것**_
    - 함수 호출도 함수를 호출한 자리가 결국에는 하나의 리턴하는 값을 가지기 때문에 표현식이라고 할 수도 있지만 함수 내부에 정의한 코드를 실행하는 동작이기 때문에 문장이 되기도 한다.
- _**표현식인 문장 vs 표현식이 아닌 문장**_

    ```javascript
    let x; 
    x = 3;
    
    console.log(if (x < 5) {
      console.log('x는 5보다 작다');
    } else {
      console.log('x는 5보다 크다');
    });
    
    const someloop = for (let i = 0; i < 5; i++) {
      console.log(i);
    };
    
    //console.log 메소드의 아규먼트로 if문을 전달하거나 someloop라는 변수에 for 반복문을 할당하게 되면, Error가 발생한다.
    //조건문이나 반복문은 값으로 평가되지 않고 오로지 문장으로만 평가되기 때문이다.
    ```


    



## 조건 연산자 (Conditional operator) ⇒ 삼항 연산자
- `조건 ? truthy 할때 표현식 : falsy 할 때 표현식`

```javascript
const CUT_OFF = 80;
function passChecker(score){
	return score > CUT_OFF ? '합격!' : '불합격';
}

console.log(passChecker(90)); //합격
```


## Spread 구문
- 여러개의 값을 하나로 묶은 배열을 다시 각각의 개별 값으로 펼치는 문법
    - 배열 복사에 유용하다.

```javascript
const numbers = [1,2,3];
console.log(...numbers); //앞에 ...을써서 사용
```


⚠️ Rest Parameter와 사용방식은 같지만 동작하는 방식이 다르다는 점

    - **Rest Parameter**는 _**여러개의 arg를 하나의 parameter로 묶는 것**_
    - **Spread는** _**하나로 묶여있는 값을 각각의 개별 값으로 펼치는 것**_
1. <u>_**배열의 복사**_</u>

```javascript
const webPublishing = ['HTML','CSS'];
const interactiveWeb = [...webPublishing, 'JavaScript'];
console.log(webPublishing); //['HTML','CSS']
console.log(webPublishing); // [...webPublishing, 'JavaScript']
```

1. <u>_**배열 합치기**_</u>

```javascript
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1,2,3,4,5,6]
```

1. <u>_**파라미터 삽입**_</u>

```javascript
const introduce = (name, birth, job) => {
	console.log(`제 이름은 ${name}이고, ${birth}년생 입니다. 직업은 ${job}입니다`);
}
const myArr = ['코드잇', 2017, '프로그래밍 강사'];
introduce(...myArr); // 배열을 한개씩 값으로 파라미터에 할당
```

1. 배열을 객체로 변환

```javascript
const members = ['태호','종훈', '우재'];
const newObj = {...members};
console.log(newObj); // {0: '태호', 1: '종훈', 2: '우재'}
```


## 객체 Spread하기(ES2018)

```javascript
const latte = {
  esspresso: '30ml',
  milk: '150ml'
};

const cafeMocha = {
  ...latte,
  chocolate: '20ml',
}

console.log(latte); // {esspresso: "30ml", milk: "150ml"}
console.log(cafeMocha); // {esspresso: "30ml", milk: "150ml", chocolate: "20ml"}
```


⚠️ 배열을 Spread 하면 새로운 배열을 만들거나 함수의 아규먼트로 쓸 수 있었지만, 객체로는 **새로운 배열**을 만들거나 **함수의 아규먼트**로 **사용할 수는 없음**


```javascript
const latte = {
  esspresso: '30ml',
  milk: '150ml'
};

const cafeMocha = {
  ...latte,
  chocolate: '20ml',
}

[...latte]; // Error

(function (...args) {
  for (const arg of args) {
    console.log(arg);
  }
})(...cafeMocha); // Error
```


## AND 와 OR의 연산 방식

&&(and연산)과 ||(or연산) 이 같이 있을 경우 &&(and연산)이 우선순위가 높기때문에 먼저 연산을 진행 한다.


### AND 연산자 (&&)

- and는 _**둘다 참일 때만 참**_ 이 조건이 되는 연산자 이다
- 무조건 true 또는 false를 반환하진않는다.
대신 왼쪽과 오른쪽 값 중에서 하나를 리턴하게 된다.
    - **왼쪽 값이 거짓**이라면 _**왼쪽 값을 리턴**_
    - **왼쪽 값이 참**이라면 _**오른쪽 값을 리턴**_

    ```javascript
    console.log(0 && "Hello"); // 0이 falsy라서 0을 리턴
    console.log(1 && "Hello"); // 1이 truthy라서 "Hello"를 리턴
    ```


### OR 연산자(||)

- OR은 _**하나만 참이면 참**_ 이 조건이 되는 연산자 이다.
- OR연산자 또한 true, false 대신, 두 값 중에서 하나를 리턴한다.
    - **왼쪽 값이 거짓**이라면 _**오른쪽 값을 리턴**_
    - **오른쪽 값이 참**이라면 _**왼쪽 값을 리턴**_

> 💡 <u>**한줄 요약**</u>  
> **AND**(`&&`)는 **왼쪽이 거짓이면** _**왼쪽 값**_을, _**참이면 오른쪽 값**_을 리턴  
>   
> **OR**(`||`)는 **왼쪽이 거짓이면** _**오른쪽 값**_을, _**참이면 왼쪽 값**_을 리턴


## 모던한 프로퍼티 표기법
- 활용할 변수의 이름과 프로퍼티의 이름이 같을 경우 축약해서 사용할 수 있다.
1. <u>_**객체 프로퍼티 활용**_</u>

```javascript
const title = 'Codeit';
const birth = 2017;
const user = {
	title,
	birth,
}
```

1. <u>_**객체 메소드 활용**_</u>

```javascript
function getFullName(){
	return `${this.firstName} ${this.lastName}`;
}
const user = {
	firstName = 'Tess',
	lastName = 'Jang',
	getFullName, // 메서드와 호출 함수의 이름을 같게 사용 할 경우
	
	//외부 함수 호출이 아닌 내부에서 메서드를 작성할때 축약법
	getFullName(){
		return `${this.firstName} ${this.lastName}`;
	}
}

console.log(user.getFullName());
```

1. 계산 된 속성명(computed property name)
    - 객체의 키 값을 표현식으로 사용할때 [표현식] : 속성값

```javascript
const user = {
	['Code'+'it'] : 'value'
};

console.log(user);

// 예시
const propertyName = 'birth';
const getJob = () => 'job';
const codeit = {
	['topic' + 'Name'] : 'Modern JavaScript';
	[propertyName] : 2017,
	[getJob()]: '프로그래밍 강사',
}
```


## ⭐️옵셔널 체이닝(Optional Chaining) ⇒ ES2020

```javascript
function printCatName(user) {
  console.log(user.cat.name);
}

const user1 = {
  name: 'Captain',
  cat: {
    name: 'Crew',
    breed: 'British Shorthair',
  }
}

printCatName(user1); // Crew

//위 코드를 기준으로 예상한 프로퍼티를 가지고 있지않을때
const user2 = {
  name: 'Young',
}

console.log(user2.cat); // undefined
printCatName(user2); // TypeError: Cannot read property 'name' of undefined


//옵셔널 체이닝을 이용해 검증을 진행한다(printCatName 함수 수정)
function printCatName(user) {
  console.log(user.cat?.name); // (user.cat && user.cat.name)
}
//해당 옵셔널 체이닝 방식을 삼항 연산으로 풀어내면 아래와 같은데 (undefined 또는 null 구분)
function printCatName(user) {
  console.log((user.cat === null || user.cat === undefined) ? undefined : user.cat.name);
}

// null 병합 연산자를 이용해서 좀 더 간결하게 풀어낼 수 있다.
function printCatName(user) {
  console.log(user.cat?.name ?? '함께 지내는 고양이가 없습니다.');
}

const user2 = {
  name: 'Young',
}

printCatName(user2); // 함께 지내는 고양이가 없습니다.
```


## 구조 분해 할당(Destructuring) ⇒ ES2015
- 배열이나 객체의 구조를 분해하는 것
- 키 이름을 가져와서 변수로 사용

### 배열의 구조 분해


```javascript
const rank = ['유나','효준','민환','재하','규식'];
const [macbook, ipad, airpods, coupon] = rank;

console.log(macbook, ipad, airpods, coupon);
```

- Rest Parameter를 활용해 배열이 넘쳐도 담을 수 있다.

```javascript
const [macbook, ipad, airpods, ...coupon] = rank;
```

- 배열의 개수가 적을 경우에도 값을 미리 지정해서 출력 할 수 있다.

```javascript
const [macbook, ipad, airpods, coupon = '없음'] = rank;
```

- 값의 교환

```javascript
let macbook = '효준';
let ipad = '유나';
console.log(`맥북 당첨자: ${macbook}, ipad 당첨자: ${ipad}`); // 맥북 당첨자: 효준,ipad 당첨자: 유나

[macbook, ipad] = [ipad, macbook];
console.log(`맥북 당첨자: ${macbook}, ipad 당첨자: ${ipad}`); // 맥북 당첨자: 유나,ipad 당첨자: 효준
```


### 객체의 구조 분해


```javascript
const macbook = {
	title: '맥북 프로 16형',
	price: 3690000,
	memory: '16GB',
}

console.log(title);
console.log(price);
```

- 점(.) 표기법으로 객체를 접근하는 것이 아닌 변수명(프로퍼티명)으로 접근하고 싶을 때

```javascript
const {title, price} = macbook;
```

- 없는 프로퍼티명이 있을 때 기본 값을 넣어줄 수 있다.

```javascript
const {title, color = 'silver'} = macbook;
```

- Rest Parameter를 사용할 경우 첫번째인 title 프로퍼티 이외에 다른 프로퍼티들을 객체로 한번에 모아서 출력 해 줌

```javascript
const {title, ...rest} = macbook;
```

- 변수 명을 프로퍼티명이 아닌 다른 이름으로 할당 해주고 싶을 때

```javascript
const {title: product, ...rest} = macbook;

console.log(product); // 맥북 프로 16형
```

- 해당 방식을 사용하는 경우는 프로퍼티 이름이 변수명으로 할당 할 수 없는 이름일 때 사용된다

```javascript
const macbook = {
	title: '맥북 프로 16형',
	price: 3690000,
	memory: '16GB',
	'serial-num': 'ABCD'
}

const {title: product, 'serial-num': serialNum} = macbook;
```

- computed property name을 이용할 때도 사용이 가능하다

```javascript
const propertyName = 'title';
const {[propertyName]: product} = macbook;
```


## 함수와 Destructuring

### <u>**배열의 활용**</u>


    ```javascript
    function printWinners(...arg){
    	const [macbook, ipad, airpods, ...coupon] = arg;
    	console.log(`맥북주인공 : ${macbook}, 아이패드 주인공: ${ipad}, 코드잇 3개월 수강권 주인공은`);
    	for(let user of coupon){
    		console.log(`${user}님`);
    	}
    	console.log(`이상 총 ${coupon.length}명 입니다`);
    }
    
    printWinners('효준','효신','재훈','소원','현승','종훈');
    ```

    - 응용

    ```javascript
    function printWinners([macbook, ipad, airpods, ...coupon]){
    	console.log(`맥북주인공 : ${macbook}, 아이패드 주인공: ${ipad}, 코드잇 3개월 수강권 주인공은`);
    	for(let user of coupon){
    		console.log(`${user}님`);
    	}
    	console.log(`이상 총 ${coupon.length}명 입니다`);
    }
    
    const ranks = ['효준','효신','재훈','소원','현승','종훈'];
    printWinners(ranks);
    ```


### <u>**객체의 활용**</u>


    ```javascript
    const macbook = {
    	title: '맥북 프로 16형',
    	price: 3690000,
    	memory: '16GB',
    	'serial-num': 'ABCD'
    }
    
    function printSummary(object){
    	const {title, price, memory } = object;
    	console.log(`선택상품: ${title} , 가격: ${price}, 메모리: ${memory}`);
    }
    
    printSummary(macbook);
    ```

    - 응용

    ```javascript
    function printSummary({title, price, memory }){
    	console.log(`선택상품: ${title} , 가격: ${price}, 메모리: ${memory}`);
    }
    
    printSummary(macbook);
    ```

    1. DOM event의 활용

    ```javascript
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', ({target}) =>){
    	target.classList.toggle('checked');
    }
    ```

    - 응용

    ```javascript
    const btn = document.querySelector('#btn');
    // 가독성을 해칠 수 있음
    btn.addEventListener('click', ({target: {(classList)}}) =>){
    	classList.toggle('checked');
    }
    
    btn.addEventListener('click', ({target}) =>){
    	const {classList} = target;
    	classList.toggle('checked');
    }
    ```


### <u>중첩 객체 구조 분해</u>

    1. 중첩 객체에서 값 추출

    ```javascript
    function displayUser({ name, address: { city, country }, contact: { email, phone } }) {
      console.log(`Name: ${name}`);
      console.log(`City: ${city}`);
      console.log(`Country: ${country}`);
      console.log(`Email: ${email}`);
      console.log(`Phone: ${phone}`);
    }
    
    const user = {
      name: 'John Doe',
      address: {
        city: 'Los Angeles',
        country: 'USA'
      },
      contact: {
        email: 'john.doe@example.com',
        phone: '123-456-7890'
      }
    };
    
    displayUser(user);
    // 출력:
    // Name: John Doe
    // City: Los Angeles
    // Country: USA
    // Email: john.doe@example.com
    // Phone: 123-456-7890
    ```


    b. 중첩 객체와 기본값 사용하기


    ```javascript
    function printProductInfo({ name, details: { price = 0, inStock = false }, tags = [] }) {
      console.log(`Product Name: ${name}`);
      console.log(`Price: ${price}`);
      console.log(`In Stock: ${inStock}`);
      console.log(`Tags: ${tags.join(', ')}`);
    }
    
    const product = {
      name: 'Smartphone',
      details: {
        price: 299.99
        // inStock은 정의되지 않음
      },
      tags: ['electronics', 'mobile']
    };
    
    printProductInfo(product);
    // 출력:
    // Product Name: Smartphone
    // Price: 299.99
    // In Stock: false
    // Tags: electronics, mobile
    ```


    c. 중첩 배열과 객체 구조 분해


    ```javascript
    function extractData({ name, stats: [views, likes, comments], author: { name: authorName } }) {
      console.log(`Name: ${name}`);
      console.log(`Views: ${views}`);
      console.log(`Likes: ${likes}`);
      console.log(`Comments: ${comments}`);
      console.log(`Author: ${authorName}`);
    }
    
    const post = {
      name: 'JavaScript Tips',
      stats: [1500, 300, 50],
      author: {
        name: 'Alice Smith'
      }
    };
    
    extractData(post);
    // 출력:
    // Name: JavaScript Tips
    // Views: 1500
    // Likes: 300
    // Comments: 50
    // Author: Alice Smith
    ```


    d. 함수에서 중첩 객체를 매개변수로 사용하는 경우


    ```javascript
    function processOrder({ orderId, customer: { name, address: { street, city } }, items }) {
      console.log(`Order ID: ${orderId}`);
      console.log(`Customer Name: ${name}`);
      console.log(`Address: ${street}, ${city}`);
      console.log(`Items: ${items.join(', ')}`);
    }
    
    const order = {
      orderId: '12345',
      customer: {
        name: 'Bob Johnson',
        address: {
          street: '123 Elm St',
          city: 'Springfield'
        }
      },
      items: ['Laptop', 'Mouse', 'Keyboard']
    };
    
    processOrder(order);
    // 출력:
    // Order ID: 12345
    // Customer Name: Bob Johnson
    // Address: 123 Elm St, Springfield
    // Items: Laptop, Mouse, Keyboard
    ```


## 에러와 에러 객체

에러객체는 title과 message의 정보를 담고 있다.


개발을 진행하다보면 여러 타입의 에러 메세지를 볼 수 있는데 대표적인 3가지 만 작성해보겠다.

- ReferenceError : 존재하지않는 변수나 함수를 호출 할 때 발생
- TypeError : 잘못된 방식으로 자료형을 다룰 때 발생
- SyntaxError : 문법에 맞지않는 코드를 작성 했을 경우

💡 에러 객체의 title과 message를 활용해 직접 에러 문구를 작성 할 수 있다.


```javascript
const error = new TypeError('타입 에러가 발생했습니다.');

// 고의로 에러 발생 시키는 코드
throw error;
```


## try catch 문
- 에러가 발생했을 때 동작할 코드를 작성할 수 있게 해주는 문법
- 에러가 발생했을때 프로그램 동작 자체가 멈춰버리기 때문에 해당 구문을 이용해서 프로그램이 멈추는 동작을 방지 할 수 있다.

```javascript
try{
	 //실행이 가능한 코드
} catch(error){
	// 에러가 발생했을 때 동작 할 코드
}

//catch(e) => 이렇게 표기하기도 한다.
```

- 예시

```javascript
function printMemebers(members){
	try{
		for (const member of members){
			console.log(member);
		}
	} catch (e){
		console.error(e);
		alert(`${e.name}가 발생했습니다.`);
	}
}

const teamA = ['혜진','지혜'];
printMemebers(teamA);
const teamB = {name : 'codeit'}; // 에러 발생 부분
printMemebers(teamB);
const teamC = ['영훈','정훈'];
printMemebers(teamC);
```


### finally 문

    - `try...catch`문이 끝난 다음에 최종적으로 실행될 코드를 다룰 때 활용

    ```javascript
    try {
      // 실행할 코드
    } catch (err) {
      // 에러가 발생했을 때 실행할 코드
    } finally {
      // 항상 실행할 코드
    }
    ```


    💡 finally문에서의 에러처리


    ```javascript
    try {
      try {
        // 실행할 코드
      } catch (err) {
        // 에러가 발생했을 때 실행할 코드
      } finally {
        // 항상 실행할 코드
      }
    } catch (err) {
      // finally문에서 에러가 발생했을 때 실행할 코드
    }
    ```


## 유용한 내부 기능

##  forEach, map

## `forEach`


각 요소의 인덱스를 활용 할 수 있다.

- 리턴 값이 없음
- 배열의 각 요소에 대해 제공된 함수를 한 번씩 실행

```javascript
const firstnames = ['영훈','윤수','동욱','태호'];
firstNames.forEach((firstName, i, arr) => {
	console.log(`${lastNames[i]}${firstName}${arr}`);
});
```


## `Map` 

- 배열의 각 요소에 대해 제공된 함수를 실행한 결과로 새로운 배열을 생성
- 새로 생서된 배열을 반환하며 원본 배열은 변경되지않음
- map의 첫번째 파라미터는 배열의 요소, 두번째 파라미터는 index가 전달된다

```javascript
const firstnames = ['영훈','윤수','동욱','태호'];

const fullNames = firstNames.map((firstName, i) => lastNames[i] + firstName);
console.log(fullNames);
```


> 🤔 for…of 와 forEach, map의 차이는?  
>   
> `forEach`: 배열의 각 요소에 대해 작업을 수행하며, 값을 반환하지 않습니다. (작업 수행)  
> `map`: 배열의 각 요소에 변환을 적용하고 새로운 배열을 반환합니다. (새로운 배열을 생성)  
> `for...of`: 일반적인 반복문으로, 이터러블(*반복할수 있는 객체) 객체를 순회할 때 사용합니다. (요소를 순회)  
> | **특징**   | for...of               | forEach        | map            |  
> | -------- | ---------------------- | -------------- | -------------- |  
> | 사용 용도    | 일반적인 반복                | 각 요소에 대해 작업 수행 | 각 요소에 대해 변환 수행 |  
> | 리턴값      | 없음                     | undefined      | 새로운 배열 반환      |  
> | 배열 변경 여부 | 원본 배열 변경하지 않음          | 원본 배열 변경하지 않음  | 원본 배열 변경하지 않음  |  
> | 제어문 사용   | break 및 continue 사용 가능 | 사용 불가          | 사용 불가          |


##  filter, find 

### `filter` 

- 사용법은 map과 비슷하지만 필터링 된 새로운 배열을 얻고자 할 때 사용
- 조건에 맞는 요소들로 구성된 배열을 반환합니다. 조건에 맞는 요소가 없으면 빈 배열을 반환합니다.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6] 출력
```


### `find` 

- 주어진 조건에 맞는 첫 번째 요소를 반환합니다. 조건에 맞는 요소가 없으면 undefined를 반환합니다.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2 출력
```


프로그래밍의 효율을 위해, 구분하며 사용하는게 좋다.


## some, every 

### `some` 

- 배열의 요소 중에서 **하나라도 주어진 조건을 만족하는지** 검사합니다. (만족 요소가 1개 이상 있는지 판별)

```javascript
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true 출력 (2, 4가 짝수이기 때문)
```


### `every` 

- 배열의 **모든 요소가 주어진 조건을 만족하는지** 검사합니다. (만족하지 않는 요소가 1개 이상 있는지)

```javascript
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true 출력 (모든 요소가 짝수이기 때문)
```


## reduce 
- **accumulator : 누적된 값으로,** <u>**이전 단계에서 반환된 값**</u>**입니다.
처음에는 initialValue로 초기화됩니다.**

```javascript
array.reduce((accumulator, currentValue, index, array) => {
  // 반환할 값을 계산
}, initialValue);
```


## sort, reverse

## `sort`

- 배열 정렬 메소드
- 해당 메소드에 아무런 아규먼트를 전달하지 않을때는 기본적으로 유니코드에 정의된 문자열 순서에 따라 정렬 된다.

```javascript
const numbers = [1, 10, 4, 21, 36000];

// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers); // (5) [1, 4, 10, 21, 36000]

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // (5) [36000, 21, 10, 4, 1]
```

- 정렬 필요시 위처럼 사용해주면 되는데 _**원본 배열의 요소를 정렬**_하기 때문에 주의가 필요하다

## `reverse`

- 배열 역순 정렬 메소드
- 메소드를 호출해주기만 하면 배열의 순서가 뒤집히게 된다.

## map과 set

ES2015에 등장한 `set`


`set`은 배열과 비슷한 데이터 구조를 띄고있다.


### `map`

- `map`은 <u>**이름이 있는 데이터를 저장한다는 점에서 객체와 유사**</u>하다.
- 메소드를 통해서 값을 추가하거나 접근이 가능하다
- `new` 키워드를 통해 `map`을 만들 수 있고 다양한 메소드를 통해 `map` 안의 여러 값을 다룰 수 있다.
    - `map.set(key, value)`: key를 이용해 value를 추가하는 메소드.
    - `map.get(key)`: key에 해당하는 값을 얻는 메소드. key가 존재하지 않으면 undefined를 반환.
    - `map.has(key)`: key가 존재하면 `true`, 존재하지 않으면 `false`를 반환하는 메소드.
    - `map.delete(key)`: key에 해당하는 값을 삭제하는 메소드.
    - `map.clear()`: Map 안의 모든 요소를 제거하는 메소드.
    - `map.size`: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)

    ```javascript
    // Map 생성
    const codeit = new Map();
    
    // set 메소드
    codeit.set('title', '문자열 key');
    codeit.set(2017, '숫자형 key');
    codeit.set(true, '불린형 key');
    
    // get 메소드
    console.log(codeit.get(2017)); // 숫자형 key
    console.log(codeit.get(true)); // 불린형 key
    console.log(codeit.get('title')); // 문자열 key
    
    // has 메소드
    console.log(codeit.has('title')); // true
    console.log(codeit.has('name')); // false
    
    // size 프로퍼티
    console.log(codeit.size); // 3
    
    // delete 메소드
    codeit.delete(true);
    console.log(codeit.get(true)); // undefined
    console.log(codeit.size); // 2
    
    // clear 메소드
    codeit.clear();
    console.log(codeit.get(2017)); // undefined
    console.log(codeit.size); // 0
    ```


### `get`

- `get`은 <u>**여러 개의 값을 순서대로 저장한다는 점에서 배열과 비슷**</u>하다.
- 배열의 메소드는 활용할 수 없고 `map`과 비슷하게 `set`만의 메소드를 통해서 값을 다룰 수 있다.
    - `set.add(value)`: 값을 추가하는 메소드. (메소드를 호출한 자리에는 추가된 값을 가진 Set 자신을 반환.)
    - `set.has(value)`: Set 안에 값이 존재하면 `true`, 아니면 `false`를 반환하는 메소드.
    - `set.delete(value)`: 값을 제거하는 메소드. (메소드를 호출한 자리에는 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환.)
    - `set.clear()`: Set 안의 모든 요소를 제거하는 메소드.
    - `set.size`: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)

    ```javascript
    // Set 생성
    const members = new Set();
    
    // add 메소드
    members.add('영훈'); // Set(1) {"영훈"}
    members.add('윤수'); // Set(2) {"영훈", "윤수"}
    members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
    members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
    
    // has 메소드
    console.log(members.has('동욱')); // true
    console.log(members.has('현승')); // false
    
    // size 프로퍼티
    console.log(members.size); // 4
    
    // delete 메소드
    members.delete('종훈'); // false
    console.log(members.size); // 4
    members.delete('태호'); // true
    console.log(members.size); // 3
    
    // clear 메소드
    members.clear();
    console.log(members.size); // 0
    ```


    ⚠️ `set`에는 개별 값에 바로 접근하는 방법이 존재하지 않는다.


    ```javascript
    // Set 생성
    const members = new Set();
    
    // add 메소드
    members.add('영훈'); // Set(1) {"영훈"}
    members.add('윤수'); // Set(2) {"영훈", "윤수"}
    members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
    members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
    
    for (const member of members) {
      console.log(member); // 영훈, 윤수, 동욱, 태호가 순서대로 한 줄 씩 콘솔에 출력됨.
    }
    ```


    위와 같이 반복문을 통해 전체요소를 한꺼번에 다룰 때 반복되는 그 순간 개별적으로 접근 할 수 있다.


    `set`은 <u>**중복을 허용하지 않는 값들을 모을 때**</u> 사용이 된다.


    ```javascript
    // Set 생성
    const members = new Set();
    
    // add 메소드
    members.add('영훈'); // Set(1) {"영훈"}
    members.add('윤수'); // Set(2) {"영훈", "윤수"}
    members.add('영훈'); // Set(2) {"영훈", "윤수"}
    members.add('영훈'); // Set(2) {"영훈", "윤수"}
    members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
    members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
    members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
    members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
    members.add('동욱'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
    members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
    members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
    ```


    최초에 추가된 순서를 유지하면서, 나중에 중복된 값을 추가하려고 하면 그 값은 무시하는 특징이 있다.


    또한, `set`을 생성할 때 아규먼트로 배열을 전달 할 수도 있는데,


    이런 특징을 활용해서 배열 내 중복을 제거한 값들의 묶음을 만들때 `set`을 활용하기도 한다.


    ```javascript
    const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
    const uniqNumbers = new Set(numbers);
    
    console.log(uniqNumbers); // Set(5) {1, 3, 4, 2, 5}
    ```






## JS의 모듈

> 💡 모듈이란?  
>   
> 여러가지의 기능들을 하나의 js에서 관리하지 않고,  
> 조금 더 용이한 관리를 위해 기능별로 js파일을 나누는 것을 ‘모듈화’ 라고 한다.  
>   
> 이렇게 재활용성을 높히고 편하게 관리 할 수 있도록 모듈화 한 것의 파일을 모듈이라고 한다.  
>   
> ES2015 이전에는 JS에 모듈화 할 수 있는 표준 문법이 존재하지 않았으나,  
>   
> ES2015 이후에 모듈화 할 수 있는 표준 문법이 나오게 되었다.


## 모듈 파일의 조건

- 해당 모듈 파일은 독립적인 스코프가 필요하다.(모듈 스코프) ⇒ 즉 _**해당 파일에서 선언된 변수는 해당 파일에서만 사용이 가능하게끔 되어야 한다.**_
- html에서 js파일을 모듈로 만들기 위해서는 `<script type=”module” src=""></script>` 이렇게 타입을 표기 해 주어야 한다.

---


## 모듈(1) 파일의 모듈 스코프를 모듈(2)와 공유하고 싶을 때?

```javascript
// module1
export const 변수명 = 'hi'; 
export function 함수명 (){}
```


```javascript
// module2
import {변수명, 함수명} from 'module1.js'
```


## 불러온 변수or함수명을 변경 하고 싶을 때?

```javascript
// module2
import {변수명 as 변경된변수명, 함수명} from 'module1.js'
```


## 한꺼번에 import 하기(* ⇒ 와일드카드 문자)

```javascript
// module2
import * as 이름 from 'module1.js' //객체로 모아진다.

console.log(이름.title);
이름.함수명();
```


## 한번에 export 하기

```javascript
// module1

const 변수명 = 'hi'; 
function 함수명 (){}

export {변수명, 함수명};
export {변수명 as 변경된변수명, 함수명}; // 이렇게 미리 변경해서 export도 가능하다.
```


## default export
- default export는 모듈 파일에서 하나의 대상만 내보낼 수 있으며, 모듈 파일 내에서 한번만 사용이 가능하다.

```javascript
export default {변수명, 함수명};
```

- import해올때도 import default로 불러와야 한다.

```javascript
// module2
import default 이름 from 'module1.js'
import 이름 from 'module1.js' // 축약 버전
```

- 하나의 값 뿐만 아닌 중괄호를 이용해 여러개를 묶어서 보낼 수도 있지만 import에서 사용할 때 마다 점표기법을 사용해 객체 접근을 해야하기 때문에 가독성이 다소 떨어져 추천하지 않는다.
- default export는 이름을 변경 할 수 없다.

```javascript
// module2
import 이름 from 'module1.js'
console.log(이름.변수명);
```


## 비동기 자바스크립트

> 💡 **비동기 프로그램이란?**  
> 오래 기다려야하는 작업이 있으면, 순서대로 작업하는 것이 아니라 다음 작업을 먼저 처리하고  
>   
> 나중에 처리하던 작업으로 되돌아가서 마무리하는 방식


## 콜백(CallBack)이란?

- 어떤 함수의 아규먼트로 전달되는 함수를 뜻함
- 상황에 따라 파라미터를 받는 콜백도 사용할 수 있다.
<details>
<summary>`code`</summary>

```javascript
function greet(name, callback) {
  console.log('Hello, ' + name);
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}

greet('Alice', sayGoodbye);
```


</details>


## 비동기 함수


> 💡 함수의 내용을 끝까지 수행하지 않고 중간에 다른 작업을 처리하다가 다시 돌아와서 마무리 하는 함수

<details>
<summary>**list**</summary>

### 1. `setTimeout()`

- `setTimeout` 함수에 작성된 아규먼트는 ms단위를 뜻한다.
(1000ms ⇒ 1s)
<details>
<summary>`code`</summary>

```javascript
setTimeout(callback, delay, foo);
// (콜백 함수, 2번째 arg, 콜백 함수의 arg)


setTimeout(() => console.log('Hi'), 3000); // 3초 뒤에 실행
```


</details>


### **2.** **`setInterval()`**

- 시간 간격을 두고 콜백을 반복적으로 실행하는 함수
- 해당 비동기함수를 종료하고 싶을때는 `setInterval()` 함수의 리턴값을 저장해 놨다가 `clearInterval()` 를 실행하면 종료 된다.
<details>
<summary>`code`</summary>

```javascript
console.log('Start');

const intervalID = setInterval(() => console.log('2초가 지났습니다'), 2000);

// 7초 후에 setInterval() 해제
setTimeout(() => clearInterval(intervalID), 7000);

console.log('End');
```


</details>


### **3.** **`addEventListener()`**

- 웹페이지 요소에 상호 작용이 있을 경우 실행할 함수를 등록
<details>
<summary>`code`</summary>

```javascript
const btn = document.querySelector('.my-btn');

btn.addEventListener('click', () => console.log('button clicked!'));

// btn에 클릭('click') 이벤트가 발생할 시 콜백이 실행
```


</details>


### 4. **`useEffect()`**

- react에서 사용되는 비동기 함수
- 이 함수는 컴포넌트가 모두 화면에 그려지는 시점에 콜백을 실행
<details>
<summary>`code`</summary>

```javascript
function PostList() {
  // ...

  useEffect(() => console.log('render finished!'), []);

  return (
    <div className="post-list">
      <div className="post-item">...</div>
      <div className="post-item">...</div>
      <div className="post-item">...</div>
      ...
    </div>
  );
}

// return의 렌더가 진행 된 후 useEffect 콜백 실행
```


</details>


### 5. `get()` 

- Express에서 사용되는 비동기 함수
- 서버는 DOM의 버튼 예시와 비슷하게 리퀘스트가 언제 들어올지를 모르기 때문에 리퀘스트에 대한 처리는 비동기 형태로 진행됨
<details>
<summary>`code`</summary>

```javascript
app.get('/hello', (req, res) => {
  res.send('Success!');
});

// ...
```


`app.get()` 함수는 `/hello` 주소로 GET 리퀘스트가 들어오면 두 번째 아규먼트인 콜백을 실행


콜백은 ‘Success’라는 내용을 담고 있는 리스폰스를 보내 줍니다.


</details>


</details>

- 비동기 함수를 이용하여 콜백을 진행할때, 여러번 콜백을 하게 되는 경우가 생긴다. 이를 <u>_**콜백 지옥**_</u>이라고 하는데 연달아 비동기 함수를 이용하여 콜백을 작성하게 되면, 디버깅하기도 힘들고, 가독성도 떨어지기때문에 큰 난황을 겪었다.
- 하지만 ES2015 이후에 `promise`문법이 등장하게 되면서 이러한 부분들이 해결되었다고한다.

## Promise


> 💡 Promise란?  
> - 비동기 작업이 완료되면 값을 알려주는 객체  
>   
> - 작업이 완료되면 값을 알려줄 것을 ‘약속’함  
>   
> - 일단 Promise를 돌려주고 나중에 작업이 완료되면 결과값을 Promise에 채워 넣어줌  
>   
> - 웹 리퀘스트를 보낼때는 `fetch` 를 사용한다 (fetch는 프로미스 객체를 리턴함)


### Promise의 객체의 상태

1. Pending : 비동기 결과를 기다릴 때의 상태
2. Fulfilled : 비동기 작업이 성공적 일 때
3. Rejected : 실패 했을 때

## `await` 문법

- fetch를 이용해 프로미스 객체를 리턴하는 결과값을 받아오기 위해서 사용됨
<details>
<summary>**code**</summary>

```javascript
const response = await fetch('...');
```


</details>

- 원래 리스폰스는 복잡하게 생겼기때문에 파싱을 해야한다. 그러기 위해선 `json` 메소드를 활용하면 된다.
<details>
<summary>**code**</summary>

```javascript
const response = await fetch('...');
const data = await response.json();
```


</details>


## `async` 함수

- async는 비동기 함수로 정의하며, 항상 Promise를 반환합니다.
- await는 Promise가 처리될 때까지 대기하게 하여 비동기 작업을 동기적으로 작성할 수 있게 해줍니다.
- 비동기 API 호출이나 데이터 처리 시 유용하게 사용됩니다.

```javascript
//index.js
import {printEmployees} from 'data.js';

printEmployees();
console.log('2');
console.log('3');
```


```javascript
//data.js

export async function printEmployees(){
	const response = await fetch('...');
	const data = await response.json();
	console.log(data);
}

// 다른 방법
const printEmployeesArrow = async () => {
	const response = await fetch('...');
	const data = await response.json();
	console.log(data);
}
```


예를 들어 위와 같은 코드가 있다고 하면, `async` 함수를 사용하기전에 index.js의 실행순서는 `printEmployees`가 먼저 실행이 되고 그 아래 console.log가 실행이 된다.


그렇게 되면 `printEmployees` 함수는 데이터를 가져오는동안 프로미스의 상태가 pending 상태이기 때문에 동작을 완료할때까지 기다리게 된다.
js의 실행 순서상 위에서 순차적으로 실행 되기 때문에 데이터가 먼저 나오고, console.log가 실행되게 되는데


프로미스의 상태가 fulfilled가 되기 전에 다음 동작을 진행 시키고 싶을때 `async` 함수를 사용하게 된다.


실제 동작에서는 해당 js파일의 타입이 모듈이 아닌 이상은 `await`을 그냥 사용할 수는 없다.


그렇기때문에 대부분의 경우는 `async` 함수 내부에서 `await`을 사용한다고 알아두자.


> 💡 코드 실행의 순서  
> printEmployees()가 호출되면서 printEmployees 함수 내부가 동작한다.  
> 하지만 await이 있기때문에 해당 과정이 완료가 될때까지 printEmployees 함수 외부로 빠져나간다.  
>   
> 그다음 console.log(); 가 실행이 된 후, printEmployees 함수의 프로미스 상태가 fulfilled가 되면 함수 내부 코드가 동작하는 것이다.  
>   
>   
>   
> 위와 같은 실행 순서 때문에 해당 결과는  
> ’2’  
>   
> ‘3’  
>   
> data…  
>   
> 가 된다.


# 효율적인 비동기 코드


예를들어 가져올 데이터의 id를 1~10까지 가지고 온다고 가정해보자


```javascript
async function printEmployees(){
	for(let i=1; i<11; i++){
		const response = await fetch(`.../${i}`);
		const data = await response.json();
		console.log(data);
	}
}

printEmployees();
```

- 위 코드는 실행이 잘 되긴 하지만 풀어서 해석하자면

    ```javascript
    const response = await fetch('.../1');
    const data = await response.json();
    console.log(data);
    
    const response = await fetch('.../2');
    const data = await response.json();
    console.log(data);
    
    ...
    ```


    이런 형태를 띄게 되는데, 한번의 `response`를 하고, `printEmployees()`를 빠져나갔다가 함수를 실행시키고,그 다음 줄인 `response.json()`을 실행하게 된다. 즉, `async`의 실행순서를 생각하면 무척 비효율 적이다.

- 좀 더 효율적인 작성 법

```javascript
async function printEmployees(id){
	const response = await fetch(`.../${id}`);
	const data = await response.json();
	console.log(data);
}
for(let i=1; i<11; i++){
	printEmployees(i);
}
```


해당 구문을 풀어서 보면다면


```javascript
printEmployees(1);
printEmployees(2);
printEmployees(3);
...
```


이렇게 해석 할 수 있다.


두 코드를 비교해서 해석해보면 확실히 두번째 작성법이 좀 더 빠르게 출력 되는 것을 확인 할 수 있다


하지만 단점이 있다면 출력되는 순서는 무작위로 출력된다.


> 💡 이는 `async`의 실행 순서에 따른 효율성있는 코드를 작성하는 방법이다.


# async 함수의 특징


async은 프로미스의 상태를 리턴한다.


```javascript
import {getEmployees} from '../js'
const employees = getEmployees();
console.log(employees); //Promise {<pending>}
```


> 🤔 이미 해당 getEmployees의 모든 결과를 다 출력했을텐데 왜 저렇게 나오는가?  
> 해당 async 함수 내부 자체를 끝까지 실행하는데까지 오래걸리기때문에 바로 결과를 리턴하지않는다.  
>   
>   
> 그렇기때문에 결과값을 출력하고 싶다면  
> `const employees = await getEmployees();`  
> 이렇게 사용해야한다.


# 프로미스 오류 처리


## `try catch`문으로 오류 처리

- 비동기 작업 실패 시 출력 할 동작을 처리한다.
- 해당 방식을 사용하는 이유는 프로그램에 오류가 나더라도, 프로그램이 멈추지않고 에러구문을 처리할 수 있다.

```javascript
//data.js

export async function printEmployees(){
	try{
		const response = await fetch('...');
		const data = await response.json();
		console.log(data);
	}catch (error){
		console.log('Error!');
		return;
	}finally{
		console.log('Finished');
	}
}
```

- 여기서 `finally`는 위 `try`와 `catch`문 중 어떤 것이 실행되던 무조건 동작한다.
- `then()` 은 프로미스 객체의 메소드이다.
- `then()` 메소드도 프로미스를 리턴한다.
- 비동기 작업이 완료되면 등록된 콜백을 실행해주는 메소드

```javascript
const dataPromise = fetch('...').then((response) => response.json());
dataPromise.then((data) => console.log(data));

// 다른 작성 방식
fetch('...')
.then((response) => response.json())
.then((data) => console.log(data));
```

- 위처럼 프로미스 뒤에 메소드를 연결해서 쓰는 방식을 **프로미스 체인** 이라고 한다.

## `then()`메소드에서 `catch()`와 `finally()`


```javascript
fetch('...')
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log('Error!'))
.finally(() => console.log('Finished'));
```


# `Promise.all` 

- 여러 프로미스를 동시에 기다릴때 사용하는 메서드

```javascript
async function getEmployees(id){
	const response = await fetch('...');
	const data = await response.json();
	return data;
}

const promises = [];

for(let i = 1; i < 11; i++){
	promises.push(getEmployees(i));
}
Promise.all(promises);

//배열을 출력하려면
const employees = await Promise.all(promises);
console.log(employees);
```


```javascript
import { getEmployees, getMenus } from './asyncFunctions.js';

const employeesPromise  = getEmployees();
const menusPromise  = getMenus();

const [employees, menus] = await Promise.all([employeesPromise, menusPromise]);

console.log('직원 데이터:');
console.log(employees);
console.log('메뉴 데이터:');
console.log(menus);
```

- 이벤트 루프
- 비동기의 우선순위 (마이크로태스크큐, 매크로태스크큐)

## JS 리퀘스트

![image](https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb)


> 📌 **AJAX**  
> 동적인 웹 사이트를 만들기 위해서 비동기적으로 JS코드로 서버에 리퀘스트를 보내고 리스폰스를 받아오는 기술이다.  
>   
> 리퀘스트를 보내는건 AJAX로, 받아오는건 JSON으로 많이 한다.

- 이전의 **AJAX**는 XMLHttpRequest라는 문법을 사용했는데, 문법 자체가 어렵기도해서 요즘은 `fetch`함수와 `axios`라는 라이브러리를 사용해서 구현한다.
    - `fetch`
        - ES6 표준에 소개된 문법
        - Promise 기반
        - 쉽게 리퀘스트를 보낼 수 있음
    - `axios`
        - fetch와 비슷한 문법
        - 실무에 유용한 기능을 제공하는 라이브러리

---


---


## 리퀘스트를 보내는 방법


```javascript
const res = await fetch('https://learn.codeit.kr/api/color-surveys');
const data = await res.json();

console.log(data);
```

- 해당 res에 쿼리 스트링(쿼리 파라미터)을 추가할 수 있다.
    - mbti(특정 mbti 필터링), limit , offset(**페이지 네이션**)
        - **페이지 네이션이란?**
        모든 데이터를 한꺼번에 보여주지 않고, 페이지 처럼 나눠서 보여주는것

위 처럼 리퀘스트를 보냈을 때의 리스폰스


```javascript
{
	// 모든 데이터를 받아오는 갯수
  "count": 42,
  // 다음 데이터를 받아오는 URL
  // offset = 몇개의 데이터를 건너뛰고 요청 할 것인지?
  // limit = 데이터 몇개를 요청 할 것인지?
  "next": "https://learn.codeit.kr/api/color-surveys/?offset=20&limit=10&mbti=ISTJ",
  // 이전 데이터를 받아오는 URL
  "previous": null,
  // 현재 페이지에 해당하는 데이터 배열
  "results":[
	  {
		  "colorCode": "#CA6952",
      "createdAt": 1668752533000,
      "updatedAt": 1668752533000,
      "id": 42,
      "mbti": "ISTJ"
	  },
	  ...
  ]
}
```

- 쿼리 파라미터를 이용해서 리퀘스트 하는 방법(예: mbti 쿼리 파라미터)

```javascript
const res = await fetch('https://learn.codeit.kr/api/color-surveys/?mbit=ISTH');
const data = await res.json();

console.log(data);
```

- URL 객체를 이용해 쿼리 파라미터를 작성 할 수도 있다.
    - 추가 정보
    - new URL 객체와 new URLSearchParams 객체는 상황에 따라 별도로 사용할수있다.
    ⇒ 차이점

```javascript
const url = new URL('https://learn.codeit.kr/api/color-surveys');
url.searchParams.append('offset', 10);
url.searchParams.append('limit', 10);
const res = await fetch(url);
const data = await res.json();

console.log(data);
```

- 하나의 id만 요청하고 싶을 때는 아래와 같이 작성한다.

```javascript
https://learn.codeit.kr/api/color-surveys/5
```

- `new URL` , `new URLSearchParams` 차이

| 특징       | `URL`                               | `URLSearchParams`                                         |
| -------- | ----------------------------------- | --------------------------------------------------------- |
| 목적       | URL의 전체 구조를 파싱하고 수정                 | URL의 쿼리 파라미터를 다루기 위한 전용 객체                                |
| 구성 요소 접근 | 프로토콜, 호스트, 경로, 쿼리 파라미터에 접근 가능       | 쿼리 파라미터에 대한 CRUD 작업 가능                                    |
| 메서드      | `url.href`, `url.searchParams` 등 사용 | `params.get()`, `params.append()`, `params.delete()` 등 사용 |


## POST 리퀘스트 보내기


```javascript
const surveyData = {
	mbti: 'ENFP',
	colorCode: '#ABCDEF',
	password: '0000'
}

fetch('https://learn.codeit.kr/api/color-surveys',{
	method : 'POST',
	body: JSON.stringify(surveyData),
	headers: {
		'Content-Type': 'application/json',
	},
});

// 리스폰스를 처리 할때
const res = await fetch('https://learn.codeit.kr/api/color-surveys',{
	method : 'POST',
	body: JSON.stringify(surveyData),
	headers: {
		'Content-Type': 'application/json',
	},
});

const data = await res.json(); // json메서드로 리스폰스를 파싱하여 출

console.log(data);
```


method에는 `POST`/`PATH`/`DELETE` 가 있다.

- 여기서 생성된 `surceyData`는 javascript 객체이고, 웹으로 데이터를 주고 받을때는 JSON 문자열을 사용해야 한다.
- 그렇기 때문에 body에 요청할때 `JSON.stringify` 메서드를 이용하여, JSON 문자열로 보내준다.
- 또한, 어떤 형식으로 데이터 타입을 보내는 지 알려주는 것이 좋다. ⇒ `'Content-Type': 'application/json'`

# API 함수 만들기


```javascript
export async function getColorSurveys(params= {}){
const url = new URL('https://learn.codeit.kr/api/color-surveys');
Object.keys(pramas).forEach((key) => url.searchParams.append(key, params[key]));
const res = await fetch(url);
const data = await res.json();
return data;
};
```

- `getColorSurveys` 함수의 파라미터를 객체로 받는다.
    - `params={}` 이렇게 기본값을 설정해주는 이유는, 해당 아규먼트의 값이 존재하지않을때도 빈 객체로 파라미터를 전달하기 위함이다.
    - 기본값을 설정해주지 않으면 이후에 `params` 객체의 속성에 접근할 때 오류가 발생하기 때문에 _**코드의 안전성을 위해서 기본값을 지정해주어야 한다.**_
- 해당 객체의 `Object.keys` 메서드를 이용해 `pramas` 객체의 `key`를 가져오고, `forEach()`를 통해 `key`를 순회하여, `url.searchParams.append()`; 를 통해 url 에 쿼리 파라미터를 순회한 `key`와 `params[key]` 그 키의 값을 순차적으로 추가해준다.
- 해당 함수 사용방법

```javascript
import { getColorSurveys } form '/api.js';

const data = await getColorSurveys({offset: 20, limit: 20});
console.log(data);
```


또는, id값으로 받아오거나 js 객체를 담은 변수를 json으로 변환하여, POST 시키는 함수도 만들 수 있다.


```javascript
export async function getColorSurvey(id){
const url = new URL(`https://learn.codeit.kr/api/color-surveys/${id}`);
const res = await fetch(url);
const data = await res.json();
return data;
};

// 사용법
const data = await getColorSurvey(10);
console.log(data);
```


```javascript
export async function createdColorSurvey(surveyData){
const res = await fetch('https://learn.codeit.kr/api/color-surveys',{
method: 'POST',
body: JSON.stringify(surveydata),
headers: {
'Content-Type': 'application/json',
}
});
const data = await res.json();
return data;
};

// 사용
const surveyData = {
mbti: 'ENFJ',
colorCode: '#ABCDEF',
password: '0000'
};
const data = await createdColorSurvey(surveyData);
console.log(data);
```


# 모듈화


```javascript
// api.js

export async function getAvatars(params = {}) {
  const url = new URL('https://learn.codeit.kr/api/avatars');
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function getAvatar(id) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`);
  const data = await res.json();
  return data;
}

export async function createAvatar(avatarData) {
  const res = await fetch('https://learn.codeit.kr/api/avatars', {
    method: 'POST',
    body: JSON.stringify(avatarData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}

export async function patchAvatar(id, avatarData) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`,{
    method: 'PATCH',
    body: JSON.stringify(avatarData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}

export async function deleteAvatar(id) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}
```


```javascript
// main.js

import { createAvatar, patchAvatar, deleteAvatar } from './api.js';

let avatar = await createAvatar({
  hairType: 'long1',
  hairColor: 'black',
  skin: 'tone300',
  clothes: 'collarBasic',
  accessories: 'headset'
});
avatar = await patchAvatar(avatar.id, {
  hairType: 'short3',
  hairColor: 'blonde',
});

console.log(avatar);
await deleteAvatar(avatar.id);
```


# 상태 코드 오류 처리(throw)


```javascript
// main.js

import { getColorSurveys, getColorSurvey, createColorSurvey } from './api.js';

try {
	const data = await getColorSurveys();
	console.log(data);
} catch(e){
	console.log('오류 발생');
	console.log(e.message);
}
```

- 유효하지 않은 헤더 이름을 사용하거나, 헤더 값이 이상하면 req 자체가 실패해서 `fetch`가 리턴하는 프로미스는 리젝티드 상태가가 된다.
    - 여기서 주의 할 점은 `fetch`가 실패하면 리젝티드 상태가 되지만, 400이나 500같은 에러 res가 돌아오는경우 _**fetch의 프로미스 상태는 풀필드 상태**_가 된다.
    - 이를 깔끔하게 처리하기 위해선 res의 _**상태코드가 성공을 나타내지않으면 오류를 발생시키는 방식으로 작성해야한다.**_

    ```javascript
    // api.js
    
    export async function getAvatars(params = {}) {
      const url = new URL('https://learn.codeit.kr/api/avatars');
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
      );
      const res = await fetch(url);
      
      if(!res.ok){ // 리턴값이 2면 true
      throw new Error('데이터를 불러오는데 실패했습니다.');
      }
      const data = await res.json();
      return data;
    }
    ```


# axios 문법


## axios 설치


```powershell
npm install axios
```


```javascript
// api.js
import axios from 'axios';

export async function getAvatars(params = {}) {
  const res = await axios.get('https://learn.codeit.kr/api/avatars', {params} );
	return res.data;
}

export async function getAvatar(id) {
  const res = await axios.get(`https://learn.codeit.kr/api/avatars/${id}`);
	return res.data;
}

export async function createAvatar(avatarData) {
  const res = await axios.post('https://learn.codeit.kr/api/avatars', avatarData );
	return res.data;
}

export async function patchAvatar(id, avatarData) {
  const res = await axios.patch(`https://learn.codeit.kr/api/avatars/${id}`, avatarData);
	return res.data;
}

export async function deleteAvatar(id) {
  const res = await axios.delete(`https://learn.codeit.kr/api/avatars/${id}`;
	return res.data;
}
```

- `axios`의 `post`,`patch`,`put` 등 body로 전달할 데이터를 **두번째 arg 로 받는다. 세번째 arg로는 옵션을 받는다(헤더,쿼리파라미터,타임아웃 등 옵션 사용 가능)**
- `body`에 전달할 데이터가 없는 `get`, `delete`는 **두번째 arg를 옵션**으로 받는다
- axios는 알아서 문자열을 json으로 변환해주고,  body 데이터를 보고 설정해준다.

### axios의 instance 설정


```javascript
const instance = axios.create({
	baseURL: '...',
	timeout: 3000,
});

// 아래와 같이 axios부분에 사용이 가능하다.
export async function getAvatars(params = {}) {
  const res = await instance.get('/avatars', {params} );
	return res.data;
}
```


## 한눈에 모아보기


---


## 한눈에 모아보기

## 배열의 메서드

# 생성 및 조작 메서드


## Array.isArray()


주어진 값이 배열인지 확인합니다.


## Array.from()


유사 배열 객체나 반복 가능한 객체를 배열로 변환합니다.


## Array.of()


전달된 인자들을 요소로 가지는 새로운 배열을 생성합니다.


## Array.concat()


두 개 이상의 배열을 병합하여 새 배열을 만듭니다.


## Array.copyWithin()


배열의 일부 요소를 같은 배열의 다른 위치로 복사합니다.


## Array.fill()


배열의 모든 요소를 고정된 값으로 채웁니다.


## Array.includes()


배열에 특정 값이 포함되어 있는지 확인합니다.


## Array.indexOf()


배열에서 특정 요소의 첫 번째 인덱스를 반환합니다.


## Array.lastIndexOf()


배열에서 특정 요소의 마지막 인덱스를 반환합니다.


## Array.push()


배열의 끝에 하나 이상의 요소를 추가합니다.


## Array.pop()


배열의 마지막 요소를 제거하고 그 요소를 반환합니다.


## Array.shift()


배열의 첫 번째 요소를 제거하고 그 요소를 반환합니다.


## Array.unshift()


배열의 앞에 하나 이상의 요소를 추가합니다.


## Array.slice()


배열의 일부를 선택하여 새 배열로 반환합니다.


## Array.splice()


배열의 요소를 추가, 제거 또는 교체합니다.


# 탐색 및 반복 메서드


## Array.forEach()


배열의 각 요소에 대해 제공된 함수를 한 번씩 실행합니다.


## Array.map()


배열의 모든 요소에 대해 제공된 함수를 호출한 결과로 새 배열을 만듭니다.


## Array.filter()


주어진 조건을 충족하는 요소들만 모아 새로운 배열을 만듭니다.


## Array.find()


주어진 조건을 만족하는 첫 번째 요소를 반환합니다.


## Array.findIndex()


주어진 조건을 만족하는 첫 번째 요소의 인덱스를 반환합니다.


## Array.every()


배열의 모든 요소가 주어진 조건을 만족하는지 확인합니다.


## Array.some()


배열의 일부 요소가 주어진 조건을 만족하는지 확인합니다.


## Array.reduce()


배열을 하나의 값으로 축소합니다. 왼쪽에서 오른쪽으로.


## Array.reduceRight()


배열을 하나의 값으로 축소합니다. 오른쪽에서 왼쪽으로.


# 정렬 및 변환 메서드


## Array.sort()


배열의 요소를 정렬합니다.


## Array.reverse()


배열의 순서를 반대로 뒤집습니다.


## Array.join()


배열의 모든 요소를 문자열로 결합합니다.


## Array.flat()


중첩된 배열을 평탄화하여 단일 배열로 만듭니다.


## Array.flatMap()


각 요소에 대해 매핑 함수를 호출한 후 결과를 새로운 배열로 평탄화합니다.


# 찾기 및 검사 메서드


## Array.keys()


배열의 인덱스가 포함된 새로운 배열 반복자를 반환합니다.


## Array.values()


배열의 요소가 포함된 새로운 배열 반복자를 반환합니다.


## Array.entries()


배열의 [인덱스, 요소] 쌍을 포함하는 새로운 배열 반복자를 반환합니다.


# 기타 메서드


## Array.length


배열의 길이를 반환합니다.


## Array.toString()


배열을 문자열로 변환합니다.


## Array.toLocaleString()


배열의 요소를 지역화된 문자열로 변환합니다.


## Array.at()


배열에서 음수 인덱스를 사용할 수 있게 해 주는 메소드입니다.


# 자주 사용하는 메서드


## push()**와** pop()


배열의 끝에 요소를 추가/제거합니다.


## shift()**와** unshift()


배열의 앞에 요소를 추가/제거합니다.


## map()


배열의 각 요소에 대한 새로운 배열을 만듭니다.


## filter()


조건을 충족하는 요소들만 배열로 만듭니다.


## reduce()


배열을 하나의 값으로 줄입니다.


## find()


조건을 만족하는 첫 번째 요소를 반환합니다.


## forEach()


배열의 각 요소에 대해 작업을 수행합니다.


## sort()


배열을 정렬합니다.


## slice()


배열의 일부를 복사해 새 배열로 만듭니다.


## 문자열 메서드

# 생성 메서드


## String.fromCharCode()


UTF-16 코드 단위로부터 문자열을 생성합니다.


## String.fromCodePoint()


주어진 코드 포인트에서 새로운 문자열을 생성합니다.


# 검색 메서드


## String.includes()


문자열에 특정 문자가 포함되어 있는지 확인합니다.


## String.indexOf()


문자열에서 특정 문자의 첫 번째 인덱스를 반환합니다.


## String.lastIndexOf()


문자열에서 특정 문자의 마지막 인덱스를 반환합니다.


## String.startsWith()


문자열이 특정 문자로 시작하는지 확인합니다.


## String.endsWith()


문자열이 특정 문자로 끝나는지 확인합니다.


## String.search()


정규식과 일치하는 첫 번째 인덱스를 반환합니다.


## String.match()


문자열이 정규식과 일치하는 모든 결과를 배열로 반환합니다.


## String.matchAll()


정규식과 일치하는 모든 결과의 반복자를 반환합니다.


# 변형 및 조작 메서드


## String.concat()


두 개 이상의 문자열을 하나로 결합합니다.


## String.padStart()


현재 문자열의 시작을 주어진 길이까지 지정된 문자열로 채웁니다.


## String.padEnd()


현재 문자열의 끝을 주어진 길이까지 지정된 문자열로 채웁니다.


## String.repeat()


문자열을 주어진 횟수만큼 반복하여 새로운 문자열을 반환합니다.


## String.replace()


문자열의 일부를 다른 문자열로 교체합니다.


## String.replaceAll()


문자열의 모든 부분을 다른 문자열로 교체합니다.


## String.slice()


문자열의 일부를 추출하여 새 문자열로 반환합니다.


## String.split()


문자열을 구분자를 기준으로 나누어 배열로 반환합니다.


## String.substring()


문자열의 지정된 부분을 반환합니다.


## String.substr() (Deprecated)


문자열의 일부를 추출하여 새 문자열로 반환합니다.


## String.toLowerCase()


문자열을 소문자로 변환합니다.


## String.toUpperCase()


문자열을 대문자로 변환합니다.


## String.trim()


문자열의 양쪽 끝에 있는 공백을 제거합니다.


## String.trimStart() (또는 trimLeft())


문자열의 시작 부분의 공백을 제거합니다.


## String.trimEnd() (또는 trimRight())


문자열의 끝 부분의 공백을 제거합니다.


# 문자열 정보 메서드


## String.charAt()


문자열에서 특정 인덱스에 위치한 문자를 반환합니다.


## String.charCodeAt()


문자열에서 특정 인덱스에 위치한 문자의 UTF-16 코드를 반환합니다.


## String.codePointAt()


주어진 위치에서 코드 포인트 값을 반환합니다.


## String.length


문자열의 길이를 반환합니다.


## String.localeCompare()


두 문자열을 로케일 기준으로 비교합니다.


# 정규 표현식 관련 메서드


## String.match()


정규식과 일치하는 문자열을 반환합니다.


## String.matchAll()


정규식과 일치하는 모든 결과를 반복자로 반환합니다.


## String.replace()


정규식을 사용해 문자열의 일부를 대체합니다.


## String.search()


정규식과 일치하는 첫 번째 인덱스를 반환합니다.


## String.split()


정규식을 사용해 문자열을 분할합니다.


# 자주 사용하는 메서드


## includes()


문자열에 특정 문자가 포함되어 있는지 확인할 때 사용합니다.


## replace()


특정 문자열을 다른 문자열로 바꾸고 싶을 때 사용합니다.


## split()


문자열을 특정 구분자를 기준으로 나누어 배열로 반환합니다.


## trim()


문자열 양 끝의 공백을 제거합니다.


## charAt()


문자열에서 특정 위치의 문자를 가져옵니다.


## toUpperCase() **및** toLowerCase()


문자열을 대문자 또는 소문자로 변환합니다.


## slice()


문자열의 특정 부분을 추출하여 새로운 문자열을 만듭니다.






## 객체 메서드

# **객체 생성 메서드**


## Object.create(proto, [propertiesObject])


지정된 프로토타입 객체 및 선택적 속성으로 새 객체를 만듭니다.


## Object.assign(target, ...sources)


하나 이상의 출처 객체로부터 대상 객체로 속성을 복사합니다.


## Object.freeze(obj)


객체를 동결하여 변경할 수 없도록 합니다.


## Object.seal(obj)


객체를 밀봉하여 기존 속성만 수정할 수 있고, 새로운 속성을 추가하거나 삭제할 수 없게 만듭니다.


## Object.defineProperty(obj, prop, descriptor)


객체에 새로운 속성을 정의하거나 기존 속성의 특성을 수정합니다.


## Object.defineProperties(obj, props)


객체에 여러 속성을 정의합니다.


# **객체 탐색 메서드**


## Object.keys(obj):


객체의 열거 가능한 속성 이름들을 배열로 반환합니다.


## Object.values(obj): 


객체의 속성 값들을 배열로 반환합니다.


## Object.entries(obj): 


객체의 속성 이름과 값을 배열로 반환합니다 (각각 [key, value] 형태).


## Object.getOwnPropertyNames(obj): 


객체의 모든 속성 이름들을 배열로 반환합니다.


## Object.getOwnPropertySymbols(obj): 


객체의 심볼(symbol) 속성들만 배열로 반환합니다.


## Object.getOwnPropertyDescriptor(obj, prop): 


객체의 특정 속성에 대한 속성 설명자를 반환합니다.


## Object.getOwnPropertyDescriptors(obj): 


객체의 모든 속성에 대한 속성 설명자를 반환합니다.


## Object.getPrototypeOf(obj): 


객체의 프로토타입을 반환합니다.


# **객체의 프로토타입 및 속성 관련 메서드**


## Object.setPrototypeOf(obj, prototype): 


객체의 프로토타입을 설정합니다.


## Object.isFrozen(obj): 


객체가 동결 상태인지 확인합니다.


## Object.isSealed(obj): 


객체가 밀봉 상태인지 확인합니다.


## Object.isExtensible(obj): 


객체에 속성을 추가할 수 있는지 확인합니다.


## Object.preventExtensions(obj): 


객체에 새로운 속성을 추가할 수 없도록 합니다.


## Object.hasOwnProperty(prop): 


객체가 특정 속성을 직접 소유하고 있는지 확인합니다.


## Object.propertyIsEnumerable(prop): 


객체의 속성이 열거 가능한지 확인합니다.


## Object.isPrototypeOf(obj): 


특정 객체가 다른 객체의 프로토타입인지 확인합니다.


## **객체 비교 및 병합 메서드**


## Object.assign(target, ...sources): 


대상 객체에 소스 객체의 속성을 복사합니다. (복사된 속성들이 덮어씌워집니다.)


## Object.is(value1, value2): 


두 값이 동일한지 비교합니다. (엄격한 동등성 비교)


## Object.fromEntries(iterable): 


배열을 객체로 변환합니다. 배열 내의 각 항목은 [key, value] 쌍이어야 합니다.


# **객체 메서드 간단 설명**


## Object.keys(): 


객체의 모든 열거 가능한 속성 이름을 배열로 반환합니다.


## Object.values(): 


객체의 모든 열거 가능한 속성 값을 배열로 반환합니다.


## Object.entries(): 


객체의 모든 속성 이름과 값을 배열의 쌍([key, value])으로 반환합니다.


## Object.assign(): 


여러 소스 객체의 속성을 복사하여 새로운 객체를 생성하거나 기존 객체를 수정합니다.


## Object.freeze(): 


객체를 동결하여 수정할 수 없도록 합니다.


## Object.seal(): 


객체를 밀봉하여 속성을 추가하거나 삭제할 수 없도록 합니다.


## Object.create(): 


지정된 프로토타입 객체를 바탕으로 새로운 객체를 생성합니다.


## Object.getPrototypeOf(): 


객체의 프로토타입을 반환합니다.


## Object.setPrototypeOf(): 


객체의 프로토타입을 설정합니다.


## Object.is(): 


두 값이 동일한지 확인합니다. NaN도 동일한 값으로 인식합니다.


## Object.fromEntries(): 


배열을 객체로 변환합니다.


## 예제


```javascript
const obj = { a: 1, b: 2, c: 3 };

// Object.keys: 속성 이름을 배열로 반환
console.log(Object.keys(obj)); // ['a', 'b', 'c']

// Object.values: 속성 값을 배열로 반환
console.log(Object.values(obj)); // [1, 2, 3]

// Object.entries: [key, value] 쌍의 배열을 반환
console.log(Object.entries(obj)); // [['a', 1], ['b', 2], ['c', 3]]

// Object.assign: 객체 병합
const newObj = Object.assign({}, obj, { d: 4 });
console.log(newObj); // { a: 1, b: 2, c: 3, d: 4 }

// Object.freeze: 동결된 객체는 수정할 수 없음
const frozenObj = Object.freeze({ x: 42 });
frozenObj.x = 99; // 무시됨
console.log(frozenObj.x); // 42

// Object.create: 프로토타입을 지정하여 새로운 객체 생성
const proto = { z: 10 };
const objWithProto = Object.create(proto);
console.log(objWithProto.z); // 10
```


## Math객체 메서드

# **1. 수학적 상수**

- **`Math.PI`**: 원주율 π의 값 (약 3.14159).
- **`Math.E`**: 자연상수 e의 값 (약 2.71828).

# **2. 기본적인 수학 연산**

- **`Math.abs(x)`**: 절대값을 반환합니다. (예: Math.abs(-5)는 5 반환)
- **`Math.ceil(x)`**: 주어진 숫자보다 크거나 같은 정수 중에서 가장 작은 값을 반환합니다. (예: Math.ceil(4.2)는 5 반환)
- **`Math.floor(x)`**: 주어진 숫자보다 작거나 같은 정수 중에서 가장 큰 값을 반환합니다. (예: Math.floor(4.7)는 4 반환)
- **`Math.round(x)`**: 숫자를 반올림합니다. (예: Math.round(4.5)는 5 반환)
- **`Math.max(...values)`**: 주어진 숫자 중에서 최대값을 반환합니다. (예: Math.max(1, 2, 3)는 3 반환)
- **`Math.min(...values)`**: 주어진 숫자 중에서 최소값을 반환합니다. (예: Math.min(1, 2, 3)는 1 반환)

# **3. 지수 및 로그**

- **`Math.pow(base, exponent)`**: base의 exponent 제곱을 반환합니다. (예: Math.pow(2, 3)는 8 반환)
- **`Math.sqrt(x)`**: x의 제곱근을 반환합니다. (예: Math.sqrt(16)은 4 반환)
- **`Math.cbrt(x)`**: x의 세제곱근을 반환합니다. (예: Math.cbrt(27)는 3 반환)
- **`Math.exp(x)`**: e의 x 제곱을 반환합니다. (예: Math.exp(1)는 약 2.718 반환)
- **`Math.log(x)`**: 자연 로그를 반환합니다. (예: Math.log(Math.E)는 1 반환)
- **`Math.log10(x)`**: 10을 밑으로 하는 로그를 반환합니다. (예: Math.log10(100)는 2 반환)
- **`Math.log2(x)`**: 2를 밑으로 하는 로그를 반환합니다. (예: Math.log2(8)는 3 반환)

# **4. 삼각 함수**

- **`Math.sin(x)`**: x(라디안)의 사인 값을 반환합니다.
- **`Math.cos(x)`**: x(라디안)의 코사인 값을 반환합니다.
- **`Math.tan(x)`**: x(라디안)의 탄젠트 값을 반환합니다.
- **`Math.asin(x)`**: 사인 값 x에 대한 아크 사인(역사인)을 반환합니다.
- **`Math.acos(x)`**: 코사인 값 x에 대한 아크 코사인(역코사인)을 반환합니다.
- **`Math.atan(x)`**: 탄젠트 값 x에 대한 아크 탄젠트를 반환합니다.

# **5. 각도 변환**

- **`Math.degToRad(degrees)`**: 각도를 라디안으로 변환합니다. (각도 × π / 180)
- **`Math.radToDeg(radians)`**: 라디안을 각도로 변환합니다. (라디안 × 180 / π)

# **6. 기타 유용한 메서드**

- **`Math.random()`**: 0(포함)부터 1(미포함) 사이의 임의의 부동 소수점 숫자를 반환합니다.
- **`Math.trunc(x)`**: 소수점 이하를 버리고 정수 부분만 반환합니다. (예: Math.trunc(4.9)는 4 반환)

## 비트 연산

# 비트 연산

> 비트 연산(Bitwise Operations)은 이진수 비트 단위로 직접 연산을 수행하는 연산을 말합니다. 일반적으로 비트 연산은 숫자를 이진수로 표현한 후 각 비트 위치에서 수행됩니다. 비트 연산자는 이진수의 각 비트에 대해 특정한 규칙을 적용하여 새로운 값을 생성합니다.

---


# **주요 비트 연산자**


## **AND (**&**)**:

- 두 비트가 모두 1일 때만 1을 반환합니다.
- 예: 5 & 3은 1을 반환합니다. (5는 0101, 3은 0011 → 0001)

## **OR (**|**)**:

- 두 비트 중 하나라도 1이면 1을 반환합니다.
- 예: 5 | 3은 7을 반환합니다. (5는 0101, 3은 0011 → 0111)

## **XOR (**^**)**:

- 두 비트가 다를 때만 1을 반환합니다.
- 예: 5 ^ 3은 6을 반환합니다. (5는 0101, 3은 0011 → 0110)

## **NOT (**~**)**:

- 비트를 반전시킵니다. 0은 1로, 1은 0으로 변환합니다.
- 예: ~5는 -6을 반환합니다. (5는 0101 → 1010)

## **왼쪽 시프트 (**<<**)**:

- 비트를 왼쪽으로 이동시킵니다. 왼쪽으로 이동할 때마다 2배가 증가합니다.
- 예: 5 << 1은 10을 반환합니다. (5는 0101 → 1010)

## **오른쪽 시프트 (**>>**)**:

- 비트를 오른쪽으로 이동시킵니다. 이때, 가장 왼쪽 비트의 값은 유지됩니다.
- 예: 5 >> 1은 2를 반환합니다. (5는 0101 → 0010)

---


# **예제**


```javascript
console.log(5 & 3);  // 1
console.log(5 | 3);  // 7
console.log(5 ^ 3);  // 6
console.log(~5);     // -6
console.log(5 << 1); // 10
console.log(5 >> 1); // 2
```


---


# **비트 연산의 용도**

- **성능 최적화**: 비트 연산은 일반적으로 숫자 연산보다 빠르기 때문에, 성능이 중요한 경우에 사용됩니다.
- **플래그 관리**: 여러 상태를 하나의 숫자(비트 필드)로 관리할 때 유용합니다. 각 비트를 특정한 상태를 나타내는 플래그로 사용합니다.
- **암호화 및 해싱**: 비트 연산은 데이터의 암호화나 해시 함수 구현에 사용됩니다.
- **마스크 처리**: 특정 비트만을 선택적으로 처리할 때 비트 마스크를 사용합니다.

---


# **요약**


비트 연산은 이진수 비트 단위로 직접 연산을 수행하는 기법으로, 다양한 상황에서 효율적인 연산을 가능하게 합니다. 이러한 연산자는 주로 성능 최적화와 데이터 처리에 활용되며, 프로그래밍의 중요한 기초 지식 중 하나입니다.


## 기초 개념 요약

JavaScript를 처음 배우거나 복습할 때 꼭 알아야 할 필수적인 개념들입니다. 각 항목에는 중요한 내용들을 간결하게 설명했습니다.


### 1. 변수와 상수

- **`var`**: 함수 스코프를 가지며, 중복 선언이 가능. 호이스팅(hoisting)이 일어납니다.
- **`let`**: 블록 스코프를 가지며, 중복 선언이 불가능. 호이스팅이 되지만 초기화 전에 사용 불가(`Temporal Dead Zone` 발생).
- **`const`**: 블록 스코프를 가지며, 상수로 사용됩니다. 초기화 이후 값 변경 불가.

```javascript
let age = 25;
const name = "John";
```


### 2. 자료형

- **기본 자료형(Primitive types)**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- **참조 자료형(Reference types)**: `object`, `array`, `function`

```javascript
let str = "Hello"; // 문자열
let num = 123; // 숫자
let bool = true; // 불리언
let arr = [1, 2, 3]; // 배열
let obj = { name: "John", age: 25 }; // 객체
```


### 3. 연산자

- **산술 연산자**: `+`, -, *, `/`, `%`
- **비교 연산자**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **논리 연산자**: `&&`, `||`, `!`
- **할당 연산자**: `=`, `+=`, `=`, `=`, `/=`
- **삼항 연산자**: `condition ? expr1 : expr2`

```javascript
let a = 10;
let b = 20;
let result = a > b ? "a is greater" : "b is greater";
```


### 4. 조건문

- **`if...else`**: 조건에 따라 실행할 코드를 선택합니다.
- **`switch`**: 여러 값 중 하나를 선택하여 실행합니다.

```javascript
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

switch (color) {
  case "red":
    console.log("Red");
    break;
  case "blue":
    console.log("Blue");
    break;
  default:
    console.log("Unknown color");
}
```


### 5. 반복문

- **`for`**: 고정된 횟수만큼 반복합니다.
- **`while`**: 조건이 참일 동안 반복합니다.
- **`do...while`**: 최소 한 번은 실행된 후 조건이 참일 동안 반복합니다.
- **`for...of`**: 배열과 같은 반복 가능한 객체를 순회합니다.
- **`for...in`**: 객체의 열거 가능한 속성을 순회합니다.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

let person = { name: "John", age: 25 };
for (let key in person) {
  console.log(key, person[key]);
}
```


### 6. 함수

- **함수 선언식**: 이름이 있는 함수입니다.
- **함수 표현식**: 변수에 할당된 함수입니다.
- **화살표 함수(Arrow function)**: 간결한 함수 표현 방식입니다.

```javascript
function add(a, b) {
  return a + b;
}

let multiply = function(a, b) {
  return a * b;
};

let subtract = (a, b) => a - b;
```

- **기본 매개변수(Default parameters)**: 함수의 매개변수에 기본값을 설정할 수 있습니다.

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greet(); // 출력: Hello, Guest
```


### 7. 객체

- **객체 리터럴**: 키-값 쌍으로 구성된 데이터 구조입니다.
- **메서드**: 객체의 속성으로 함수가 포함될 수 있습니다.
- **this 키워드**: 현재 객체를 참조합니다.
- **구조 분해 할당(Destructuring)**: 객체나 배열의 속성을 쉽게 추출합니다.

```javascript
let person = {
  name: "John",
  age: 30,
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

person.greet(); // 출력: Hello, I'm John

let { name, age } = person; // 구조 분해 할당
```


### 8. 배열

- **배열 생성**: 여러 값을 순서대로 저장하는 자료 구조입니다.
- **배열 메서드**: 배열을 조작하는 다양한 메서드가 있습니다.
    - **`push()`**: 배열 끝에 요소 추가
    - **`pop()`**: 배열 끝에서 요소 제거
    - **`shift()`**: 배열 앞에서 요소 제거
    - **`unshift()`**: 배열 앞에 요소 추가
    - **`splice()`**: 배열 중간에서 요소 추가 또는 제거
    - **`slice()`**: 배열의 일부를 복사하여 새로운 배열 반환
    - **`forEach()`**: 배열의 각 요소에 대해 함수 호출
    - **`map()`**: 배열의 각 요소를 변환하여 새로운 배열 반환
    - **`filter()`**: 조건에 맞는 요소만을 새로운 배열로 반환
    - **`reduce()`**: 배열을 하나의 값으로 줄임

```javascript
let fruits = ["apple", "banana", "orange"];
fruits.push("grape"); // ["apple", "banana", "orange", "grape"]
let citrus = fruits.slice(1, 3); // ["banana", "orange"]
```


### 9. ES6+ 문법

- **화살표 함수**: 간결한 함수 표현.
- **템플릿 리터럴**: 백틱(```)을 사용하여 문자열 내에서 변수를 쉽게 삽입할 수 있습니다.
- **구조 분해 할당**: 객체나 배열의 속성을 쉽게 추출.
- **나머지 매개변수(Rest Parameters) & 스프레드 연산자(Spread Operator)**:
    - **Rest**: 함수의 매개변수로 나머지 인자들을 배열로 받음.
    - **Spread**: 배열이나 객체를 확장.

```javascript
let person = { name: "John", age: 30 };
let { name, age } = person; // 구조 분해 할당

let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]

function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
```


### 10. 비동기 처리

- **콜백 함수**: 함수 실행이 끝난 후 호출되는 함수.
- **프로미스(Promise)**: 비동기 작업의 성공(fulfilled) 또는 실패(rejected)를 처리.
- **`async/await`**: 비동기 코드를 동기식 코드처럼 작성할 수 있는 문법.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 1000);
  });
}

async function getData() {
  let data = await fetchData();
  console.log(data);
}

getData(); // 출력: Data fetched
```


### 11. DOM(Document Object Model) 조작

- **DOM 선택**: HTML 요소를 선택하여 조작할 수 있습니다.
    - `document.getElementById()`
    - `document.querySelector()`
    - `document.querySelectorAll()`
- **DOM 수정**: HTML 요소의 속성, 스타일, 내용을 변경할 수 있습니다.
- **이벤트 처리**: 사용자의 입력(클릭, 키 입력 등)에 따라 동작을 처리할 수 있습니다.

```javascript
let button = document.querySelector("button");
button.addEventListener("click", () => {
  alert("Button clicked!");
});
```


### 12. 기타 중요한 개념

- **`typeof`** **연산자**: 변수의 자료형을 확인합니다.
- **`null`****과** **`undefined`**: `null`은 값이 없음을 나타내고, `undefined`는 변수가 선언되었지만 값이 할당되지 않은 상태를 나타냅니다.
- **`==`** **vs** **`===`**: `==`는 타입 변환 후 값을 비교하고, `===`는 타입 변환 없이 값을 비교합니다.
- **스코프(Scope)**: 변수의 유효 범위. `var`는 함수 스코프, `let`과 `const`는 블록 스코프를 가집니다.
- **클로저(Closure)**: 함수와 그 함수가 선언된 렉시컬 환경의 조합으로, 외부 함수의 변수를 기억하는 함수입니다.

```javascript
function outer() {
  let counter = 0;
  return function() {
    counter++;
    console.log(counter);
  };
}

let increment = outer();
increment(); // 출력: 1
increment(); // 출력: 2
```


### 요약


이 정리본은 JavaScript의 기본적인 개념을 포함하며, JavaScript를 배우거나 복습할 때 필수적으로 알아야 할 내용들입니다. 이를 바탕으로 더 깊이 있는 주제들을 학습해 나가시면 좋습니다.


추가적으로 궁금한 점이 있거나 더 알고 싶은 내용이 있으면 언제든지 질문해 주세요!


