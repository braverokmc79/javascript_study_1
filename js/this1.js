
//1. this 는 호출한 놈이다  */
let person = {
    fullname: '짐코딩',
    age: 20,
    printThis: function () {
        console.log(this);
        console.log('this ==== person:', this === person);
        console.log('this ==== window:', this === window);
    }
}
person.printThis();
//출력-->
//여기서는  person 이 this 이다.
//this ==== person: true
//this ==== window: false



let printThis = person.printThis;
printThis();
//출력-->
//앞에 호출하는 객체가 없을 경우 디폴트로 window 가 this 가 된다.
//this ==== person: false
//this.js: 7 this ==== window: true


