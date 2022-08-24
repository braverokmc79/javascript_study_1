"use strict";

import { numbers, Student, students, fluits } from './data.js';


// every 함수는 배열의 모든 요소가 callbackFunction 에서 true를 리턴해야 true를 리턴,
// 하나라도 false가 떨어지면 false를 리턴합니다.
//array.every(callbackFunction(currentValue, index, array), thisArg)
// 구문은 filter, map과 같습니다.
// callbackFunction, thisArg 두개의 매개변수를 갖고,
// callbackFunction은
// currentValue: 배열의 현재 값
// index: 배열의 현재 값의 인덱스
// array: 현재 배열
// thisArg: this값으로 활용될 것 입니다.

console.log("숫자가 모두 8이하 인가요?",
    numbers.every((number) => number <= 8)
);

//숫자가 모두 8이하 인가요 ? true



console.log("학생들이 수학 점수가 80점 이상인가요?",
    students.every((student) => student.mathematics <= 80)
)

//학생들이 수학 점수가 80점 이상인가요 ? false

