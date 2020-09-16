
'use strict';
//=> 항상 입력해서 모던하게 개발하는 것이 좋다.

// Class 객체지향언어

// Class= 관련있는 변수나 함수들을 한데 묶어놓는 컨테이너같은 것. 
class people {
    name; // 속성(field)
    age; // 속성(field)
    tell(){}; // 행동(method)
}
// 간혹 class 안에는 method는 없는 경우가 있다. 이런 것들을 data class라고 한다.
// class안에서도 내부적으로 보여지는 변수와, 밖에서 보일 수 있는 변수들을 나누어서 인캡슐레이션(캡슐화)라고 한다.
// class를 이용해서 상속과 다양성이 일어날 수 있다.
// 이런 모든 것들이 가능한 것이 바로 "객체지향언어"
// 풀어야 하는 문제, 구현해야 하는 기능 들을 객체로 잘 정의해서 만들 수 있어야 한다.(내가 저것들을 어떻게 class로 만들지에 대한 생각.)

// class
// - template (틀, 청사진)
// - declare once ("이런이런" 클래스에는 "이런이런" 데이터가 들어 올 수 있다고 정의. 한번만 정의)
// - no data in (클래스 자체에는 데이터가 들어있지 않다.)

// object (class를 이용해서 실제로 데이터를 넣어서 만드는 것이 object.)
// - instance of a class (class를 이용해서 새로운 instance를 생성하면 object가 된다.)
// - created many times (class를 이용해서 굉장히 많이 많들 수 있다.)
// - data in (class는 정의만 한 것이어서 실제로 메모리엔 올라가지 않는다. 실제로 데이터를 넣으면 object는 메모리에도 올라가게 된다.)

// 붕어빵을 만들기 위한 재료는 object, 붕어빵을 만들 수 있는 틀은 class

// Object-oriented programming
// class: tmeplate
// object: instance of a class
// JavaScript classes (JS언어자체에서 class가 구현된 언어구현사항 디테일.)
// 1). -> introduced in ES6 (ES6에서 class가 처음으로 도입되었다. 전에는 class를 정의하지 않고 바로 object를 만들었다. object를 만들때 function을 이용해서 templeate(틀)을 만드는 방법이 있다.)
// 2). -> syntactical sugar over prototype-based inheritance (기존에 존재하던 프로토타입을 베이스로 한것에 기반해 그 위에 간편하게 쓸 수 있도록 문법만 추가 된 것이다. -> syntactical sugar = 문법상으로 달달한, 가짜의, 편리함을 제공하는.)

// 1. class declarations
class person {
    //constructor (생성자) -> 생성자를 이용해서 object를 만들때 필요한 데이터를 전달한다. 
    constructor(name, age) {
        // fields 
        this.name = name; // 전달된 데이터를 바로 할당
        this.age = age; // 전달된 데이터를 바로 할당
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const byju = new person('byju', 28); // 새로운 object를 만들때는 'new'라는 키워드를 사용한다. 
console.log(byju.name);
console.log(byju.age);
byju.speak();

// 2. Getter & Setters
// 사용자가 잘못된 값을 설정하는 것을 막기 위해서 사용한다. 사용자가 값을 잘 못 설정해도 Setter에서 알맞은 값으로 만들어 준다.
// 다른 사용자가 속성값을 설정할 수 있다면 좋은것인가? 안좋은 것인가? -> 당연히 안좋다.
// 따라서 속성값을 private 으로 만든다. => encapsulation(인캡슐레이션)
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() { // 'get'이라는 키워드를 이용해서 값을 return하고,
        return this._age
    } // gettter를 정의하는 순간 constructor에 있는 'this.age'는 메모리에 올라가 있는 데이터를 읽어오는 것이 아니라, getter를 호출하게 된다.  

    set age(value) { // 'set'라는 키워드를 이용해서 값을 설정할 수 가 있다. 대신에 'set'은 값을 설정하기 때문에 value를 받아와야 한다.
        // if(value < 0 ) {
        //     throw Error(`age can not be negative`);
        // }
        this._age = value < 0 ? 0 : value; // value가 값이 '-'라면, 0을 쓰고, 아니면 지정된 value를 사용하겠다.
    } 
    // setter를 정의하는 순간 constructor에 있는 '= age'값을 할당할때 메모리의 값을 할당하는 것이 아니라, setter를 호출하게 된다. 그 말은 setter안에서 전달된 value를 this.age에 할당할 때, 메모리의 값을 업데이트 하는 것이 아니라, setter를 호출하게 되는 것. 즉, setter로 다시 돌아와서, 이 문장은 다시 setter를 호출하고, 계속 무한정 반복이 되니까 "Maximum call stack"이라는 에러가 뜬다. 이것을 방지하려면 getter & setter에서 쓰이는 변수의 이름을 다른 것으로 만들어 줘야 한다. "age" -> "_age" 이런식으로. 
}
// User라는 class안에는 총 3개의 fields(속성)가 있다.
// 1. firstName, lastName, _age

const user1 = new User('steve', 'job', '-1');
console.log(user1.age);
// class를 사용하는 사용자가 말도 안되는 값을 입력을 해도, 조금 더 방어적인 자세로 만들수 있도록 하는 것이 Getter & Setters
// fields에는 '_age'이지만, console.log(user1.age) 'age'라고 호출할 수 있는 것은 내부적으로 Getter & Setters을 이용하기 때문이다. 

// 3. Fields (public, private)
// 최근에 추가된 기술, 아직 safari에서도 지원이 안되기 때문에 쓰려면 바벨을 이용해야 한다.
class Experiment {
    publicField = 2;
    #privateField = 0;
    //constructor(생성자)를 쓰지 않고, fields를 정의할 수가 있는데, 그냥 정의하면 "public" (외부에서 접근이 가능), '#'기호를 붙이게 되면, 바로 "private" (class 내부에서만 값이 보여지고, 접근이 되고, 값이 변경이 가능하다. 외부에서는 읽을수도, 변경할 수도 없다.)
}
const experiment = new Experiment();
console.log(experiment.publicField); // "2"가 출력이 된다.
console.log(experiment.privateField); // "undefined"로 출력이 된다.

// 4. Static
// Fields랑 마찬가지로 아직은 쓰려면 무리가 있다.
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // "undefined" -> object안에 publisher은 값이 지정되지 않았다. 
console.log(Article.publisher); // "Dream Coding" -> static은 objcet마다 할당되는 것이 아니라 class자체에 할당되어 있다.
Article.printPublisher(); // static함수를 호출할 때도, class이름을 이용해서 호출하면 된다.  

// class안에 있는 fields와 method들은 새로운 object를 만들때마다, 그대로 복재되어서 값만 지정된 값으로 변경이 되어서 만들어 진다. 간혹 이런 object(data)에 상관없이, class가 가지고 있는 고유의 값과, 동일하게 반복적으로 사용되어지는 method가 있을 수 있다. 그런 것들을 static이라는 키워드를 이용해서 붙이면 object와 상관없이 class 자체에 연결되어 있다.   

// TypeScript에서도 활용이 많이 되는데 들어오는 object(data)에 상관없이, 공통적으로 class에서 쓸수 있는 것이라면, 'static'과 'static method'를 이용해서 작성하는 것이 메모리의 사용을 조금 더 줄여줄 수 있다.

// 5. 상속 & 다양성
// 브라우저에서 그릴 수 있는 웹 어플리케이션을 만든다고 가정 -> 직사각형, 삼각형, 원형
// class를 만들때 어떻게 만들 수 있을 까? ->  공통적인 속성 (width, height, color등), 공통적으로 drowing(method)등이 있다.
// 계속 반복되어 지는 속성들이 있는데, 각각 따로 만들어서 동일한 것을 반복하는 것보다, 공통점인 도형(shape)이라는 속성값을 계속 재사용하는 것이 효율적이다.
// 재사용이 간편하다는 것은 유지보수가 쉽다는 것. 

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height ;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {} // 'extends'라는 키워드를 이용해서 'Shape'을 연장한다. 이렇게 하면 Shape에서 정의한 fields와 methods가 자동적으로 Rectangle에 포함이 된다. 
class Triangle extends Shape {
    draw() { // 여기서 오버라이팅을 했기 때문에 더이상 Shape에서 정의된 draw함수가 호출되지 않는 것을 볼 수 있다.
        super.draw(); // 공통적으로 정의한 Shape class에 draw함수도 호출하는 방법. -> "super." 
        console.log('▲')
    } 

    getArea() {
        return (this.width * this.height) / 2;
    } // 다양성 -> 필요한 함수만 재정의해서 사용할 수 있다. (오버라이팅)

    toString() {
        return `Triangle-> color: ${this.color}`
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 이렇게 상속을 이용하게 되면, 공통되어지는 부분을 일일이 작성하지 않아도 'extends'를 이용해서 동일한 것들을 재사용 할 수 있다.
// 동일한 곳에서의 문제가 발생했다면 Shape 안에서의 수정만 하면 공통된 부분이 수정이 된다.

// 6. Class checking: instanceOf
// 왼쪽에 있는 object가 오른쪽에 있는 class의 instance인지 아닌지, 즉 object가 class를 이용해서 만들어 진건지 아닌건지 확인하는 것. true와 false를 return한다. 
console.log(rectangle instanceof Rectangle); // T
console.log(triangle instanceof Rectangle); // F
console.log(triangle instanceof Triangle); // T
console.log(triangle instanceof Shape); // T -> Shape이란 class에서 모두 상속 된것이다. 
console.log(triangle instanceof Object); // T -> JS에서 만든 모든 object, class들은 JS에 있는 object를 상속한 것이다. 어떤 object든지 공통적으로 존재하는 methods들을 사용할 수 있다.
console.log(triangle.toString()); // -> 'toString' JS에 공통적으로 지정되어 있는 object. 이런 object들도 오버라이팅이 가능하다.
