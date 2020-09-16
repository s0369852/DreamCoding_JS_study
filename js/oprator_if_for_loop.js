// 1. String Concatenation
console.log('my' + ' cat')
// + 기호를 사용해서 '문자열'과 '문자열'을 합해서 새로운 '문자열을 만들 수 있다.'

console.log('1' + 2);
// '문자열'에 숫자를 더하게 되면 숫자가 문자열로 변환되면서 합쳐질 수 있다.   

console.log(`string literals: 1 + 2 = ${1 + 2}`);
// ``백틱 과 ${}을 통해서 변수값을 계산해서 string으로 포함해서 문자열을 만들게 된다. string literals의 좋은 점은 중간의 줄바꿈이나, 스페이싱, 특수기호등을 쓸 때 그대로 문자열로 변환되어서 나온다.

console.log('byju\'s book')
console.log('byju\'s \n\t book')
// ``string literals`를 사용하지 않고 그냥 사용할 경우의 특수문자열 다음과 같다 ''' 겹칠경우에는 '\'', \n = 줄바꿈, \t = tab

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // mutiply
console.log(5 % 2); // remainder = 나누고 나머지 값
console.log(2 ** 3); // exponentiation = 2의 3승

// 3. Increment and decrement operators

let counter = 2; // 동일한 변수

const preIncrement = ++counter;
// counter = counter + 1; => counter에 1을 더해서 다시 counter에 할당한 다음에  preIncrement에 이 counter라는 값을 할당한다. 
// preIncrement = counter; = 3
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter; => 먼저 변수의 값(counter)을 postIncrement에 할당한 다음에 값은 위에서 받아온 값을 그대로 3, 그 뒤에 counter의 값을 1을 증가 시킨다.
// counter = counter + 1; = 4
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecremnet = counter--; 
console.log(`postDecrement: ${postDecremnet}, counter: ${counter}`);
// 앞에다가 붙이면 바로 업데이트가 되서 할당이 되고, 뒤에 있으면 할당을 해놓고 업데이트를 한다.

// 4. Assignment operators = 할당하는 operator
let x = 3;
let y = 6;
x += y; // x = x + y; = 반복되는 x는 생략이 된다. 
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// 5. Comparison operators = 비교하는 oprator
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (=or), && (=and), ! (=not)
const value1 = true; // = false와 true 바꿔서 해보기.
const value2 = 4 < 2; // = false

// || (=or), 3가지(많은 가지 수도 다 똑같다.) 중에 하나라도 true가 되는 것이 있으면, true로 계산이 되는 연산자 이다. 
// ||(or) 연산자는 처음으로 true가 나오는 곳에서 멈춘다. 
console.log(`or: ${value1 || value2 || check()}`);
// heavy한 연산이 많은 함수를 호출하거나, expression같은 것들은 마지못해서 호출하는 것으로 생각을 해야한다. simple한 것들을 앞에다가 둬야 한다. 
    function check() {
        for (let i = 0; i < 10; i++) {
            // wasting time
            console.log('ㅠㅠ')
        }
        return true;
    }

// && (=and), 3가지 모두가 true가 되어야지 true로 return을 한다.  
console.log(`and: ${value1 && value2 && check()}`);
// &&도 마찬가지로 heavey한 operator일수록 뒤에 다가 써야 한다.

// &&는 간편하게 'null' 체크할때도 많이 쓰인다. 
// nullableObject && nullableObject.something
// object가 null이면 false가 되기 때문에 뒤에 object가 실행이 안된다. nullableObject가 null이 아닐때만 nullableObject에 something이라는 value를 받아오게 된다. 
// if (nullableObject != null) {
//     nullableObject.something;
// }

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('ㅠㅠ')
    }
    return true;
}

// ! (=not), 값을 반대로 바꿔준다.  
console.log(!value1); // true였던 값이 false로 바뀌었다.

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion = 타입을 변경해서 검사를 한다. 문자열이지만 안에 들어있는 숫자는 같으므로 stringFive와 numberFive는 서로 같다. 
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion = 타입을 신경써서 타입이 다르면 서로 다르다. stringFive는 문자타입이고 numberFive는 숫자타입이니까 서로 다른 것이다. 
// 코딩할때 왠만하면 "==="(strict equality)를 사용하는게 좋다. 
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equaliuty by reference, equality는 object를 신경써야 한다. object는 메모리에 탑재될때 ref(reference)형태로 저장된다는 걸 잊어서는 안된다. 
const byju1 = { name : 'byju'};
const byju2 = { name : 'byju'};
// byju1 과 byje2는 서로 같은 object를 가지고 있지만 메모리에 탑재 될때 서로 다른 ref(reference)에 탑재가 된다. 서로 다른 ref는 서로 다른 object를 가르키고 있다.  
const byju3 = byju1;
// byju3은 byju1의 ref를 할당하고 있으니까 똑같은 ref를 가지고 있게 된다. 
console.log(byju1 == byju2); // = false (타입을 무시하지만 서로 다른 ref를 갖고 있기 때문에 false)
console.log(byju1 === byju2); // = false (똑같은 타입이든 아니든 ref가 서로 다르기 때문에 마찬가지로 false)
console.log(byju1 === byju3); // =true (byju1의 ref를 byju3에 할당했기 때문에 똑같은 ref를 갖고 있기 때문에 true)

// 연습문제
console.log(0 == false); // = true, '0', '', 'null', 'undefined'는 false로 간주될 수 있다. 
console.log(0 === false); // = false, '0'은 불리언 타입이 아니기 때문에 false.
console.log('' == false); // = true
console.log('' === false); // = false, ''는 불리언 타입이 아니기 때문에 false.
console.log(null == undefined); // = true
console.log(null === undefined); // = false, 서로 다른 타입이기 때문에 false.  

// 8. Conditional operators: if
// if, else if, else
const name = 'byju';
if (name === 'byju') {
    console.log('Welcome, byju!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}
// if()가 true면 {}안에있는 statement를 실행하고, 만약 false면 else if()로 넘어가서 true면 {}안에있는 statement를 실행하고, 그마저도 false면 else로 넘어가서 {}안에 있는 statement를 실행한다. 

// 9. Ternary operator: ? => if를 좀 더 간단히 쓸 수 있다.
// condition ? value1 : value2;
console.log(name === 'byju' ? 'yes' : 'no');
// name === 'byju'가 true면 "?" 뒤에 나오는 'yes'를 실행하고, false면 ":" 뒤에나오는 'no'를 실행하게 된다. 
// 값을 할당하거나 간단하게 출력할 때 많이 쓰게 된다. 
// Ternary operator를 게속해서 쓰는 경우(네스팅)는 가독성이 떨어지기 때문에 if나 switch를 쓰는게 더 맞다. 간단할떄만 사용하는 것이 만다. 

// 10. Switch statement
// use for multiple if checks => if / else if 를 여러개를 반복할 경우에는 switch를 쓰는 것이 좋다. 
// use for enum-like value check => enum비슷한 것들을 검사할때는 switch를 쓰는 것이 가독성에 좋다. 
// use for multiple type checks in TS => 나중에 TypeScript에서 정해져 있는 type을 검사하거나 할때 switch를 쓰는것이 가독성에 좋다.  
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('Fxxking Awesome!!!');
        break;
    case 'Firefox':
    case 'Safari':
        console.log('SoSo, Not bed');
        break;    
    default:
        console.log('same all!');
        break;
}

// 11. Loops (반복문)
// 11-1. while loop, while the condition is truthly, body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}
// while()은 false가 나오기전까지 무한대로 반복해서 계속 도는 것을 말한다. 

// 11-2. do while loop, body code is executed first, then check the condition.
// 먼저 do{}을 실행한 다음에 조건이 맞는지 안맞는지를 검사한다. 그리고, 출력이 되고 나서 while()을 검사하고 이때 멈춘다.  
// 그래서 {}(=블럭)을 먼저 실행하고 싶으면 do while을 써야하고, 조건문이 맞을때만 {}(=블럭)을 실행하고 싶다면 while을 써야 한다. 
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// 11-3. for loop, for(begin; condition; step)
// for(시작하는 문장; 조건; 단계;)
// 시작하는 문장은 1번만 호출을 하고, 조건과 단계를 계속 돌린다. 조건이 안맞을때까지. 
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration => for안에 let이라는 지역변수를 설정해서 작성하는 것도 가능하다.
    console.log(`inline variable for: ${i}`);
}

// 11-4. neste loops => 붙여서 쓸 수 있다. 
for(let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
// i = o 일때 j를 0~9까지 돌리고, 다시 i = 1일때 j를 0~9까지 돌리고, 다음에 i = 2일때 j를 0~9까지...... i = 9일때 j를 0~9까지 돌리기.
// 이렇게 neste해서 작성을 하면 O(n**2) cpu에 좋지 않다. 되도록이면 피하는게 좋다. 


// 연습문제
// loop안에서는 "continue"나 "break"를 써서 끝낼수가 있다. 
// "continue"는 지금 것만 skip하고 다음 step으로 넘어가고, "break"는 완전히 멈춘다. 

// Q1. iterate from 0 to 10 and print only even numbers(use continue)
for (let i = 0; i < 11; i++) {
    if(i % 2 !== 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}

for (let i = 0; i < 11; i++) {
    if(i % 2 === 0) {
        console.log(`q1. ${i}`);
    }
    
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}