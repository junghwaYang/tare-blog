---
title: "코드를 이용해 페이지 이동하기"
description: "우선 next.js에서는 page폴더를 기준으로 path 경로를 설정하기때문에 input에 입력한 값을 전달해주는 SearchForm이라는 컴포넌트를 생성해야한다. 프로젝트 경로에 폴더를 components 이름으로 생성해서, SearchForm 컴포넌트를 만들어준다. typescript export default function SearchForm() {"
pubDate: 2024-11-20T07:29:00.000Z
updatedDate: 2025-06-17T02:55:00.000Z
tags: []
category: "study"
slug: "kodeureul-iyonghae-peiji-idonghagi"
draft: false
originalUrl: "https://www.notion.so/1444ef5609948012a5d6ccee3332c970"
---


우선 next.js에서는 `page`폴더를 기준으로 `path` 경로를 설정하기때문에 `input`에 입력한 값을 전달해주는 `SearchForm`이라는 컴포넌트를 생성해야한다.


프로젝트 경로에 폴더를 components 이름으로 생성해서, `SearchForm` 컴포넌트를 만들어준다.


```typescript
export default function SearchForm() {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='q' value={value} onChange={handleChange} />
      <button>검색</button>
    </form>
  );
}
```


해당 컴포넌트를 메인해서 검색할 수 있게 해야하기 때문에, `index.jsx`에 해당 컴포넌트를 호출 해준다.


```typescript
import SearchForm from '@/components/SearchForm';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>watchit</h1>
      
<SearchForm />

      <ul>
        <li>
          <Link href='/movies/1'>1번 영화</Link>
        </li>
        <li>
          <Link href='/movies/2'>2번 영화</Link>
        </li>
        <li>
          <Link href='/movies/3'>3번 영화</Link>
        </li>
      </ul>
    </>
  );
}
```


`index.jsx`에서 검색할 검색어를 입력하고 버튼을 눌렀을때, `/search` 페이지로 넘어가게끔 해야하기때문에


이벤트 함수를 `useRouter`를 이용해 `/search`의 `q`쿼리에 `value`를 전달하는 함수를 추가해준다.


`.push` 메서드를 이용하여, 사용자가 입력한 `value`를 받아서 해당 url로 이동하게끔 작성한다.


정상적으로 화면이 잘 나오긴하지만 `search` 페이지에서도 사용자가 입력한 `input`을 그대로 가져가기 위해서 `Search.jsx`에 `SearchFrom` 컴포넌트를 추가하는데, 기존에 사용자가 입력한 `input`을 받기 위해서는 


`initialValue`라는 `props`를 받아 `value`의 기본값으로 지정해준다.


```typescript
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SearchForm({ 
initialValue = ''
 }) {
  const [value, setValue] = useState(
initialValue
);
  const router = useRouter();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
router.push(`/search/?q=${value}`);

  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='q' value={value} onChange={handleChange} />
      <button>검색</button>
    </form>
  );
}
```


그리고 `Search.jsx`에서는 해당 쿼리값을 받아서 전달해줘야하기때문에


```typescript
import SearchForm from '@/components/SearchForm';
import { useRouter } from 'next/router';

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <>
      <h1>watchit</h1>
      
<SearchForm initialValue={q} />

      <h2>{q} 검색결과</h2>
    </>
  );
}
```


위와 같이 받아온 쿼리를 `initialValue props`로 전달해준다.


여기서 한가지 조건을 추가하자면, `input`에 빈값이 들어왔을때는 다시 메인으로 돌아가게 하기 위해서 `SearchForm`에 조건을 추가한다.


```typescript
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SearchForm({ initialValue = '' }) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!value) {
      router.push('/');
      return;
    }

    router.push(`/search?q=${value}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='q' value={value} onChange={handleChange} />
      <button>검색</button>
    </form>
  );
}
```


위 처럼 작성을 하고, 실행시켜보면 `input`에 값이 없을때는 메인으로 돌아가며, 값이 있을땐 해당 값을 `search` 페이지의 `q` 의 `prams`로 넘겨준다. 또한 해당 `search` 페이지로 넘어갔을때, 현재 `path`의 `q` `prams`를 가져와 `SearchForm` 컴포넌트의 `initialValue` `props`로 넘겨줌으로써 사용자가 입력한 `input`이 사라지지않고 유지할 수 있다.


