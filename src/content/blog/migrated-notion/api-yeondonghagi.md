---
title: "api 연동하기"
description: "next의 api 연동은 react와 크게 차이가 없다. 하지만 여기서 axios를 이용해 데이터를 불러오는 방법을 사용해보겠다. 우선, lib/axios.js 파일을 만들어서 아래와 같이 작성한다. javascript import axios from 'axios'; const instance = axios.create({ baseURL: process.e"
pubDate: 2024-11-21T05:05:00.000Z
updatedDate: 2025-06-17T02:55:00.000Z
tags: ["react", "리액트"]
category: "react"
slug: "api-yeondonghagi"
draft: false
originalUrl: "https://www.notion.so/1454ef56099480a2b9dac1909f98f968"
---


`next`의 api 연동은 `react`와 크게 차이가 없다.


하지만 여기서 `axios`를 이용해 데이터를 불러오는 방법을 사용해보겠다.


우선, `lib/axios.js` 파일을 만들어서 아래와 같이 작성한다.


```javascript
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export default instance;
```


해당 코드로 서버로 보낼 기본 베이스 URL을 지정 해주었다. 코드를 중복하여 작성하는 것을 방지하기위해 작성해주었다.


데이터를 요청헐때는 `react`와 동일한 방식으로 아래와 같이 사용하면 된다.


`axios`는 우리가 앞전에 만들어두었던 `axios.js`를 호출하여 사용한다.


```javascript
import axios from '@/lib/axios';
  
  const [data, setData] = useState();

  async function getMovie(targetid) {
    const res = await axios.get('...');
    const nextData = res.data;
    setData(nextData);
  }
```


그런데 해당 학습을 하면서 데이터 로드가 계속 안되고 `Cannot read properties of undefined` 오류가 계속 뜨는 것이었다.


그래서 해당 페이지에서는 api 연동 방법 보다는 주의해야하는 점에 대해서 설명 해 볼까한다.


```javascript
const [movie, setMovie] = useState();
  const router = useRouter();
  const id = router.query['id'];

  async function getMovie(targetid) {
    const res = await axios.get(`/movies/${targetid}`);
    const nextMovie = res.data;
    setMovie(nextMovie);
  }
  
    useEffect(() => {
    if (id) {
      getMovie(id);
    }
  }, [id]);
```


해당 코드는 특정 영화 데이터를 불러오는 코드이다.


처음에 이렇게만 작성하였을때, 계속 위와 같은 오류가 뜨길래, axios baseURL을 잘못 설정했나 싶었다.


하지만 조금 더 생각을 해보면 처음에 저 `movie` 라는 변수에는 초기값이 없기때문에 `undefined`로 처리가 될 것이다.


`useEffect`는 화면이 마운트 된 후에 실행이 되기때문에 렌더가 먼저 진행이 되어야하는데 초기값이 `undefind` 임으로 렌더가 진행되지않고, 그렇다면 당연히 `useEffect`도 실행되지 않을 것이다.


그렇기에 값이 없을땐 `null` 처리를 해주고, 비동기 실행이 완료가 되었을때 화면을 그려주기 위해서는


```javascript
if (!movie) return null;
```


해당 값이 없을때의 리턴값을 꼭 지정을 해주어야한다는 것이다.


사실 실제 프로젝트에서는 `try`, `catch`도 사용하고, `loading` 상태와 `error` 상태를 같이 관리하여, 이러한 문제가 발생하지 않았을테지만, 가끔식 놓치고 가는 부분일 수도 있기에 다음에는 절때 같은 문제로 헤매지 않기 위해 본문을 작성한다.


