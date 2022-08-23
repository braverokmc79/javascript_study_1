//9.화살표 함수 사용 주의
//1)화살표 함수 사용 주의 예
let person = {
    name: "짐코딩",
    age: 20,
    printThis: () => {
        //여기서 this 는 화살표 상위 객체인 window 가 된다.
        console.log(this);
    }
}
person.printThis();



//2)화살표 함수 사용 주의 예
let btn = document.querySelector("button");
btn.addEventListener('click', () => {
    console.log("this : ", this === window, this);
    console.log("btn 이 this 인가 ?", this === btn);
});

//this : true Window { window: Window, self: Window, document: document, name: '', location: Location, … }
//btn 이 this 인가 ? false