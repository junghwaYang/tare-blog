---
title: "SQL인젝션 공격"
description: "> db로 전송되는 sql쿼리문을 조작하여, 데이터를 변조하거나 허가되지 않은 정보에 접근하는 것 > 예전부터 최근까지 꾸준하게 사용되는 공격이다 - 2011년 소니 해킹 - 2015년 뽐뿌 해킹 - 2015년 어나니머스 WTO해킹 1. where !image(https://blog.kakaocdn.net/dna/sKf99/btq9juNtNXu/AAAAAAAAAAAAAAAAAAAAAKCz4cEFnNa59IrrAku9lbcfGH984lLfeByRkJhpPS-/img.png?credential=yqXZFxpELC7KV"
pubDate: 2021-07-13T06:11:17.000Z
updatedDate: 2021-07-22T09:58:54.000Z
tags: []
category: "web-hacking"
slug: "sqlinjeksyeon-gonggyeok"
draft: false
originalUrl: "https://siltare.tistory.com/12"
ogImage: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FsKf99%2Fbtq9juNtNXu%2FAAAAAAAAAAAAAAAAAAAAAKCz4cEFnNa59IrrAku9lbcfGH_984lLfeByRkJhpPS-%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1780239599%26allow_ip%3D%26allow_referer%3D%26signature%3Dx4wgiHICyNTxQPnbYeY65ARnN58%253D"
---

> db로 전송되는 sql쿼리문을 조작하여, 데이터를 변조하거나 허가되지 않은 정보에 접근하는 것

> 예전부터 최근까지 꾸준하게 사용되는 공격이다

- 2011년 소니 해킹

- 2015년 뽐뿌 해킹

- 2015년 어나니머스 WTO해킹

## 1. where

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
where공격 방법

아이디가 1인 사용자정보를 요청해본다는 가정을 해보자

사용자 정보를 요청하면 웹앱은 내부에있는 DB에 sql쿼리문을 전송하게 된다.

**SELECT name,email FROM users WHERE** ID='1'

이 쿼리문의 전체적인 뜻은 id가 '1'인 users라는 사용자테이블에서 name과 email을 가지고와달라는 뜻 입니다.

이 쿼리가 실행이 되면 id=1인 사용자 정보가 웹앱을 통해서 클라이언트까지 전달 된다.

이때 해커는 1뒤에 sql쿼리문을 조작하기 위해서 WHERE ID='**1' or '1'='1'** 이라는 쿼리문을 입력하게 된다.

이 값이 쿼리문에 들어가게 되면 '**1'='1'은 항상 참이기 때문에 id=1이 아닌 다른 id의 값을 요청해도 해당 데이터를 반환하게 됩니다.**

> [https://github.com/SecuAcademy/webhacking/blob/master/SQL%EC%9D%B8%EC%A0%9D%EC%85%98%EC%8B%A4%EC%8A%B5.txt](https://github.com/SecuAcademy/webhacking/blob/master/SQL%EC%9D%B8%EC%A0%9D%EC%85%98%EC%8B%A4%EC%8A%B5.txt)

SecuAcademy/webhacking

'화이트해커가 되기 위한 8가지 웹 해킹 기술' 강의자료. Contribute to SecuAcademy/webhacking development by creating an account on GitHub.

github.com

## 2. UNION

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
union공격

앞전의 방식과 다르게 이번에 해커는 id뒤에 or이 아닌 union라는 키워드를 이용하여

해당 아이디의 name과 pw를 요청하는 셀렉트구문을 삽입 합니다.

그렇게 되면 **union을 기준으로 두개의 셀렉트 구문이 위치하게 됩니다.**

**유니온은 합집합**으로 **두개의 셀렉트구문의 결과를 모두 포함시키는 키워드입니다**

원래 실행되어야하는 사용자정보 이외에도 뒤의 셀럭트정보를 같이 포함하게 되는데

이 뒤에는 **where조건문이 없기때문에 모든 사용자의 정보를 리턴합니다**

그리고 **#**이라는 부분은 **sql쿼리문에서 주석**이라는 표시 입니다.

혹시 뒤에있을지 모르는 sql쿼리문을 생략시키고 항상 해커가 원하는 결과를 얻을수있도록 사용합니다.

---

## 1. 난이도 하(where구문 우회)

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
실습화면

sql인젝션을 시도하기전에 해당 입력 부분에 **'(작은따옴표)**를 넣어봅니다.

이는 **스트링으로 받는 부분은 ' '로 둘러쌓여있기 때문에 '를 넣어줌으로써 에러가 발생하는지 안하는지를 확인 할 수 있습니다.**

즉 **dbms의 에러를 받을수 있는지 없는지를 확인** 하는것이다.

작은 따옴표를 입력 할 경우 쿼리문을 사용한다면 sql쿼리문에 **에러가 발생했다고 에러문구가 발생하게 됩니다**.

해당 입력부분에 쿼리문 오류가 발생했다는 것은 sql인젝션 공격이 먹힐 가능성이 높다고 보면 됩니다.

해당 실습사이트의 소스코드를 열어봅시다.

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
난이도 쉬움 페이지 소스코드

해당 코드 중 $query 변수를 살펴보면 사용자에게 id값을 입력 받게 되어있습니다.

그렇다면 사용자 입력값에 작은 따옴표를 넣는다면 해당 쿼리문은

**SELECT first_name, last_name FROM users WHERE user_id=' ' ';";**

이렇게 작은 따옴표가 3개가 되기 때문에 쿼리문 자체에 오류를 발생 시킵니다.

그렇다면 해당 입력값이 user_id='**1****' or '1'='1**';가 된다면 어떻게 될까요?

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
where공격시도 결과

이렇게 or 을 통해서 **'1'='1'은 항상 참 값이기 때문에 id가 1을 포함한 모든 정보가 리턴된것을 확인 할 수 있습니다.**

ps. '1'='1'(스트링)의 형태가 아니더라도, ' '가 필요없는 인터져형태에서도 참값이라면 정보 리턴이 가능하다

---

## 2. 난이도 하(유니온공격)

#### 1. union

유니온 키워드를 사용하려면 ** UNION**은 2개 이상의 쿼리를 한번에 요청하여 그 결과를 하나의 테이블에 합쳐서 출력해주는 연산자로, 공격자는 이를 악용하여 원래의 요청에 하나의 쿼리를 추가로 삽입해 원하는 정보를 얻을 수 있다.

또한 UNION을 이용한 SQL 인젝션을 시도하기 위해서는 **두 쿼리의 칼럼 개수와 데이터 형식이 같아야 하고 칼럼명, 테이블명 등을 알아야 하기 때문에**, 먼저 공격 대상의 데이터베이스 정보를 충분히 수집해야 한다.

**Input**

1' union select 1#

**Result**

칼럼수가 맞지 않습니다

> 쿼리문이 조회하는 셀렉트문의 칼럼 갯수 != 유니온 뒤의 셀렉트문의 칼럼 갯수

**INPUT**

1' union select 1,1#

**RESULT**

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
1' union select 1,1#

**INPUT**

1' union select 1,1,1#

**RESULT**

error

여기서는 1,1 일때만 반응하기 때문에 칼럼의 개수는 2개라는 것을 알 수있다.

#### 2. order by

또한, order by라는 구문을 통해서도 알아볼수있는데 **어떤 칼럼을 기준으로 정렬할때 사용하는 키워드** 이다.

**칼럼의 갯수보다 큰 값을 입력하면 정렬을 할 수 없기 때문에 에러를 발생 시킨다.**

**1' order by 1#** 을 입력하면 결과가 **출력** 됩니다.

**1' order by 2#** 또한 결과가 **출력** 됩니다.

**1' order by 3#** 은 **에러**가 뜹니다.

이러한 이유는 **칼럼의 수 보다 크기때문에 에러를 발생시키는 거라고 볼 수 있다.**

이는 즉 **칼럼의 수 라는것입니다.

그래서 해당 칼럼의 수는 **2** 임을 알 수 있습니다.

#### 3. union 과 order by의 차이점

유니온으로 갯수를 찾을때에는 정확한 갯수를 찾을때까지 일일히 다 입력 해봐야하지만

order by를 이용하면 입력한 값보다 큰지 작은지를 알 수 있기 때문에 더 빨리 컬럼의 갯수를 알아낼 수 있다.

#### 4. 데이터베이스 명 조회

| 데이터 베이스명 조회 구문 | 1' union select schema_name,1 from information_schema.schemata # |
| --- | --- |

information_schema 라는 데이터베이스에 schemata 라는 테이블에서 정보를 가져온다는 구문 입니다.

mysql에서는 information_schema라는 데이터 베이스에서 데이터베이스 정보,테이블,칼럼 정보 등을 관리하고 있다.

여기서 schema_name이라는걸 가져오면 데이터베이스 명을 조회 할 수 있습니다.

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
1' union select schema_name,1 from information_schema.schemata # 입력 시 나오는 결과 값

해당 결과값에서 관심을 가져야 할 데이터베이스 명은 dvwa 입니다.

이제는 해당 데이터베이스의 테이블 명을 조회 해볼겁니다.

| dvwa 데이터베이스의 테이블명 조회 | 1' union select table_schema, table_name from information_schema.tables where table_schema = 'dvwa' # |
| --- | --- |

table_schema = 'dvwa' => dvwa라는 데이터베이스 명을 가진 데이터베이스에서 가지고 있는

table_name을 알려달라 tables => table은 한개가 아닌 여러개이기 때문에.

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
상위 구문 결과값에서 users라는 테이블명의 칼럼수를 알아볼 것이다.

| users 테이블 칼럼 조회 | 1' union select table_name, column_name from information_schema.columns where table_schema = 'dvwa' and table_name = 'users'# |
| --- | --- |

dvwa(데이터베이스)에 있는 users(테이블)라는 테이블에 columns(칼럼)들의 column_name(칼럼이름)을 알려달라.

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
                             이 중에서 user와 password를 가져와봅니다

| user와 password 데이터 추출하기 | 1' union select user,password from users # |
| --- | --- |

* sql쿼리문을 따로 공부 한다면 자유자제로 내가 원하는 정보를 가져올수있다

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
user와 password 결과값

여기서 passwd는 평문이 아닌 해시 값의 형태로 저장되어있습니다.

웹앱은 보안을 위해서라도 이렇게 패스워드를 쉽게 알지못하는 값으로 저장해두어야한다.

암호화된 해시값으로 저장되어있으면 해커가 암호를 쉽게 복원하지 못하기 때문이다.

하지만 dvwa에서는 보안에 취약한 md5라는 해시값을 사용하고있기때문에 쉽게 복원이 가능하다.

[https://md5.web-max.ca/](https://md5.web-max.ca/)

MD5 hash decrypter / decoder: Reverse lookup MD5 hashes online with this tool

Tools to decode / decrypt / reverse lookup MD5 hashes This tool searches multiple MD5 rainbow tables for matches to a large number of MD5 hashes. MD5 is a hashing algorithm and therefore is technically not encryption, but hashes can be resolved and reverse

md5.web-max.ca

해당 사이트를 이용하면 위에 나와있는 md5 암호를 복호화(디코딩)를 할 수 있다.

---

## 3. 난이도 하(블라인드 인젝션)

#### 1. 직접 시도해보기

(끔찍하군)

우선 user ID input 부분에 1부터 차례대로 넣어보자

**1~5까지는 해당 user id가 존재한다고 뜨지만 6부터는 존재하지않는다고 뜬다.**

그리고 작은따옴표를 넣어서 확인해보자.

**작은따옴표를 넣으니 존재하지 않는다고 뜬다.**

해당 결과를 보면 지금 **input의 결과는 user id가 존재하는지, 존재하지않는지 에 대한 여부만 출력 되고있다.**

확실한 테스트를 위해서 **1' and 1=1 #** 인 참값을 입력해보자.

위 처럼 입력시 **존재한다고 뜬다.**

해당 쿼리문을 예상해보면 **SELECT user from where id='1' and 1=1 #** 이라는 것인데,

반대로 거짓인 값을 입력해보면 **1' and 1=2 #** 해당 user id가 **존재하지 않는다고 뜬다..**

**해당 구문이 참 일경우 아이디가 존재한다고 뜨며, 거짓일 경우에는 아이디가 존재하지 않는다고 뜬다**

여기서 어떤 **from 뒤에 and와 같은 연산문이 실행이 된다는것은 sql쿼리문이 뒤에 있다는것을 알려주는 중요한 힌트가 된다.**

위 처럼 **참과 거짓만 뱉을 경우 sql인젝션 처럼 결과를 직접적으로 얻어낼 수 없지만 id가 admin이라는 사용자가 존재하느냐 처럼 어떠한 명제를 제시하고 뒤에 and를 붙혀서 1=1,1=2라는 다르게 조건을 줌으로써 그 명제가 참인지 거짓인지는 알 수 있다.**

해당 방법은 시간은 오래걸리겠지만 참과 거짓결과문을 통해 원하는 정보를 얻어낼수있다.

이것이 블라인드 인젝션이다..(이럴때에는 시간이 너무 오래걸리기때문에 프로그램을 사용합니다)

또한 dvwa처럼 다른결과를 뱉어주는 페이지가 있는 반면, **응답메세지가 동일한 경우도 있습니다.**

이러한 경우는 **응답시간에 차이를 주는지를 확인해 봐야 합니다.**

예를 들어 참일경우에는 **sleep**이나 **watiFor**키워드를 이용하여 **응답을 몇초 늦게 오게끔하는 경우** 입니다.

응답시간 확인은 개발자도구를 켠 후, natwork탭을 띄어본다.

user ID에 **1' and sleep(5) #** 을 입력 후 natwork탭을 보면,

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
참(sleep(5))응답속도

이렇게 응답속도로 참인지 거짓인지 확인 할 수 있다.

거짓일 경우도 해보자 **6' and sleep(5) #** 을 입력하면,

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
거짓응답속도

내가 입력했던 5초가 아닌 다른 결과가 나왔다.

해당 블라인드 인젝션은 일일히 손수 작업을 한다면 많은 시간이 걸리기때문에 **SQLMAP** 이라는 프로그램을 통해서,

블라인드 인젝션을 시도해 볼것이다.

#### 2. 프로그램 사용하기(SQLMAP)

가장 대표적인 sqlmap을 이용해 블라인드 인젝션을 시도 해볼것이다

칼리리눅스 어플리케이션을 들어가면 sqlmap이 있는데 해당 프로그램은 파이썬을 이용해 만들어진 프로그램이다.

처음 실행을 하면 다양한 sqlmap의 옵션을 볼 수 있다.

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
sqlmap 실행시

우선 우리가 주목해야할 필수옵션은 **-u URL,--url,-URL** 명령어이다.

공격할 url주소를 입력하면 sqlmap은 그 **url 대상으로 자동으로 공격을 시도**한다.

dvwa처럼 로그인이 된 상태에서 실행 할 경우 쿠키값까지 함께 입력을 해주어야한다.

우선 sqlmap -u 를 적고, dvwa의 정상적인 주소를 주어야 한다.

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
정상반응하는 페이지와 cookie값 입력

해당 쿠키값을 알아내는 방법은 해당 페이지 **개발자도구>console에서 document.cookie를 입력하면 확인할 수 있다.**

--cookie=뒤에 해당 로그인된 쿠키값을 넣어주고 엔터를 칩니다.

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
url과 쿠키를 넣고 실행했을 경우

해당 이미지는 sqlmap이 **and boolean-based blind를 시도할수있음**을 알아낸것이다.

and boolean-based blind는 위에서 우리가 해봤던 and 1=1,and 1=2 와 같은 공격기법이다.

그리고 백엔드에 사용되는 dbms가 'MySQL'이라는 것도 알아냈다.

맨 하단에 질문을 보면 mysql이 아닌 또다른 dbms를 스킵할꺼냐 라는 내용인데 디폴트가 Y로 설정되어있다.

다른 dbms는 상관없기때문에 스킵해주자.

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
공격실행모습

타임 베이스 블라인드 공격을 시도하는모습과 union을 통해서 시도하는 모습을 볼 수 있다.

최종적으로** id 파라미터가 취약하다는 점**을 알아냈고, 다른 파라미터를 더 테스트 해볼꺼냐 라는 질문이 나옵니다.

그때에는 n이 디폴트값이니 엔터를 눌러 테스트하지않을거라고 응답 해줍니다.

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
결과

**총 224번의 요청을 시도 했으며, boolean-based blind와 time-based blind시도가 가능함을 알아냈습니다.**

또한 하단에 웹사이트가 개발된 언어, 웹서버의 종류와 mysql버전까지 알아냈습니다.

그리고 다음에 시도할것을 대비하여 이를 저장해둔 모습입니다.

이제 사용되는 db의 이름을 알아낼것입니다.

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
--current -db

터미널에서 화살표 윗 버튼을 누르면 이전에 작성했던 명령어를 다시 불러올수 있다.

우리가 해킹을 시도할 url 뒤에 **--current -db**를 입력해보자.

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
--current -db 결과

해당 웹앱에서 사용되는 db는 **dvwa** 라는 것을 알아냈다.

이제 db명을 알았으니 table명을 알아보자

위 url이 입력된 코드 뒤에 **-D dvwa --table**을 입력해보자

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
-D dvwa --table

dvwa라는 db의 테이블 명을 알아냈다.

실제 해당 프로그램을 실행할때, 블라인드를 통해서 하나하나 알아내기때문에 해당 결과값들이 한개씩 출력될것이다.(신기하다)

해당 table에서 **users**라는 테이블 안에 정보를 조사해보자

그 뒤에는 **-D dvwa -T users --dump**를 입력해보자.

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
-D dvwa -T users --dump (결과1)

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
-D dvwa -T users --dump (결과2)

**정말 놀랍게도 users안에 많은 정보들이 출력 되었다.**

또한, 맨 하단에 해시값이 나왔는데 해당 해시값을 나중에 처리하기위해서 저장할꺼냐 물어봅니다. 우선 디폴트값 N을 클릭해주고

딕셔너리를 쓸껀지, 딕셔너리 공격 시 어떤 파일을 쓸껀지 물어본다 그럴때는 그냥 디폴트로 내장파일을 사용하기위해 엔터를 눌러준다.

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
마지막으로 해시값 디코딩 결과

이렇게 db안에 정보들을 가져와 보았다. 또한 passwd는 크랙까지 자동으로 해주고있다.

**웹사이트에서 단 하나의 파라미터가 sql 인젝션에 취약하다면 이런 프로그램도구를 이용하여 과거의 해킹사건들처럼**

**수십만,수백만의 개인정보가 유출될 수 있다. 따라서 철저한 sql 인젝션을 방어하는것이 중요합니다.**

## 4. 난이도 중

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
난이도 중 sql인젝션

sql인젝션 난이도 중 부분은 위에서 했던 input방식이 아닌** select 방식**으로 표현이 되어있다.

이는 사용자입력값 범위를 지정해놨다는것인데 이또한 버프를 통해서 sql인젝션을 시도해볼 수 있다.

우선 버프스위트 프록시에서 인터셉트 on을 해주고 dvwa에서 정상호출정보를 받아야한다.

셀렉트 박스에서 1을 선택 후 submit버튼을 클릭 할 경우 버프에 해당 정보가 뜨는데

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
정상호출 시 버프

정상 호출 시 이렇게 뜰것이다. 여기서 id값을 수정해볼것이다.

위에서 배운 **where문을 이용하여 sql인젝션 공격이 통하는지 확인을 해볼것이다.**

처음 집어넣었던** 조건이 참인 값을 스트링 형태로 넣어보자 ( 1 or '1'='1')** 수정 후 포워드.

그랬더니 오류가 발생하였다.

해당 코드를 열어보자.

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
난이도 중 소스코드

기존과는 다르게 **id입력값을 받는 곳이 스트링형태가 아닌 숫자를 받는 형태**이다.

그렇다면 이번에는 **조건이 참인 숫자형을 넣어보자 (1 or 1=1) **

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
숫자형태의 where문 입력 결과

이렇게 결과가 도출 되었다.

그렇다면 union도 먹히는지 한번 보자.

앞전에 우리가 이미 db명,table명을 다 도출했기 때문에 해당 부분을 이용하여 id와 password를 출력해보겠다.

: 셀렉트형의 경우에도 sql인젝션이 먹힌다면 위 난이도 하에서 진행했던 식으로 정보를 도출하면 된다.

**1 union select user,password from users #**

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
nuion 사용 결과

마찬가지로 union을 사용했을때도 해당 정보를 출력해낼수있다.

## 5. 난이도 상

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
난이도 상 sql인젝션

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
해당 링크 클릭시 새창 팝업으로 input형태가 열림

이쯤되면 뭘해야하는지 아마 눈치껏 알것이다... 1' or '1'='1'#을 해보자

결과가 나온다. 그렇다는건 union도 먹힌다는것이다.(이하생략)

해당 소스를 한번 보자.

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
난이도 상 소스코드

이전과는 다르게** id뒤에 limit 1이라는것이 생겼다.** 이 linit 1은 한자리수만 입력받게끔 되어있는데

사실상** sql인젝션에서 저 limit부분은 #이라는 것을 통해 주석처리를 해주기때문에 sql인젝션 방어기법으로는 적합하지않다.**

이러한 문항을 통해 사용자가 입력하는값을 차단하고 막으려고해도 그것은 불가능하다라는것을 알 수 있다.

서버쪽에서 대응을 해야한다는 것이다.

대응 방법은 아래쪽에서 다루겠다.

## 6. sql인젝션 대응

![image](/images/migrated-tistory/sqlinjeksyeon-gonggyeok/img.png)
impossible sql인젝션 소스코드

우선 해당코드에서 if문을 보면 isnumeric($id) **입력받는 값이 우선 숫자인지 명확하게 확인을 한다.**

만일 **입력값이 숫자가 아닌 문자열로 받아야한다면 불필요한 특수문자 필터를 걸어주어야하며,**

**받고자하는 문자열 형식을 정확하게 검사**를 해야한다는것이다.

또한, 이전 상,중,하 부분의 소스코드를 보면 쿼리문을 바로 호출하게끔 되어있는데(동적쿼리)

bindParam,execute 함수를 통해서 id를 입력받는 쿼리문을 바로 호출하는것이 아닌 여러번 호출하여 실행된다.(파라미터쿼리)

파라미터쿼리에서는** prepare() 함수에 미리 쿼리문의 형태를 작성**을 해두게 됩니다.

그리고** id부분만 bindparam을 통해서 지정**해줍니다.

이렇게 되면 **db에서는 어떤게 코드이고 어떤게 데이터인지를 알 수가 있고,**

우리가 **입력하는 값을 온전이 문자열로만 처리**하게 된다.

이말은 즉, **사용자가 입력하는 값이 쿼리문 중간에 들어가서 해당 쿼리문 전체를 조작해야만 공격에 성공하는데 입력값이 온전히 문자열로만 처리가 된다면 쿼리문을 조작 할 수 없어 sql인젝션 공격을 방어**할 수 있다.
