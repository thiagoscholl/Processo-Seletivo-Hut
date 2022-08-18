let array = [
    {
        name: 'Thiago Scholl',
        notas: [0, 0],
    },
    {
        name: 'John Doe',
        notas: [5, 0],
    },
    {
        name: 'Ana Lee',
        notas: [0, 0],
    },
]

printZeroGrades(array)

function printZeroGrades(array){
    console.log( array.filter((array) => {
       return array.notas.every(nota => nota === 0)
    }))
}
