let array = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]

const changeEvensForX = (array) => {
    array.map((aux, i) => {
        if(aux % 2 === 0) array[i] = 'X'
    })
    console.log(array.join(', '))
}

changeEvensForX(array)