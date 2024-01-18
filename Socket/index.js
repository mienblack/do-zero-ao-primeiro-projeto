const express = require('express')
const socketIO = require('socket.io')
const path = require('path')
const app = express()

app.use('/', express.static(path.join(__dirname, 'public')))

const server = app.listen(3000, () => {
    console.log("Listening")
})

const io = socketIO(server)

io.on('connection', (socket) => {
    console.log('New Connection')

    socket.broadcast.emit('hello', { msg: `Welcome new user!` })
})