---
title: "CAPTCHA(캡챠) 공격"
description: "캡챠란? !image(https://blog.kakaocdn.net/dna/eAMLQA/btq9pDbUYlQ/AAAAAAAAAAAAAAAAAAAAABGJV1W2nXBR3r3lOrze6TXOtNN4zZPDDcb7-teXSZuw/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allowip=&allowreferer=&signature=JwrFy9Mw0Jj%2F9F02cvknHw7gAqs%3D) 캡챠 예시 이와 같이 컴퓨터가 알아볼수없는 흘려"
pubDate: 2021-07-13T03:32:49.000Z
updatedDate: 2021-07-13T05:36:04.000Z
tags: []
category: "web-hacking"
slug: "captchakaepchya-gonggyeok"
draft: false
originalUrl: "https://siltare.tistory.com/11"
ogImage: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FeAMLQA%2Fbtq9pDbUYlQ%2FAAAAAAAAAAAAAAAAAAAAABGJV1W2nXBR3r3lOrze6TXOtNN4zZPDDcb7-teXSZuw%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1780239599%26allow_ip%3D%26allow_referer%3D%26signature%3DJwrFy9Mw0Jj%252F9F02cvknHw7gAqs%253D"
---

## 캡챠란?

![image](/images/migrated-tistory/captchakaepchya-gonggyeok/img.png)
캡챠 예시

이와 같이 **컴퓨터가 알아볼수없는 흘려쓴 글씨나 그림을 통해서 이런 글자들을 제대로 인식하는지 확인을 통해,**

**사람인지 아닌지를 판별해주는 이미지 또는 글씨**를 캡챠 라고 한다.

보통은 회원가입이나 패스워드 변경 등 사람이 직접하지않으면 심각한 문제가 될수있을때 사용한다.

또 브루트포스 공격처럼 프로그램을 이용한 공격을 대응할때 아주 효과적이다.

![image](/images/migrated-tistory/captchakaepchya-gonggyeok/img.png)
캡챠 공격 예시

하지만 **제대로 설정하지않으면 캡챠를 확인하는 과정을 우회하여, 확인을 한 것 처럼 꾸미고 해킹을 할 수 있다.**

---

## 1. 난이도 하

![image](/images/migrated-tistory/captchakaepchya-gonggyeok/img.png)
실습 입력란

지금 구글 캡챠가 업데이트 되면서 오류가 생긴것같은데 일단 무시하고 진행해봅시다.

해당 캡챠가 오류가 나면서 아무리 패스워드를 수정해도 **캡챠부분을 통과하지 못했기때문에 패스워드 변경을 하지 못합니다.**

버프스위트를 이용해서 어떤 요청이 들어가는지 확인 해보면

![image](/images/migrated-tistory/captchakaepchya-gonggyeok/img.png)
요청이 들어가는 부분

hacker라는 패스워드로 변경을 하려하지만 캡챠부분을 통과하지 못했기때문에 변경이 안됩니다

![image](/images/migrated-tistory/captchakaepchya-gonggyeok/img.png)
캡챠를 통과하지못해 패스워드를 변경하지 못했다는 오류가 뜸.

해당 인프런 강의에서는 실제 캡챠까지 입력하고나서 step=2 인 상태에서 passwrord_new= 부분만 변경을 하여, 실제 변경이 된 모습을 보여준다.

하지만 나는 업데이트 된 캡챠의 오류로 step=2로 넘어가지 못한다.

그럼 **step=1을 step=2로 변경해주고, forward를 실행해서 변조를 해주니, 패스워드가 변경되었다.**

캡챠인증을 하지 않았음에도 패스워드가 변경되었다.....ㅇ0ㅇ

강의와는 좀 다른 방식인것같지만.....바뀌었다..!...오예..? 인가? 쨋든 성공이다.

---

#### 2. 난이도 중간

음...우선 위와 같은 방식에서 한가지 추가 된 점이 있다

**passed_catcha=true** (캡챠까지 입력했을때)라는 구문을 통해서, **캡챠부분이 제대로 입력이 되었는지 확인하는것같다.**

난 인증조차 못했으니 위 기존방식처럼 step=2로 변경을 해주고, passed_catcha=true 입력 후,

g-recaptcha-response=&을 지워주었다...

![image](/images/migrated-tistory/captchakaepchya-gonggyeok/img.png)
변조를 하기 전

![image](/images/migrated-tistory/captchakaepchya-gonggyeok/img.png)
변조 후

이 역시나 forward를 실행시키니 패스워드가 변경이 되었다..

이부분은 dvwa내에 오류인것같으니 추가적으로 알아 볼 필요가 있는것같다.

---

#### 3. 난이도 상

난이도 상을 테스트 하기전에 소스코드를 한번 열어보자

![image](/images/migrated-tistory/captchakaepchya-gonggyeok/img.png)
소스코드 중 if문 부분

이렇게 조건문이 있는 코드부분을 보면 g-recaptcha-response의 값이 hidd3n_value3 이어야하고,

HTTP_USER_AGENT값이 reCAPTCHA이면 패스워드를 변경하게 되어있다.

![image](/images/migrated-tistory/captchakaepchya-gonggyeok/img.png)
캡챠를 인증하지않고 패스워드 변경을 눌렀을때

![image](/images/migrated-tistory/captchakaepchya-gonggyeok/img.png)
소스코드처럼 해당 조건을 바꾸어 입력해주었다

해당 페이지 소스코드처럼 조건에 맞추어 변경을 해주니, 캡챠의 랜덤값이 다르더라도 패스워드 변경이 가능해진다.

이 소스코드에서 **요청을 step=1,2로 나눈것이 아닌 step=1으로 한것은 좋은 대응방법이었지만**, 이와같이 특정한 값을

if문으로 검사하여 우회할수있는 코드를 넣은것이 문제였다.

이런 상황은 개발자가 디버킹이나 테스트를 할때, 간단하게 확인하기 위해서 넣어놓은 코드 일 경우고

**배포할때 지우는것을 깜빡했을때 발생합니다..**

아주 놀랍게도 해당과 같은 상황이 다수 발생한다고 합니다..

---

## 대응방법

if( isset( $_POST[ 'Change' ] ) ) {     // Check Anti-CSRF token     checkToken( $_REQUEST[ 'user_token' ], $_SESSION[ 'session_token' ], 'index.php' );     // Hide the CAPTCHA form     $hide_form = true;     // Get input     $pass_new  = $_POST[ 'password_new' ];     $pass_new  = stripslashes( $pass_new );     $pass_new  = mysql_real_escape_string( $pass_new );     $pass_new  = md5( $pass_new );     $pass_conf = $_POST[ 'password_conf' ];     $pass_conf = stripslashes( $pass_conf );     $pass_conf = mysql_real_escape_string( $pass_conf );     $pass_conf = md5( $pass_conf );     $pass_curr = $_POST[ 'password_current' ];     $pass_curr = stripslashes( $pass_curr );     $pass_curr = mysql_real_escape_string( $pass_curr );     $pass_curr = md5( $pass_curr );     // Check CAPTCHA from 3rd party     $resp = recaptcha_check_answer(         $_DVWA[ 'recaptcha_private_key'],         $_POST['g-recaptcha-response']     );     // Did the CAPTCHA fail?     if( !$resp ) {         // What happens when the CAPTCHA was entered incorrectly         echo "The CAPTCHA was incorrect. Please try again.";         $hide_form = false;         return;     }     else {         // Check that the current password is correct         $data = $db->prepare( 'SELECT password FROM users WHERE user = (:user) AND password = (:password) LIMIT 1;' );         $data->bindParam( ':user', dvwaCurrentUser(), PDO::PARAM_STR );         $data->bindParam( ':password', $pass_curr, PDO::PARAM_STR );         $data->execute();         // Do both new password match and was the current password correct?         if( ( $pass_new == $pass_conf) && ( $data->rowCount() == 1 ) ) {             // Update the database             $data = $db->prepare( 'UPDATE users SET password = (:password) WHERE user = (:user);' );             $data->bindParam( ':password', $pass_new, PDO::PARAM_STR );             $data->bindParam( ':user', dvwaCurrentUser(), PDO::PARAM_STR );             $data->execute();             // Feedback for the end user - success!             echo "Password Changed.";         }         else {             // Feedback for the end user - failed!             echo "Either your current password is incorrect or the new passwords did not match.Please try again.";             $hide_form = false;         }     } } // Generate Anti-CSRF token generateSessionToken(); ?>

최상의 대응방법은 위의 소스처럼 **요청을 한번만 요청되게끔 하게 하는 것이 좋으며**,어려움단계의 **개발자 실수 또한 없게끔 테스트코드를 지우고 확실하게 확인을 하는 것이 좋습니다.**또한, 패스워드 변경 부분을 보면
![image](/images/migrated-tistory/captchakaepchya-gonggyeok/img.png)
현재 패스워드 입력 란이 생겼다.

**현재 패스워드를 입력 후에 패스워드를 변경할 수 있게끔 하는것이 가장 좋은 대응 방안이다.**
