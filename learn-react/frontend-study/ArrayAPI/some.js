/**
 * some() 메서드
 * - 배열 안의 어떤 요소라도 주어진 조건(판별 함수)를 통과하는지 테스트
 */

import { numbers, students, fruits } from "./data.js";

console.log(
  "과일 중에 배가 있나요?",
  fruits.some((fruit) => {
    return fruit === "배";
  }),
);

console.log(
  "숫자 중에 7 이상인 숫자가 있나요?",
  numbers.some((number) => {
    return number >= 7;
  }),
);

console.log(
  "국어 점수가 100점인 학생이 있나요?",
  students.some((student) => {
    return student.koreanLanguage === 100;
  }),
);
