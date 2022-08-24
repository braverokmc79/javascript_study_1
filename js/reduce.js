"use strict";

import { numbers, Student, students, fluits } from './data.js';

//reduce()** **메서드는 배열의 각 요소에 대해 주어진 **리듀서**(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
// 리듀서 함수는 네 개의 인자를 가집니다.

// 1.누산기(acc)  accumulator
// 2.현재 값(cur)  currentValue
// 3.현재 인덱스(idx)  currentIndex
// 4.원본 배열(src)  array

//reduce()는 빈 요소를 제외하고 배열 내에 존재하는 각 요소에 대해 callback 함수를 한 번씩 실행하는데, 콜백 함수는 다음의 네 인수를 받습니다:

console.log("reduce",
    [0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, currentIndex, array) {
        return accumulator + currentValue;
    })
);

//출력 =>
//reduce 10

// 콜백은 4번 호출됩니다.각 호출의 인수와 반환값은 다음과 같습니다.

// callback	accumulator	currentValue	currentIndex    	array	            반환 값
// 1번째 호출	0	        1	            1           [0, 1, 2, 3, 4]	            1
// 2번째 호출	1	        2	            2           [0, 1, 2, 3, 4]	            3
// 3번째 호출	3	        3	            3           [0, 1, 2, 3, 4]	            6
// 4번째 호출	6	        4	            4           [0, 1, 2, 3, 4]         	10
// reduce()가 반환하는 값으로는 마지막 콜백 호출의 반환값(10)을 사용합니다.



const result = numbers.reduce((acc, cur, idx, src) => {
    console.log("acc:", acc, "cur: ", cur, " idx: ", idx);
    return acc + cur;
}, 0);

console.log("result : ", result);
// acc: 0 cur: 1  idx: 0
// acc: 1 cur: 2  idx: 1
// acc: 3 cur: 3  idx: 2
// acc: 6 cur: 4  idx: 3
// acc: 10 cur: 5  idx: 4
// acc: 15 cur: 6  idx: 5
// acc: 21 cur: 7  idx: 6
//result: 28

console.log("fluits : ", fluits);
//중복된 값 제거
const result2 = fluits.reduce((acc, cur) => {
    console.log("acc : ", acc, "cur :", cur);
    if (acc.includes(cur) === false) {
        acc.push(cur);
    }
    return acc;
}, []);
console.log("result2 ", result2);

// fluits: (6)['사과', '딸기', '배', '참외', '딸기', '수박']
// acc: [] cur: 사과
// acc: ['사과'] cur: 딸기
// acc: (2)['사과', '딸기'] cur: 배
// acc: (3)['사과', '딸기', '배'] cur: 참외
// acc: (4)['사과', '딸기', '배', '참외'] cur: 딸기
// acc: (4)['사과', '딸기', '배', '참외'] cur: 수박
// result2(5)['사과', '딸기', '배', '참외', '수박']