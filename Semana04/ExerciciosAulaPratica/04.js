let array = [6, 8, 7]

const printAverage = (array) => {
    console.log(array.reduce((sum, array) => sum += array, 0) / array.length)
}

printAverage(array)