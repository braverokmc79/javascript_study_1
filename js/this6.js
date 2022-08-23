
'use strict'
//8.this 기본값은 window 이나 strict 모드를 선언하면 undefined 가 기본값이 된다.
function printThis() {
    console.log("this : ", this === window, this);
}
printThis();

//this :  false undefined