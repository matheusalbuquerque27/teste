const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual seu idioma materno?', (idioma) => {
    if(idioma == "inglês"){
        console.log(`Sendo o ${idioma}, você tem grande vantagem!`)
    } else {
        console.log(`Que bom que fala ${idioma}, mas seria bom aprender inglês também.`)
    }
    
    readline.close()
})

