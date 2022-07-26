//  Exercicio 01
function numeroEhPositivo(n){
    if(n >= 0){
        return ('É positivo')
    } else {
        return ('É negativo')
    }
}

console.log('Exercicio 01:')
console.log(numeroEhPositivo(-8))

// Exercicio 02
var x = -1
var y = 1

console.log('\nExercicio 02:')
console.log(possuiNumeroPositivo(x, y))

function possuiNumeroPositivo(n1, n2) {
    if (n1 >= 0 || n2 >= 0){
        return ('Possui algum valor positivo')
    } else {
        return ('Não possui nenhum valor positivo')
    }
}

// Exercicio 03
console.log('\nExercicio 03:')
var readlineSync = require('readline-sync')
var preço = readlineSync.question('Digite o preço da etiqueta: ')
var op = readlineSync.question('Digite 1 para pagamento a vista em dinheiro ou cheque.\nDigite 2 para pagamento a vista no cartão de crédito. \nDigite 3 para pagamento em duas vezes. \nDigite 4 para pagamento em tres vezes com juros.\n')

console.log('\nO preço final do produto será de: R$' + preçoFinal(preço, op))

function preçoFinal(preço, op){
    switch(op) {
        case '1':
            return preço * 0.9
        case '2':
            return preço * 0.85
        case '3':
            return preço
        case '4':
            return preço * 1.10
    }
}