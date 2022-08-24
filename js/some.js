"use strict";

import { numbers, Student, students, fluits } from './data.js';


// some 함수는 배열의 요소 중 하나라도 callbackFunction에서 true를 리턴하면 true를 리턴 합니다.
// 하나라도 false가 떨어지면 false를 리턴합니다.
//array.some(callbackFunction(currentValue, index, array), thisArg)
// 구문은 filter, map과 같습니다.
// callbackFunction, thisArg 두개의 매개변수를 갖고,
// callbackFunction은
// currentValue: 배열의 현재 값
// index: 배열의 현재 값의 인덱스
// array: 현재 배열
// thisArg: this값으로 활용될 것 입니다.


//some 함수는 요소를 순회하면서 하나라도 존재하면 true 반환 후 종료
console.log("과일 중에 배가 있나요?",
    fluits.some((fluit, index) => {
        console.log("index : ", index, "fluit: ", fluit);
        return fluit === "배"
    })
);

// index: 0 fluit: 사과
// index: 1 fluit: 딸기
// index: 2 fluit: 배
//  과일 중에 배가 있나요 ? true


console.log("숫자에 7이상이 숫자가 있나요?",
    numbers.some((number) => number >= 8)
);
// 숫자에 7이상이 숫자가 있나요 ? false


console.log("수학 점수가 100점인 학생이 있나요?",
    students.some((student) => student.mathematics === 100)
);
// 수학 점수가 100점인 학생이 있나요 ? true

console.log("영어 점수가 50점인 미만인 학생이 있나요?",
    students.some((student) => student.english < 50)
)
// 영어 점수가 50점인 미만인 학생이 있나요 ? false







