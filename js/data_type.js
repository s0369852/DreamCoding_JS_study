// Data type
// 프로그래밍 언어에서 가장 중요한 것 3가지
//  입력, 연산, 출력
// 사용자에게 console이나 UI에서 입력받은 data를 잘 처리하고 연산해서 알맞게 다시 사용자에게 출력해주는 것이 중요. 데이터를 서버로 보내서 다시 받아오는 것도 포함이 될 수 있다. 연산을 하면서 CPU를 효율적으로 사용할 수 있게 CPU에 최적화된 연산을 작성하는 것도 중요하고 메모리의 사용을 최소화해서 사용하는 것도 중요한 포인트.

// 1. Use strict (added in ES5)
// use this for valina JavaScript
'use strict';

// 2. Variable (변수), rw(read/write) = 메모리의 값을 읽고 쓰는게 가능하다. 
// 변수 = 변경 될 수 있는 값

// let (Mutable) (added in ES6) - 요즘에는 ES6이전의 문법은 잘 사용하고 있지 않다. JS에서 변수를 선언할 수 있는 키워드는 let 딱 하나이다.
// ES6는 Edge, Firefox, Chrome, Safari, Opera 등에서 다 지원이 된다.

// ES6이전에는 'var'를 사용했다. (지금은 사용해서는 안된다.)
// 대부분의 프로그래밍 언어에서는 변수를 선언하고 값을 할당하는게 정상.
var agee;
agee = 4;
// var를 사용하면 안되는 이유 1. 
// JS var에서는 이상한 행동이 가능하다. 선언도 하기 전에 값을 할당하는 것이 되고, 심지어 출력도 할 수 있다. 
// var hoisting = move declaration from bottom to top
// => 어디에 선언했냐에 상관없이, 항상 제일 위로 선언을 끌어 올리는 것. hoisting(끌어올리다.)

// var를 사용하면 안되는 이유 2.
// has no Block Scope ({}) = x
{
    ageee = 4;
    var ageee;
}
console.log(ageee)
// Block Scope안에 집어넣었는데도 불구하고 밖에서 출력하면 값이 나온다. Block Scope이 없기 때문에 블럭을 여러개를 쌓아서 집어 넣더라도 아무곳에서나 출력하면 값이 나온다. 규모있는 프로젝트 등을 하는 경우에 내가 선언하지도 않은 값들이 나오는 현상을 겪을 수 있다. var를 쓰는데에 위험부담인 요인이다. 

console.log(age)
// 변수는 정의되어 있지만 값이 아직 안들어있다. = undefined
age = 4;
console.log(age);
// 값을 할당한 다음에 출력을 하면 값이 출력이 된다. 
var age;

// var이 아닌 let을 이용해 똑같이 표현해 본다면, 에러가 나는 것을 볼 수 있다. 
// namee = 4;
// let namee;
// let을 선언하기도 전에 값을 넣었다는 에러를 볼 수 있다. (정상)

let name = 'byjule';
// let이라는 키워드를 이용해서 name라는 변수를 선언, 그리고 선언함과 동시에 byjule라는 변수의 값을 할당.  

console.log(name);
// name이라는 값을 출력한다.

name = 'hello';
// name이라는 변수에 hello라는 값을 다시 할당. 

console.log(name);
// name이라는 값을 출력하면 변경된 값이 나온다.

// 어플리케이션을 실행을 하면 어플리케이션 마다 쓸 수 있는 메모리가 할당이 되어지게 되는데 이 메모리는 텅텅 비어져있는 박스들인데, 어플리케이션 마다 쓸 수 있는 박스들의 갯수가 제한적으로 할당이 되어진다. 

// Block scope = {}

let globalName = 'global name';
// 반대로 블럭안에다가 정의 하지 않고 파일안에다가 바로 정의해서 쓰는 변수 들을 Global Scope이라고 부른다.  

// 코드를 블럭({}) 안에 작성하게 되면 블럭 밖에서는 더이상 블럭 안에 있는 내용을 볼 수 가 없게 된다. 
{
    let nname = 'byjule';
    console.log(nname);
    nname = 'hello';
    console.log(globalName);
}
// console.log(nname);
// 블럭밖에서 console로 블럭안에 있는 내용을 호출할 경우 아무런 값도 나타나지 않는다. 

console.log(globalName)
// Global Scope는 어느곳에서나 접근이 가능하다. 블럭 안에 있어도, 블럭 밖에 있어도 출력하면 보안다. global한 변수들은 어플리케이션이 실행되는 순간부터 끝나는 순간까지 항상 메모리에 탑재 되어있기 때문에 최소한으로 쓰는 것이 좋고, 가능하면 class나 함수, if, for등 필요한 부분에서만 정의해서 쓰는 것이 좋다. 

// 3. Constant (immutable), r(read only)
// use const whenever possible.
// only use let if variable needs to change. 

// Note !
// Immutable data types: primitive types, frozen objects (i.e. object.freeze()) = 데이터 자체를 절대로 변경을 못함.
// Mutable data types: all objects by default are mutable in JS = 자바스크립트에서는 기본적으로 모든 object는 변경이 가능하다. 예를 들어 자바스크립트에서 어레이(배열)은 Mutable type

// favor immutable data type always for a few reasons: 웬만하면 값을 할당한 다음에 다시는 변경되지 않는 데이터 타입을 사용해라

//  - Security 
// (보안상의 이유 = 한번 작성한 값을 다른 해커들이 코드를 이상한 것을 삽입해서 값을 계속 변경해 나가는 것들이 가능한데, immutable type은 그것을 방지 할 수 있다.)

//  - thread safety
// (어플리케이션이 실행이 되면, 한가지의 프로세스가 할당이 되고, 프로세스 안에서는 또 다양한 thread가 동시에 돌아가면서 어플리케이션을 조금더 효율적으로 빠르게 동작할 수 있도록 도와준다. 다양한 thread들이 동시에 변수에 접근해서 값을 변경을 할 수가 있는데, 동시에 값을 변경한다는 것은 위험한 생각. 가능하면 값이 변하지 않는 것을 사용하는게 좋다.)

//  - reduce human mistakes
// (내가 나중에 코드를 바꾸거나, 다른 개발자가 코드를 바꿀때 실수를 줄여 줄 수 있다.)

// 한번 할당하면 값이 절대 바뀌지 않는 것. 값을 선언함과 동시에 할당한 뒤로는 값을 변경할 수 없다. 
const daysInWeek = 7;
const maxNumber = 5; 

// 4. Variable types (메모리의 저장방식)
// 4-1. primitive type = (single item): number, string, boolean, null, undefined, symbol
// => 더 이상 나눠질 수 없는 한가지의 아이템, 값 자체가 메모리에 저장.

// 4-2. object type = box container
// => single item을 여러개 묶어서 한단위로, 한박스로 관리 할 수 있게 해주는 것. 값이 너무 커서 메모리에 한번에 다 올라갈 수가 없다. ref(referance)를 통해서 실제로 object가 담겨있는 메모리를 가르키게 된다. object를 가르키는 ref가 메모리에 저장이 된다.

// function, first-class function
// JS에서는 function도 data type중 하나. 
// "프로그래밍 언어는 first-class function이 지원이 돼" = 이 프로그래밍 언어에서는 function도 다른 data type처럼 변수에 할당이 가능하고, 그렇기 때문에 함수의 인자(파라미터)로도 전달이 되고, 함수에서 return type으로도 function을 return할 수 있는 것이 가능하다. 

// JS에서는 number 하나면 숫자는 끝이난다. 얼마나 큰 사이즈를 할당할 것인지 생각할 필요가 없다. number type만 이용해서 숫자를 쓰면 된다. 심지어 number라고 data type을 선언하지 않아도 된다. JS에서는 type이 다이나믹하게 결정이 되기 때문에, 그냥 숫자를 할당해주면 된다.
let a = 12;
let b = 1.2;
// 다른 프로그래밍 언어에서는 정수, 소수 등으로 숫자값을 따로 할당해야 한다. 어느정도의 사이즈인지 생각하고 맞춰서 data type을 설정해야 한다.

const count = 17; // integer(정수)
const size = 17.1; // decimal number(소수점)
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// primitive type 1. number - special numeric values: infinity, -infinity, NaN
// number에서도 특별한 값이 미리 정해저 있다. (대부분의 프로그래밍 언어에서도 동일)
// 나중에 DOM요소를 JS를 이용해서 Position을 바꾼다던가, 다양한 계산을 해야할 때 값이 0인지 아닌지, 숫자인지 아닌지 확인을 하지 않고 연산을 하게 되면 이러한 값이 나오고 사용자에게 에러를 나타낼수 있다. 그래서 항상 연산할때 값이 valid(유효)한 값인지 확인하고 연산하는 것이 중요하다. 현업에서도 간혹 이러한 경우가 있다. 
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn ='not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
// 최근에 지원이 된것이다 보니까 Chrome이랑 Firefox에서만 지원
const bigInt = 1234567890123456789012345678901234567890n; //over (-2**53) ~ 2**53, 숫자의 맨 마지막에 'n'만 붙이면 bigInt로 간주 된다.
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// primitive type 2. string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
// template literals (string) = `` 백틱 기호를 이용해서 원하는 string을 적고 $와 {}를 이용하면 변수의 값이 자동적으로 붙어서 나오는 것을 확인 할 수 있다.
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);
// ``벡틱 기호가 아닌 기존으 + + 로 연결해서 사용하는 경우 번거로움이 존재. ``을 이용하게 되면 안에 쓰인 스페이싱(공백)들이 그대로 입력이 된다. 간편하게 string을 만들 수 있게 된다.

// primitive type 3. boolean (불리언타입)
// "참"과 "거짓"
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${test}`);

// primitive type 4. null
// null이라고 할당하는 경우에는 내가 명확하게 "너는 텅텅비어있는 empty값이야"라고 값이 할당이 되어있다.
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// primitive type 5. undefined
// 선언은 되었지만 아무것도 값이 지정이 되어있지 않다. 텅텅비었는지, 값이 들어가 있는지, 정해지지 않은 상태이다. 
let x;
// = let x  = undefined;
console.log(`value: ${x}, type: ${x}`);

// primitive type 6. symbol, create unique identifiers for objects
// map이나 다른 자료구조에서 고유한 식별자가 필요하거나, 아니면 동시다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을 때, 정말 고유한 식별자가 필요할 때 쓰인다. 간혹 식별자를 string을 이용해서 쓰이는 경우가 있는데, 다른 모듈이나 다른 파일에서 동일한 string을 썼을때 동일한 식별자로 간주된다. 하지만 반대로 symbol 같은 경우에는 동일한 id를 이용해서 symbol을 만들었지만 두가지의 symbol은 다른 경우이다. 주어지는 string의 상관없이 고유한 식별자를 만들때 사용되어 진다. 
const symbol1 = Symbol('id');
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); //false
// string이 똑같다면 동일한 symbol을 만들고 싶다. = Symbol.for('id')
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// symbol은 바로 출력하게 되면 에러가 발생하게 된다. 항상 ".description"을 이용해서 string으로 변환을 해서 출력을 해야한다.

// object type, real-life object, data structure
// 물건과 물체들을 대표할 수 있는 박스형태를 말한다. 그냥 변수 age는 아무것도 설명일 될 수 없지만, byjule라는 object를 만들어서 name는 byjule이고  age는 28이다라고 설명이 가능하다. 
const byjule = {name: 'byjule', age: 28};
byjule.age = 29;
// const로 지정된 byjule는 바꿀수 없는 data지만, 안에 있는 name과 age라는 변수는 다른 값으로의 할당이 가능하다. 

// 5. Dynamic typing: dynamically typed language
// JS는 선언할때 어떤 타입인지 선언하지 않고 runtime, 즉 프로그램이 동작할때 할당된 값을 따라서 타입이 변경될 수 있다는 것을 의미한다.
// 다이나믹 타이핑 언어는 내가 좋은 아이디어가 있을때 빠르게 프로토타입을 하고 싶을때 정말 유연하게 사용할 수 있는 언어지만, 다수의 엔지니어들이 어느정도 규모가 있는 프로그램을 만들때 이런 다이나믹 타이핑때문에 실수가 일어나곤 한다. 
let text ='hello';
console.log(text.charAt(0)); // h가 출력이 된다. 
// 프로그래밍 언어에서 인덱싱은 배열을 쓸 때는 항상 숫자가 0부터 시작한다.  
console.log(`value ${text}, type: ${typeof text}`);
text = 1;
console.log(`value ${text}, type: ${typeof text}`);
text = '7' + 5;
// '7' + 5 문자열에 + 숫자가 있으니까 숫자를 string으로 변환을 해서 string과 string을 합해주는 것들을 하게 된다.
console.log(`value ${text}, type: ${typeof text}`);
text = '8' / '2';
// '숫자' / '숫자' => '' = string으로 인식하지만, 숫자들을 나눌수 있는 연산자를 썼네? 그리고 string안에 들어있는 것은 숫자값이 잖아? 숫자와 숫자를 나누자 하면서 string에서 number로 타입이 바뀐것을 확인 할 수가 있다.
console.log(`value ${text}, type: ${typeof text}`);
console.log(text.charAt(0));
// 처음에 string이었다가 중간에 number로 바꼈다면 에러가 발생하게 된다. JS는 실행중(runtime)에 타입이 정해지기 때문에 이러한 에러가 많이 발생한다. 이러한 에러를 방지하고자 나온게 TypeScript(TS). JS위에 Type이 얹혀진 상태. TS는 결국 브라우저가 이해할 수 있도록 JS로 변환해야 하기 때문에 실시간으로 보면서 하기가 어렵다.
