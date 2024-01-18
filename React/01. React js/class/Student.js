const Person = require('./Person')

class Student extends Person {

    constructor(name, age, classroom) {
        super(name, age)
        this.classroom = classroom
    }

    greetings() {
        console.log("Hello! My name is", this.name, ", I am from class", this.classroom)
    }
}

module.exports = Student