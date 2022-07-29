// Exercicio 01
let array = [5,9,10,6]

console.log(somamult(array))

function somamult (array) { 
    var soma = 0

    for (let i=0; i<array.length; i++) {
        soma = (array[i] * i) + soma
    }
    return soma
}

// Exercicio 02
const user = {
    name: "Juca",
    projects: [
        {name: "Projeto 1", start: "01/02/2021", active: true},
        {name: "Projeto 2", start: "03/03/2021", active: false},
        {name: "Projeto 3", start: "10/08/2021", active: true},
        {name: "Projeto 4", start: "20/08/2021", active: false},
        {name: "Projeto 5", start: "18/10/2021", active: true}
    ]
}

imprimirProjetosAtivos(user)

function imprimirProjetosAtivos(user) {
    for(let i = 0; i<user.projects.length; i++){
        user.projects[i].active == true ? console.log(user.projects[i].name) : null
    }
}