// Exercicio 01
var readlineSync = require('readline-sync')

op = readlineSync.question('Digite a operacao: ')
numero1 = parseInt(readlineSync.question('Digite o primeiro numero: '))
numero2 = parseInt(readlineSync.question('Digite o segundo numero: '))

Calculadora(op, numero1, numero2)

function Calculadora(string, n1, n2){
        const operacoesaceitas = {
            soma: n1+n2,
            subtrai: n1-n2,
            divide: n1/n2,
            multiplica: n1*n2,
        }

        if(operacoesaceitas[string] !== undefined ){
            console.log(operacoesaceitas[string])
        } else {
            console.log("Operacao invalida. Digite:\n soma | subtrai | divide | multiplica\n")
        }

}

// Exercicio 02
const usuario = {
        nome: "Thiago",
        idade: 23,
    }

const maioridade = ({idade}) => {
    return (idade >= 18) ? 'Maior de idade' : 'Menor de idade'
}

function getName({nome}) {
    return nome
}

console.log (getName(usuario) + '\n' + maioridade(usuario))