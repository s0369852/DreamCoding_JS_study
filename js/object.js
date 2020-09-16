'use strict';

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScripts are instances of Object.

// 1. Literals and properties
const name ='byju'; // premitive 타입은 변수 하나당 값을 하나만 담을 수 가 있다.
const age ='4';
print(name, age); // 출력하고 싶은 함수로 만든다면 이름과 나이를 각각의 파라미터로 전달해 줘야 한다.
function print(name, age) { // 함수를 정의해서 쓸때도 2가지의 파라미터를 받아올 수 있도록 이렇게 만들어야 한다.
    console.log(name);
    console.log(age);
} // 이렇게 했을때의 문제점은 만약에 주소나, 성과 이름등의 인자가 많아지게 되면 추가해야 하는 것들이 굉장히 많아진다. -> 관리가 힘들어진다.

//--------------------------------------------------------------------------------------------------------------------------------------------

const byju = {name: 'byju', age: 28} // 개선하기 위해 사용되는 것이 object. -> JS에서는 class가 없어도 '{}'을 이용해서 바로 object를 만들 수가 있다.

function print(person) { // object를 이용하면 더이상 값을 따로 받지 않아도 된다. person이라는 데이터를 받아서,
    console.log(person.name); // person.name,
    console.log(person.age); // person.age 를 출력하면 된다.
}

print(byju); // 호출할때도 이렇게만 전달하면 된다. 

//-------------------------------------------------------------------------------------------------------------------------------------------

// Object를 만드는 방법
const obj1 = {}; // 퀄리브라켓('{}')을 이용해서 만든다. -> 'object literal' syntax
const obj2 = new Object(); // 'new'라는 키워드를 이용해서, class(template)를 이용해 만들 수 있다. -> 'object constructor' syntax

// JS는 동적으로 타입(type)이 runtime(프로그램이 동작하고 있을때)때 결정이 되는 언어.
byju.hasJob = true; // runtime때 타입이 결정이 되기때문에 이런 미친짓도 가능하다. 뒤늦게 하나의 속성을 추가 할 수 있다. 다른 언어에서는 흔한 일은 아니다. 이렇게 너무 동적으로 코딩하면 금방금방 하기에는 좋지만 나중에 유지보수 하기가 굉장히 힘들어지고, 생각지도 못한 error가 발생하기 때문에 가능하면 이런 방법은 피해서 하는 것이 좋다.
console.log(byju.hasJob); // true

delete byju.hasJob; // 동적으로 작동하기에 하나더 가능한 것이 바로 삭제도 가능하다. "delete"
console.log(byju.hasJob); // undefined

// ★중요한점★
// Object = { key : value }; => object는 key와 value의 집합체이다.
// key = 우리가 접근할 수 있는 property(속성)
// value = key(property)가 가지고 있는 값.  

// 2. Computed properties (계산된 properties)
// 우리가 object의 안쪽에 있는 데이터를 접근할 때에는 "."을 이용해서 데이터를 접근을 했다. 
console.log(byju.name); // byju
// "."을 사용할때가 언제이냐면, 코딩하는 그 순간 그 key에 해당하는 값(value)을 받아오고 싶을때 사용한다.  

// 다른 방법도 존재하는데, object에 "[]"를 이용해서 'string'(문자형태)
console.log(byju['name']); // byju -> Computed properties
// "['string']"을 사용할 때에는 우리가 정확하게 어떤 key가 필요한지 모를때, 즉 runtime에서 결정될 때, 이 computed properties를 사용한다.

// object에 접근하는 방법은 "."을 이용하거나 "[]"을 이용해서 배열에서 데이터를 받아오는 것처럼 이런 식으로도 가능하다. 
// 한가지 주의 할점은 property는 string 타입으로 해야 한다. -> 'string'(문자형태)
console.log(byju[name]); // undefined -> ['string']이 아닌 [string]으로 할 경우에는 undefined가 뜬다.
// 항상 key는 'string'(문자형태)타입으로 지정해서 받아와야 한다. 
byju['hasJob'] = true; 
console.log(byju.hasJob); // true

// 코딩할때는 "."을 사용하는게 맞다, "['string']"(computed properties)를 사용하기 보다는. 실시간으로 원하는 key의 값을 받아오고 싶을때 쓰면 된다.
// ex)
function printValue(obj, key) { //obj와 key를 받아서 그 object에 있는 key에 상응하는 value를 출력하는 함수
    console.log(obj.key); // 언제, 어떤 key를 받을지 모른다. 원하는 key를 사용자에게 input을 받아서 출력해야 하는 함수라면, key는 어떤걸 출력할지 코딩하는 이 시점에는 우리는 알 수가 없다. // printValue(byju, 'name'); -> undefined
    // objcet의 key라는 property는 들어있지 않다. -> 이때는 computed properties를 써야 한다. -> ".key" => "[key]"
    console.log(obj[key]); // printValue(byju, 'name'); -> byju
}
printValue(byju, 'name'); //key는 항상 'string'타입으로 전달해야 한다. 
printValue(byju, 'age');
// 나중에 동적으로 key에 대한 value를 받아올때 유용하게 사용 할 수 있다.

// 3. Property value shorthand (key와 value의 이름이 동일하다면, 생략을 할 수가 있다.)
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = makePerson('byju', 28) // 더이상 번거롭게 작성하지 않고 makePerson이라는 함수를 호출
// 반복되는 것들을 추가한다면 다시 일일이 작성해야 하는 번거로움이 생긴다. 이것을 어떻게 하면 더 간단하게 만들 수 있을까?
console.log(person4); // -> {name: "byju", age:"28"}

// 3-1. makePerson이라는 함수를 만든다. name, age라는 값을 받아서 함수안에서 object를 만들어서 return을 해준다. 
function makePerson(name, age) {
    return {
        name: name, // name에는 받아온 name -> key와 value의 이름이 동일하다면, 생략을 할 수가 있다. -> name, 
        age: age // age에는 받아온 age -> key와 value의 이름이 동일하다면, 생략을 할 수가 있다. -> age,
        // JS에서는 property value shorthand 기능이 있어서, key와 value의 이름이 동일하다면, 생략을 할 수가 있다. 
    }
}

// (3-1에서 해결하고자 했던 문제점은 바로 4.)

// 4. Constructor Function 
// object를 필요할 때 일일이 만들게 되면, 불가피하게 동일한 key와 value들을 반복해서 작성해야 하는 문제점이 생긴다. 
// 그래서 함수를 이용해서 값만 전달해 주면, object를 만드는 유용한 함수를 만들 수 있다.
// makePerson이라는 함수는 class 같은 template(틀) 같은 것이다. -> 이것은 이전에 class가 없을 당시에 이용되었던 방식이다. 
// 이렇게 다른 계산을 하지 않고 순수하게 object를 생성하는 함수 들은 보통 "makePerson"이 아니라 "Person" 대문자로 시작하도록 함수를 만든다. 
// return이라는 값을 쓰지 않고, this.name = name; this.age = age -> class에서 constructor에서 했던 것처럼 작성을 한다.
// 호출할때도 class에서 object를 만드는 것처럼 conste person5 = new Person('byju', 28); 이런식으로 만든다. 이렇게 하면 JS엔진이 알아서 object를 생성해 준다. 

const person5 = new Person('byju', 28);
console.log(person5);
function Person(name, age) {
    // this = {}; -> 여기서 생략된 것은 새로운 object를 만들어서 this에다가 name이라는 새로운 property를 넣고, 결국은 this를 return하는 함수다. 
    this.name = name;
    this.age = age;
}

// 5. in operator: property existence check (key in obj)
// = "in"이라는 키워드를 이용해서 해당하는 obj안에 key가 있는지 없는지 확인하는 것이다.
console.log('name' in byju); // true
console.log('age' in byju); // true
console.log('hasJob' in byju); // true
console.log('adress' in byju); // false -> 정의하지 않은 다른 key를 사용하게 되면 false라고 나온다. 
console.log(byju.adrees); // undefined -> 정의하지 않은 값을 출력하게 되면 undefined라고 나온다. 

// 6. for..in VS for..of
// 나중에 프로젝트를 할때 굉장히 유용하게 사용할 수 있다. 

// 6-1. for (key in obj)
console.clear(); // -> 이전에 있는 log들을 지울 수 있다. "console was cleared"
for (let key in byju) { // 이것은 byju가 가지고 있는 key들이 블록("{}")을 돌때마다, key라는 지역변수에 할당이 되어진다. 
    console.log(key); // name, age, hasJob -> byju안에 있는 모든 key들이 출력이 된다. 
} // 모든 key들을 받아와서 작업을 하고 싶을때 for(let(const도 가능) key in obj)을 사용하면 좋다.

// 6-2. for (value of iterable) -> obj를 사용하는 것이 아니라 배열과 같은 배열 리스트, 순차적으로(iterable) 것들에 사용
const array = [1, 2, 4, 5] // 순차적으로 데이터가 담겨있는 것들에 사용.
// 데이터에 대한 모든 값들을 찍으려면 (예전ver)
for (let i = 0; i < array.length; i++) {
    console.log(array[i]); // 1, 2, 4, 5 -> 출력은 되지만 좋은 방법은 아니다. 
}
// 데이터에 대한 모든 값들을 찍으려면 (현재ver)
for (let value of array) {
    console.log(value); // 1, 2, 4, 5 -> array에 있는 모든 값들이 value에 할당되면서 블럭("{}")안에서 순차적으로 출력하거나, 값을 계산할 수 있다.
}// 배열되는 것들을 순차적으로 받아와서 사용하거나 값을 계산하고 싶을때, for(let(const도 가능) value of iterable)을 사용하면 좋다.

// 7. Cloning
const user = {name: 'byju', age: '28'};
const user2 = user;
// user라는 변수는 지금 메모리를 가르키는데 메모리에는 ref(reference)가 들어있다. 이 ref는 실제로 name: 'byju', age: '28'이라는 obj를 가르키고 있다. 그리고 user2의 변수는 user가 할당이 되어져 있는데, user안에 들어있는 ref값이 user2에도 동일하게 할당된다는 말이다. 따라서 user2에도 동일한 ref가 들어있다. 동일한 ref는 똑같은 obj를 가르키고 있다. 
user2.name = 'coder';
console.log(user); // {name: "coder", age: "28"} -> 동일한 ref를 가르키고 있고 그 ref안에 있는 obj도 같으니까 user2에서 name을 변경하였다면, user의 name도 변경이 된다. 

// object를 복제할 수 있는 방법

// 7-1 oldway
// 텅텅 비어있는 obj를 먼저 만들고, for..in으로 obj를 빙글빙글 돌면서 수동적으로 할당해 주는 방법. 
const user3 = {};
for (let key in user) {
    user3[key] = user[key]; // user3[key]에는 user[key]있던 value를 할당해 주는 것.
}
console.log(user3);

// 7-2 newway -> Object.assign(dest, [obj1, obj2, obj3....]) -> Object는 JS에 기본적으로 탑재되어 있는 object중에 하나. 그리고 JS에 있는 모든 object는 Object를 상속한다. 
const user4 = {}; // 타겟을 만들면 텅텅 비어져 있는 것을 정의하고,
Object.assign(user4, user); // user4를 전달해서, 바로 우리가 복사하고자 하는 obj를 전달하면 된다.
console.log(user4);

const user5 = Object.assign({},user); // 전달하는 object는 텅텅 비어져있고("{}"), return되는 값은 두가지가 섞인게 return이 되니까 이런식으로 (= Object.assign({},user);) 받아와서 작성해도 된다. 
console.log(user5);

// 다른 example (assign함수)
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const fruit3 = {color: 'purple'}
const mixed = Object.assign({}, fruit1, fruit2, fruit3);
console.log(mixed.color); // purple
console.log(mixed.size); // big 
// ({}, fruit1, fruit2) -> 뒤에 나오는 것일 수록 앞에 동일한 property가 있다면 계속 덮어씌운다. -> 이런 점을 유의해서 assign을 사용하면 된다.