---
title: "파일 업로드 공격"
description: "파일이 업로드 되는 페이지(게시판,sns 등)에 악성 파일(웹쉘)을 업로드 하는 방법 웹쉘이란? 커멘트 인젝션 공격에서 본것과 유사하게 웹을 통해 시스템 명령어 입력이 가능한 파일 말한다. 언어로는 php,jsp,asp 등 언어에 따라 다르니 한번 찾아보길 !image(https://blog.kakaocdn.net/dna/OwbVD/btq9lS1qcNp/AAAAAAAAAAAAAAAAAAAAAFoMM5Zyp5MVXmosdRJqo4nF4aZN074t23oLbD5VmWF/img.png?credential=yqXZFxpE"
pubDate: 2021-07-12T09:24:29.000Z
updatedDate: 2021-07-19T13:04:03.000Z
tags: []
category: "web-hacking"
slug: "pail-eoprodeu-gonggyeok"
draft: false
originalUrl: "https://siltare.tistory.com/10"
ogImage: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FOwbVD%2Fbtq9lS1qcNp%2FAAAAAAAAAAAAAAAAAAAAAFoMM5Zyp5MVXmosdRJqo4nF_4aZN074t23oLbD5VmWF%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1780239599%26allow_ip%3D%26allow_referer%3D%26signature%3D4eGkWhLdE3r7oKBNWq%252FErIjH8kY%253D"
---

**파일이 업로드 되는 페이지(게시판,sns 등)에 악성 파일(웹쉘)을 업로드 하는 방법**

**웹쉘이란?** 커멘트 인젝션 공격에서 본것과 유사하게 웹을 통해 시스템 명령어 입력이 가능한 파일 말한다.

언어로는 php,jsp,asp 등 언어에 따라 다르니 한번 찾아보길

![image](/images/migrated-tistory/pail-eoprodeu-gonggyeok/img.png)
파일 업로드 공격을 진행하는 과정

시스템 내에서 파일을 업로드 할 때, 이미지 파일인지 동영상 파일인지 정확하게 필터링을 하지 않는다면,

웹셀 파일을 업로드 함으로써 서버에 웹셀을 저장하게 됩니다.

그럼 업로드 된 웹셀 파일로 접근하여, 시스템 명령어를 실행 할 수 있다.

---

#### 1. 난이도 하

[https://github.com/SecuAcademy/webhacking/blob/master/webshell.php](https://github.com/SecuAcademy/webhacking/blob/master/webshell.php)

SecuAcademy/webhacking

'화이트해커가 되기 위한 8가지 웹 해킹 기술' 강의자료. Contribute to SecuAcademy/webhacking development by creating an account on GitHub.

github.com

해당 깃허브에서 파일을 wget 을 통해 다운로드를 받는다.

![image](/images/migrated-tistory/pail-eoprodeu-gonggyeok/img.png)
webshell.php

[webshell.php]

해당 내용을 보면

초반에는 커멘드를 입력하라는 내용과

사용자입력을 받기위한 폼을 출력함

뒷 부분은 cmd의 파라미터값이 설정되어있다면

해당값을 시스템함수로 실행하라는 부분이다.

![image](/images/migrated-tistory/pail-eoprodeu-gonggyeok/img.png)
실습 문제

해당 브라우저버튼을 눌러 webshell.php를 업로드 해준다.

그럼 해당 경로로 뜰것이다.

![image](/images/migrated-tistory/pail-eoprodeu-gonggyeok/img.png)
webshell.php가 업로드 되었다고 한다.

위 경로에서는 상위 디렉토리가 두번 있으니, 해당 url에서

![image](/images/migrated-tistory/pail-eoprodeu-gonggyeok/img.png)

뒤 부분을 지우고 /hackable/~ 을 입력 해준다.

![image](/images/migrated-tistory/pail-eoprodeu-gonggyeok/img.png)
해당 php파일로 이동했을 경우 출력되는 화면

해당 부분이 작동하는지 알아보기 위해 input 부분에

cat /etc/passwd를 입력했을때, 해당 정보가 출력이 된다.

---

#### 2. 난이도 중

우선 위와 같이 webshell.php를 업로드 해보자

당연히 업로드가 되지 않는다. **image 또는 jpge 파일만 업로드 해달라고 오류 구문이 뜬다**.

그렇다면 버프스위트를 통해, 파일 타입을 조작해보자.

버프스위트에서 **프록시-인터셉트 on**을 키고 파일을 다시 업로드 해보자

업로드 요청이 되고나서 버프스위트를 확인해보면

![image](/images/migrated-tistory/pail-eoprodeu-gonggyeok/img.png)

이렇게 해당 파일은 **php 파일**이라는것을 알려준다.

이 부분을 **image/jpge** 라고 조작을 한다면?

위와 같이 **파일이 업로드 되었다고 확인 문구가 뜬다.**

이 실습을 통해서 **파일 확장자명 필터링으로만은 대응이 불가하다는 것**을 알게되었다.

---

#### 3. 난이도 상

이번에도 진행 하기 전 소스코드를 확인해보자.

![image](/images/migrated-tistory/pail-eoprodeu-gonggyeok/img.png)
난이도 상 문제의 소스코드

해당 코드를 확인해보면 **이미지 파일명을 하나하나 확인하는 구문과 파일사이즈에 대한 조건이 걸려있다.**

하지만 우리는 해더부분을 공격 할 것이다.

버프스위트를 통해 이번에는 파일명 우회를 시도해보자.

![image](/images/migrated-tistory/pail-eoprodeu-gonggyeok/img.png)
버프스위트 인터렉션 on

이전 타입변경이 아닌 파일명 뒤에 **.jpg**를 붙혀준 후, 파일 헤더부분에 **GIF89a** 를 적어주면, 해당 php 파일이 업로드 된다.

최상단에 gif89a를 적어주는 이유는 gif이미지파일의 표준에 정의된 값이기때문에 이미지파일인것처럼 속일 수 있다.

그 이후 해당 경로로 들어가면

업로드 된게 이미지 파일이기때문에 input창이 뜨지않고 다른 오류 구문이 뜬다.

![image](/images/migrated-tistory/pail-eoprodeu-gonggyeok/img.png)

이때 **파일인클루져**를 이용하여 해당 부분을 해결할수있다.

파일 인클루져로 다시 돌아가서 page파라미터 부분에 file/를 입력하고 ../../../hackable/uploads/webshell.php.jpg를 입력하면

input창으로 나오는 것을 확인 할 수 있다.

하지만 해당 input창에 기존과 같이 cat /etc/passwd 를 입력하면,

![image](/images/migrated-tistory/pail-eoprodeu-gonggyeok/img.png)
기존방식처럼 했을때 뜨는 오류 구문

이와 같이 오류가 뜬다.

그렇기 때문에 input에 직접 입력하여 시스템명령어를 실행하는 것이 아니라,

이 샘플파일이 결국 cmd파라미터를 실행하기때문에

파일 인클루져공격을 할때는 바로 cmd파라미터를 넘겨줘야 합니다.

![image](/images/migrated-tistory/pail-eoprodeu-gonggyeok/img.png)

위 처럼 입력하게 되면 cat /etc/passwd 가 출력이 됩니다.

---

#### 대응 방법

if( isset( $_POST[ 'Upload' ] ) ) {     // Check Anti-CSRF token     checkToken( $_REQUEST[ 'user_token' ], $_SESSION[ 'session_token' ], 'index.php' );     // File information     $uploaded_name = $_FILES[ 'uploaded' ][ 'name' ];     $uploaded_ext  = substr( $uploaded_name, strrpos( $uploaded_name, '.' ) + 1);     $uploaded_size = $_FILES[ 'uploaded' ][ 'size' ];     $uploaded_type = $_FILES[ 'uploaded' ][ 'type' ];     $uploaded_tmp  = $_FILES[ 'uploaded' ][ 'tmp_name' ];     // Where are we going to be writing to?     $target_path   = DVWA_WEB_PAGE_TO_ROOT . 'hackable/uploads/';     //$target_file   = basename( $uploaded_name, '.' . $uploaded_ext ) . '-';     $target_file   =  md5( uniqid() . $uploaded_name ) . '.' . $uploaded_ext;     $temp_file     = ( ( ini_get( 'upload_tmp_dir' ) == '' ) ? ( sys_get_temp_dir() ) : ( ini_get( 'upload_tmp_dir' ) ) );     $temp_file    .= DIRECTORY_SEPARATOR . md5( uniqid() . $uploaded_name ) . '.' . $uploaded_ext;     // Is it an image?     if( ( strtolower( $uploaded_ext ) == 'jpg' || strtolower( $uploaded_ext ) == 'jpeg' || strtolower( $uploaded_ext ) == 'png' ) &&         ( $uploaded_size 100000 ) &&         ( $uploaded_type == 'image/jpeg' || $uploaded_type == 'image/png' ) &&         getimagesize( $uploaded_tmp ) ) {         // Strip any metadata, by re-encoding image (Note, using php-Imagick is recommended over php-GD)         if( $uploaded_type == 'image/jpeg' ) {             $img = imagecreatefromjpeg( $uploaded_tmp );             imagejpeg( $img, $temp_file, 100);         }         else {             $img = imagecreatefrompng( $uploaded_tmp );             imagepng( $img, $temp_file, 9);         }         imagedestroy( $img );         // Can we move the file to the web root from the temp folder?         if( rename( $temp_file, ( getcwd() . DIRECTORY_SEPARATOR . $target_path . $target_file ) ) ) {             // Yes!             echo "${target_path}${target_file}'>${target_file} succesfully uploaded!";         }         else {             // No             echo 'Your image was not uploaded.';         }         // Delete any temp files         if( file_exists( $temp_file ) )             unlink( $temp_file );     }     else {         // Invalid file         echo 'Your image was not uploaded. We can only accept JPEG or PNG images.';     } } // Generate Anti-CSRF token generateSessionToken(); ?>

위 코드는 임파서블단계(최상위)에서 작성되어있는 코드이다.

노란색 부분은 이미지파일인지 확인하는 과정인데 업로드시 이미지 파일인지를 확인 후에 업로드된 내용으로 최종적으로 이미지 파일을 다시 생성해주고있다. **해당 방법으로 무늬만 이미지 파일인것을 완전하게 차단을 시켜줍니다.**

이 외에도 다른방법은 dvwa는 나와있지않지만

업로드된 파일명을 **랜덤으로 생성**시켜서 자기가 **업로드된 파일에 접근하지못하게하는 방법**이 있다.

또한, **업로드되는 서버를 웹애플리케이션 서버와 분리하는 경우**도 있다.

위의 방식이 여의치않은 경우에는 **업로드폴더의 실행권한을 완전히 제거**해주고 파일인클루져공격도 대응하여, **업로드된 파일이 웹 어플리케이션에서 실행되는것을 완전히 차단해주어야 한다.**
