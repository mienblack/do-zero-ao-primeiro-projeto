const express = require('express')
const router = express.Router()

let alunos = [
    { id: 0, nome: "José" },
    { id: 1, nome: "Maria" },
    { id: 2, nome: "Matheus" },
    { id: 3, nome: "Flavia" }
]

router.get("/aluno", (req, res, next) => {
    console.log(req.body)

    let aluno = alunos[req.body.id]
    if (aluno) {
        res.json(aluno)
    } else {
        next()
    }
})

router.get("/alunos", (req, res) => {
    console.log(req.query)

    let aluno = alunos[req.query.id]
    if (aluno) {
        res.json(aluno)
    } else {
        res.send("aluno não encontrado")
    }
})

router.get("/aluno/all", (req, res, next) => {
    res.json(JSON.stringify(alunos))
})

router.get("/aluno/:id", (req, res) => {
    console.log(req.params.id)
    let aluno = alunos[req.params.id]
    res.json(aluno)
})

module.exports = router