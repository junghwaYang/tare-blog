---
title: "클라이언트에서 데이터 주고 받기"
description: "들어가며 기본적으로 React에서는 상태 변화가 감지되면 렌더링을 시행한다. 그렇기에 state로 상태 변화를 일으키게 되는데, SSR 페이지에서 이벤트 핸들러를 통해 입력 폼의 상태를 변화시켜서 렌더링하는 방식에 대해서 서술 할 예정이다. 본문 javascript export async function getServerSideProps(context) {"
pubDate: 2024-11-29T15:30:00.000Z
updatedDate: 2025-06-17T02:55:00.000Z
tags: ["react", "리액트"]
category: "react"
slug: "keulraieonteueseo-deiteo-jugo-batgi"
draft: false
originalUrl: "https://www.notion.so/14d4ef56099480c8941bd63e2b137ae5"
---


# 들어가며


기본적으로 React에서는 상태 변화가 감지되면 렌더링을 시행한다.


그렇기에 `state`로 상태 변화를 일으키게 되는데, SSR 페이지에서 이벤트 핸들러를 통해 입력 폼의 상태를 변화시켜서 렌더링하는 방식에 대해서 서술 할 예정이다.


# 본문


```javascript
export async function getServerSideProps(context) {
  const productId = context.params['id'];
  let product;
  try {
    const res = await axios.get(`/products/${productId}`);
    product = res.data;
  } catch {
    return {
      notFound: true,
    };
  }

  const res = await axios.get(`/size_reviews/?product_id=${productId}`);
  const sizeReviews = res.data.results ?? [];

  return {
    props: {
      product,
      sizeReviews,
    },
  };
}
```


위 코드는 개별 상품 정보와 사이즈 리뷰에 대한 respones를 SSR 방식으로 렌더링하는 로직이다.


여기에 사용자가 직접 사이즈 리뷰를 입력했을때, 상태를 변화시켜 사이즈 리뷰에 반영하여 렌더링 할 예정이다.


우선 입력 폼에 대한 상태는 `state`를 통해서 상태를 관리하고 변화 시킬 수 있는데,


이미 SSR을 통해 렌더링 된 사이즈 리뷰 목록을 기본값으로 지정하여, 추가하는 방식으로 진행 해 볼 것이다.


```javascript
export async function getServerSideProps(context) {
  const productId = context.params['id'];
  let product;
  try {
    const res = await axios.get(`/products/${productId}`);
    product = res.data;
  } catch {
    return {
      notFound: true,
    };
  }

  const res = await axios.get(`/size_reviews/?product_id=${productId}`);
  const sizeReviews = res.data.results ?? [];

  return {
    props: {
      product,
      sizeReviews,
    },
  };
}

/*
여기서 sizeReviews: initialSizeReviews 는 state에 사용될 이름과 혼용을 방지하기 위해
파라미터의 이름을 변경 해준 것 뿐이다.
*/
export default function Product({ product, sizeReviews: 
initialSizeReviews
 }) {
	// 업데이트 해줄 사이즈 리뷰의 상태
  const [
sizeReviews
, 
setSizeReviews
] = useState(
initialSizeReviews
);
  // 입력 폼에 대한 상태
  const [
formValue
, 
setFormValue
] = useState({
    size: 'M',
    sex: 'male',
    height: 173,
    fit: 'good',
  });
	
	// 입력 폼에 대한 post 요청 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
    // post 양식에 맞게 가공
    const 
sizeReview
 = {
      
...formValue
,
      productId: product.id,
    };
    const response = await axios.post('/size_reviews/', 
sizeReview
);
    // post한 데이터에 대한 response 정보를 새로운 데이터 변수로 지정하여, sizeReviews 업데이트
    const newSizeReview = response.data;
    // 비동기로 처리되어, 가장 최신의 상태를 가져와서 추가 [새로운데이터, 최신의기존데이터]
    
setSizeReviews((prevSizereviews) => [newSizeReview, ...prevSizereviews]);

  };
	
	// input value 상태 업데이트 함수
  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    //  target input에 따른 name과 value 업데이트
    handleChange(name, value);
  };

	// 입력 폼 상태 업데이트 함수
  const handleChange = async (name, value) => {

    setFormValue({
      ...formValue,
      [name]: value,
    });

  };

  if (!product)
    return (
      <div className={styles.loading}>
        <Spinner />
      </div>
    );
    
  return ( 
	  <SizeReviewList sizeReviews={
sizeReviews
 ?? []} />
		...
    <form className={styles.sizeForm} onSubmit={handleSubmit}>
      <label className={styles.label}>
        사이즈
        <Dropdown
          className={styles.input}
          name='size'
          value={formValue.size}
          options={[
            { label: 'S', value: 'S' },
            { label: 'M', value: 'M' },
            { label: 'L', value: 'L' },
            { label: 'XL', value: 'XL' },
          ]}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        성별
        <Dropdown
          className={styles.input}
          name='sex'
          value={formValue.sex}
          onChange={handleChange}
          options={[
            { label: '남성', value: 'male' },
            { label: '여성', value: 'female' },
          ]}
        />
      </label>
      <label className={styles.label}>
        키
        <Input
          className={styles.input}
          name='height'
          min='50'
          max='200'
          type='number'
          value={formValue.height}
          onChange={handleInputChange}
        />
      </label>
      <label className={styles.label}>
        사이즈 추천
        <Dropdown
          className={styles.input}
          name='fit'
          value={formValue.fit}
          options={[
            { label: '작음', value: 'small' },
            { label: '적당함', value: 'good' },
            { label: '큼', value: 'big' },
          ]}
          onChange={handleChange}
        />
      </label>
      <Button className={styles.submit}>작성하기</Button>
    </form> 

)
}
```


프리렌더링을 이용해 변경된 데이터를 렌더링 하는 방식에 대해서 다루어보았는데,


사실 해당 강의를 들으면서 이거 CSR로 구현이 충분히 가능하고 크게 성능차이가 다를게 없어보이는데 왜 굳이 SSR을 결합 했을까? 라고 생각을 해보니


SSR을 사용했을때 초기 렌더링에 필요한 데이터를 서버에서 가져온 데이터 기반으로 사용자에게 빠르게 제공될 수 있고, 미리 렌더링 된 상태를 보여주니 당연히 SEO 개선에 많은 도움이 된다는 점이었다.


그리고 초기 렌더링 시점부터 최신의 데이터를 포함한 상태를 보장하니, 클라이언트에서 데이터를 다시 요청하지 않아도 된다는 장점이 있다.


이걸 만약 CSR로만 처리를 한다고 했을때는 초기 값이 빈값으로 인식되기 때문에, 빈 상태를 보여주거나 로딩 상태를 먼저 보여주게 되어있다.


리액트에서 해당 데이터 요청 방식은 `useEffect`를 사용하기 때문에 클라이언트가 JS를 실행하기 전까지 데이터가 화면에 표기되지않는다는 문제가 있었다.


결론적으로는 SSR로 초기 데이터를 미리 렌더링하고 CSR을 통해 기존 데이터를 업데이트 할때 클라이언트 측에서 처리하게 끔 한것이다.

- SSR을 이용하면 초기 화면 로딩 속도가 빨라지고 SEO도 개선이 된다는 장점이있고
- CSR을 이용해 사용자가 입력한 데이터를 바로 반영하여 동적 경험을 제공한다는 장점이 있다는 것이다.

Next에서는 이렇게 SSR과 CSR을 결합하여 사용하면, 각각의 렌더링 방식에 있어서 장점을 살릴 수 있다는 것이다.


# 마치며


해당 강의를 들으면서 SSR, CSR 렌더 방식과 각각의 장점에 대해서 한번 더 상기 시킬 수 있었고, 이전까지는 SSR에 대해서 크게 와닿지 않았는데 이렇게 결합하여 사용되는걸 보니 확실히 CSR만 사용했을때보다 더 좋은 이점들만 가져다가 사용할 수 있겠구나 라는 생각이 들었다.


이 강의에서 명확히 설명할 수 있는 부분은 CSR에서 사용되는 useEffect는 클라이언트가 js를 실행시켜야만 렌더링 된다는 점과 SSR은 미리 서버에서 화면을 구현하고 클라이언트로 전달되어 빠르게 렌더링 된 화면을 보여줄 수 있다는 점이다.


### 정리

1. SSR로 미리 초기 데이터를 렌더링
2. 클라이언트에서 POST 요청 후, 응답받은 데이터를 바로 상태에 업데이트 시켜서 즉시 렌더링

