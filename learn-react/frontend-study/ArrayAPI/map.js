/**
 * map() 메서드
 * - 배열 내의 모든 요소에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
 */

import { numbers, students } from "./data.js";

// 배열과 map
const result = numbers.map((number) => {
  return number * 2;
});
console.log(result); // [2, 4,6,8,10,12]

// 객체와 map
console.log(
  "영어 점수",
  students.map((student) => {
    return student.english;
  })
);
