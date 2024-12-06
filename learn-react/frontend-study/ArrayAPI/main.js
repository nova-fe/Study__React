/**
 * reduce() 메서드
 * - 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환
 */

import { numbers2, fruits } from "./data.js";

/**
 * - 누적 값 (acc)
  - 현재 값 (cur)
  - 현재 인덱스 (idx)
  - 원본 배열 (src)
  - 기본값 (reduce(()=>{}, 값))
 */

// * 누적합 구하기
const result = numbers2.reduce((acc, cur, idx) => {
  console.log("acc: ", acc, "cur: ", cur, "idx", idx);
  return acc + cur;
  // acc:  1 cur:  5 idx 0
  // acc:  6 cur:  2 idx 1
  // acc:  8 cur:  7 idx 2
  // acc:  15 cur:  5 idx 3
  // acc:  20 cur:  4 idx 4
}, 1);

console.log(result); // 24

// * 중복된 과일 제거하기
const resultFruits = fruits.reduce((acc, cur) => {
  if (acc.includes(cur) === false) {
    // 누적값에 현재값이 포함되어있지 않을 경우
    acc.push(cur); // 새 값(현재값)을 배열에 추가
  }
  return acc;
}, []);
console.log(resultFruits); // (5)['사과', '딸기', '배', '참외', '수박']
// * 중복값이었던 딸기를 뺀 배열이 반환된다!
