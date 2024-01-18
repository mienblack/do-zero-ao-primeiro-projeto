const http = require('http')
const url = require('url')
const fs = require('fs')

function handleFile(req, res, callback) {

    let path = url.parse(req.url).pathname

    if (path == '' || path == '/') {
        path = '/index.html'
    }

    let fileName = "." + path
    fs.readFile(fileName, (err, data) => {
        if (err) {
            if (callback) {
                if (!callback(req, res)) {
                    res.writeHead(404, { 'Content-type': 'text/html;charset=utf8' })
                    res.end('<h1>Página não encontrada')
                }
            }
        } else {
            res.writeHead(200, { 'Content-type': 'text/html' })
            res.write(data)
            res.end()
        }
    })
}

function handleRequest(req, res) {
    let path = url.parse(req.url).pathname

    let method = req.method
    console.log(method)
    if (method == "PUT") {
        res.writeHead(404, { 'Content-type': 'text/html;charset=utf8' })
    }
    if (path == '/teste') {
        res.end("Teste")
        return true
    }
    return false
}

http.createServer((request, response) => {

    handleFile(request, response, handleRequest)

}).listen(80, (err) => {

    if (err) {
        console.log(err)
    } else {
        console.log('Servidor rodando na porta 80')
    }
})

/*
res.writeHead(200, { 'Context-type': 'text/html' })
res.end('<h1>Hello World!</h1>')
*/