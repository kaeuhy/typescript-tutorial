// 타입 별칭을 이용하여 타입을 변수처럼 취급
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}

let user1: User = {
    id: 1,
    name: "강은현",
    nickname: "kaeuhy",
    birth: "2001.03.15",
    bio: "안녕하세요",
    location: "제주시",
};

let user2: User = {
    id: 2,
    name: "홍길동",
    nickname: "kaeuhy",
    birth: "2001.03.15",
    bio: "안녕하세요",
    location: "제주시",
};

// 인덱스 시그니처
type CountryCodes = {
    [key: string]: string;
}

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};

type CountryNumberCodes = {
    [key: string]: number;
}

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
};

console.log(countryNumberCodes["Korea"]);