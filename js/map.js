"use strict";

import { numbers, Student, students, fluits } from './data.js';


// const result = numbers.map(function (number) {
//     return number * 2;
// });
const result = numbers.map((number) => number * 2);
console.log(result);

//(7)[2, 4, 6, 8, 10, 12, 14]

console.log("영어 점수",
    students.map((student) => student.english)
);
//영어 점수(4)[87, 82, 82, 55]

console.log("학생 이름",
    students.map((student) => student.name)
);

//학생 이름(4)['홍길동', '김길동', '고길동', '최길동']







