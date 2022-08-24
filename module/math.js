////////////////////////////////
//////1. export 유형1////////////
////////////////////////////////
// export const perfectScore = 100;

// export const sum = (num1, num2) => {
//     return num1 + num2;
// }

// export const avg = (num1, num2) => {
//     return (num1 + num2) / 2;
// }

// const subtract = (num1, num2) => {
//     return (num1 - num2);
// }

//export default subtract;




////////////////////////////////
//////2. export 유형2////////////
////////////////////////////////
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
export default {
    perfectScore,
    sum,
    avg,
    subtract
}