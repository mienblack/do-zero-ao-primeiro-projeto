/*
console.log("Hello World")

console.log(sum(9, 8))

console.log(process.argv)
*/

const calc = require("./calc.js")

const args = process.argv.slice(2)

let a = Number(args[1])
let b = Number(args[2])
let c = ''

if (args[0] == 's') {
    c = calc.sum(a, b)
} else if (args[0] == 'm') {
    c = calc.mult(a, b)
} else {
    c = "Opção Inválida"
}

console.log(c)