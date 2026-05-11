---
title: "팁"
description: "git(실무에서 자주 사용되는 명령어 모음) !image(https://images.unsplash.com/photo1647166545674ce28ce93bdca?ixlib=rb4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb) 1. git clone 설명: 원격 저장소의 코드를 로컬로 복제할 때 사용합니다. 실무에서의 사용: 프로젝트를"
pubDate: 2024-10-08T17:57:00.000Z
updatedDate: 2025-06-10T03:35:00.000Z
tags: []
category: "retrospective"
slug: "tib"
draft: false
originalUrl: "https://www.notion.so/1194ef56099480d0a607fb68778123fe"
---


## git(실무에서 자주 사용되는 명령어 모음)

![image](https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb)


### 1. **`git clone`**

- **설명**: 원격 저장소의 코드를 로컬로 복제할 때 사용합니다.
- **실무에서의 사용**: 프로젝트를 처음 시작하거나 다른 팀원의 프로젝트를 가져와서 작업할 때.

    ```shell
    git clone <원격저장소URL>
    ```


---


### 2. **`git pull`**

- **설명**: 원격 저장소에서 최신 변경 사항을 가져와 현재 브랜치에 병합합니다. 실무에서는 **동기화**를 위해 자주 사용합니다.
- **실무에서의 사용**: 다른 팀원이 푸시한 최신 코드나 변경 사항을 자신의 로컬 브랜치에 반영할 때.

    ```shell
    git pull
    ```


---


### 3. **`git add`**

- **설명**: 파일을 **스테이징** 영역에 올려 커밋할 준비를 합니다.
- **실무에서의 사용**: 파일을 수정한 후, 변경 사항을 커밋하기 전에 필수로 사용합니다.

    ```shell
    git add <파일명>  # 특정 파일을 스테이징
    git add .         # 모든 변경 사항을 스테이징
    ```


---


### 4. **`git commit -m`**

- **설명**: 스테이징된 변경 사항을 로컬 저장소에 커밋하며, 커밋 메시지를 추가합니다.
- **실무에서의 사용**: 변경 사항을 기록하고, 나중에 문제를 추적할 수 있게 하기 위해 항상 사용합니다.

    ```shell
    git commit -m "커밋 메시지"
    ```


---


### 5. **`git push`**

- **설명**: 로컬 브랜치의 커밋을 **원격 저장소**로 푸시하여 팀과 공유합니다.
- **실무에서의 사용**: 로컬에서 작업한 변경 사항을 원격 저장소로 업로드할 때 사용합니다.

    ```shell
    git push origin <브랜치명>
    ```


---


### 6. **`git checkout`** / **`git switch`**

- **설명**: 브랜치를 전환하거나, 새로운 브랜치를 만들고 전환합니다. 최신 Git에서는 `git switch`가 권장됩니다.
- **실무에서의 사용**: 다른 브랜치로 이동하거나 새로운 브랜치를 만들고 작업을 시작할 때.

    ```shell
    git checkout <브랜치명>
    git switch <브랜치명>
    ```

    - 새 브랜치를 생성하고 전환할 때:

        ```shell
        git checkout -b <새 브랜치명>  # 또는 git switch -c <새 브랜치명>
        ```


---


### 7. **`git merge`**

- **설명**: 현재 브랜치에 다른 브랜치의 변경 사항을 병합합니다.
- **실무에서의 사용**: 기능 개발을 완료한 후, 이를 메인 브랜치나 다른 브랜치에 병합할 때.

    ```shell
    git merge <브랜치명>
    ```


---


### 8. **`git status`**

- **설명**: 현재 작업 디렉토리의 상태를 확인합니다. 어떤 파일이 변경되었는지, 스테이징되지 않은 파일이 있는지 확인할 수 있습니다.
- **실무에서의 사용**: 커밋하기 전 변경 사항이나 스테이징 여부를 확인할 때 자주 사용합니다.

    ```shell
    git status
    ```


---


### 9. **`git log`**

- **설명**: 프로젝트의 커밋 히스토리를 확인합니다.
- **실무에서의 사용**: 이전 커밋을 조회하거나 누가, 언제, 무엇을 변경했는지 추적할 때 사용합니다.

    ```shell
    git log
    ```


---


### 10. **`git stash`**

- **설명**: 작업 중인 변경 사항을 임시로 저장하고, 워킹 디렉토리를 깨끗한 상태로 되돌립니다.
- **실무에서의 사용**: 다른 작업을 해야 할 때, 현재 작업을 커밋하지 않고 저장해두고 브랜치를 전환할 때 자주 사용합니다.

    ```shell
    git stash       # 변경 사항을 임시로 저장
    git stash pop   # 저장된 변경 사항을 다시 적용
    ```


---


### 11. **`git reset --hard`**

- **설명**: 현재 브랜치를 지정한 커밋으로 강제로 되돌립니다. 되돌린 후의 모든 변경 사항은 삭제됩니다.
- **실무에서의 사용**: 변경 사항을 완전히 되돌리고 싶을 때나, 커밋을 제거하고자 할 때 사용됩니다.

    ```shell
    git reset --hard <커밋ID>
    ```


---


### 12. **`git rebase`**

- **설명**: 한 브랜치의 변경 사항을 다른 브랜치 위에 다시 적용하여, 커밋 히스토리를 깔끔하게 만듭니다.
- **실무에서의 사용**: 병합할 때 여러 커밋 이력을 정리하고 싶을 때, 복잡한 히스토리를 피하고 싶을 때 사용합니다.

    ```shell
    git rebase <브랜치명>
    ```


---


### 13. **`git cherry-pick`**

- **설명**: 특정 커밋만 선택적으로 다른 브랜치에 적용할 때 사용됩니다.
- **실무에서의 사용**: 여러 커밋 중 하나만 특정 브랜치에 반영하고 싶을 때 자주 사용됩니다.

    ```shell
    git cherry-pick <커밋ID>
    ```


---


### 14. **`git diff`**

- **설명**: 파일의 변경 사항을 비교할 때 사용됩니다.
- **실무에서의 사용**: 현재 파일이 어떻게 변경되었는지, 특정 커밋 사이의 차이를 확인할 때 자주 사용됩니다.

    ```shell
    git diff
    ```


## 코딩 테스트 모음

## 1. 배열과 리스트 문제

---


---


### 1.1. 두 수의 합 (Two Sum)

- **문제**: 정수 배열 `nums`와 목표 값 `target`이 주어졌을 때, 배열에서 두 숫자를 더해 `target`이 되는 두 숫자의 인덱스를 반환하세요. 단, 각 입력에는 정확히 하나의 해답이 있으며, 같은 요소를 두 번 사용할 수 없습니다.

```javascript
function twoSum(nums, target) {
  let numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }

  return [];
}
```

- **해설**: `Map`을 사용해 배열을 한 번 순회하면서 각 숫자의 인덱스를 저장하고, 목표 값에서 현재 숫자를 뺀 값(보수)이 맵에 존재하는지 확인합니다. 시간 복잡도는 O(n)입니다.

### 1.2. 배열의 중복된 요소 제거

- **문제**: 정수 배열이 주어졌을 때, 중복된 요소를 제거한 배열을 반환하세요.

```javascript
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
```

- **해설**: `Set` 자료형은 중복된 값을 허용하지 않기 때문에, 배열을 `Set`으로 변환한 후 다시 배열로 변환하면 중복된 요소가 제거됩니다.

### 1.3. 주식 최대 이익 (Best Time to Buy and Sell Stock)

- **문제**: 주식 가격이 시간 순으로 주어진 배열 `prices`가 있을 때, 한 번의 거래(한 번의 매수와 한 번의 매도)로 낼 수 있는 최대 이익을 계산하세요.

```javascript
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }

  return maxProfit;
}
```

- **해설**: 배열을 한 번 순회하면서 최소 주식 가격을 기록하고, 현재 가격에서 최소 가격을 뺀 값이 최대 이익보다 크면 갱신합니다. 시간 복잡도는 O(n)입니다.

## 2. 문자열 처리 문제

### 2.1. 가장 긴 팰린드롬 부분 문자열 (Longest Palindromic Substring)

- **문제**: 주어진 문자열에서 가장 긴 팰린드롬 부분 문자열을 찾아 반환하세요.

```javascript
function longestPalindrome(s) {
  let start = 0, end = 0;

  function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);    // 홀수 길이 팰린드롬
    let len2 = expandAroundCenter(s, i, i + 1); // 짝수 길이 팰린드롬
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}
```

- **해설**: 각 문자 또는 문자 사이를 중심으로 팰린드롬을 확장하며 가장 긴 팰린드롬을 찾습니다. 시간 복잡도는 O(n^2)입니다.

### 2.2. 애너그램 (Valid Anagram)

- **문제**: 두 개의 문자열이 주어졌을 때, 두 문자열이 서로 애너그램 관계인지 확인하세요.

```javascript
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let count = {};

  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}
```

- **해설**: 첫 번째 문자열의 각 문자의 개수를 센 다음, 두 번째 문자열에서 문자의 개수를 빼는 방식으로 두 문자열이 애너그램 관계인지 확인합니다. 시간 복잡도는 O(n)입니다.

### 2.3. 문자열 압축 (String Compression)

- **문제**: 반복되는 문자를 숫자로 압축하여 반환하세요. 예를 들어, 입력이 "aabcccccaaa"라면 "a2b1c5a3"으로 압축된 문자열을 반환하세요.

```javascript
function compressString(s) {
  let compressed = '';
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      compressed += s[i] + count;
      count = 1;
    }
  }

  return compressed.length < s.length ? compressed : s;
}
```

- **해설**: 반복되는 문자를 카운트하여 결과 문자열을 구성하고, 원본 문자열과 비교해 더 짧은 쪽을 반환합니다. 시간 복잡도는 O(n)입니다.

## 3. 정렬과 탐색 문제

### 3.1. 이진 탐색 (Binary Search)

- **문제**: 정렬된 배열에서 목표 값을 찾고, 그 인덱스를 반환하세요. 목표 값이 없다면 -1을 반환하세요.

```javascript
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
```

- **해설**: 배열의 중간값과 비교하여 탐색 범위를 반으로 줄여가는 방식으로 동작합니다. 시간 복잡도는 O(log n)입니다.

### 3.2. 병합 정렬 (Merge Sort)

- **문제**: 주어진 배열을 병합 정렬 알고리즘을 사용하여 정렬하세요.

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [], l = 0, r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }

  return result.concat(left.slice(l)).concat(right.slice(r));
}
```

- **해설**: 병합 정렬은 배열을 재귀적으로 반으로 나눈 뒤 병합하는 과정에서 정렬합니다. 시간 복잡도는 O(n log n)입니다.

### 3.3. 퀵 정렬 (Quick Sort)

- **문제**: 주어진 배열을 퀵 정렬 알고리즘을 사용하여 정렬하세요.

```javascript
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [], right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
```

- **해설**: 퀵 정렬은 피벗을 기준으로 배열을 분할하여 정렬합니다. 평균 시간 복잡도는 O(n log n)이지만, 최악의 경우 O(n^2)입니다.

## 4. 동적 프로그래밍 문제

### 4.1. 피보나치 수열 (Fibonacci Sequence)

- **문제**: 피보나치 수열의 n번째 숫자를 구하세요. (재

귀와 메모이제이션 방식)


```javascript
function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
```

- **해설**: 재귀적으로 피보나치 수를 계산하며, 이미 계산한 값은 `memo` 객체에 저장해 중복 계산을 피합니다. 시간 복잡도는 O(n)입니다.

### 4.2. 계단 오르기 (Climbing Stairs)

- **문제**: 계단을 오르는 방법의 수를 구하세요. 한 번에 1계단 또는 2계단씩 오를 수 있습니다.

```javascript
function climbStairs(n) {
  if (n <= 2) return n;

  let prev = 1, curr = 2;

  for (let i = 3; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}
```

- **해설**: 피보나치 수열과 유사한 문제로, 점화식을 사용해 계단을 오르는 방법의 수를 계산합니다. 시간 복잡도는 O(n)입니다.

### 4.3. 최대 부분합 (Maximum Subarray)

- **문제**: 주어진 배열에서 연속된 부분 배열의 합이 가장 큰 값을 구하세요.

```javascript
function maxSubArray(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}
```

- **해설**: 카데인(Kadane) 알고리즘을 사용해, 배열을 한 번 순회하며 최대 부분합을 계산합니다. 시간 복잡도는 O(n)입니다.

## 5. 그래프와 트리 문제

### 5.1. 깊이 우선 탐색 (Depth-First Search, DFS)

- **문제**: 그래프가 주어졌을 때, DFS 알고리즘을 구현하세요.

```javascript
function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start);

  for (let neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}
```

- **해설**: DFS는 재귀적으로 그래프를 탐색하며, 방문한 노드를 출력합니다. 시간 복잡도는 O(V + E)입니다.

### 5.2. 너비 우선 탐색 (Breadth-First Search, BFS)

- **문제**: 그래프가 주어졌을 때, BFS 알고리즘을 구현하세요.

```javascript
function bfs(graph, start) {
  let queue = [start];
  let visited = new Set(queue);

  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node);

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
```

- **해설**: BFS는 큐(Queue)를 사용해 그래프를 레벨 단위로 탐색합니다. 시간 복잡도는 O(V + E)입니다.

### 5.3. 이진 트리 최대 깊이 (Maximum Depth of Binary Tree)

- **문제**: 이진 트리의 최대 깊이를 구하세요.

```javascript
function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
```

- **해설**: 재귀적으로 왼쪽과 오른쪽 서브트리의 깊이를 비교하여 최대 깊이를 계산합니다. 시간 복잡도는 O(n)입니다.

## 추가 문제 연습

### 추가 문제 1: 배열 회전 (Rotate Array)


문제:

- 주어진 배열을 오른쪽으로 `k`번 회전시키세요. 회전은 배열의 요소를 한 칸씩 이동시키는 작업을 말합니다.

예시:


```javascript
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
```


풀이:

1. 배열을 회전하는 방법은 여러 가지가 있습니다. 가장 간단한 방법은 슬라이싱(slicing)과 병합을 사용하는 것입니다.
2. `k`가 배열의 길이보다 클 수 있기 때문에, `k % nums.length`로 회전 횟수를 최적화할 수 있습니다.

코드:


```javascript
function rotate(nums, k) {
  k = k % nums.length;
  nums.unshift(...nums.splice(nums.length - k, k));
}
```

- **해설**: `splice`로 배열의 끝부분을 잘라내어 `unshift`로 앞에 추가합니다. 이 방법은 O(n) 시간 복잡도를 가집니다.

### 추가 문제 2: 연결 리스트 반전 (Reverse Linked List)


문제:

- 단일 연결 리스트를 반전시키세요.

예시:


```javascript
Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL
```


풀이:

1. 연결 리스트를 순회하면서 현재 노드의 다음 포인터를 이전 노드를 가리키도록 변경합니다.
2. 이를 반복하여 리스트의 연결 방향을 반전합니다.

코드:


```javascript
function reverseList(head) {
  let prev = null;
  let current = head;

  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}
```

- **해설**: 이 알고리즘은 `prev`, `current`, `nextNode` 세 포인터를 사용하여 리스트의 방향을 반전합니다. 시간 복잡도는 O(n)입니다.

### 추가 문제 3: 중복 문자 제거 (Remove Duplicates from String)


문제:

- 주어진 문자열에서 중복된 문자를 모두 제거하고, 각 문자가 한 번만 나타나도록 하세요.

예시:


```javascript
Input: "aabccdeff"
Output: "abcdef"
```


풀이:

1. `Set` 자료형을 사용하여 중복된 문자를 제거할 수 있습니다.
2. 문자열을 순회하면서 `Set`에 문자를 추가하고, 최종 결과를 반환합니다.

코드:


```javascript
function removeDuplicates(s) {
  let seen = new Set();
  let result = "";

  for (let char of s) {
    if (!seen.has(char)) {
      seen.add(char);
      result += char;
    }
  }

  return result;
}
```

- **해설**: `Set`은 중복을 허용하지 않기 때문에, 문자열을 순회하며 중복을 체크하고 추가하지 않는 방식으로 문제를 해결합니다. 시간 복잡도는 O(n)입니다.

### 추가 문제 4: 괄호 유효성 검사 (Valid Parentheses)


문제:

- 주어진 문자열에서 괄호가 유효한지 확인하세요. 유효한 괄호는 열리는 괄호가 닫히는 괄호와 올바르게 짝을 이뤄야 합니다.

예시:


```javascript
Input: "()[]{}"
Output: true

Input: "(]"
Output: false
```


풀이:

1. 스택을 사용하여 열린 괄호를 저장하고, 닫히는 괄호가 나올 때마다 스택에서 짝이 맞는지 확인합니다.
2. 모든 괄호가 짝을 이루면 문자열이 유효합니다.

코드:


```javascript
function isValid(s) {
  let stack = [];
  let map = {
    ")": "(",
    "}": "{",
    "]": "["
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
```

- **해설**: 스택을 사용하여 괄호의 짝을 확인하는 방법입니다. 여는 괄호는 스택에 추가하고, 닫는 괄호는 스택에서 꺼내어 짝이 맞는지 확인합니다. 시간 복잡도는 O(n)입니다.

### 추가 문제 5: 피보나치 수열 (Iterative Approach)


문제:

- 피보나치 수열의 n번째 숫자를 구하세요. 이번에는 반복문을 사용한 접근을 연습해보세요.

예시:


```javascript
Input: n = 10
Output: 55
```


풀이:

1. 반복문을 사용하여 피보나치 수열을 계산합니다.
2. 공간 복잡도를 O(1)로 최적화하기 위해 변수 2개만 사용합니다.

코드:


```javascript
function fib(n) {
  if (n <= 1) return n;

  let prev = 0, curr = 1;

  for (let i = 2; i <= n; i++) {
    let temp = curr;
    curr = prev + curr;
    prev = temp;
  }

  return curr;
}
```

- **해설**: 이 방법은 두 개의 변수를 사용하여 피보나치 수열을 계산하므로, 공간 복잡도를 최소화합니다. 시간 복잡도는 O(n)입니다.

### 추가 문제 6: 회문 검사 (Palindrome Check)


문제:

- 주어진 문자열이 회문인지 확인하세요. 회문이란 앞뒤가 똑같이 읽히는 문자열을 의미합니다. 문자열은 대소문자를 구분하지 않으며, 공백과 특수 문자는 무시합니다.

예시:


```javascript
Input: "A man, a plan, a canal: Panama"
Output: true

Input: "race a car"
Output: false
```


풀이:

1. 문자열을 소문자로 변환하고, 알파벳과 숫자만 남깁니다.
2. 변환된 문자열을 앞뒤로 비교하여 회문인지 확인합니다.

코드:


```javascript
function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0, right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
```

- **해설**: 정규식을 사용해 문자열에서 알파벳과 숫자만 남긴 후, 양 끝에서 가운데로 이동하면서 회문 여부를 확인합니다. 시간 복잡도는 O(n)입니다.

### 추가 문제 7: 1에서 n까지의 합 (Sum from 1 to n)


문제:

- 1에서 n까지의 정수 합을 구하세요.

예시:


```javascript
Input: n = 10
Output: 55
```


풀이:

1. 반복문을 사용하여 1부터 n까지의 합을 계산할 수 있습니다.
2. 또는, 수학적 공식을 사용하여 O(1) 시간 복잡도로 해결할 수도 있습니다.

코드:


```javascript
function sumToN(n) {
  return (n * (1 + n)) / 2;
}
```

- **해설**: 수학적 공식 `(n * (n + 1)) / 2`를 사용하여 1부터 n까지의 합을 빠르게 계산합니다. 시간 복잡도는 O(1)입니다.

### 추가 문제 8: 배열 내 중복된 숫자 찾기 (Find Duplicates in Array)


문제:

- 주어진 정수 배열에서 중복된 숫자가 있는지 확인하세요. 배열의 요소는 0 이상입니다.

예시:


```javascript
Input: nums = [1, 2, 3, 1]
Output: true

Input: nums = [1, 2, 3, 4]
Output: false
```


풀이:

1. `Set` 자료형을 사용해 배열을 순회하며 중복을 검사할 수 있습니다.

코드:


```javascript
function containsDuplicate(nums) {
  let numSet = new Set();

  for (let num of nums) {
    if (numSet.has(num)) {
      return true;
    }
    numSet.add(num);
  }

  return false;
}
```

- **해설**: `Set`을 사용해 중복된 요소를 효율적으로 찾습니다. 시간 복잡도는 O(n)입니다.

### 추가 문제 9: 정렬된 배열에서 중복 제거 (Remove Duplicates from Sorted Array)


문제:

- 정렬된 배열에서 중복된 요소를 제거하고, 중복을 제거한 후 배열의 길이를 반환하세요. 배열의 요소를 제자리에서 변경해야 합니다.

예시:


```javascript
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
```


풀이:

1. 두 포인터를 사용해 정렬된 배열을 순회하며 중복을 제거할 수 있습니다.

코드:


```javascript
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}
```

- **해설**: 두 포인터를 사용해 중복 요소를 제거하면서 배열을 제자리에서 수정합니다. 시간 복잡도는 O(n)입니다.

### 추가 문제 10: 두 배열의 교집합 (Intersection of Two Arrays)


문제:

- 두 배열이 주어졌을 때, 두 배열의 교집합을 배열로 반환하세요.

예시:


```javascript
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
```


풀이:

1. `Set`을 사용하여 두 배열의 교집합을 찾습니다.

코드:


```javascript
function intersection(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let result = [];

  for (let num of set2) {
    if (set1.has(num)) {
      result.push(num);
    }
  }

  return result;
}
```

- **해설**: 두 배열을 각각 `Set`으로 변환한 후, 공통 요소를 찾아 배열로 반환합니다. 시간 복잡도는 O(n + m)입니다.

## 프로그래머스 노트

## ~~ 연산자

# ~~ 연산자


해당 연산자는 JS에서 사용되는 _**비트 NOT 연산자**_[_**⁽²⁾**_](/10f4ef5609948007bdebd2ab5ef719dc#10f4ef56099480d28b82c6d256759a79)로, 주어진 숫자의 정수 부분을 반환한다.


~~ 연산자는 **비트 연산**[**⁽¹⁾**](/10f4ef5609948007bdebd2ab5ef719dc#10f4ef56099480df8e1ffcd5d7d937ae)을 사용하기 때문에 32비트 정수로 처리되며, 매우 큰 숫자에 대해 제한이 있다.


### 예제


```javascript
console.log(~~4.9);   // 4
console.log(~~-4.9);  // -4
console.log(~~0.1);   // 0
console.log(~~NaN);   // 0
console.log(~~null);  // 0
```


### 설명

1. **정수 변환** : 음수,양수 상관없이 소수점의 뒷부분은 제거하여, 반환한다.
2. `NaN` `null` 등의 처리 : 해당 값도 0으로 처리된다. 이러한 값들은 정수로 변환 될 때 0으로 처리되기 때문이다.

### `Math.trunc()`와 ~~ 연산자의 차이

- ~~ 연산자
    - 비트 연산을 사용하기 때문에 매우 큰 숫자에 대한 제한이 있다.
- `Math.trunc()`
    - 모든 수치 데이터에 대해 일관되게 작동하며, 숫자의 범위에 제한이 없다.

### NaN에 대한 다른 결과


```javascript
console.log(~~NaN);          // 0
console.log(Math.trunc(NaN)); // NaN
```


### 요약

- 표기법은 ~~연산자가 사용에는 간단하지만, 큰 숫자에 대한 제한이 있고, 가독성이 그다지 좋지 못하다.
- ~~ 연산자보다는 `Math.frunc()` 를 사용하자.

# 각주


---


[(1)](/10f4ef5609948007bdebd2ab5ef719dc#10f4ef56099480a99fd1fd309d79554b) 비트 연산 : 이진수 비트 단위로 직접 연산을 수행하는 연산 [(별첨)](/10f4ef56099480fb882fe546e1820aed)


[(2)](/10f4ef5609948007bdebd2ab5ef719dc#10f4ef560994802aad9cdbe212047f33) 비트 NOT 연산자 : 이진수로 표현된 숫자의 각 비트를 반전시키는 연산


## 분수의 합 구하기(⭐️⭐️⭐️⭐️⭐️)

# 문제

> 첫 번째 분수의 분자와 분모를 뜻하는 `numer1`, `denom1`, 두 번째 분수의 분자와 분모를 뜻하는 `numer2`, `denom2`가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

## 제한사항

> 0 <`numer1`, `denom1`, `numer2`, `denom2` < 1,000

## 입출력의 예


| numer1 | denom1 | numer2 | denom2 | result  |
| ------ | ------ | ------ | ------ | ------- |
| 1      | 2      | 3      | 4      | [5, 4]  |
| 9      | 2      | 1      | 3      | [29, 6] |


### 입출력 예 설명

- 1 / 2 + 3 / 4 = 5 / 4입니다. 따라서 [5, 4]를 return 합니다.
- 9 / 2 + 1 / 3 = 29 / 6입니다. 따라서 [29, 6]을 return 합니다.

---


해당 문제는 **유클리드 호제법**을 이용해 GCD(최대공약수)를 구해서, 최종 결과를 배열로 return 하는 문제이다.


### 기약분수의 덧셈

1. 두 분모의 곱을 공통분모로 하여 통분한 후 결과값을 약분하여 계산하기
2. 두 분모의 최소공배수를 공통분모로 하여 통분한 후 계산하기

기약분수의 덧셈은 초등학교 수학과정에서 분명 배웠다.


나는 우선 첫번째 방법을 이용하여, 코드를 짜보기로 했다.


빠른 이해를 위해, 처음에는 한글을 이용하여 작성했었다. 참고하고 봐주시길..


# 제멋대로 풀이


우선 주어진 `solution` 함수가 받는 파라미터값을 쉽게 이해하기 위해서 `numer1` = 분자1 , `denom1` = 분모1 , `numer2` = 분자2, `denom2` = 분모2 로 생각하고 작성하였다.

- 합구하기

```javascript
let 합산분자 = (분자1 * 분모2) + (분자2 * 분모1);
let 합산분모 = 분모1 * 분모2;
```


이제 여기서 합산분자 / 합산분모 가 기약분수인지 기약분수가 아닌지 미지수다.


그래서 그 둘을 구분해서 배열에 넣고 출력해야하는데, 최대공약수 식을 몰랐던 나는 제한사항의 최대수를 이용하여, for문을 작성하기로 했다.

- for문 이용하여, i를 나눈 수의 나머지가 없을 때 배열에 담기

```javascript
const 나머지가0인수의배열 = [];

for(let i = 0; i < 1000; i++){
	if((합산분자 % i)+(합산분모 % i) === 0){
		나머지가0인수의배열.push(i);
	}
}
```


이게 뭔 기이한 코드라고 생각 할 수 있다. 지금 내가 다시봐도 뭔가 상당히 기괴하다.


저 `for`문이 어쩌다 나온거면 정말 일일히 다 계산했다.


```plain text
예를 들어 분자 = 10 , 분모 = 8 이라면, for문을 돌렸을때
1은 나눠봤자 같은 수가 나오니까 제외하고 바로 배열에 담김 => 현배열값 = [1]

i = 2 라면,
10 % 2 = 0 , 8 % 2 = 0 => 남는수 없음, 배열값 = [1, 2]

i = 3 라면,
10 % 3 = 1, 8 % 3 = 2 => 남는수 있음, 배열추가 X

…

i = 9 라면,
10 / 9 = 1(나눈 결과 기준), 8 / 9 = 0(나눈 결과 기준) => 조건 추가, 둘 중 하나라도 나눈 결과가 0이 되면 로직 종료
```


이렇게… 원래는 `분자 / i === 0 || 분모 / i === 0` 이렇게 조건문을 사용해서 for문 중단을 시키려 했었다.


하지만 실패 했다. 그래서 문제에 주어진 `1000 미만` 이라는 조건을 이용해서 for문을 작성했다…


해당 조건을 포기하고 새로 생각해낸 조건이 아래와 같다.

- 조건문을 이렇게 작성한 이유

```javascript
(합산분자 % i)+(합산분모 % i) === 0
```


나머지의 값이 둘다 0 일때 i의 값을 따로 배열에 담고 싶었는데,


어차피 둘다 0이면 합산했을때도 0이니까 이렇게 조건을 작성했다.


그렇게 `나머지가0인수의배열` 에는 1부터 최대공약수까지 담기게 되는데 해당 배열의 최대값을 구하기 위해서,


`Math.max()` 와 스프레드 구문을 활용해 `최대공약수` 변수에 담아주었다.

- 배열의 최대값을 담기(최대공약수)

```javascript
const 최대공약수 = Math.max(...나머지가0인수의배열);
```


이제 최대공약수를 구했으니 합산한 분자와 분모를 나누어 배열에 담아주기만 하면 된다.

- 배열에 담아 결과 출력

```javascript
const 결과 = [];
결과.push(합산분자 / 최대공약수);
결과.push(합산분모 / 최대공약수);

return 결과;
```


지금에서 생각난건데 굳이 결과배열을 만들지 않고 return 해도 됐을 것 같다.


```javascript
return [합산분자 / 최대공약수, 합산분모 / 최대공약수];
```


그렇게 작성된 기괴한 최종 코드…ㅋㅋㅋ

- 최종 코드

```javascript
function solution(numer1, denom1, numer2, denom2) {
    let numer = (numer1 * denom2) + (numer2 * denom1);
    let denom = denom1 * denom2; 
    const notRest = [];
    
    for(let i = 0; i < 1000; i++){
        if((numer % i)+(denom % i) === 0){
            notRest.push(i);
        }
    }
    
    const gcd = Math.max(...notRest);

    return [numer / gcd, denom / gcd];
}
```


정말 너무 비효율 적인 코드….


해당 구문을 작성해서 GPT 한테 리팩토링 해달라고 부탁했더니, 


# GPT의 리팩토링


```javascript
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a; // GCD 반환
}

function solution(numer1, denom1, numer2, denom2) {
    // 분수 덧셈
    const numerSum = (numer1 * denom2) + (numer2 * denom1); // 분자 계산
    const denomSum = denom1 * denom2; // 분모 계산

    // GCD 계산
    const divisor = gcd(numerSum, denomSum);

    // 약분된 결과
    return [numerSum / divisor, denomSum / divisor];
}
```


이렇게 답변이 왔다.


아니 나는 저 gcd 함수가 이해가 안간다니까..


그래서 서론이 너무 길어졌는데 결과적으로 해당 포스트를 하게 된 이유가 해당 수식을 이해하기위해 작성을 시작하게 되었다.


## GPT의 설명


```javascript
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;        // 1. b의 값을 임시 변수 temp에 저장
        b = a % b;          // 2. a를 b로 나눈 나머지를 b에 저장
        a = temp;           // 3. temp(이전 b의 값)를 a로 업데이트
    }
    return a; // 4. GCD인 a를 반환
}
```

1. 함수 정의:
    1. `function gcd(a, b)`
    두 개의 매개변수 a와 b를 받는 함수를 정의합니다. 이 두 값은 GCD를 찾고자 하는 정수입니다.
2. while 루프:
    1. `while (b !== 0)`
    b가 0이 아닐 때까지 루프를 반복합니다. 이 조건이 참인 동안, 계속해서 a와 b의 값을 업데이트합니다.
    2. 유클리드 호제법에서는 GCD를 구할 때, b가 0이 될 때까지 반복하는 방식을 사용합니다.
3. 나머지 계산:
    1. `let temp = b;`
    현재 b의 값을 임시 변수 temp에 저장합니다. 이는 다음 단계에서 a의 새로운 값으로 설정하기 위해 필요합니다.
    2. `b = a % b;`
    a를 b로 나눈 나머지를 b에 저장합니다. 이 단계에서 새로운 b의 값은 a와 b의 나머지가 됩니다.
    3. `a = temp;`
    임시 변수에 저장한 이전 b의 값을 a에 저장합니다. 이 과정을 통해 a는 현재의 b 값이 됩니다.
4. GCD 반환:
    1. `return a;`
    루프가 종료되면 b가 0이 되어, 현재의 a가 두 수의 최대공약수입니다. 따라서, 이 값을 반환합니다.

## 예시


예를 들어, GCD(48, 18)를 계산한다고 하자.

1. 초기값: a = 48, b = 18
2. 1회 반복:
temp = 18(b)
b = 48(a) % 18(b) = 12(a / b를 했을때 나머지값)
a = 18(b)
3. 2회 반복:
temp = 12(b)
b = 18(a) % 12(b) = 6
a = 12(b)
4. 3회 반복:
temp = 6(b)
b = 12(a) % 6(b) = 0
a = 6
5. 루프 종료: b가 0이 되어, 함수는 a = 6를 반환합니다.

이렇게 하니 비로소 그제서야 이해를 하게 되었다… 해당 공식이 최대공약수를 구하는 공식이다.


솔직히 수학적 공식은 머리로 이해하면 더 잘 외워지는데 그냥 외워버리는게 오히려 맘편할 수 있을 것 같다.

> 문제풀이 결과에 대해…  
> 내멋대로 코드 또한 GPT가 리팩토링 하기 전에 로직을 실행 시켜보았지만, 통과하긴했다  
> 무척 비효율 적인 방식이지만 정답은 정답이었다. 실행되기만 하면 통과(?)

정답은 맞췄으나, 뭔가 좀 더 짧고 효율적이게 작성하는 방법이 없을까에 대해서 GPT한테 물어보았다.


# 간결한 코드

- 예시 1

```javascript
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const solution = (numer1, denom1, numer2, denom2) => {
    const num = numer1 * denom1 + numer2 * denom2,
			    den = denom1 * denom2;
    return [num / gcd(num, den), den / gcd(num, den)];
};
```

- 예시 2

```javascript
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const solution = (numer1, denom1, numer2, denom2) => {[
	(numer1 * denom2 + numer2 * denom1) / gcd(numer1 * denom2 + numer2 * denom1, denom1 * denom2),
	denom1 * denom2 / gcd(numer1 * denom2 + numer2 * denom1, denom1 * denom2)
]};
```


그나마 사람이 알아보기 쉬운게 **예시 1** 인 것 같다.


해당 두 예시에서는 GCD를 구하는 식에

- 화살표 함수
- 삼항 연산자
- 재귀 호출

이 세가지가 전부 포함되어있다.   컴퓨터 언어에서는 0이 곧 false이기 때문에 해당 방식을 이용한 코드 인 것 같다.


## 해석

- b가 0이 아닐 때까지 재귀적으로 호출되어 b가 0(false)이 되었을 때의 a가 GCD가 된다.

# 마치며…


진짜 프로그래머스에서 해당 문제를 풀고, 다른 사람들이 작성한 코드들을 보면서 감탄을 금치못했다..


프로그래밍 언어 고인물 쯤 되어야 이정도 할 수 있겠구나 라는 생각이 들었다.


다음에 이런 류의 문제가 나온다면, 처음에는 풀어서 작성한 후 리팩토링을 최대한 해보는게 좋을 것같다.


리팩토링 과정에서 생각을 많이 해야겠지만 계속 하다보면 효율 좋은 코드를 바로 작성하게 되는 날이 올 수 있겠지 싶다..


## 최빈값 구하기(⭐️⭐️⭐️⭐️⭐️)

# 문제

> 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 `array`가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

## 제한사항

- 0 < `array`의 길이 < 100
- 0 ≤ `array`의 원소 < 1000

## 입출력의 예


| array              | result |
| ------------------ | ------ |
| [1, 2, 3, 3, 3, 4] | 3      |
| [1, 1, 2, 2]       | -1     |
| [1]                | 1      |


---


# 풀이


```javascript
function solution(array) {
    const frequencyMap = new Map();

    // 각 숫자의 빈도수 계산
    for (const num of array) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // 최빈값과 그 빈도수 찾기
    let maxFrequency = 0;
    let mode = null;
    let isDuplicate = false;

    for (const [num, freq] of frequencyMap) {
        if (freq > maxFrequency) {
            maxFrequency = freq;
            mode = num;
            isDuplicate = false; // 새로운 최빈값 발견, 중복 플래그 초기화
        } else if (freq === maxFrequency) {
            isDuplicate = true; // 최빈값 중복 발견
        }
    }

    // 중복된 최빈값이 있는 경우 -1 반환
    return isDuplicate ? -1 : mode;
}
```


## 설명


```javascript
const frequencyMap = new Map();
```

- 숫자와 그 빈도수를 저장할 `Map` 객체를 생성합니다.
- 이 객체는 각 숫자의 등장 횟수를 저장하는 데 사용됩니다.

```javascript
for (const num of array) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
}
```

- **`frequencyMap.set(key, value)`** **:** **`Map`** 객체에 새로운 키-값 쌍을 추가하거나, 이미 존재하는 키에 대한 값을 업데이트합니다.
- **`frequencyMap.get(num)`** : **`num`**이라는 키에 해당하는 값을 가져옵니다. 만약 **`num`**이 **`frequencyMap`**에 존재하지 않으면 undefined를 반환합니다.
- **`|| 0`**: 현재 빈도수가 undefined일 경우 0으로 초기화합니다.
- **`+ 1`**은 현재 빈도수에 1을 더하여 업데이트합니다. 이렇게 하면 각 숫자의 등장 횟수를 세게 됩니다.

```javascript
let maxFrequency = 0;
    let mode = null;
    let isDuplicate = false;
```

- **`maxFrequency`**: 현재까지 발견된 가장 높은 빈도수를 저장합니다.
- **`mode`**: 현재 최빈값을 저장합니다.
- **`isDuplicate`**: 최빈값이 여러 개인지를 확인하기 위한 플래그입니다.

```javascript
for (const [num, freq] of frequencyMap) {
        if (freq > maxFrequency) {
            maxFrequency = freq;
            mode = num;
            isDuplicate = false; // 새로운 최빈값 발견, 중복 플래그 초기화
        } else if (freq === maxFrequency) {
            isDuplicate = true; // 최빈값 중복 발견
        }
    }
```

- **`for (const [num, freq] of frequencyMap)`**
    - `Map`의 각 키-값 쌍을 순회합니다. 여기서 **`num`**은 숫자, **`freq`**는 해당 숫자의 빈도수입니다.
- **`if (freq > maxFrequency)`**
    - 현재 빈도수가 최대 빈도수보다 크면
        - **`maxFrequency`**를 현재 빈도수로 업데이트합니다.
        - **`mode`**를 현재 숫자로 업데이트합니다.
        - **`isDuplicate`**를 **`false`**로 설정하여 **중복이 없음을 표시**합니다.
- **`else if (freq === maxFrequency)`**
    - **현재 빈도수**가 **최대 빈도수**와 같으면 **`isDuplicate`**를 **`true`**로 설정하여 **중복이 발생했음을 표시**합니다

```javascript
return isDuplicate ? -1 : mode;
```

- **`isDuplicate`**가 **`true`**인 경우 -1을 반환하여 최빈값이 여러 개임을 나타냅니다.
- **`false`**인 경우 **`mode`**(최빈값)를 반환합니다.

---


# 알아야하는 것


## 배열 메서드

1. `forEach()`: 배열의 각 요소에 대해 주어진 함수를 실행합니다.
2. `filter()`: 특정 조건을 만족하는 요소들로 새로운 배열을 생성합니다.
3. `map()`: 배열의 각 요소를 변환하여 새로운 배열을 만듭니다.
4. `indexOf()`: 배열에서 특정 요소의 첫 번째 인덱스를 반환합니다.
5. **`Map`** **객체**
    1. `Map`: 키-값 쌍을 저장할 수 있는 객체입니다.
        1. `set(key, value)`: 키와 값을 추가하거나 수정합니다.
        2. `get(key)`: 해당 키의 값을 반환합니다.
        3. `has(key)`: 특정 키가 존재하는지 확인합니다.
        4. `entries()`: [key, value] 쌍의 이터레이터를 반환합니다.

## **최빈값(Mode) 개념**

1. **최빈값**: 주어진 데이터에서 가장 자주 나타나는 값입니다.
2. 최빈값이 여러 개인 경우 처리 방법을 이해해야 합니다.

## 고차 함수

1. 고차 함수는 **다른 함수를 인자로 받거나, 함수를 반환하는 함수를 의미**합니다.
JavaScript에서는 함수가 일급 객체이기 때문에, 함수를 변수에 할당하거나, 다른 함수의 인자로 전달할 수 있습니다.
    1. **함수를 인자로 받는 함수**
        1. 고차 함수는 다른 함수를 매개변수로 받아서 실행할 수 있습니다. 예를 들어, `Array.prototype.map`, `Array.prototype.filter`, `Array.prototype.reduce` 등의 메서드는 모두 함수를 인자로 받습니다.
    2. **함수를 반환하는 함수**
        1. 고차 함수는 내부에서 새로운 함수를 생성하여 반환할 수 있습니다. 이를 통해 클로저(closure)와 같은 고급 개념을 활용할 수 있습니다.

#  `at()` 메서드

> **`at()`** 메서드는 JavaScript의 배열(Array)과 문자열(String)에서 사용되는 메서드로, 주어진 인덱스에 위치한 요소를 반환합니다. 이 메서드는 음수 인덱스를 지원하여, 배열의 끝에서부터 요소를 참조할 수 있는 기능이 특징입니다.

## `array.at(idx)` 메서드와 `array[idx]`의 차이

- 양수 인덱스에 대해서는 동일한 결과를 반환함
- 음수 인덱스
    - **`array[idx]`** : 음수 인덱스를 지원하지않음. 음수인 경우 `undefind` 반환
    - **`array.at(idx)`** : 음수 인덱스를 사용하여 배열의 끝에서부터 요소를 참조할 수 있음

### 예제


```javascript
const numbers = [10, 20, 30, 40, 50];

console.log(numbers[0]);        // 10
console.log(numbers.at(0));     // 10

console.log(numbers[4]);        // 50
console.log(numbers.at(4));     // 50

console.log(numbers[-1]);       // undefined
console.log(numbers.at(-1));    // 50

console.log(numbers[5]);        // undefined
console.log(numbers.at(5));     // undefined
```


# `replaceAll()`

> replaceAll() 메서드는 JavaScript에서 문자열의 특정 부분을 다른 문자열로 바꾸는 데 사용됩니다. 이 메서드는 지정된 문자열을 모두 찾아서 새로운 문자열로 대체합니다.

```javascript
string.replaceAll(searchValue, newValue);
```


## 특징

1. **모두 대체**: replaceAll() 메서드는 문자열 내에서 searchValue에 해당하는 모든 인스턴스를 찾아서 newValue로 변경합니다.
2. **정규 표현식 지원**: 정규 표현식을 사용하여 패턴을 지정할 수 있으며, 이 경우 /g 플래그가 필요 없습니다.
3. **불변성**: 이 메서드는 원본 문자열을 변경하지 않고 새로운 문자열을 반환합니다.

## 실무에서의 clean code

![image](https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb)


# 클린 코드의 의의

- 협업을 위한 코드
    - **지뢰 코드** : 흐름 파악이 어렵다, 동료에게 물어봐야만 알 수 있는 코드
        - 개발 할 때 병목
        - 유지 보수 시간 소요
        - 심하면 **기능 추가 불가능**
    - **클린 코드** : 유지보수 _시간의 단축_, 코드 파악, 디버깅, 코드 리뷰, <u>**시간 = 자원 = 돈**</u>
- 함수 단일 책임 원칙
    - 하나의 함수는 하나의 역할 또는 책임만 가져야하는 원칙
    - 코드가 변경되거나 확장될 때, 한 부분만 수정하면 되기 때문에 유지보수가 용이함
    - 함수가 재사용 가능해지며, 다른 곳에서도 쉽게 활용할 수 있습니다.

성능에서는 display : none 보다는 opacity를 써주는 게 좋다.


# 순수 함수란?

1. 항상 동일한 입력에 대해 **동일한 출력**을 반환한다.
2. 외부 상태를 변경하지 않으며, **외부 상태에 의존하지 않는다.**

# DOM 조작 함수가 순수 함수가 될 수 없는 이유?

- DOM 조작 함수는 HTML 요소를 **수정**하거나 **새로운 요소를 추가**하는 등의 작업을 수행하는데, 이는 외부 상태(즉, 웹 페이지의 DOM)를 변경하기 때문에
- 순수 함수는 외부 상태를 변경하지 않지만, DOM 조작 함수는 특정 DOM 요소의 **텍스트, 스타일, 속성 등을 변경**하여 부작용을 발생시킨다.
- 외부 상태(DOM)를 조작하기 때문에, 동일한 입력을 주어도 DOM의 현재 상태에 따라 다른 결과가 나올 수 있다.

```javascript
function changeElementText(element, newText) {
  element.textContent = newText;
}
```


위 코드로 미루어보았을때, element와 newText에 어떤 값을 받느냐에 따라 DOM에 그려지는 형태가 달라지기 때문에 순수 함수에 포함 되지 않는다.



# 추상화란 무엇인가?


# 추상화

- 추상화는 복잡한 세부 사항을 감추고 사용자가 더 높은 수준의 코드에만 집중할 수 있도록 하는 기법.

## 함수 추상화

- 함수를 호출한 사람은 함수가 **어떻게 동작하는지**를 몰라도 되고, <u>**어떤 입력이 필요한지와 어떤 출력이 나오는지**</u>만 알면 된다.

## 모듈화

- 복잡한 코드를 여러 모듈로 나누어, **각 모듈이 특정 기능을 담당**하게 하고, 이를 다른 모듈에서 **재사용** 할 수 있게 한다.
- 각 모듈은 내부 구현을 감추고, 외부에 **필요한 함수나 객체만 노출하여 높은 수준의 추상화를 제공**합니다.

## 고차 함수

- 고차 함수는 특정 로직을 캡슐화하고, 나머지는 함수로 전달하여 추상화를 강화한다.

### 고차 함수 예시 코드


```javascript
function withLogging(fn) {
  return function(...args) {
    console.log(`함수 ${fn.name}이(가) 호출되었습니다.`);
    return fn(...args);
  }
}

function sum(a, b) {
  return a + b;
}

const loggedSum = withLogging(sum);
console.log(loggedSum(3, 4)); // 함수 sum이(가) 호출되었습니다. 7
```


## Promise와 async/await


```javascript
async function fetchData() {
  try {
    const response = await fetch('<https://api.example.com/data>');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('에러 발생:', error);
  }
}

fetchData();
```


## 객체 지향 추상화 (클래스와 객체)


```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  startEngine() {
    console.log(`${this.brand} ${this.model}의 엔진이 시작됩니다.`);
  }
}

const myCar = new Car('Tesla', 'Model 3');
myCar.startEngine(); // Tesla Model 3의 엔진이 시작됩니다.
```


## 리액트의 파일구조

# 리액트의 권장 폴더 구조


```javascript
/src
	/assets
	/components
		/login
		/ietms
		/common
	/hooks
	/pages
		login.jsx
		items.jsx
	/services
	/utils
	/store(or /redux)
	index.js
	App.js
```

- **`Next.js`**는 폴더 기준으로 라우트를 생성 해야한다.
> 컴포넌트 파일은 **`jsx`**로 작성하고,  utils 등 이벤트 핸들러나 js 함수만 있을 경우에는 **`js`**로 표기하는게 보기 더 좋다

# state의 원칙

1. state 최소화 할 것 ⇒ DRY(Don’t Repeat Yourself) 원칙을 지켜라

## 실무자처럼 개발자도구 보기
- 브라우저 렌더링 프로세스
    1. HTML 파싱(DOM : document object model)
    2. CSS 파싱(CSSOM : CSS object model)
    3. 렌더링(render tree) : 페이지를 렌더 하는데 필요한 노드만 포함시킴
        1. display : none; ⇒ 포함안됨
        2. opcity : 0 ⇒ 포함됨
    4. 레이아웃 :  veiw port ⇒ 뷰포트에 그려지는 위치를 계산
    5. painting : 픽셀 변환해서 화면에 그려줌
- 렌더링 엔진
    - 브라우저 마다 사용하는 렌더링 엔진이 다르다

# reflow

> 생성된 dom 노드의 레이아웃 수치가 변경되면 영향 받은 모든 노드의 수치를 다시 계산하여 렌더트리를 재생성하는 과정
- 창 크기 조정, 글꼴 변경 등

# repaint

> render tree가 탐색되고  paint 메서드가 호출되어 화면을 그리는 과정
- repaint가 이루어지기 위해서는 renderTree가 있어야하고, reflow 작업이 이루어진 후에 재생성된 렌더 트리를 다시 그리게 되는 과정인 repaint 작업이 이루어진다.
- 가시성이 변경되는 순간(시각적 요소)

성능확인 할때 개발자도구 성능부분 확인


녹화버튼 누르고 실행


display, visibility, opacity 별로 각 차이가 있다.


opacity, transform, trasiton은 렌더링 엔진의 GPU를 사용한다.


## 리액트는 선언형 프로그램이다

JS 명령형 vs 리액트 선언형


과정을 신경쓰지 않고 원하는 것 만 신경쓰면 된다.


약간 부트 스트랩 같은 라이브러리의 형식을 띄고있다.


디자인 템플릿을 만든다고 생각하면 됨.


디자인 컴포넌트 가이드


state는 가장 최소의 상태를 가져야한다.


state는 최대한 정리해서, 같이 사용할수있는 상태는 같이 사용한다.


## React Hooks

# 왜 state를 사용하나요?

1. 렌더링 사이에 데이터를 유지
2. React가 새데이터로 컴포넌트를 렌더링 하도록 트리거
3. state는 react의 메모리
4. **state 변경은 컴포넌트 렌더링을 트리거해주는 역할을 한다.**

## 로컬 변수는

1. 렌더링 사이에 지속되지않는다.
2. 로컬 변수 변경은 렌더링을 트리거하지않는다.

## react의 render process

1. **trigger**
    1. Initial render
    2. state update
2. **render**
    1. dom node 생성
    2. 변경사항 계산
3. **commit**
    1. appendChild()
    2. 변경사항 적용

### batching : 모아서 처리한다.


리액트에서는 같은 set함수를 여러번 실행하면 한번에 모아서 실행하게된다.

1. state 변경은 새로운 렌더링을 트리거
2. react는 state를 컴포넌트 외부에 저장
3. useState를 호출하면 해당렌더링에 대한 state의 스냅샷제공
4. 모든 렌더링 react가 해당 렌더링에 제공한 state의 스냅샷만본다
    1. 업데이트 된 state는 다음 렌더링에 반영
5. react는 모든 이벤트 핸들러가 종료된 후 state를 업데이트 한다(= batching)

# useEffect의 정의

- 외부 시스템과 동기화 할 수 있게 해주는 Hook
- 컴포넌트 렌더링 후에 실행
- 렌더링 자체에 의해 발생하는 사이드 이펙트

## useReducer 

```javascript
const [state, dispatch] = useReducer(reducer, initialaArg, init?)
```

- **`reducer`** : 상태가 어떻게 업데이트 되는지 지정하는 함수
    - 순수 함수이어야 하며, 상태와 액션을 인자를 받아 다음 상태를 반환
    - 상태와 액션은 어떤 타입이든 올 수 있다.
- **`dispatch`** : 파견하다.

## `Reducer`로 변환을 할 때


유저가 어떤 행동을 했는지에 대해서 생각을 해야한다. ⇒ **액션**


## useState vs useReducer

- **코드 크기** : 간단한 상태라면 useState가 훨신 낫다. 하지만 관리해야하는 state가 많다면 useReducer로
- **가독성** : 업데이트가 복잡해지면 컴포넌트의 볼륨이 커져 스캔이 어려워질수있음
업데이트 로직(어떻게)과 이벤트 핸들러에서 일어난 일(무엇)이 분리되어 깔끔하게 관리가 가능
- **디버깅** : 디버깅할때도 useReducer를 사용하면 리듀서 로직 자체를 확인하면 되니 훨신 쉽다
- **테스트** : 순수 함수로 별도로 내보내서 독립적으로 테스트 할 수 있음
- **개인적 선호**: 취향 차이 이다.

## 주의할 점

- **순수함수로 작성할 것** : 사이드 이펙트를 수행해서는 안됨. 객체와 배열의 불변성을 지켜줘야함
- 각 액션은 하나의 user interaction 을 나타내야한다. 데이터의 여러 변경을 초래할지라도 액션은 하나여야한다.

## 팀프로젝트 팁

# useContext

- 전역 상태 관리 API

## 리액트 디자인 패턴
- 추천 사이트 ([https://patterns-dev-kr.github.io/](https://patterns-dev-kr.github.io/))

## 실무에서 많이 쓰이는 디자인 패턴


### render props 패턴

- 컴포넌트를 만들때 어떤 값이 들어올지 모를때 개발자가 자유롭게 작성할수있게끔 하는 디자인 패턴
- 함수를 props로 받아서 전달해준다.
- children을 사용하는것과 효과는 같다. 하지만 렌더는 함수형이고 children은 jsx 그 자체를 받는다는 차이가 있다.
- 의존성이 느슨하기 위한 패턴이다.
- 장점
    - 컴포넌트를 유연하게 구성할 수 있다.
    - 부모컴포넌트에서 정의할 수 있다.
    - 재사용성 증가
    - 가독성이 좋다 : 부모 컴포넌트에 어떤 자식요소 컴포넌트를 가지고 있는지 한번에 볼 수 있다.
    - 조금 더 복잡한 분기처리가 필요한 UI를 다룰 때 children 보다 사용에 장점이 될 수 있다.
    - 좀 오래된 패턴이라서 children 패턴을 자주 사용하는 편이긴 하다.
    - props 드릴링을 막기 위해서 해당 패턴을 사용하기도 한다.

### compound 패턴 & 커스텀 Hoos 패턴

- 디자인 컴포넌트에 자주 쓰이는 패턴
- 입맛대로 사용자가 유저가 수정할 수 있다.
- 장점
    - 구성요소를 유연하게 구성할 수 있다.
    - 묶음 컴포넌트의 구조를 명확하게 표현할 수 있다. ⇒ 가독성도 좋아진다.
    - 베리에이션이 많은 컴포넌트에 사용한다.
- **커스텀 훅**과 결합하여 사용하면 좋다. **공통적인 로직을 커스텀 훅**으로 만들어서 사용하면 좋다.

```javascript
// 대체적인 파일의 구조
Counter
	- hook
	- components
```


