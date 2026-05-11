---
title: "[C언어] switch문"
description: "여러분, if-else 문으로 여러 조건을 처리해봤죠?근데 조건이 많아질수록 코드가 점점 지저분해진다는 느낌 받으셨을 겁니다.예를 들어 메뉴 선택 코드가 길어지면 if, else if, else if… 줄이 주르륵 늘어나서 보기 불편해져요.이럴 때 switch문이 등장"
pubDate: 2025-09-01T14:51:39.547Z
updatedDate: 2026-05-10T01:49:13.149Z
tags: []
category: "c-lang"
slug: "ceoneo-switchmun"
draft: false
originalUrl: "https://velog.io/@siltarre/C언어-switch문"
series: "C언어"
---

여러분, if-else 문으로 여러 조건을 처리해봤죠?
근데 조건이 많아질수록 코드가 점점 지저분해진다는 느낌 받으셨을 겁니다.
예를 들어 메뉴 선택 코드가 길어지면 if, else if, else if… 줄이 주르륵 늘어나서 보기 불편해져요.

이럴 때 `switch문`이 등장합니다.
`switch문`은 말 그대로 **“조건을 하나 고정시켜놓고, 그 값에 따라 다른 동작을 선택”**하는 방식이에요.
약간 식당에서 메뉴판 번호를 고르고, 그 번호에 맞는 음식을 주는 것과 비슷하죠.

## switch문 기본 구조

```c
switch (변수) {
    case 값1:
        실행할 코드;
        break;
    case 값2:
        실행할 코드;
        break;
    default:
        실행할 코드;
        break;
}
```

- `switch (변수)`: 어떤 변수를 기준으로 분기할지 고릅니다.
- `case 값`:  해당 값일 때 실행할 코드를 작성합니다.
- `break;` : 코드 실행을 끝내고 switch문을 빠져나옵니다.
- `default`: 어느 case에도 해당하지 않을 때 실행됩니다. (옵션이지만 거의 항상 넣습니다.)


### 예시: 메뉴 주문하기

이번엔 메뉴 번호에 따라 음식을 출력하는 코드를 짜봅시다.

```c
#include <stdio.h>

int main() {
    int 메뉴 = 2;

    switch (메뉴) {
        case 1:
            printf("치킨을 시킵니다.\n");
            break;
        case 2:
            printf("피자를 시킵니다.\n");
            break;
        case 3:
            printf("햄버거를 시킵니다.\n");
            break;
        default:
            printf("메뉴에 없는 선택입니다.\n");
            break;
    }

    return 0;
}
```

실행 결과:

```
피자를 시킵니다.
```



## break가 중요한 이유

여기서 `break;`를 빼면 무슨 일이 생길까요?
`case`를 만나면 그 아래 코드들을 줄줄이 실행해버리는 현상이 생깁니다.
이걸 `fall-through`라고 부릅니다.

```c
int 메뉴 = 2;

switch (메뉴) {
    case 1:
        printf("치킨\n");
    case 2:
        printf("피자\n");
    case 3:
        printf("햄버거\n");
    default:
        printf("기타 메뉴\n");
}
```

실행 결과:

```
피자
햄버거
기타 메뉴
```

원래 의도는 피자 하나만 출력하는 거였는데, `break`가 없으니까 밑으로 주르륵 실행된 거죠.
그래서 웬만하면 `break;` 꼭 붙여야 합니다.

## switch문의 장점
- 조건이 **동등 비교(==)**일 때만 사용할 수 있음 (범위 비교는 불가)
- 대신 가독성이 좋아서 메뉴 선택, 상태 값 처리, 키 입력 처리 등에 자주 씁니다. < 알아만두세요

예를 들어 “요일에 따라 메시지 출력하기” 같은 경우에 if문보다 switch문이 훨씬 깔끔합니다.


### 예시: 요일 출력하기

```c
#include <stdio.h>

int main() {
    int day = 3;

    switch (day) {
        case 1:
            printf("월요일입니다.\n");
            break;
        case 2:
            printf("화요일입니다.\n");
            break;
        case 3:
            printf("수요일입니다.\n");
            break;
        case 4:
            printf("목요일입니다.\n");
            break;
        case 5:
            printf("금요일입니다.\n");
            break;
        default:
            printf("주말입니다.\n");
            break;
    }

    return 0;
}
```

실행 결과:

```c
수요일입니다.
```


---

## 오늘 정리
- switch문은 조건이 많을 때 if-else보다 가독성이 좋음
- case는 각각의 경우를 나타내며, 끝에는 break;로 종료해야 함
- default는 “아무 case에도 해당하지 않을 때” 실행됨
- 단, switch문은 **동등 비교(==)**에만 사용할 수 있음. 크다/작다 비교는 불가능

---

다음은 이제 반복문으로 넘어가겠습니다.
**“코드를 여러 번 실행하는 법”**을 배우는 거죠.
`while`, `for`, `break/continue` 같은 친구들이 기다리고 있습니다.

