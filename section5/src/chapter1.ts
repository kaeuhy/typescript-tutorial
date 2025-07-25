// 인터페이스의 확장(상속)

interface Animal {
    name: string;
    color: string;
}

interface Dog extends Animal {
    isBark: boolean;
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
    name: "",
    color: "",
    isBark: true,
    isScratch: true,
};