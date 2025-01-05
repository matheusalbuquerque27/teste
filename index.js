const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual seu idioma materno?', (idioma) => {
    console.log(`Seu idioma materno é o ${idioma}`)
    readline.close()
})