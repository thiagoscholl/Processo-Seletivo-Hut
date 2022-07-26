var readlineSync = require('readline-sync')

// Exercicio 01
console.log('Exercicio 01')

var valor = readlineSync.question('Digite um número para verificar se ele é par: ')

console.log(ehPar(valor))

function ehPar(valor){
    if(valor % 2 == 0){
        return true
    } else return false
}

//Exercicio 02
console.log('Exercicio 02')

var idade = readlineSync.question('Digite a idade do nadador: ')

console.log('Categoria: ' + Categoria(idade))

function Categoria(idade){
    if (idade >=5 && idade <=7) return 'Infantil A'
    if (idade >=8 && idade <=10) return 'Infantil B'
    if (idade >=11 && idade <=13) return 'Juvenil A'
    if (idade >=14 && idade <=17) return 'Juvenil B'
    if (idade >=18) return 'Adulto'
}
