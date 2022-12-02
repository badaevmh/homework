'use strict';

class Human {
    constructor(name, age, dateOfBirth) {
        this.name = String(name); // можно через тернарный оператор запилить проверку типа данных, но нужно ли по заданию не понял
        this.age = Number(age);
        this.dateOfBirth = String(dateOfBirth);
    }

    displayInfo() {
        return `${this.name}, ${this.age}, ${this.dateOfBirth}`;
    }
}

class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth);
        this.salary = Number(salary);
        this.department = String(department);
    }

    displayInfo() {
        return `${super.displayInfo()}, Зарплата:${this.salary}, Отдел:${this.department}`;
    }

}

class Manager extends Employee {
    constructor(name, age, dateOfBirth, salary, department, devList = []) {
        super(devList);
        this.devList = devList;
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
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth, salary, department);
    }

    changeManager(manager) {
        this.manager = manager;
    }
}

const human1 = new Human('Имя', 35, '12.11.1997');
const employee1 = new Employee('Имя', 35, '12.11.1997', '30000', 'Веб-разработка');
const manager1 = new Manager('Саад', 25, '12.11.1997', '60000', 'Маркетинг');
const manager2 = new Manager('Джанибек', 35, '12.11.1997', '40000', 'Маркетинг');
const dev1 = new Developer('Лев', 26, '12.11.1997', '130000', 'Front-end');
const dev2 = new Developer('Лом-Али', 17, '12.11.1997', '160000', 'Back-end');

manager1.addDev(dev1.name);
manager1.addDev(dev2.name);
manager2.addDev(dev1.name);
manager2.addDev(dev2.name);
manager1.deleteDev(dev1.name);
console.log(manager1.devList);

console.log(employee1.displayInfo())

