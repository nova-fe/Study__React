/**
 * filter() 메서드
 * - 주어진 조건(함수의 테스트)를 통과하는 모든 요소를 모아 새로운 배열로 반환
 */

import { numbers } from "./data.js";

console.log(
  "짝수만 배열로 반환",
  numbers.filter((number) => {
    return number % 2 === 0;
  })
);

console.log(
  "홀수만 배열로 반환",
  numbers.filter((number) => {
    return number % 2 === 1;
  })
);
