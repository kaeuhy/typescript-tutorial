// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// 숫자형 enum
// 위에서부터 순서대로 0번 ~
// 10번부터 시작시 순서대로 10번 ~
enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

// 문자형 enum
enum Language {
    korean = "ko",
    english = "en",
}

const user1 = {
    name: "강은현",
    role: Role.ADMIN, // 관리자
    language: Language.korean
}

const user2 = {
    name: "홍길동",
    role: Role.USER, // 일반 유저
    language: Language.english
}

const user3 = {
    name: "아무개",
    role: Role.GUEST // 게스트
}

console.log(user1, user2, user3);