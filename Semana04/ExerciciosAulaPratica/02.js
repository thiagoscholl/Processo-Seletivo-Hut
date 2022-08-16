let array = [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]

let number = 3

const findNumber = (array, number) => {
    if(array.find((array) => array === number)){
        console.log('Valor encontrado')
    } else console.log('Valor não encontrado')
}

findNumber(array, number)