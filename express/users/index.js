const express = require('express')
const router = express.Router()

const path = require('path') //Preciso desse módulo para manipular diretórios
const basePath = path.join(__dirname, '../templates') //para estabelecer o caminhos dos arquivos html

//middlewares para ler o body
router.use(
    express.urlencoded({
        extended: true,
    }),
)

//para transformar em json
router.use(express.json())

//usando parâmetros do método GET
router.get('/:id', (req, res) => {
    const id = req.params.id

    res.send(`O ID do usuário é ${id}`)

})

router.post('/save', (req, res) => {

    //extrair dados vindos pelo post
    const name = req.body.nome
    const senha = req.body.senha

    if(name == "Matt" && senha =="135"){
        res.sendFile(`${basePath}/index.html`)
    } else {
        console.log("Acesso negado, tente novamente")
    }

})

module.exports = router