---
title: "파일 인클루젼 공격"
description: "> 지정한 파일을 php include()로 소스코드에 삽입 - 로컬파일인클루젼(LFI) - 이미 있는 시스템이 존재하는 파일을 인클루드 - 리모트파일인클루젼(RFI) - 외부에 있는 파일을 원격으로 인클루드 !image(https://blog.kakaocdn.net/dna/clkkTx/btq9lTTgQrx/AAAAAAAAAAAAAAAAAAAAALw1FxORFphVLCKT5maRIvW7Snk5G3LYnPOT8YQ7uW/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&ex"
pubDate: 2021-07-12T08:54:14.000Z
tags: []
category: "web-hacking"
slug: "pail-inkeulrujyeon-gonggyeok"
draft: false
originalUrl: "https://siltare.tistory.com/9"
ogImage: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FrrEHf%2Fbtq9ngtm9no%2FAAAAAAAAAAAAAAAAAAAAAIEt2XKWZdHEJRSawNdn2xZddHuR9NZuHBWf_v_y922W%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1780239599%26allow_ip%3D%26allow_referer%3D%26signature%3DOmHYvjZ7pc3J9tTtde73hcQdNng%253D"
---

> 지정한 파일을 php include()로 소스코드에 삽입

- 로컬파일인클루젼(LFI) - 이미 있는 시스템이 존재하는 파일을 인클루드

- 리모트파일인클루젼(RFI) - 외부에 있는 파일을 원격으로 인클루드

![image](/images/migrated-tistory/pail-inkeulrujyeon-gonggyeok/img.png)
인클루젼 공격이 실행되는 과정

## 실습 방법

#### 1. 난이도 하

**gedit /opt/lampp/htdocs/bad.php**

터미널에서 g에딧을 통해 bad.php파일을 열고 해당 파일안에

![image](/images/migrated-tistory/pail-inkeulrujyeon-gonggyeok/img.png)

해당 구문은 텍스트가 출력이 되는지 확인을 위한 문장이다

![image](/images/migrated-tistory/pail-inkeulrujyeon-gonggyeok/img.png)

파일인클루젼 연습 페이지 상단에 있는 page= 파라미터의 값을 변경 해준다.

그럼 해당 페이지에 bad.php 내용이 호출된다.

여기서 bad.php의 구문을 바꿔보자.

![image](/images/migrated-tistory/pail-inkeulrujyeon-gonggyeok/img.png)

이렇게 system('cat /etc/passwd'); 입력 시 해당하는 경로로 이동하게 되며,

안에 기재된 중요한 내용을 다운로드 또는 확인 할 수 있다.

다른 방법으로는 직접적으로 파라미터 값에

?page=/etc/passwd/ 라고 입력을 해도 안에 정보들이 출력된다.

또한 최상위 폴더를 가기 위해 ?page=../../../../../../ 를 이용하여 원하는 파일을 확인 할 수 있다.

---

#### 2. 난이도 중

위 방식과 동일하게 파라미터값을 변경을 해주자.

하지만 아무런 변화가 일어나지않는다. 코드를 한번 열어보자.

![image](/images/migrated-tistory/pail-inkeulrujyeon-gonggyeok/img.png)

커멘드 인젝션과 동일하게 필터링이 걸려있다.

지금 http:// 만 필터링 해주고 있기때문에 저 사이에 http://를 한번 더 넣어준다.

**?page=hthttp://tp://127.0.0.1/bad.php**

추후의 결과값만 보고나면 해당 http://은 필터링에 의해 지워지니, 결국 http:// 만 남는다.

---

#### 3. 난이도 상

위와 같은 방식에서는 에러가 표시 됨을 확인 할 수 있다.

![image](/images/migrated-tistory/pail-inkeulrujyeon-gonggyeok/img.png)
high난이도의 소스코드

해당 코드를 봤을때 **file***이라는 부분이 있는데, 이는 무엇을 뜻하냐면 file1,file2,file3...을 뜻한다.

전체적인 루틴을 보았을때, **file로 시작하지않거나 include.php 파일이 아닌 것을 필터링 하고 있다.**

이것을 우회하는 방법을 알아보자

해당 ?page= 파라미터 값에 우선 file이 필수적으로 있어야하니

file를 적어주고 상위폴더를 가르키는 **../**를 최소 7번 정도 입력 해준 뒤 /etc/passwd를 입력해주니 결과값이 출력 되었다.

이렇게 lfi공격이 성공했다.

다행히 rfi는 file로 시작하기때문에 ../ 를 사용 할 수 없어서 방어가 가능하다.

다만, 다음 강의에 **파일업로드공격과 조합하면 원격에서 파일업로드를 한 후 lfi로 로컬에서 업로드한 파일을 접근하는 방법이 가능하다.**

---

### 대응방법

![image](/images/migrated-tistory/pail-inkeulrujyeon-gonggyeok/img.png)
최적의 대응 소스 코드

위의 소스코드와는 다르게 file이 include.php가 맞는지 file1.php,file2.php,file3.php 이 맞는지 확인 한 후,

아닌 모든것에 대해 에러코드를 띄우라고 되어있다.

이렇게 꼭 필요한 파일만 인클루드 될 수 있게끔 작성이 되어있습니다.

**일단 제일 좋은 방법은 인클루드 되는 파일이 사용자 입력을 통해서 전달되지않도록 하는것이지만,**

**어쩔수없는경우에는 꼭 필요한 파일만 인클루드 될 수 있게끔 설정하는것이 가장 좋은 방법이다.**
