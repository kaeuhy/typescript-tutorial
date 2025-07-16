// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
// 1. 반환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

// 다운 캐스팅이 불가능
a = b;
// b = a;

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// 매개변수 호환에 있어선 업 캐스팅이 불가능
// c = d;
d = c;

type Animal  = {
    name: stringl
};

type Dog  = {
    name: stringl
    color: string;
};

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

// 업 캐스팅이 불가능
// animalFunc = dogFunc;

// 해당 코드처럼 업 캐스팅이 가능하면 없는 프로퍼티까지 호출 가능해야하기에
// 업 캐스팅이 불가능
/*
let testFunc = (animal: Animal) => {
    console.log(animal.name);
    console.log(animal.color);
}
*/

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a: nubmer, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; 는 불가능