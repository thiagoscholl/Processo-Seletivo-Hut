let array = [1,2,3,4,-5,6,7,8,9,10]

const MaiorElemento = array.reduce(function(prev, current) {
    return prev > current ? prev : current
})

console.log('Maior elemento utilizando reduce: ' + MaiorElemento)

ImprimirMenorElemento(array)

function ImprimirMenorElemento(array){
    let aux = array[0]
    let indice
    for(let i=0; i<array.length; i++){
        if(aux>=array[i]){
            aux=array[i]
            indice=i
        }
    }

    console.log('\nMenor elemento: ' + aux + '\nIndice do menor elemento:' + indice)
}
