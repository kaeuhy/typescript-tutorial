// 객체 타입간의 호환성

// 프로퍼티 조건이 더 적은 쪽이 슈퍼 타입
type Animal = {
    name: string;
    color: string;
};

// 추가 프로퍼티가 존재 하는 것이 서브 타입
type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: "기린",
    color: "yellow",
};

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
};

// 가능 -> 업 캐스팅
animal = dog;
// 불가능 -> 다운 캐스팅
// dog = animal;

type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book: Book;
let programmingBook : ProgrammingBook = {
    name: "한 입 크기러 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs",
};

book = programmingBook;

// 초과 프로퍼티 검사
let book2: Book = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // 이때, Book 타입 별칭 해둔 프로퍼티와 맞지 않음으로 초과 프로퍼티 검사가 발생
    // 사용 불가
    // skill: "reactjs",
};