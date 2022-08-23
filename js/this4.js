
//5.setTimeout 내에서서 this 는 window 가 된다.
//6.bind 처리시 person 이 this가 된다.
let person = {
    name: "짐코딩",
    age: 20,
    hello: function () {


        setTimeout(function () {
            console.log("1.this : ", this === window, this);
        }, 1000);

        setTimeout((function () {
            console.log("2.this : ", this === window, this);
        }).bind(this), 1000);

        function printHello() {
            console.log("3.this : ", this === window, this);
        }

        setTimeout(printHello.bind(this), 1000);

    }
}

person.hello();

//출력=>
//1.this : true Window { window: Window, self: Window, document: document, name: '', location: Location, … }
//2.this : false { name: '짐코딩', age: 20, hello: ƒ }
//3.this : false { name: '짐코딩', age: 20, hello: ƒ }