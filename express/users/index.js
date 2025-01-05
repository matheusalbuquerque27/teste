const basePath = path.join(__dirname, 'templates') //para estabelecer o caminhos dos arquivos html

//usando parâmetros do método GET
app.get('/users/:id', (req, res) => {
    const id = req.params.id

    res.send(`O ID do usuário é ${id}`)

})

app.post('/users/save', (req, res) => {

    //extrair dados vindos pelo post
    const name = req.body.name
    const senha = req.body.senha

    if(name == "Matt" && senha =="135"){
        res.sendFile(`${basePath}/index.html`)
    } else {
        console.log("Acesso negado, tente novamente")
    }

})