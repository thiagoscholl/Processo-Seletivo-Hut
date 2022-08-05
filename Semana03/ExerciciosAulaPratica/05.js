let array = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

imprimirPositivos(array)
imprimirNegativos(array)
imprimirPares(array)
imprimirImpares(array)

function imprimirPositivos(array){
    let count=0
    console.log('\nNumeros Positivos:')
    for(let i=0; i<array.length; i++){
        (array[i]>=0) ? (console.log(array[i]), count++) : null
    }
    console.log('Total: ' + count)
}

function imprimirNegativos(array){
    let count=0
    console.log('\nNumeros Negativos:')
    for(let i=0; i<array.length; i++){
        (array[i]<0) ? (console.log(array[i]), count++) : null
    }
    console.log('Total: ' + count)
}

function imprimirPares(array){
    let count=0
    console.log('\nNumeros Pares:')
    for(let i=0; i<array.length; i++){
        (array[i]%2==0) ? (console.log(array[i]), count++) : null
    }
    console.log('Total: ' + count)
}

function imprimirImpares(array){
    let count=0
    console.log('\nNumeros Impares:')
    for(let i=0; i<array.length; i++){
        (array[i]%2!=0) ? (console.log(array[i]), count++) : null
    }
    console.log('Total: ' + count)
}