//  Exercicio 01
var nome = 'Thiago'
var sobrenome = 'Coelho Scholl'
var diaNasc = '21'
var mesNasc = '04'
var anoNasc = '1999'
var idade = '23'
var nota1 = '9.5'
var nota2 = '7'

console.log('Exercicio 01:')
console.log('Nome completo: ' + nome + ' ' + sobrenome)
console.log('Idade: ' + idade)
console.log('Data de nascimento: ' + diaNasc + '/' + mesNasc + '/' + anoNasc)
console.log('Média: ' + calculaMedia(nota1, nota2))
console.log('')

function calculaMedia(n1, n2){
    return (parseFloat(n1) + parseFloat(n2))/2
}


// Exercicio 02
var x = calculaSoma(5, 10, 15)

console.log('Exercicio 02:')
console.log(x)

function calculaSoma(n1, n2, n3){
    return parseInt(n1) + parseInt(n2) + parseInt(n3)
}