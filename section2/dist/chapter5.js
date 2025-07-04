// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 숫자형 enum
// 위에서부터 순서대로 0번 ~
// 10번부터 시작시 순서대로 10번 ~
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
// 문자형 enum
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "강은현",
    role: Role.ADMIN, // 관리자
    language: Language.korean
};
const user2 = {
    name: "홍길동",
    role: Role.USER, // 일반 유저
    language: Language.english
};
const user3 = {
    name: "아무개",
    role: Role.GUEST // 게스트
};
console.log(user1, user2, user3);
export {};
