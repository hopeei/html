// ----------------- task 1

class Circle {
    constructor(centerx, centery, radius,) {
        this.centerx = centerx;
        this.centery = centery;
        this.radius = radius;
    }
    getCircumLenght() {
        return 2 * Math.PI * this.radius;
    }
    static CircleLenght(radius) {
        const circlelenght = 2 * Math.PI * radius;
        return circlelenght;
    }
    getCopy() {
        return new Circle(this.centerx, this.centery, radius)
    }
    static CircleElement(centerx, centery, radius) {
        const circleelem = new Circle();
        circleelem.setCircle(centerx, centery, radius);
        return circleelem;
    }
    CheckPointInside(pointx, pointy) {
        const distanse = Math.sqrt((pointx - this.centerx) ** 2 + (pointy - this.centery) ** 2);
        return distanse <= this.radius;
    }
    toString() {
        return `Circle center: x - ${this.centerx}, y - ${this.centery} and radius: ${this.radius}`
    }
}
const centerx = parseFloat(prompt("Ведіть координату x: "));
const centery = parseFloat(prompt("Ведіть координату y: "));
const radius = parseFloat(prompt("Ведіть радіус: "));

const circle = new Circle(centerx, centery, radius);
console.log("Довжина кола:", circle.getCircumLenght());

const newRadius = parseFloat(prompt("Введіть радіус для обчислення довжини кола: "));
console.log("Довжина кола за заданим радіусом:", Circle.CircleLenght(newRadius));

const copiedCircle = circle.getCopy();
console.log("Копія кола:", copiedCircle);

const pointx = parseFloat(prompt("Введіть координату x крапки: "));
const pointy = parseFloat(prompt("Введіть координату y крапки: "));
console.log("Чи потрапляє крапка до кола:", circle.CheckPointInside(pointx, pointy));

console.log(circle.toString());



// --------------------------- task 2

function propsCount(currentObject) {
    const propertyCount = Object.keys(mentor).length;
    return propertyCount;
}
let mentor = {
    course: "JS fundamental",
    duraction: 3,
    direction: "web-development"
};
console.log("Кількість елементів ", propsCount(mentor));

// ----------------------- task 3

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        console.log(this.name + "" + this.surname)
    }
}
class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(middleName) {
        console.log(this.surname + '  ' + this.name + '  ' + middleName);
    }
    showCourse() {
        const currentYear = new Date().getFullYear();
        const course = currentYear - this.year + 1;
        return course;
    }
}

const stud1 = new Student("Petro", "Petrenko", 2021);
stud1.showFullName("Petrovych");
console.log("Current course: " + stud1.showCourse());

// ------------------------ task 4
class Marker {
    constructor(color, inkCount) {
        this.color = color;
        this.inkCount = inkCount;
    }

    printText(text) {
        for (let char of text) {
            if (this.inkCount >= 0.5) {
                console.log(char);
                this.inkCount -= 0.5;
            } else {
                break;
            }
        }
        console.log();
    }
}

class RefuelMarker extends Marker {
    refill(inkAmount) {
        this.inkLevel = Math.min(this.inkCount + inkAmount, 100);
    }
}

const marker = new RefuelMarker("blue", 25);
marker.printText("Hello, World!");
marker.printText(" It's a nice day");

marker.refill(50);
marker.printText(" How are you?");


// ---------------------- task 5
class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this._experience = 1.2;
    }

    showSalary() {
        const salary = this.dayRate * this.workingDays;
        console.log(`${this.fullName} salary: ${salary}`);
    }

    showSalaryWithExperience() {
        const salary = this.dayRate * this.workingDays * this._experience;
        console.log(`${this.fullName} salary: ${salary}`);
    }

    get showExp() {
        return this._experience;
    }

    set setExp(value) {
        this._experience = value;
    }

    static sortSalary(workers) {
        workers.sort((a, b) => {
            const salaryA = a.dayRate * a.workingDays * a._experience;
            const salaryB = b.dayRate * b.workingDays * b._experience;
            return salaryA - salaryB;
        });
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
let worker3 = new Worker("Andy Ander", 29, 23);

console.log("\nSorted salary:");
const workers = [worker1, worker2, worker3];
Worker.sortSalary(workers);
workers.forEach((worker) => {
    const salary = worker.dayRate * worker.workingDays * worker._experience;
    console.log(`${worker.fullName}: ${salary}`);
});


