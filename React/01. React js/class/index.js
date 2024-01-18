const Person = require('./Person')
const Student = require('./Student')


let paulo = new Person("Paulo", 21)

paulo.greetings()

let marcos = new Student("Marcos", 23, "1000")

marcos.greetings()