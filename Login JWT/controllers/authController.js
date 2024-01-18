const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    const token = req.header('authorization-token')
    console.log(token)
    if (!token) return res.status(401).send('Sem token: Acesso Negado')

    try {
        const userVerified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = userVerified
        next()
    } catch (error) {
        res.status(401).send('Usuário não verificado: Acesso Negado')
    }
}