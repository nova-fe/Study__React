/**
 * every() 메서드
 * - 배열 안의 모든 요소가 주어진 조건(판별 함수)를 통과하는지 테스트
 */

import { numbers, students, fruits } from "./data.js";

console.log(
  "모든 숫자가 6 이하인가요?",
  numbers.every((number) => {
    return number <= 6;
  })
);
