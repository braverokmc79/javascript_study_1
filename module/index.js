//////////////////////////////////////////////////
//////      1. 구조 분해 로 import ///////////////
//////////////////////////////////////////////////
//import { perfectScore, sum, avg } from './math.js';
// console.log('perfectScore: ', perfectScore);
// console.log('sum: ', sum(80, 10));
// console.log('avg: ', avg(80, 90));



//////////////////////////////////////////////////
//////  2.all  as 로 임의 변수설정 import /////////
//////////////////////////////////////////////////
// import * as math from './math.js';
// console.log('perfectScore: ', math.perfectScore);
// console.log('sum: ', math.sum(80, 10));
// console.log('avg: ', math.avg(80, 90));




//////////////////////////////////////////////////
//3.defualt 인경우 구조분해 없이 직접 지정이 가능하며,
// 임의로 변수명을 지정할수 있다. /////////////////
//////////////////////////////////////////////////
// import subtract2 from "./math.js";
// console.log('subtract: ', subtract2(80, 90));
//subtract:  -10



//////////////////////////////////////////////////
//////4. export 유형2방벙으로 import 받기///////////
//////////////////////////////////////////////////
import math from "./math.js";
console.log('subtract: ', math.subtract(80, 90));