//2.대부분의 경우 this 의 값은 함수를 호출한 방법에 의해 결정된다. */

function printThis() {
    //호출한 객체가 없기 때문에 여기서 this 는  default 값으로 =>window 
    console.log("this : ", this === window, this);
}

printThis();


let person1 = {
    name: "홍길동1",
    printThis: printThis,
};
person1.printThis();


let person2 = {
    name: "홍길동2",
    printThis: printThis,
};
person2.printThis();


let person3 = {
    name: "홍길동3",
    printThis: printThis,
};
person3.printThis();

