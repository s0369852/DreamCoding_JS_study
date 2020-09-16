'use strict';

// Array = 자료구조 중의 하나인 "배열"
// 비슷한 종류의 데이터들을 묶어서 한곳에 저장해 놓는 것을 "자료구조"라고 한다.
// 자료구조에는 방식과 형식에 따라 굉장히 다양한, type들이 있다. 
// object와 자료구조의 차이점은? (비슷한 종류의 데이터를 묶어 놓는 것 -> object)
// -> object는 서로 연관된 특징과, 행동들을 묶어 놓는 것을 말한다. 비슷한 type의 object들을 묶어 놓는 것을 자료구조라고 한다.
// 그리고 보통은 다른 언어에서는 자료구조에서 동일한 type의 object들만을 담을 수가 있다. (type이 있는 언어에서는 동일한 type의 데이터만 담을 수 있다.)
// 그러나 JS는 dynamically typed language로 type이 동적으로 정의가 되기 때문에 type이 없어서 type에 상관없이 묶어 놓을 수 가 있다.(미친짓. 가능은 하지만 이런식으로 프로그래밍하면 안된다.)

// 자료구조와 알고리즘에 대한 공부를 해야한다. array, map, set, list(single linked list & double linked list), 새로운 데이터를 자료구조에 삽입할 때, 얼마나 효율적으로 삽입할 수 있는지, 삭제할 때, 검색할 때, 정렬할 때 어떤 알고리즘을 써서 할 수 있는지에 대한 효율성을 공부할 필요가 있다. 

// 배열은 칸칸이 모여있는 자료구조를 말한다. "index"가 존재하고 '0'번째 부터 시작한다. 

// 1. Declaration (배열을 선언하는 방법)
// 1-1. 첫번째 방법
const arr1 = new Array();
// 1-2. 두번째 방법(더 흔하게 쓰인다.)
const arr2 = [1, 2];

// 2. Index position 
// 배열이 index를 기준으로 데이터가 저장이 되기 때문에 index를 활용해서 데이터를 검색하고, 삽입하고, 삭제하는지 정확히 아는 것이 중요.
const fruits = ['사과','바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //-> object에서 사용했던 것처럼 ['string']을 [index number]를 전달하게 되면 index에 해당하는 value를 받아 올 수 있다.
console.log(fruits[1]);
console.log(fruits[2]); // undefined -> 정의되지 않은 index를 불렀기 때문. 
console.log(fruits[fruits.length - 1]); // 바나나 -> 배열의 마지막에 있는 index를 찾을때 사용. 배열은 index가 0부터 시작하기 때문에 총길의 -1을 하면 제일 마지막에 있는 index를 받아올 수 있다. 첫번째 있는 index는 '[0]'으로 호출.

console.clear();

// 3. Looping over an array (배열 안에 들어 있는 전체적인 데이터를 빙글빙글 돌리면서 출력하는 방법)

// print all fruits
// 3-1. for (for loop사용)
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 3-2. for of
for (let fruit of fruits) { //let fruit라는 변수에 fruits안에 들어있는 데이터를 순차적으로 한번씩 할당하면서 블럭('{}')을 실행하게 된다. 
    console.log(fruit);
}

// 3-3. forEach (forEach는 callback함수를 받아 온다.)
// array에 들어 있는 element에 정해진 액션(callbackfn)을 수행 하는것.
// 총 2가지의 파라미터가 전달이 되는데, 첫번째는 callback함수 -> 우리가 전달한 함수를 value하나하나 마다 호출을 해준다. 
// thisArg?:any -> '?'는 전달해도 되고, 파라미터를 전달해도 되고, 안해도 되는 것.
// 이 callback함수에는 총 3가지의 인자가 들어온다. 첫번째는 value (우리가 callback함수를 호출하는 그 value, 배열에있는 값.), 두번째는 그 값이 들어있는 index도 들어온다. 세번째는 전체적인 배열도 전달을 받을 수 있다.  
fruits.forEach(function(fruit, index, array) {  
    console.log(fruit, index, array);
})
fruits.forEach(function(fruit, index) { // 보통 array는 받아오지 않는다.
    console.log(fruit, index);
})
fruits.forEach((fruit) => console.log(fruit)); //anonymous function일때는 간단하게 arrow function으로 사용할 수 있다. 한줄만 있는 경우 arrow function에서는 "{}"도 생략이 가능하고 ";"도 생략이 가능하다. 

// forEach는 배열 안에 들어 있는 value들 마다, 내가 전달한 함수를 출력한다. 

// 4. Additon, deletion, copy (배열에 어떻게 데이터를 추가하고, 빼고, 복사하는 방법)

// 4-1. push: add an item to the end (아이템을 배열의 제일 뒤에다가 추가하고 싶을 때.)
fruits.push('딸기', '복숭아');
console.log(fruits); // ["사과", "바나나", "딸기", "복숭아"]

// 4-2. pop: remove an item from the end (배열에서 제일 뒤에 있는 아이템 부터 지우고 싶을 때.)
fruits.pop();
fruits.pop();
console.log(fruits); // ["사과", "바나나"]

// 4-3. unshift: add an item to the beginning (앞에서 부터 아이템을 추가하고 싶을 때.)
fruits.unshift('딸기', '레몬');
console.log(fruits); //["딸기", "레몬", "사과", "바나나"]

// 4-4. shift: remove an item from the beginning (앞에서 부터 아이템을 빼고 싶을 때.) 
fruits.shift();
fruits.shift();
console.log(fruits); //["사과", "바나나"]

// ★중요★
// shift와 unshift는 엄청 느리다. pop과 push보다.
// 배열에 아이템들이 들어있을때 뒤에서 부터 넣고 빼는 것은 빈 공간에 데이터를 넣었다가, 지웠다가 하기 때문에 기존에 들어있던 데이터들은 움직이지 않아도 되서, 한 공간에 index를 이용해서 넣고 빼고가 가능하기 때문에 빠른 진행을 할 수 있다.
// 하지만, 앞에서 부터 데이터를 넣고 빼고 하려면 기존에 있던 데이터를 먼저 옮겨 놓고 들어갈 자리를 텅텅 비게 만들어서 새로운 데이터를 집어 넣어야 한다. 뺄 때도 마찬가지. 배열이 길면 길수록 shift와 unshift는 반복적으로 해야하는 일들이 많아진다.
// 가능하면 push와 pop을 이용하는 것이 좋다. 

// 4-5. splice: remove an item by index position (아이템을 지정된 포지션에서 지우는 것)
// splice = 꼬아서 잇다. 이어주다.
fruits.push('딸기', '복숭아', '레몬');
console.log(fruits); // ["사과", "바나나", "딸기", "복숭아", "레몬"]
fruits.splice(1); // -> 원하는 index만 지정하고, 몇개를 지울것인지 지정하지 않으면 지정한 index부터 뒤에는 모조리 지워진다. 
console.log(fruits); // ["사과"]
fruits.splice(1, 1, '딸기', '복숭아', '레몬'); // -> index 1번 자리부터 1개만 삭제하고, 그자리에 '딸기', '복숭아', '레몬' 를 넣어준다. 
console.log(fruits); // ["사과", "딸기", "복숭아", "레몬"]

// 4-6. concat: combine two arrays (두가지의 배열을 묶어서도 만들 수 있다.)
// concat을 호출하는 배열(fruits)에 새로 전달된 items(fruits2)라는 배열을 합해서 새로운 배열을 return한다. 
const fruits2 = ['배', '코코넛'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // ["사과", "딸기", "복숭아", "레몬", "배", "코코넛"]

// 5. Searching (검색, 검사 할 수 있는 Apis)
// find the index

// 5-1. "indexOf" : 우리가 배열 안에 어떤 값이 몇번째 index에 있는지 알고 싶을때 유용하게 쓸 수 있다.
console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과')); // 0
console.log(fruits.indexOf('복숭아')); // 2
console.log(fruits.indexOf('수박')); // -1 -> indexOf도 없는 값을 출력하면 '-1'이 출력이 된다. 

// 5-2. "includes" : 배열에 값이 있는지 없는지를 'true' & 'false'로 return한다.
console.log(fruits.includes('사과')); // true
console.log(fruits.includes('수박')); // false

console.clear();

// 5-3. "lastIndexOf" : index중 제일 마지막에 있는 값을 알고 싶을때 사용할 수 있다. 
fruits.push('사과'); // index 0번째의 "사과"와 index 4번째의 "사과"가 동일하게 있을 경우엔?
console.log(fruits); // ["사과", "딸기", "복숭아", "레몬", "사과"]
console.log(fruits.indexOf('사과')); // 0 -> indexOf는 제일 첫번째로 해당하는 값을 만나면, 그 값이 들어있는 index를 return하게 된다.
console.log(fruits.lastIndexOf('사과')); // 4 -> lastIndexOf는 제일 마지막에 있는 값을 출력하게 된다. 