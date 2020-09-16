"use strict";

// Function 
// - fundamental buliding block in the program = 프로그래을 구성하는 기본적인 빌딩블럭
// - subprogram can be used mulitiple times = 서브프로그램이라고 불리며, 여러번 재사용이 가능하다. 
// - performs a task or calculates a value = 한가지의 작업이나, 값을 계산하기 위해 사용된다.


// function을 어떻게 선언할 수 있는지에 대한 방법

// 1. Function decalaration (자바스크립트에서의 function 정의)
// function name(param1, param2) { boay... return;}
// one function === one thing (하나의 함수는 한가지의 일만 하도록 만들어야 한다.)
// naming : doSomething, command, verb
// ex) crateCardAndPoint -> createCard, createPoint (함수안에서 너무 많은 일을 하고 있는건 아닌지 생각할 필요가 있다. 하나의 함수는 한가지의 일만 하도록 만들어야 한다.)
// function is object in JS (자바스크립트에서 function은 object다. 그렇기 때문에 변수에 할당할 수도 있고, 인자(파라미터)로 전달이 되고, 함수를 리턴(return)할수도 있다.)
function printHello() {
    console.log('hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('정신차려');
log(254893);
// 자바스크립트에서는 type이 없기 때문에 힘수자체를 봤을때 message가 string인지 number인지 명확하지가 않다.
// 숫자가 문자열로 변환이 되어서 나온다. 

// TypeScript
// function log(message: string) : number {
//  console.log(message);
//  return 0;
// }
// TypeScript에서는 파라미터나 리턴에 타입(type)을 명시해야 한다.
// 규모있는 프로젝트나 현업에서 다양한 개발자들과 일을 할때, 작성한 형태를 나중에 라이브러리로 API로 제공해야 할때, TypeScript를 쓰는게 조금 더 명확하고, 개발일을 조금 더 쉽게 만들어준다. 함수의 interface만 딱 봐도 정확하게 무엇을 하는 함수인지(함수의 이름, 전달되야 하는 파라미터와 파라미터의 데이터 타입, 어떤 값이 리턴되어야 하는지에 대한 확실한 값.) 확실하게 확인을 할 수 있다.
// 자바스크립트에서는 함수의 interface가 정확히 명시가 되어있지 않기 때문에, 프로그래밍을 만들때 문제가 생긴다.(그래서 보완된 것이 TypeScript)

// 2. Parameters (파라미터=인자)
// premitive parameters: passed by value => memory에 value가 그대로 저장되어 있기 때문에 value가 전달이 된다. 
// object parameters: passed by reference => memory에 ref가 저장이 되어진다. 그래서 ref가 전달이 되어진다. 함수 안에서 obj의 값을 변경하게 되면 그 변경된 사항이 그대로 메모리에 적용이 되기 때문에 추후에 변경된 사항들이 확인이 가능하다. 
function changeName(obj) {
    obj.name = 'coder';
}// 전달된 obj(object)에 .name(이름)을 무조건 변경하는 함수.
const byju = { name: 'byju'};
changeName(byju);
console.log(byju);

// 3. Default parameters (added in ES6)
function showMessage(message, from) {
    console.log(`${message} by ${from}`);
}
showMessage('Hello!!');

function viewLink(link, to) {
    if(to === undefined) {
        to = 'unknown';
    }
    console.log(`${link} by ${to}`);
}
viewLink('Hi!!'); // ES6이전 까지 쓰던 방법

function lookDirect(direct, who = 'unknown') {
    console.log(`${direct} by ${who}`);
}
lookDirect('WhatheFxxk!!')// 파라미터 옆에다가 원하는 default값을 지정해 놓으면 사용자가 파라미터를 전달하지 않을때 default값이 사용되어진다.

// 4. Rest parameters (added in ES6) => ...을 작성하면 Rest parameters라고 불린다. 배열형태로 전달이 된다.
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    // 더 간단하게, args에 있는 모든 값들이 차례차레 대로 하나씩 arg로 지정이 된다. 
    for (const arg of args) {
        console.log(arg);
    }

    // 완전 더 간단하데, 배열에 forEach라는 함수형 언어를 사용.
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'byju');

// 5. Local scope "밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다."
// 중첩된 함수에서 자식의 함수가 부모의 함수에서 정의된 변수들에 접근이 가능한 것들이 closer.
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello'; // local variable => 지역변수는 지역적이기 때문에 {}안에서만 접근이 가능하다.
    console.log(message); 
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'Hi!!'
    }
    // console.log(childMessage); -> error 발생
    return undefined;
}
printMessage();
// console.log(message); -> error 발생

// 6. Return a value
// 함수에서는 파라미터들로 값들을 전달 받아서 계산된 값을 리턴할 수가 있다. 
// return값들이 따로 정해저 있지 않은 것들은 "return undefined;" 라는 값이다. (생략가능), 따라서 모든 함수에는 return undefined; 이거나, return값을 정해 놓는다. 
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // => 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    } // block 안에서 logic을 작성하게 되면 가독성이 많이 떨어진다.
}

// good 
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }// 조건이 맞지 않을때는 빨리 리턴을 해서 함수를 종료하고, 
    // long upgrade logic... 조건이 맞을때만 와서 필요한 logic들을 실행하는 것이 더 좋다.
    // 조건이 맞지 않을때, 값이 undefined일 때, 값이 -1인 경우에 빨리 리턴을하고 필요한 logic을 그 뒤에 작성하는 것이 더 좋다. 
}

// ------------------------------------------------------------------------------------------------------------------------------------

// ()

// first-class function
// functions are treated like any other variable. => function은 다른 변수와 마찬가지
// can be assigned as a value to variable => 변수에 할당이 된다.
// can be passed as an argument to other functions. => function의 파라미터로 전달이 된다.
// cna be returned by another function => return값으로도 return이 된다.

// 1. Function expression (first-class function을 가능하게 만드는 것.)
// a function declaration can be called earier than it is defined. (hoisted)
// a function expression is created when the execution reaches it. => function declaration과 function expression의 가장 큰 차이점은 function expression은 할당된 다음 부터 호출이 가능한 반면에, function declaration은 hoisted가 된다. 그 말인 즉슨 함수가 선언되기 이전에 호출이 가능하다. 이것은 자바스크립트 엔진이 선언된 것을 제일 위로 올려주기 때문이다. 

// print(); -> error이 뜬다. (선언하기 전에 호출했기 때문)
const print = function () { // 함수를 선언함과 동시에 'print'라는 변수에 할당 -> 함수에 이름이 없는 것을 = anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) { // printYes , printNo -> 콜백함수
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () { 
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces => 디버깅 할때 stack traces에 함수의 이름이 나오기 위해서 쓰는 것. 
// recursions
const printNo = function print () { 
    console.log('no!');
    // print(); -> 함수 안에서 자신 스스로 또다른 함수를 호출할 때 = recursions -> 이런 식으로 하면 프로그램이 죽으니까 이렇게 하면 안된다. 정말 필요할 때 ex) 피보나치 수열을 계산한다던지, 반복되는 평균값을 구한다 던지 할때 사용을 해야한다. (쓰임새 다양)
    // 이렇게 계속 무한대로 쌓이면 call stack size exceeded = call stack이 꽉찼다는 error가 발생. 
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// --------------------------------------------------------------------------------------------------------------------------------------

// Arrow function -> 함수를 너무 간결하게 만들어 주는 것. 함수형 프로그래밍(배열, 리스트) 같은 것을 볼때, 더욱더 빛을 발한다. 
// always anonymous -> 힝싱 이름이 없는 함수.
// const simplePrint = function () {
//     console.log(`simplePrint!`)
// };
// arrow function적용
const simplePrint = () => console.log(`simplePrint!`);

// const add = function (a, b){
//     return a + b;
// };
// arrow function적용
const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
    //do something more
    return a * b;
}; //한줄인 경우에는 {}없이 작성이 가능하지만, 함수 안에서 조금 더 다양한 일들이 필요하다면, 위와 같이 {}을 넣어서 처리할 수 있다. 대신에 {}을 쓰게 되면 "return;"이라는 키워드를 이용해서 값을 return해줘야 한다.

// IIFE : Immediately Invoked Function Expression
function hello() {
    console,log('IIFE');
}
hello(); // 함수를 선언하게 되면 나중에 hello()라고 함수를 호출해 줘야 하는데, 하지만 선언함과 동시에 바로 호출을 한다면 함수의 선언을 ()로 묶은 다음에, 함수를 호출하듯이 ();붙여주면 바로 함수가 호출 되는 것을 볼 수 있다.

(function hello() {
    console,log('IIFE');
})(); // 최근에는 잘 쓰이지 않지만 자바스크립트에서 함수를 바로바로 실행하고 싶을때 유용하게 쓸 수 있다. 

// -------------------------------------------------------------------------------------------------------------------------------------
// Fun quiz time
// function calculate(cammand, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
    // 정해진 데이터를 처리하는 경우에는 if문 보다는 switch문을 이용해서 만드는 것이 더 좋다. 
}

console.log(calculate('add', 2, 3));