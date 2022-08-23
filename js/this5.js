//ES6
//7.익명 함수가 아닌 화살표 함수에서  this는 자신을 포함하고 있는 외부스코프객체 this를 물려 받는다
let person = {
    name: "짐코딩",
    age: 20,
    hello: function () {

        setTimeout(() => {
            console.log("1.this : ", this === window, this);
            console.log(this.name);
            console.log(this.age);
        }, 1000);
    }
}

person.hello();

//1.this : false { name: '짐코딩', age: 20, hello: ƒ }
//짐코딩
//20