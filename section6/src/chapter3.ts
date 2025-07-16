// 인터페이스와 클래스

interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

class Character implements CharacterInterface {

    // constructor(name: string, moveSpeed: number) {
    //     this.moveSpeed = moveSpeed;
    //     this.name = name;
    // }

    constructor(public name: string, public moveSpeed: number) {
    }

    move(): void {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}