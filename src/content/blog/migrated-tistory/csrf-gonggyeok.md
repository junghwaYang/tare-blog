---
title: "CSRF 공격"
description: ": Cross Site Request Forgery - 사이트 간 요청 위조 - 어떤 사용자에게 피싱을 해서 링크를 누르게 하고, 링크를 클릭하면 사용자 모르게 사이트의 어떤 기능을 실행하는 것 - 주로 패스워드 변경을 사용하는데에 쓰인다. 피싱이라는것은? 사회공학기법(사기법) 중의 하나로 이메일이나 게시판 등을 이용해서 마치 은행이나 유명한 대기업의 직원인 척 하면서 사람들을 낚는 공격기법이다. > 2008년도에 옥션 해킹 사건에 사용된 공격 기법이다 -> 시간나면 찾아보도록!  !image(https://blo"
pubDate: 2021-07-06T12:01:05.000Z
updatedDate: 2021-07-12T05:35:50.000Z
tags: []
category: "web-hacking"
slug: "csrf-gonggyeok"
draft: false
originalUrl: "https://siltare.tistory.com/8"
ogImage: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FchtXXR%2Fbtq81fnt9g9%2FAAAAAAAAAAAAAAAAAAAAAPiS1WbQ78yUS0JL96ZcTpmwAz49cCmJNrCl3TZJQynv%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1780239599%26allow_ip%3D%26allow_referer%3D%26signature%3DZ6GU1EmN48QIKRnAQqcREV4o2o0%253D"
---

**: Cross Site Request Forgery**

- 사이트 간 요청 위조

- 어떤 사용자에게 피싱을 해서 링크를 누르게 하고, **링크를 클릭하면 사용자 모르게 사이트의 어떤 기능을 실행하는 것**

- 주로 패스워드 변경을 사용하는데에 쓰인다.

**피싱이라는것은?**

사회공학기법(사기법) 중의 하나로 이메일이나 게시판 등을 이용해서

마치 은행이나 유명한 대기업의 직원인 척 하면서 **사람들을 낚는 공격기법**이다.

> 2008년도에 옥션 해킹 사건에 사용된 공격 기법이다 -> 시간나면 찾아보도록! 

![image](/images/migrated-tistory/csrf-gonggyeok/img.png)

- 사용자가 사이트에 정상적으로 접속하여 로그인 합니다.

- 사용자가 사이트에 로그인 되어있는 동안 해커가 이메일을 보내서 어떤 링크를 클릭하도록 유도 합니다.

- 이때, 해커는 **은행 직원인척 "[은행에서 공지] 최근 보안 문제가 많이 발생하니 클릭해서 보안 강화 바랍니다" 라고 메일을 발송**합니다.

- 사용자가 해당 링크를 클릭한다면 **클릭한 시점에 이미 로그인 되어있던 사이트의 패스워드를 해커가 지정한 패스워드로 변경**

- 사용자가 모르는 사이에 해당 계정의 패스워드가 변경되어 **해커가 사용 할 수 있게 됩니다.**

**CSRF공격의 필수 조건**은 사용자가 피싱을 당하여 사이트를 클릭 한 시점에 **웹사이트에 사용자 로그인이 되어있어야 한다.**

요즘 웹 서핑을 생각한다면 탭을 여러개 열어놓고 사용을 하는데, 이때 **로그인되어있는 상태로 두고 탭을 새로 열어 이메일을 확인 할 경우 CSRF공격을 당할 수 있다.**

이처럼 **CSRF공격을 당하지 않으려면 이메일이나 게시판 등에서 모르는 링크를 누르거나 사이트를 방문하지 않도록 주의해야 한다. **

### CSRF 공격 실습

![image](/images/migrated-tistory/csrf-gonggyeok/img.png)
dvwa 실습 창(패스워드 변경)

**1. 난이도 쉬움**

우선 패스워드 변경 요청이 어떻게 전송되는지 확인을 위해서 **버프 스위트의 프록시 히스토리 기능을 사용합니다.**

패스워드를 **normal** 로 변경 해봅니다. 변경 후에는 **프록시 히스토리에 최근 요청을 보면**

![image](/images/migrated-tistory/csrf-gonggyeok/img.png)
password가 normal로 변경 됨

**위 처럼 normal 로 패스워드가 변경 된 것을 확인 할 수 있습니다.**

**만약에 웹사이트나 이메일에서 링크를 눌렀을때 이 요청이 전달된다면 패스워드가 전달 될 수 있다(단, 로그인 상태가 유지되어야한다)**

**이유는 로그인 되어있어야만 세션쿠키값이 요청에 자동으로 포함되기 때문이다.**

세션쿠키값이 요청에 **포함되어야 웹사이트가 이 사용자는 로그인이 되어있기때문에 믿고 요청을 실행하기 때문이다.**

로그인이 되어있지 않다면 적절한 세션 쿠키값이 없기 때문에 csrf공격에 실패하게 된다.

**실습을 위한 깃허브 주소**

[https://github.com/secuacademy/webhacking](https://github.com/secuacademy/webhacking)

SecuAcademy/webhacking

'화이트해커가 되기 위한 8가지 웹 해킹 기술' 강의자료. Contribute to SecuAcademy/webhacking development by creating an account on GitHub.

github.com

ㄴ** csrf.html**

**(깃허브파일에서 row를 누른 후 해당 url 복사 > 터미널에 wget 주소붙혀넣기 > cp csrf.html /opt/lampp/htdocs/ )**

에디터로 잠시 해당 파일을 본다면,

![image](/images/migrated-tistory/csrf-gonggyeok/img.png)
csrf.html 스크립트 부분

ajax를 기법을 이용하여, url과 파라미터를 똑같이 구성합니다.

단, 패스워드 파라미터 부분은 normal이 아닌 hacker로 설정 해 줍니다.

**CSRF공격이 성공한다면 패스워드는 hacker로 변경이 될 것입니다.**

![image](/images/migrated-tistory/csrf-gonggyeok/img.png)
사용자에게 보여지는 화면

하단에는 **Click 버튼을 눌렀을때 위 poc() 함수가 실행**이 되게끔 작성되어 있습니다.

다음으로는 피싱을 위한 이메일 계정을 생성 후 이메일을 보냅니다

간단히 제목과 내용을 적고 url(**http://127.0.0.1/csrf.html**)을 삽입 해 줍니다.

**여기서 127.0.0.1 을 해커가 운영하는 사이트라고 가정 하겠습니다.**

해당 이메일을 열어 클릭을 한 후

DVWA 로그아웃 후 normal이라는 패스워드를 입력 해봅니다. **로그인이 되지 않습니다.**

**그 후 hacker이라는 패스워드로 입력을 하니 로그인이 완료 되었습니다.**

**이는 CSRF공격에 성공 했음을 알립니다.**

기존에 히스토리에 있던 normal이라고 패스워드를 변경해준 소스와

메일로 받은 클릭 버튼을 눌렀을때 새로 받은 **히스토리를 비교**해보면 같지만 다른 점이 있습니다.

![image](/images/migrated-tistory/csrf-gonggyeok/img.png)
(왼)메일 버튼 클릭 후 / (오)패스워드 변경 후

패스워드 부분이 바뀌었지만 해당 쿠키세션의 값은 변경되지않았습니다. +Referer,Origin header도 변경됨=>현재 요청이 어디서 시작 되었는지를 알려주는 헤더 영역 부분

**위와 같이 세션쿠키의 값이 같으면 웹사이트는 정상적인 사용자라고 인지하기 때문에 CSRF공격이 가능합니다.**

Referer부분을 보면 오른쪽은 **정상적인 요청일때 사용자의 localhost 부분이 표시**되고, **CSRF공격이 실행되었을때는 해커의 127.0.0.1부분이 표시** 된다.

편의를 위해 이 강의에서 localhost는 dvwa사이트의 주소라고 보면 되고, 127.0.0.1은 해커 운영사이트로 구분합니다.

---

#### 2. 난이도 중급

위의 방식과 동일하게 이메일을 클릭하여, 해커의 html 파일을 열었다는 가정하에 최근 get 요청을 확인해보자.

![image](/images/migrated-tistory/csrf-gonggyeok/img.png)

**프록시>http히스토리>가장최근보낸요청 클릭>리스폰>랜더**

해당 루트는 get요청을 했을때의 결과를 랜더하여 보여주는 방식이다

난이도 중에서는 해당 방법이 먹히지 않는다.

해당 소스를 열어보자

![image](/images/migrated-tistory/csrf-gonggyeok/img.png)

**http_refere (래퍼러 헤더 검사)**

**어떤 요청이 전송될 때 이전에 어떤 경로부터 요청되었는지 알려주기 위해서 웹 브라우저가 자동으로 설정하는 헤더**

ex) 해커가 본인 사이트로 csrf를 하게된다면 127.0.0.1로 설정 된거처럼 해커사이트가 웹브라우저에 저장이 된다

따라서 개발자는 **래퍼러 주소가 서버 주소와 동일한지 비교함으로써 실제로 사용자가 정상적인 경로를 통해 요청한것인지 알수있다.**

이 값이 틀리다면 해당 ip를 차단시킴으로써 csrf공격에 어느정도 대응을 할 수 있다.

***그런데 referer를 검사한다고해서 완전하게 csrf공격을 막을 수 있는것은 아니다.***

만약 csrf공격이 해커 사이트가 아니라 웹서버 자체에서 실행이 된다면 래퍼러 해더에 서버의 주소가 설정 되기 때문에

서버주소가 래퍼러에 있는지 검사하는 이 루틴은 **우회가 가능할 수 있다.**

**공격시작**

공격파일이름에 서버 주소를 넣어보자

![image](/images/migrated-tistory/csrf-gonggyeok/img.png)

터미널에서 csrf.html을 하나 복사 해준 후 복사한 파일 폴더명을 **csrf_localhost.html**로 바꾸어준다.

![image](/images/migrated-tistory/csrf-gonggyeok/img.png)

이름을 변경한 localhost 주소로 들어가서 이전과 동일하게 click버튼을 눌러준다.

![image](/images/migrated-tistory/csrf-gonggyeok/img.png)

이번 요청을 확인해보면 referer의 주소가 csrf_localhost.html 로  변경이 되면서

![image](/images/migrated-tistory/csrf-gonggyeok/img.png)

패스워드가 변경이 되었다고 한다.

따라서** 래퍼러 헤더를 비교할경우 앞에서부터 정확하게 래퍼러에 있는 주소부분이 서버주소가 맞는지 체크해줘야한다.**

위와 같이 래퍼러 헤더에 서버주소가 포함이 되어있어야하는 식으로 검사할경우에는 쉽게 우회가 가능하니 확실하게 체크하자.

---

#### 4. 난이도 어려움

기존의 방식으로는 패스워드가 변경되지않음을 확인 후 패스워드 변경 후 전달되는 http 히스토리를 확인해보면

user_token이라는 랜덤value값이 생성되는것을 확인 할 수 있다.

![image](/images/migrated-tistory/csrf-gonggyeok/img.png)

이는 랜덤으로 생성되는 토큰값을 통해서 csrf공격을 방지해준다. 보내는 토큰값과 랜덤으로 생성된 토큰의 값이 일치해야만

패스워드가 변경이 된다.

![image](/images/migrated-tistory/csrf-gonggyeok/img.png)

임의적으로 토큰값을 변경하고, 패스워드를 변경하려고 할때 랜덤으로 생성되는 토큰의 값이 일치하지않아 패스워드가 변경되지않는다.

하지말 이러한경우에도 **ajax를 이용하여, 토큰을 자동으로 가져올수있다.**

[https://github.com/SecuAcademy/webhacking/blob/master/csrfhigh.js](https://github.com/SecuAcademy/webhacking/blob/master/csrfhigh.js)

SecuAcademy/webhacking

'화이트해커가 되기 위한 8가지 웹 해킹 기술' 강의자료. Contribute to SecuAcademy/webhacking development by creating an account on GitHub.

github.com

해당 파일을 wget을 통해서 다운로드를 해준 뒤 웹에서 사용이 가능하도록

cp 파일을 만들어 준다.

**cp csrfhigh.js /opt/lampp/htdocs/**

![image](/images/migrated-tistory/csrf-gonggyeok/img.png)

우선 req1() 함수는 user_token을 알아내기위해서 첫번째 요청을 보냄

우리가 dvwa에서 csrf페이지를 누를 때 발생하는 요청.

![image](/images/migrated-tistory/csrf-gonggyeok/img.png)

req2()함수는 요청한 req1값을  분석해서 **user_token값을 뽑아내는 것**

그리고 알아낸 user_token값을 보내는 함수이다.

이제 XSS를 이용할건데

dvwa에서 삽입이 가능한 페이지로 이동합니다 => XSS(stored)

dvwa에서 high는 xss에서 스크립트 문장을 넣을 수 없게 되어있기 때문에

잠시 low로 낮춘 후 **** 를 입력 해 주고,

난이도를 high로 변경한다. low일때 기재해놓은 스크립트 방명록에 가보니 **스크립트가 실행되어 해당 토큰 값을 보여주고있다.**

이제 로그아웃하고 패스워드를 hacker로 입력하면 패스워드는 바뀌어 있을 것이다.

---

## csrf 공격 대응 방법

![image](/images/migrated-tistory/csrf-gonggyeok/img.png)

위 처럼 패스워드같은 중요한 정보를 변경할때에는 현재 패스워드를 한번 더 물어보는 방식이 좋다.

또한, 앞전에서 얘기했던 **캡챠**의 기능을 쓰는것도 csrf의 방어책이라고 할 수 있다.

여기서 주의해야 할 점은 **xss공격에 취약한 부분이 있다면 해당 공격 대응 방법이 무용지물이 될 수 있으니,**

**xss공격에 대해서도 철저하게 방어해야합니다.**

csrf토큰 구연은 개발언어나 플러그인, 설정의 형태로 지원하는 경우가 있으니 참고하길 바람.
