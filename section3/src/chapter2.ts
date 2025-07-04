// Unknown 타입 (전체타입, 슈퍼타입)

// 업캐스팅
function unknownExam() {
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;
}

// Never 타입
function neverExam() {
    function neverFunc(): never {
        while (true) {
        }
    }

    // 업 캐스팅
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();
}

// Void 타입
function voidExam() {
    function voidFunc(): void {
        console.log("hi");
    }

    let voidVar: void = undefined;
}

// any 타입
// never 제외한 모든 타입의 슈퍼 타입 or 서브 타입
function antExam() {
   let unknownVar: unknown;
   let anyVar: any;
   let undefinedVar: undefined;
   let neverVar: never;

   // 업 & 다운 캐스팅이 모두 다 가능
   anyVar = unknownVar;

   undefinedVar = anyVar;

   // never 타입은 순수 공집합이기에 다운 캐스팅 불가능
   // neverVar = anyVar;
}