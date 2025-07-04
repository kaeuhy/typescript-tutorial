// 타입 추론
// 변수의 초깃값을 기준으로 타입 추론

let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "강은현",
    profile: {
        nickname: "kaeuhy",
    },
    urls: ["https://kaeuhy.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];


// any 타입의 진화
// 암묵적 any 타입
let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

const num = 10;
const str = "hello";

let arr = [1, "string"];