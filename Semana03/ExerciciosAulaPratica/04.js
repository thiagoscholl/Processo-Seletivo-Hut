let numero = 5
let segundovalor = 10

tabuada(numero, segundovalor)

function tabuada(numero, segundovalor) {
    for(let i=1; i<=segundovalor; i++){
        console.log(numero + 'x' + i + '=' + numero*i)
    }
}