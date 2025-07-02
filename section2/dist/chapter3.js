// ?를 통한 선택적 프로퍼티 정의
let user = {
    id: 1,
    name: "강은현",
};
// readonly를 통한 수정해선 안되는 프로퍼티 정의
let config = {
    apiKey: "MY API KEY",
};
export {};
// config.apiKey = "hacked";
