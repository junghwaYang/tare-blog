---
title: "커멘드 인젝션 공격"
description: "> 웹을 통해 시스템명령어(커멘드)를 실행하는 공격 > 웹 내부에서 시스템 명령어를 실행하는 경우, > 입력값을 제대로 검사하지 않으면, 해커 마음대로 시스템 명령어를 실행 시킬 수 있다 --- !image(https://blog.kakaocdn.net/dna/croYw8/btq8ZY0ywDl/AAAAAAAAAAAAAAAAAAAAAL3C99d2J2MhhAWMHL5mQq0Z3wTMFlHlvF1V6cONzt1/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1"
pubDate: 2021-07-06T08:55:16.000Z
updatedDate: 2021-07-07T05:56:48.000Z
tags: []
category: "web-hacking"
slug: "keomendeu-injeksyeon-gonggyeok"
draft: false
originalUrl: "https://siltare.tistory.com/7"
ogImage: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FcroYw8%2Fbtq8ZY0ywDl%2FAAAAAAAAAAAAAAAAAAAAAL3C99d2J2MhhAWMHL5mQq0Z_3wTMFlHlvF1V6cONzt1%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1780239599%26allow_ip%3D%26allow_referer%3D%26signature%3D1CVApN8KPXgzzij8JKzIXFBvcaQ%253D"
---

> 웹을 통해 시스템명령어(커멘드)를 실행하는 공격

> 웹 내부에서 시스템 명령어를 실행하는 경우,

> 입력값을 제대로 검사하지 않으면, 해커 마음대로 시스템 명령어를 실행 시킬 수 있다

---

![image](/images/migrated-tistory/keomendeu-injeksyeon-gonggyeok/img.png)

**ex)** 웹사이트 진입 후 IP주소를 입력하면 ping 명령어를 실행한 후 그 결과를 알려주는 페이지

**ping명령어는 IP주소를 가진 시스템이 현재 동작하는지 확인 할 때 사용하는 명령어 이다.**

이때 해커는 **IP;cat/etc/passwd (리눅스의 사용자 목록)**를 입력했을때 **IP주소형식을 가진 값인지 확인 하지 않는다면** **ping IP 뒤에 해커가 입력한 문자열을 모두 붙혀서 실행하게됨**

세미콜론을 넣게되면 리눅스에서는 두개의 명령어를 모두 실행하게 된다

**그렇게되면 해커가 입력한 cat/etc/passwd의 내용이 보이게 된다.**

---

## dvwa를 이용한 커멘드 인젝션 공격

![image](/images/migrated-tistory/keomendeu-injeksyeon-gonggyeok/img.png)
실습용 ping명령어를 입력받는 input

#### 1. 난이도 쉬움

![image](/images/migrated-tistory/keomendeu-injeksyeon-gonggyeok/img.png)

난이도 쉬움의 코드 이다.

우리는 리눅스를 이용하니 리눅스 부분의 코드를 확인하자

**$cmd = shell_exec { 'ping -c 4' .$target};**

이라는 명령어를 확인할 수 있는데 **shell_exec는 명령어를 실행한다**는 의미의 함수이다.

이는 즉, 터미널창에 ping -c 4 ~~처럼 명령어를 입력하여 실행 할 수 있다는 의미이다.

해당 창에 리눅스 커멘드를 입력해보자

**; ls 입력 시**

![image](/images/migrated-tistory/keomendeu-injeksyeon-gonggyeok/img.png)

이렇게 전체 디렉토리를 보여주는 명령어를 실행 했음을 확인 할 수 있다.

**; id 입력 시**

![image](/images/migrated-tistory/keomendeu-injeksyeon-gonggyeok/img.png)

현재 권한은 daemon이라는 권한

이것은 웹 애플리케이션을

실행하고있는 권한이다.

이 권환으로는 관리자 권한으로만 실행될수있는 명령어는 사용할 수 없다.

간혹 어떤 시스템 운영자의 경우 웹 애플리케이션을 최고 관리자 권한인 **root권한**으로 실행하는 경우가 있는데,

이때 **커멘트 인젝션 공격이 가능하다면 root권한으로 모든 명령어를 실행 할 수 있어서 시스템을 장악 할 수 있음**.

이 시점에서 얻은 권한이 daemon과 같은 일반 사용자 권한이라면, **권한 상승 단계를 통해 root권한을 획득 하게 된다.**

#### 2. 난이도 중급

중급 난이도 에서는 **; id** 를 입력 시, **아무것도 나오지 않거나 이상한 값을 출력한다**

![image](/images/migrated-tistory/keomendeu-injeksyeon-gonggyeok/img.png)

왜냐하면 해당 소스 코드를 보면

**;세미콜론**과 윈도우에서 세미콜론과 동일한 명령어인 **&&**를 **지움 처리**를 하고 있기때문에

위에서 사용했던 ; id 또한 먹히지 않는 것이다.

**하지만 위 세미콜론 문자만 막아서는 대응이 어렵다.**

해당 ping 입력란에** | (파이프)** 나 **&(엔퍼센트)**를 입력하면 **위와 같은 daemon권한이 나옴을 확인 할 수 있다.**

- **|(파이프) 란?** : 앞 명령의 결과를 뒤 명령어 입력으로 넘겨줄때 사용하는 특수문자

- **&(엔퍼센트) 란?** : 백그라운드로 명령을 실행하는데에 사용하는 특수문자

#### 3. 난이도 상급

상급 답게 위에 사용되었던 모든 특수문자는 실행 되지 않는다.

**;(세미콜론) , |(파이프) , &(엔퍼센트) => 사용안됨**

![image](/images/migrated-tistory/keomendeu-injeksyeon-gonggyeok/img.png)

앞전의 예시들과는 다르게 필터링 되는 특수문자들이 많이 늘어났다.

하지만 여기서 한가지 **개발자의 실수**를 확인 할 수 있다.

바로 **'| ' => ' ',**** **이 부분이다.

**|(파이프) 뒤에 띄어쓰기가 되어있다.**

그렇다는건 |(파이프)를 쓰고 명령어를 입력할때, **띄어쓰기를 해주지않고**

**명령어를 입력한다면?**

**위와 같은 daemon권한이 나온다...**

#### 4.난이도 최상급 그리고 대응 방법

- 사용자의 입력값이 원래 의도와 맞는지 검사하는 것

- IP주소를 입력받는 값이라면 실제로 **IP주소인지 검증하는 과정이 있다면 아주 좋은 방법**이다.

해당 최상급 문제의 소스코드를 열어보자

![image](/images/migrated-tistory/keomendeu-injeksyeon-gonggyeok/img.png)

IP로 입력받은 값을 .(점)이라는 문자를 통해서 구분을 해준다.

![image](/images/migrated-tistory/keomendeu-injeksyeon-gonggyeok/img.png)
IP는 숫자 4개로 구성이 되기때문에 각각의 값이 숫자인지 필터링 하여, 맞는 입력값인지 검증하는 구문이다.

혹여, 어쩔수없이 특수문자가 들어가야하는 경우 **위 상급에서 사용되었던 여러가지 특수문자를 필터링**하는 것이 좋다.

특히 **시스템 명령을 내리는 exec이나 시스템과 같은 함수가 사용된다면 **

**반드시 사용자의 입력값을 철저하게 검사해야한다.**
