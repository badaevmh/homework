'use strict';

const person = {
    name: 'Lom-Ali',
    age: '18',
    dateOfBirth: '2004',
    salary: 200000,
    department: 'marketing'
}

const person2 = {
    name: 'Saad',
    age: '28',
    dateOfBirth: '1999',
    salary: 100000,
    department: 'development'
}

const person3 = {
    name: 'Muhammad-Huseyn',
    age: '25',
    dateOfBirth: '1997',
    salary: 100,
    department: 'development'
}

const person4 = {
    name: 'Muhammad-Huseyn2',
    age: '25',
    dateOfBirth: '1997',
    salary: 200,
    department: 'development'
}

class Human {
    constructor(person) {
        this.name = String(person.name); // можно через тернарный оператор запилить проверку типа данных, но нужно ли по заданию не понял
        this.age = Number(person.age);
        this.dateOfBirth = String(person.dateOfBirth);
    }

    displayInfo() {
        return `${this.name}, ${this.age}, ${this.dateOfBirth}`;
    }
}

class Employee extends Human {
    constructor(person) {
        super(person);
        this.salary = Number(person.salary);
        this.department = String(person.department);
    }

    displayInfo() {
        return `${super.displayInfo()}, Зарплата: ${this.salary}, Отдел: ${this.department}`;
    }

}

class Manager extends Employee {
    constructor(person) {
        super(person);
        this.devList = [];
    }

    addDev(dev) {
        this.devList.push(dev);
    }

    deleteDev(dev) {
        const devIndex = this.devList.indexOf(dev);
        if (devIndex !== -1) {
            this.devList.splice(devIndex, 1);
        }
    }
}

class Developer extends Employee {
    constructor(person) {
        super(person);
        this.thisManager = null;
    }

    changeManager(manager) {
        this.manager = manager;
        manager.addDev(this);
    }
}


const manager1 = new Manager(person);
const manager2 = new Manager(person2);
const dev1 = new Developer(person3);
const dev2 = new Developer(person4);

manager1.addDev(person3);
console.log(manager1.devList);
manager1.deleteDev(person3);
console.log(manager1.devList);

console.log(employee1.displayInfo())

