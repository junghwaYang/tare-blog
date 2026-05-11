---
title: "Next Image"
description: "Next Image란? Next에서 제공하는 컴포넌트이다. 이미지를 최적화 하여, 성능을 향상 시키는데 도움을 준다. 해당 Image 컴포넌트를 사용할때는 부모요소에 position: relative; 를 설정해주어야 한다. 다양한 옵션 src 이미지의 경로를 설정하는 옵션이다. public 폴더 내부에서는 /images/demo.jpg와 같이 지정이 가능"
pubDate: 2024-11-29T04:39:00.000Z
updatedDate: 2025-06-17T02:55:00.000Z
tags: []
category: "study"
slug: "next-image"
draft: false
originalUrl: "https://www.notion.so/14d4ef560994806fbf08cba9159e8ed6"
---


> # Next Image란?  
>   
> - `Next`에서 제공하는 컴포넌트이다.  
>   
> - 이미지를 최적화 하여, 성능을 향상 시키는데 도움을 준다.

- 해당 Image 컴포넌트를 사용할때는 부모요소에 `position: relative;` 를 설정해주어야 한다.

## 다양한 옵션


### src

- 이미지의 경로를 설정하는 옵션이다.
- `public` 폴더 내부에서는 `/images/demo.jpg`와 같이 지정이 가능하다.
- 외부 URL을 사용하는 경우에도 가능하다. (후속 `next.config.js` 설정 필요)

### alt

- 이미지에 대한 대체 텍스트 속성

### width 및 height

- 이미지를 렌더링할 너비와 높이를 설정한다. `Next.js`는 이를 기준으로 최적화된 이미지 크기를 자동으로 생성한다.

### **layout**

- 이미지의 배치 방식 설정입니다. 선택할 수 있는 값은 다음과 같습니다:
    - `intrinsic`: 기본적인 이미지 크기 비율을 유지하면서 크기를 자동으로 조정.
    - `responsive`: 부모 요소의 크기에 맞춰 이미지를 반응형으로 확장합니다.
    - `fixed`: 고정된 크기를 유지합니다.
    - `fill`: 부모 요소의 크기에 맞게 이미지를 완전히 채웁니다.

### **priority**

- 이 옵션을 사용하면 이미지가 페이지 로딩 시 우선적으로 로드됩니다. 특히 "above the fold" (페이지가 화면에 표시되는 부분)에 배치된 이미지를 즉시 로드하고 싶을 때 사용합니다.

### **loading**

- 이미지의 로딩 방식을 설정합니다. `"lazy"` (기본값)는 사용자가 이미지가 화면에 보일 때까지 로딩을 지연시키고, `"eager"`는 페이지가 로드 될 때 즉시 이미지를 로딩합니다.

### **quality**

- 이미지를 최적화할 때 사용하는 품질 설정 값입니다. 값은 `1`부터 `100`까지 설정할 수 있으며, 낮은 값일수록 파일 크기가 작아지고 품질이 떨어집니다.

## 외부 이미지 사용 시 next.config.js 설정


`next/image` 컴포넌트를 사용할 때, 외부 URL로 이미지를 사용하려면 `next.config.js` 파일에 외부 도메인을 명시적으로 추가해야 합니다. 설정 방법은 다음과 같습니다

- 간단한 외부 이미지를 사용할 때

```json
module.exports = {
  images: {
    domains: ['example.com', 'another-domain.com'],  // 외부 도메인 목록을 설정
  },
}
```

- 특정한 경로에 있는 모든 파일을 기준으로 설정 할 때(세부설정)
    - 해당 방식의 경우에는 특정 경로나 패턴을 가진 이미지 URL을 사용해야 할 때 사용합니다. 예를 들어, S3 버킷 경로 내의 이미지들만 허용하려는 경우나 특정 폴더에 있는 이미지만 허용하고 싶을 때 유용합니다.

```json
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/mall
/*
',
      },
    ],
  },
```


