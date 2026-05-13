---
title: "브루트포스 공격 및 대응"
description: "사용자 패스워드를 알아내기위한 공격 무식한 반복 대입 방법 - 알파벳 순 - 딕셔너리 공격(사람들이 자주 쓰는 패스워드로 공격) > ex) abcdef,123456,qwerty --- 자동 브루트포스 공격 - dvwa 난이도 쉬움 버프 스위트를 이용하여 공격해보자 시작 전 Intercept is off 로 해놓은 상태로 DVWA로그인창에 admin / aaaa를 입력해보자 Proxy > HTTP history 중 가장 최근 요청을 확인 해보면 !image(https://blog.kakaocdn.net/dna/TT9"
pubDate: 2021-07-05T02:29:43.000Z
updatedDate: 2021-07-07T05:56:48.000Z
tags: []
category: "web-hacking"
slug: "beuruteuposeu-gonggyeok-mich-daeeung"
draft: false
originalUrl: "https://siltare.tistory.com/6"
ogImage: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FTT9SQ%2Fbtq8Tw5TmVI%2FAAAAAAAAAAAAAAAAAAAAAJFcccFi8-k1-aW7G5pmd60h7770KrTsFqWQCJgZCWBV%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1780239599%26allow_ip%3D%26allow_referer%3D%26signature%3D1HEw0mnrObZ8mG7ShxnjBTjfNc8%253D"
---

## 사용자 패스워드를 알아내기위한 공격

무식한 반복 대입 방법

- 알파벳 순

- 딕셔너리 공격(사람들이 자주 쓰는 패스워드로 공격)

> ex) abcdef,123456,qwerty

---

### 자동 브루트포스 공격 - dvwa 난이도 쉬움

버프 스위트를 이용하여 공격해보자

시작 전 Intercept is off 로 해놓은 상태로 DVWA로그인창에 admin / aaaa를 입력해보자

Proxy > HTTP history 중 가장 최근 요청을 확인 해보면

![image](/images/migrated-tistory/beuruteuposeu-gonggyeok-mich-daeeung/img.png)
가장 최근 요청한 내용

username=admin&password=aaaa

내가 입력한 요청이라는 것을 확인 할 수 있다.

최근 요청란에 우측 클릭 후 **[send to intruder]**를 클릭하여 intruder 기능으로 보낸다

**intruder탭에 가보면 새로운 요청을 확인 할 수 있음**

**[intruder > positions]** 으로 이동하면 몇가지가 자동 선택되어있다

![image](/images/migrated-tistory/beuruteuposeu-gonggyeok-mich-daeeung/img.png)

Clear$를 눌러 해당 선택되어있는 부분을 지워준 후 password=$aaaa$ 해당 영역만 선택 후 Add$를 클릭해준다.

* $$로 선택된 영역을 다양한 문자열로 치환하여 테스트 하게 된다

그 다음 Payloads 탭에

**payload type을 Brute forcer 로 변경**한다

바로 아래 부분에 대입해볼 문자와 최소값, 최대값이 있다.

![image](/images/migrated-tistory/beuruteuposeu-gonggyeok-mich-daeeung/img.png)

**character set** => 대입해볼 문자,숫자,특수문자 등 삽입

**min length** => 최소 자릿수

**max length** => 최대 자릿수

**character set 부분에 영문과 숫자 뿐만이 아닌 !@#$ 이런 특수 기호를 넣을 시에 request count의 수가 증가 한다.**

![image](/images/migrated-tistory/beuruteuposeu-gonggyeok-mich-daeeung/img.png)

이 수가 증가하면 증가 할수록 암호를 풀기는 쉽겠지만 그만큼 대입 할 수가 많기 때문에

좋은 컴퓨터 사양을 요구한다. 이는 max length가 늘면 늘수록 대입 할 수가 더더욱 많아짐과 같다는 의미.

=> **비밀번호를 생성할때 영소,대문자와 숫자,특수문자를 이용하여, 최대한 길게 설정하라는 이유가 이러한 이유 때문이다. 간단하게 설정하면 설정 할수록 브루트포스 공격이 쉽게 먹히기 때문.**

설정 완료 후 우측 상단 **start attack** 을 클릭 시 공격이 시작된다.

![image](/images/migrated-tistory/beuruteuposeu-gonggyeok-mich-daeeung/img.png)
브루트 공격을 시도하는 모습

여기서 **status**은 해당 값을 요청시에 나오는 오류 또는 발생되는 코드이다.

**length**는 요청시 발생되는 코드의 텍스트 길이이다.

aaaa ~ naaa 까지는 200과 5293으로 동일한데

**중간에 다른 수가 껴있다면 그 수가 password일 확률이 높다.**

---

## 딕셔너리공격 - dvwa 난이도 쉬움

터미널에 gedit/usr/share/john/password.list

해당 리스트는 1996년도 **사용자들이 가장 많이 사용된 패스워드를 모아둔 리스트**이다

인터넷에 딕셔너리 리스트는 연도별로 알 수 있으며 실제 해커들은 몇십만개의 리스트들을 가지고있다.

해당 리스트를 버프에 불러온다.

![image](/images/migrated-tistory/beuruteuposeu-gonggyeok-mich-daeeung/img.png)

- payload type을** simple list**로 변경 후 하단에 load를 통해 password.list를 불러와준다

- #로 되어있는 부분은 주석처리이니 remove를 통해서 지워준다.

- **start attack**

어택을 시도해 보면 length가 다른 패스워드를 확인 할 수 있다.

![image](/images/migrated-tistory/beuruteuposeu-gonggyeok-mich-daeeung/img.png)

이렇게 length값이 다른것은 패스워드로 의심해볼만하다

그 후 실제 dvwa에 로그인해보면

![image](/images/migrated-tistory/beuruteuposeu-gonggyeok-mich-daeeung/img.png)

이렇게 로그인이 됐다는 표시가 뜬다.

---

## 브루트포스 공격 대응

**1. 고정 딜레이 주기**

dvwa 난이도 중간일 경우

로그인 시도시 약간의 딜레이가 발생한다.

소스코드를 확인해보니

![image](/images/migrated-tistory/beuruteuposeu-gonggyeok-mich-daeeung/img.png)

sleep(2);

암호가 아닐 시 2초의 딜레이를 준다 => 라는 코드

**하지만 이 방법은 해커가 이것을 이용하여 딜레이가 2초 발생하는 것은**

**패스워드가 아닌것을 간주하고 패스 하는 식으로 유추 할 수 있다.**

**2. 랜덤 딜레이 주기**

dvwa 난이도 상 일 경우

로그인 시도시 위와 같이 딜레이가 발생한다

하지만 코드를 확인해보니

![image](/images/migrated-tistory/beuruteuposeu-gonggyeok-mich-daeeung/img.png)

sleep(rand(0,3));

암호가 아닐 시 0~3초의 랜덤 딜레이를 준다

**위는 고정딜레이를 주었지만 해당 방식은 랜덤으로 딜레이를 주는것이기때문에**

**브루트포스 공격을 위한 프로그램을 제작하기가 까다로워진다.**

**3. 일정 횟수 틀린 패스워드 입력 시 계정 잠김**

dvwa 난이도 최상 일 경우

일정 횟수 로그인 실패했을 경우 계정잠금이 일어난다.

![image](/images/migrated-tistory/beuruteuposeu-gonggyeok-mich-daeeung/img.png)

**위 방식의 경우에는 브루트포스 공격이 일절 불가능 하다.**

단, 한가지의 좋지않은 경우가 있는데 해커가 사용자의 아이디만 알고있는 상태로 고의적인 로그인실패를 할 시

사용자가 계정을 사용하지 못하는 경우가 발생한다.

+ 또한** 캡챠**를 이용하여 사용자가 사람인지를 판별하기 위한 기능으로 프로그램인지를 구별 할 수 있다.
