let array = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

const printPositiveNumbers = (array) => {
    console.log('Numeros positivos: ' + array.filter(array => array >= 0).join(', '))
}

const printNegativeNumbers = (array) => {
    console.log('Numeros negativos: ' + array.filter(array => array < 0).join(', '))
}

const printEvenNumbers = (array) => {
    console.log('Numeros pares: ' + array.filter(array => array % 2 === 0).join(', '))
}

const printOddNumbers = (array) => {
    console.log('Numeros ímpares: ' + array.filter(array => array % 2 !== 0).join(', '))
}

printPositiveNumbers(array)
printNegativeNumbers(array)
printEvenNumbers(array)
printOddNumbers(array)