// 대수 타입
// 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입이 존재

// Union 타입 - 합집합
let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
}

type Union1 = Dog | Person

// Dog 타입으로 인식
let union1: Union1 = {
    name: "",
    color: "",
};

// Person 타입으로 인식
let union2: Union1 = {
    name: "",
    language: "",
};

// Dog와 Person의 교집합
let union3: Union1 = {
    name: "",
    color: "",
    language: "",
};

// Union1 합집합에 포함되지 않기에 오류 발생
// let union4: Union1 = {
//     name: "",
// };

// Intersection 타입 - 교집합 타입
// 해당 두 타입은 겹치지 않음 즉, 공집합
// 그렇기에 variable의 타입은 never
let variable: number & string;

type Intersection = Dog & Person;

// 교집합 즉, Dog와 Person 포함되어야 하기 때문에
// 해당 객체의 모든 프로퍼티가 다 존재해야함
let intersection1:  Intersection = {
    name: "",
    color: "",
    language: "",
};