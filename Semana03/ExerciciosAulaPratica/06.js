let array = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]

Multiplicar(array, 10)

const Multiplicar = (array, n) => {
    for (let item of array){
        console.log(item*n)
    }
}