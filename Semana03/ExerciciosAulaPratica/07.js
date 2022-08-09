let array = [6, 8, 7, 9]

ImprimirMediaAritmetica(array)

function ImprimirMediaAritmetica(array){
    let media = 0
    for(let item of array){
        media = media + (item/array.length)
    }
    
    console.log(media)
}