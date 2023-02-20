function sayHello() {
    console.log("hello");
}
// sayHello();

class Student {
    constructor(name, age, height) {
        (this.name = name), (this.age = age), (this.height = height);
    }
    sayHello() {
        console.log("hello my name is" +' ' + this.name);
    }
}

let student1 = new Student('Anita', 23, '5ft 5inches');
let student2 = new Student('Peter', 26, '6ft');

console.log (student1.sayHello(), student2);




class Rectangle {
    constructor(length, height, breath) {
        this.length = length;
        this.height = height;
        this.breath = breath;
    }

    calculateArea() {
        return this.length * this.height;
    }   

    calculatePerimeter() {
        return 2 * (this.length + this.height)
    }
}

let rectangle1 = new Rectangle(20, 10, 15);

console.log(rectangle1.calculateArea(), rectangle1.calculatePerimeter());
