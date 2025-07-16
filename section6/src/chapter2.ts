// 접근 제어자
// access modifier
// public private protected

class Employee {

    constructor(private name: string, protected age: number, public position: string) {}

    work() {
        console.log(`${this.name}일함`);
    }
}

class ExecutiveOfficer extends Employee {
    officeNumber: number;

    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }

    func() {
        this.age = age;
    }
}

const employee = new Employee("강은현", 25, "프론트엔드 개발자");
console.log(employee);
