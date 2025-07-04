// void type
// void 타입은 아무것도 없음을 의미하는 타입

// 반환값이 문자열일 경우 string 으로 타입 지정 가능
function func1(): string {
    return "hello";
}

// 반환값이 없을 경우(return 문 자체가 없는 경우) void 타입 사용
function  func2(): void {
    console.log("hello");
}

func2();

// never
// 존재하지 않는, 불가능한 타입
// return 문이 없어서 반환 X가 아닌, 반환 자체가 불가능한
function func3(): never {
    while(true) {}
}

function func4(): never {
    throw new Error();
}