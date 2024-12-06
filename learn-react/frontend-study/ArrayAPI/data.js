export const numbers = [1, 2, 3, 4, 5, 6];
export const numbers2 = [5, 2, 7, 5, 4];

export class Student {
  constructor(name, koreanLanguage, english, mathematics) {
    this.name = name;
    this.koreanLanguage = koreanLanguage;
    this.english = english;
    this.mathematics = mathematics;
  }
}

const student1 = new Student("홍길동", 100, 60, 45);
const student2 = new Student("고길동", 87, 57, 99);
const student3 = new Student("김길동", 46, 87, 70);
const student4 = new Student("최길동", 86, 52, 98);

export const students = [student1, student2, student3, student4];

export const fruits = ["사과", "딸기", "배", "참외", "딸기", "수박"];
