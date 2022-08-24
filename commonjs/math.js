////////////////////////////////////////////////////////
///////1.exports 개별적인 방법////////////////////////////
////////////////////////////////////////////////////////
// exports.perfectScore = 100;

// exports.sum = (num1, num2) => {
//     return num1 + num2;
// }
// exports.avg = (num1, num2) => {
//     return (num1 + num2) / 2;
// }
// exports.subtract = (num1, num2) => {
//     return (num1 - num2);
// }



////////////////////////////////////////////////////////
///////2.exports 하나의 객체로 내보내는 방법/////////////
////////////////////////////////////////////////////////
const perfectScore = 100;

const sum = (num1, num2) => {
    return num1 + num2;
}
const avg = (num1, num2) => {
    return (num1 + num2) / 2;
}
const subtract = (num1, num2) => {
    return (num1 - num2);
}

module.exports = {
    perfectScore,
    sum,
    avg,
    subtract
}

