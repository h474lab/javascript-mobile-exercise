const CU_NHAN = 1;
const THAC_SI = 2;
const TIEN_SI = 3;

const TRUONG_PHONG = 1;
const PHO_PHONG = 2;
const NHAN_VIEN = 3;

class Employee {
    name;
    allowance;
    salaryRate;

    printInfo() {}
    getSalary() {}
}

class Teacher extends Employee {
    #department;
    #degree;
    #lessons;

    constructor(name, department, degree, salaryRate, lessons) {
        super();
        this.name = name;
        this.#department = department;
        this.#degree = degree;
        this.salaryRate = salaryRate;
        this.#lessons = lessons;

        switch(this.#degree) {
            case CU_NHAN:
                this.allowance = 300;
                break;
            case THAC_SI:
                this.allowance = 500;
                break;
            case TIEN_SI:
                this.allowance = 1000;
                break;
        }
    }

    getDepartmentName(code) {
        switch (code) {
            case CU_NHAN:
                return 'Cu nhan';
            case THAC_SI:
                return 'Thac si';
            case TIEN_SI:
                return 'Tien si';
        }
    }

    printInfo() {
        console.log("Ho Ten: " + this.name);
        console.log("Khoa: " + this.#department);
        console.log("Trinh Do: " + this.getDepartmentName(this.#degree));
        console.log("Phu Cap: " + this.allowance);
        console.log("So Tiet Day: " + this.#lessons);
        console.log("He So Luong: " + this.salaryRate);
    }

    getSalary() {
        return this.salaryRate * 1130 + this.allowance + this.lessons * 85;
    }
}

class Officer extends Employee {
    #room;
    #workDays;
    #position;

    constructor(name, room, salaryRate, workDays, position) {
        super();
        this.name = name;
        this.#room = room;
        this.salaryRate = salaryRate;
        this.#workDays = workDays;
        this.#position = position;

        switch(this.#position) {
            case TRUONG_PHONG:
                this.allowance = 2000;
                break;
            case PHO_PHONG:
                this.allowance = 1000;
                break;
            case NHAN_VIEN:
                this.allowance = 500;
                break;
        }
    }

    getPositionName(code) {
        switch (code) {
            case TRUONG_PHONG:
                return 'Truong phong';
            case PHO_PHONG:
                return 'Pho phong';
            case NHAN_VIEN:
                return 'Nhan vien';
        }
    }

    printInfo() {
        console.log("Ho Ten: " + this.name);
        console.log("Phong Ban: " + this.#room);
        console.log("So Ngay Cong: " + this.#workDays);
        console.log("He So Luong: " + this.salaryRate);
        console.log("Phu Cap: " + this.allowance);
        console.log("Chuc Vu: " + this.getPositionName(this.#position));
    }

    getSalary() {
        return this.salaryRate * 1130 + this.allowance + this.#workDays * 250;
    }
}

var people = [
    new Teacher(
        'Le Van A',
        'KHMT',
        THAC_SI,
        1,
        30,
    ),
    new Officer(
        'Tran Thi B',
        'Hanh Chinh',
        1.5,
        20,
        TRUONG_PHONG,
    ),
]

var highestSalaryPerson;
var highestSalary = -1;

people.forEach((person) => {
    console.log('---');
    person.printInfo();

    if (person.getSalary() > highestSalary) {
        highestSalary = person.getSalary();
        highestSalaryPerson = person;
    }
});

console.log('---HIGHEST-SALARY---');
highestSalaryPerson.printInfo();
console.log("Luong: " + highestSalary);