// 타입스크립트의 클래스

class Employee {
    name: string;
    age: number;
    position: string;

    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    work() {
        console.log("일함");
    }
}

class ExecutiveOfficer extends Employee {
    officeNumber: number;

    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}

const employee = new Employee("강은현", 25, "프론트엔드 개발자");
console.log(employee);

const employeeC: Employee = {
    name: "",
    age: 0,
    position: "",
    work() {},
};