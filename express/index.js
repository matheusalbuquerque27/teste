const express = require('express')
const app = express()
const port = 3000 //variável ambiente
const exphbs = require("express-handlebars") // import do handlebars
const Handlebars = require('handlebars')
const fs = require('fs')//Para ler arquivos

const path = require('path') //Preciso desse módulo para manipular diretórios

const basePath = path.join(__dirname, 'templates') //para estabelecer o caminhos dos arquivos html

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main',
    partialsDir: ['views', 'views/partials']
}))
app.set('view engine', 'handlebars')
app.set('views', 'express/views')

//Esse trecho abaixo é necessário para compilar o partial e registrá-lo
const partialContent = fs.readFileSync(path.join(__dirname, 'views', 'partials', 'countries.hbs'), 'utf-8')
const compiledPartial = Handlebars.compile(partialContent)
Handlebars.registerPartial("countries", compiledPartial)

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

    res.render('home', { users: globalUser,  auth })
}) // manipula o caminho raiz pela template engine handlebars
    

app.post('/validate', (req, res) => {
    const name = req.body.name
    const password = req.body.password

    const countries = ['Usa', 'Canada', 'Brasil', 'Argentina']

    const countriesAtributes = [
        {
            pais: 'USA',
            lingua: 'Inglês',
            tamanho: 57896,
            populacao: '350 Milhões',
        },
        {
            pais: 'Canada',
            lingua: 'Inglês/Francês',
            tamanho: 60896,
            populacao: '36 Milhões',
        },
        {
            pais: 'Brasil',
            lingua: 'Português',
            tamanho: 50896,
            populacao: '220 Milhões',
        },
        {
            pais: 'Argentina',
            lingua: 'Espanhol',
            tamanho: 15896,
            populacao: '35 Milhões',
        }
    ]

    if(name == 'Matt' && password == '135'){

        res.render('user', { countriesAtributes })
    
    } 
})
    

app.listen(port, () => {
    console.log(`Rodando com sucesso na porta ${port}`)
})

