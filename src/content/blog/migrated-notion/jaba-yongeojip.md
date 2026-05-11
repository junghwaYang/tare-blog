---
title: "자바 용어집"
description: "Java 프로그래밍 주요 용어 정리집 Java를 처음 배우거나 사용할 때 자주 나오는 용어들을 정리했습니다. 초보자 관점에서 기본 개념을 명확히 설명하고, 일상적인 비유를 추가했습니다. 용어는 카테고리별로 그룹화했어요 (기본, OOP, 데이터 구조, 예외/고급 등). 특히 \"노드(Node)\"에 대해 물어보셨는데, Java에서 Node는 주로 데이터 구조(예"
pubDate: 2025-07-13T05:28:00.000Z
updatedDate: 2025-07-13T05:29:00.000Z
tags: []
category: "java"
slug: "jaba-yongeojip"
draft: false
originalUrl: "https://www.notion.so/22f4ef56099480988659ed488c113dc1"
---


### Java 프로그래밍 주요 용어 정리집


Java를 처음 배우거나 사용할 때 자주 나오는 용어들을 정리했습니다. 초보자 관점에서 기본 개념을 명확히 설명하고, 일상적인 비유를 추가했습니다. 용어는 카테고리별로 그룹화했어요 (기본, OOP, 데이터 구조, 예외/고급 등). 특히 "노드(Node)"에 대해 물어보셨는데, Java에서 Node는 주로 데이터 구조(예: LinkedList나 Tree)에서 "하나의 요소나 항목"을 의미합니다. JS의 "Node.js" (서버 런타임 환경)나 HTML DOM의 "Node" (요소 노드)와는 완전히 다르니, 그게 맞는지 모르겠다고 하신 부분은 아마 다른 맥락의 Node일 가능성이 큽니다. Java Node는 "체인의 한 고리"처럼 연결된 구조에서 쓰여요 – 아래에서 자세히 설명하겠습니다.


표 형식으로 정리했어요. 각 용어에:

- **기본 개념**: 간단한 정의.
- **비유 개념**: 일상 비유로 이해 쉽게.
- **예시 코드**: 간단한 Java 코드 스니펫 (IntelliJ나 에디터에서 테스트해보세요).

### 1. 기본 용어 (Java 환경 및 구조)


| 용어                                 | 기본 개념                                                       | 비유 개념                                 | 예시 코드                                                 |
| ---------------------------------- | ----------------------------------------------------------- | ------------------------------------- | ----------------------------------------------------- |
| **JVM (Java Virtual Machine)**     | Java 코드를 바이트코드로 컴파일한 후, 운영체제에 상관없이 실행하는 가상 머신. 플랫폼 독립성을 제공. | 자동차 엔진: 코드(연료)를 넣으면 OS(도로)에 상관없이 동작함. | (코드 실행 시 자동 동작, 별도 코드 불필요)                            |
| **JDK (Java Development Kit)**     | Java 개발 도구 키트. 컴파일러(javac), 디버거, 라이브러리 포함. 프로그램 작성/컴파일에 필요. | 공구 세트: 나사못(코드)을 조립하는 도구 전체.           | (JDK 설치 후) `javac MyClass.java`로 컴파일.                 |
| **JRE (Java Runtime Environment)** | JVM + 기본 라이브러리. Java 프로그램을 실행만 할 때 필요 (작성/컴파일 불가).          | 엔진 + 연료 탱크: 코드 실행만, 개발 도구 없음.         | (JRE 설치 후) `java MyClass`로 실행.                        |
| **Class**                          | 객체를 만들기 위한 설계도. 필드(데이터), 메서드(기능)를 정의.                       | 청사진: 집(객체)을 짓기 위한 설계도.                | `java public class Car { String model; }`             |
| **Object**                         | 클래스에서 생성된 실제 인스턴스. 메모리에 할당된 실체.                             | 완성된 집: 청사진(class)으로 지은 실제 건물.         | `java Car myCar = new Car();`                         |
| **Method**                         | 클래스 안에 정의된 함수. 특정 작업 수행.                                    | 요리 레시피의 단계: 입력 재료로 결과 요리 만듦.          | `java public int add(int a, int b) { return a + b; }` |
| **Variable**                       | 데이터 저장 공간. 타입 지정 (int, String 등).                           | 상자: 물건(데이터)을 담는 이름 붙인 상자.             | `java int age = 25;`                                  |


### 2. OOP (객체 지향 프로그래밍) 용어


| 용어                 | 기본 개념                                           | 비유 개념                                      | 예시 코드                                                                                                  |
| ------------------ | ----------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| **Constructor**    | 객체 생성 시 호출되는 특수 메서드. 초기화 담당. 클래스 이름과 같음.        | 공장 출고 시 초기 설정: 자동차를 만들 때 색상/엔진 지정.         | `java public Car(String model) { this.model = model; }`                                                |
| **Instance**       | 클래스에서 생성된 객체의 실제 사례. 메모리에 할당.                   | 특정 자동차: "Car" 클래스의 "내 빨간 차"처럼 구체적 사례.      | `java Car myCar = new Car("Tesla");`                                                                   |
| **Field**          | 클래스 안의 변수. 객체의 속성 저장.                           | 자동차의 부품: 엔진, 바퀴처럼 객체의 특징.                  | `java private String color;`                                                                           |
| **Parameter**      | 메서드에 전달되는 변수. 메서드 호출 시 값 전달.                    | 레시피 재료: 요리 메서드에 넣는 "소금, 후추".               | `java public void setAge(int age) { ... } // age가 parameter`                                           |
| **Inheritance**    | 부모 클래스에서 자식 클래스가 속성/메서드 상속. 코드 재사용.             | 가족 유산: 아버지(부모 클래스)의 집(메서드)을 자식 상속.         | `java public class ElectricCar extends Car { ... }`                                                    |
| **Polymorphism**   | 같은 메서드가 다른 클래스에서 다른 동작. 오버라이드/오버로드.             | 같은 명령 다른 결과: "달려"라고 하면 사람/자동차 다르게 동작.      | `java public void drive() { ... } // 자식 클래스에서 오버라이드`                                                   |
| **Encapsulation**  | 데이터 숨김 (private), getter/setter로 접근 제어. 데이터 보호. | 은행 금고: 돈(데이터)은 숨기고, 창구(getter/setter)로 접근. | `java private int balance; public int getBalance() { return balance; }`                                |
| **Abstraction**    | 복잡한 세부 숨기고 핵심만 노출. 추상 클래스/인터페이스 사용.             | 자동차 대시보드: 엔진 세부 숨기고 계기판만 보여줌.              | `java abstract class Shape { abstract void draw(); }`                                                  |
| **Interface**      | 메서드 시그니처만 정의. 구현 클래스에서 실제 코드. 다중 상속 가능.         | 계약서: "이 메서드 구현하라"는 약속, 세부는 계약자 마음.         | `java interface Drawable { void draw(); }`                                                             |
| **Abstract Class** | 일부 메서드 구현, 일부 추상. 인스턴스 생성 불가.                   | 반제품: 일부 조립된 자동차, 나머지(추상 메서드)는 완성해야 함.      | `java abstract class Animal { abstract void sound(); }`                                                |
| **Getter/Setter**  | private 필드 접근/수정 메서드. 캡슐화 구현.                   | 금고 창구: getter는 돈 확인, setter는 돈 입금 (검증 포함). | `java public String getName() { return name; } public void setName(String name) { this.name = name; }` |


### 3. 데이터 구조 및 컬렉션 용어


| 용어             | 기본 개념                                                                                                                                                | 비유 개념                                    | 예시 코드                                                                 |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------- |
| **Collection** | 객체 그룹 저장 인터페이스. List, Set, Queue 등 확장.                                                                                                               | 바구니: 물건(객체)을 담는 기본 컨테이너.                 | `java Collection<String> col = new ArrayList<>();`                    |
| **List**       | 순서 있는 컬렉션. 중복 허용, 인덱스 접근.                                                                                                                            | 쇼핑 목록: 순서 있고, 같은 물건 여러 개 가능.             | `java List<String> list = new ArrayList<>(); list.add("Item");`       |
| **Set**        | 중복 허용 안 함. 순서 보장 안 함.                                                                                                                                | 지갑 속 동전: 같은 금액 동전 하나만 필요.                | `java Set<String> set = new HashSet<>(); set.add("Unique");`          |
| **Map**        | 키-값 쌍 저장. 키 중복 안 함.                                                                                                                                  | 사전: 단어(키)-뜻(값) 매핑.                       | `java Map<String, Integer> map = new HashMap<>(); map.put("key", 1);` |
| **ArrayList**  | 동적 배열 기반 List. 접근 빠름, 삽입/삭제 느림.                                                                                                                      | 탄력 있는 책장: 책(요소) 추가 시 자동 확대, 중간에 끼우기 어려움. | `java ArrayList<String> al = new ArrayList<>(); al.add("Item");`      |
| **LinkedList** | 연결 리스트 기반 List. 삽입/삭제 빠름, 접근 느림.                                                                                                                     | 체인 고리: 고리(노드) 연결, 끊고 붙이기 쉽지만 끝에서 찾기 힘듦.  | `java LinkedList<String> ll = new LinkedList<>(); ll.add("Item");`    |
| **Node**       | LinkedList나 Tree에서 하나의 요소. 데이터 + 포인터(이전/다음) 포함. (Java에서 Node는 데이터 구조의 '고리'나 '정점'을 의미. JS Node.js는 서버 플랫폼, HTML Node는 요소 – Java Node는 데이터 연결 구조에 쓰임.) | 체인 한 고리: 데이터 담고, 앞뒤 고리 연결.               | `java class Node { Object data; Node next; }`                         |
| **Generics**   | 타입 매개변수. 컬렉션에 특정 타입만 저장. 타입 안전성.                                                                                                                     | 타입 지정 상자: "문자열만" 상자, 다른 것 못 넣음.          | `java List<String> genList = new ArrayList<>();`                      |


### 4. 예외 및 고급 용어


| 용어                     | 기본 개념                                    | 비유 개념                              | 예시 코드                                                                              |
| ---------------------- | ---------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------- |
| **Exception**          | 프로그램 실행 중 발생하는 오류. Checked/Unchecked 분류. | 도로 사고: 예상치 못한 문제, 처리 안 하면 프로그램 멈춤. | `java try { int div = 10 / 0; } catch (ArithmeticException e) { ... }`             |
| **Try-Catch**          | 예외 처리 블록. try에서 코드 실행, catch에서 예외 잡음.    | 안전벨트: 사고(예외) 발생 시 보호.              | `java try { ... } catch (Exception e) { System.out.println("Error"); }`            |
| **Thread**             | 프로그램의 독립 실행 단위. 멀티스레딩으로 병렬 처리.           | 작업자: 여러 작업자(스레드)가 동시에 일함.          | `java Thread t = new Thread(() -> { System.out.println("Running"); }); t.start();` |
| **Garbage Collection** | 사용하지 않는 객체 메모리 자동 회수. 개발자가 직접 안 함.       | 청소부: 쓰레기(미사용 객체) 자동 치움.            | (자동 동작, 코드 불필요)                                                                    |


### 추가 팁

- **학습 순서**: 기본 → OOP → 데이터 구조 → 고급 순으로 익히세요.
- **실무 활용**: 서버 개발에서 OOP 용어(클래스, 메서드)는 데이터 모델링에, 컬렉션 용어는 데이터 저장에 자주 쓰임.
- **노드 관련 추가**: Java의 Node는 LinkedList 구현 시 Node 클래스로 나타나, data + next/previous 필드를 가집니다. 비유로 "철도 차량: 각 차량(Node)이 화물(data) 담고, 앞뒤 연결"이라고 생각하세요.

