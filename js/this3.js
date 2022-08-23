//3.이벤트값 내에서 this  이벤트 객체값이 this 가 된다.
//4.bind 는 한번만 처리가능하며 여기서 this 는 person1 이 this 가 된다.
let btn = document.querySelector("button");
btn.addEventListener('click', function () {
    console.log("this : ", this === window, this);
    console.log("btn 이 this 인가 ?", this === btn);
});
//출력 =>
//this : false < button > 버튼​</button >
//btn 이 this 인가 ? true


//ES5 에서 this 를 설정할 수 있는 bind 메서드가 나왔다.
function printThis() {
    //호출한 객체가 없기 때문에 여기서 this 는  default 값으로 =>window 
    console.log("this : ", this === window, this);
}

//bind 는 한번만 처리가능하며 여기서 this 는 person1 이 this 가 된다.
let person1 = {
    name: "홍길동"
}
let person2 = {
    name: "김길동"
}
let printThis1 = printThis.bind(person1);
printThis1();

//bind 는 한번 만 가능 여기서 출력은 홍길동 출력
//let printThis2 = printThis1.bind(person2);
//printThis2();


