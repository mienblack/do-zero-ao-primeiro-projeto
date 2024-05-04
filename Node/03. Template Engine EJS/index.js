const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const path = require('path')

const users = [
    {
        id: 0,
        name: "Damien Costa",
        phone: "(11) 978789077"
    },

    {
        id: 1,
        name: "Igor Oliveira",
        phone: "(222)45676770"
    }
]

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render('user', { users })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})