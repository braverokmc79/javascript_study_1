"use strict";

import { numbers, Student, students, fluits } from './data.js';

//ECMA에는 "주어진 배열의 값들을 오름차순으로 접근해 callbackfn을 통해 true를 반환하는 요소를 기준으로 신규 배열을 만들어 반환한다"

console.log("짝수만 출력해주세요.",
    numbers.filter(number => number % 2 === 0)
);
//짝수만 출력해주세요. (3) [2, 4, 6]



console.log("홀수만 출력해주세요.",
    numbers.filter(number => number % 2 === 1)
);
//홀수만 출력해주세요. (4) [1, 3, 5, 7]


console.log(
    "영어점수가 90점 이상인 학생들은?",
    students.filter((Student) => Student.english >= 90)
);

//영어점수가 90점 이상인 학생들은 ?
//    [Student]0: Student { name: '김길동', koreaLanguage: 67, english: 92, mathematics: 55 } length: 1[[Prototype]]: Array(0)
