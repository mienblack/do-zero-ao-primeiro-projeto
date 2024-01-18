
const fs = require('fs')

let args = process.argv.slice(2)

let fileName = args[0]

fs.readFile(fileName, "utf-8", (error, data) => {
    if(error) {
        throw error
    } else {
        fs.writeFile(fileName + "_uppercase", data.toUpperCase(),(error) => {
            if(error) {
                throw error
            } else {
                console.log("Arquivo gerado com sucesso")
            }
        
        })
    }

})

/*
fs.writeFile("test.txt", "Hello World", (error) => {
    if(error) {
        throw error
    } else {
        console.log("Arquivo criado com sucesso")
    }

})

fs.appendFile("test.txt", "No orld", (error) => {
    if(error) {
        throw error
    } else {
        console.log("Arquivo atualizado com sucesso")
    }

})

fs.unlink("test.txt", (error) => {
    if(error) {
        throw error
    } else {
        console.log("Arquivo apagado com sucesso")
    }

})

fs.rename("test.txt","TESTE.txt", (error) => {
    if(error) {
        throw error
    } else {
        console.log("Arquivo renomeado com sucesso")
    }

})

fs.readFile("TESTE.txt", "utf-8", (error, data) => {
    if(error) {
        throw error
    } else {
        console.log(data)
    }

})

*/