// any
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

// any 타입과 마찬가지로 아무 타입이나 넣을 수 있음
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// any처럼 변수에 할당 불가능
// toUpperCase같은 메서드 사용 불가능
// num = unknownVar;
// unknownVar.toUpperCase()