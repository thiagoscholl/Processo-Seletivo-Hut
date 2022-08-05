// Exercicio 01
var readlineSync = require('readline-sync')

op = readlineSync.question('Digite a operacao: ')
numero1 = parseInt(readlineSync.question('Digite o primeiro numero: '))
numero2 = parseInt(readlineSync.question('Digite o segundo numero: '))

console.log(Calculadora(op, numero1, numero2))

function Calculadora(string, n1, n2){
    switch (string) {
        case 'soma':
            return n1+n2
        case 'subtrai':
            return n1-n2
        case 'divide':
            return n1/n2
        case 'multiplica':
            return n1*n2
        default:
            return('Operacao invalida. Digite:\n soma | subtrai | divide | multiplica')
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