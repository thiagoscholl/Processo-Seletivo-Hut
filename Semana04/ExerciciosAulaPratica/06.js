let array = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]

let n = 10

const printMultiply = (array, n) => {
    console.log(array.map(array =>  array * n))
}

printMultiply(array, 10)