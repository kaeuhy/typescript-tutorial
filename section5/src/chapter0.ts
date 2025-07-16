// 인터페이스

interface Person {
    readonly name: string;
    age?: number;
    sayHi?: () => void;
}

const person: Person = {
    name: "강은현",
    age: 25,
};