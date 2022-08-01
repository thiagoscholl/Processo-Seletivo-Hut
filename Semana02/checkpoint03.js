// Exercicio 03
let array = [6, 21, 9, 2, 50, 98, 1]

console.log(MaiorNumero(array) + " é o maior número do array.\n")

function MaiorNumero(array) {
    var aux

    aux = array[0]

    for(let i=0; i<array.length; i++){
        if(array[i]>aux){
            aux = array[i]
        }
    }

    return aux
}

// Exercicio 04
var string = "Processo seletivo da Hut8 em 2022"

console.log("Frase: " + string)
console.log(ContadorDePalavras(string) + " palavras")

function ContadorDePalavras(string) {
    return string.split(" ").length
}