let valor = 576
let cedulas = [100, 50, 20, 10, 5, 2, 1]

imprimirCedulas(cedulas)

function imprimirCedulas(cedulas){
    for(let i=0; i<cedulas.length; i++){
        contarNotas(cedulas[i])
    }    
}

function contarNotas(cedula) {
    let notas = parseInt(valor/cedula)
    valor = valor - (notas*cedula)

    console.log(notas + ' nota(s) de R$:' + cedula)
}