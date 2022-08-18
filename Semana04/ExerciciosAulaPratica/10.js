let array1 = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]
let array2 = [-5, -19, 32, 28, 65, -2, -49, -63, 22, 13, 255]

printCommonElements(array1, array2)

function printCommonElements(array1, array2) {
    console.log(array1.filter((elemento1) => array2.some(elemento2 => elemento2 === elemento1)))
}