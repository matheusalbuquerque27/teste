const express = require('express')
const app = express()
const port = 3000 //variável ambiente
let login = true

const path = require('path') //Preciso desse módulo para manipular diretórios

const basePath = path.join(__dirname, 'templates') //para estabelecer o caminhos dos arquivos html

//middlewares para ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

//para transformar em json
app.use(express.json())

const checkAuth = function (req, res, next) {
    req.authStatus = login

    if(req.authStatus){
        console.log("Você está logado, seja bem vindo!")
        next()
    } else {
        res.sendFile(`${basePath}/logar.html`)
        next()
    }
} //Essa é uma middleware, usada para autenticações

app.use(checkAuth) //inicializar/inserir a middleware

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
}) // manipula o caminho raiz

app.listen(port, () => {
    console.log(`Rodando com sucesso na porta ${port}`)
})

app.get('/logar', (req, res) => {
    res.sendFile(`${basePath}/logar.html`)
})