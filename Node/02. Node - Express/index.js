const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const aluno = require("./routes/alunos")
const first = require("./routes/first")

app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api", aluno)

app.get("/", (req, res) => {
    res.send("Hello World!")
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`)
})