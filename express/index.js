const express = require('express')
const app = express()
const port = 3000 //variável ambiente
const exphbs = require("express-handlebars") // import do handlebars

const path = require('path') //Preciso desse módulo para manipular diretórios

const basePath = path.join(__dirname, 'templates') //para estabelecer o caminhos dos arquivos html

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.set('views', 'express/views')

//middlewares para ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

//para transformar em json
app.use(express.json())

//arquivos estáticos
app.use(express.static('express/public'))

/*
app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
}) // manipula o caminho raiz de forma padrão 
// 
// */

app.get('/', (req, res) => {
    const globalUser = {
        name: 'Matheus',
        surname: 'Albuquerque',
        age: 30,
    }

    const auth = false

    res.render('home', { users: globalUser, auth })
}) // manipula o caminho raiz pela template engine handlebars
    

app.post('/validate', (req, res) => {
    const name = req.body.name
    const password = req.body.password


    if(name == 'Matt' && password == '135'){

        res.render('user')
    
    } 
})
    

app.listen(port, () => {
    console.log(`Rodando com sucesso na porta ${port}`)
})

