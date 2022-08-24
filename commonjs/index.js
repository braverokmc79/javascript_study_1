
//1.구조분해 방법
const { perfectScore, sum, avg, subtract } = require('./math');
console.log('1.perfectScore: ', perfectScore);
console.log('1.sum: ', sum(80, 10));
console.log('1.avg: ', avg(80, 90));
console.log('1.subtract:', subtract(80, 90));
console.log("=====================");

//2. 하나의 변수로명으로 받는 방법
const math = require('./math');
console.log('2.perfectScore: ', math.perfectScore);
console.log('2.sum: ', math.sum(80, 10));
console.log('2.avg: ', math.avg(80, 90));
console.log('2.subtract:', math.subtract(80, 90));



//commonjs 방식은 node 방식이라 node 로 실행 한다.
//node commonjs/index.js


// 출력 결과
// 1.perfectScore: 100
// 1.sum: 90
// 1.avg: 85
// 1.subtract: -10
// =====================
// 2.perfectScore:  100
// 2.sum:  90
// 2.avg:  85
// 2.subtract: -10