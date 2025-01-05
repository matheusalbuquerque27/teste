function prompt() {

    const inquirer = require('inquirer');

    inquirer.prompt([{
        name: 'n1', 
        message: 'Qual sua data de nascimento?',
        }, {
        name: 'n2', 
        message: 'Qual sua idade?',
        }
    ])
    .then((answers) => {
        let soma = parseInt(answers.n1) + parseInt(answers.n2);
        console.log(`A soma do seu aniversário com sua idade é ${soma}`)
    })
    .catch((err) => console.log(err))
}

module.exports = {
    prompt: prompt,
}; 

//É preciso utilizar esse método de exportação caso se utilize o require.
//Para utilizar o import no outro arquivo, pode-se utilizar o export function.