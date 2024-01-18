const express = require('express')
const router = express.Router()
const auth = require('../controllers/authController')

router.get("/", auth, (req, res) => {
    if (req.user.admin) {
        res.send('Este dado é visto apenas pelo administrador')
    } else {
        res.send('Não admin: Acesso Negado')
    }
})
router.get("/free", auth, (req, res) => {
    res.send("Vista por usuários logados")
})

module.exports = router