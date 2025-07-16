// 선언 합침

interface Person {
    name: string;
}

interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    name: "hello";
}

const person: Person = {
    name: "",
    age: 27,
};