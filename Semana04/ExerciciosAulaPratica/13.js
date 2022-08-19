const array = [
    { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
    { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
    { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
    { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
    { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
    { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
    { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
]

IdadeCrescente(array)
console.log('Array em ordem crescente por idade: ')
console.log(array)

IdadeDecrescente(array)
console.log('Array em ordem decrescente por idade')
console.log(array)

SalarioCrescente(array)
console.log('Array em ordem crescente por salario')
console.log(array)

SalarioDecrescente(array)
console.log('Array em ordem decrescente por salario')
console.log(array)

SenioridadeCrescente(array)
console.log('Array em ordem crescente por senioridade')
console.log(array)

SenioridadeDecrescente(array)
console.log('Array em ordem decrescente por senioridade')
console.log(array)

function CompararSenioridade(a, b) {
    
    if((a.senioridade === "senior") && (
        b.senioridade === "pleno" ||
        b.senioridade === "junior" ||
        b.senioridade === "estagio")){
        return 1
    }
    
    if((a.senioridade === "pleno") && (
        b.senioridade === "junior" ||
        b.senioridade === "estagio")) {
        return 1
    }

    if(a.senioridade === "junior" && b.senioridade === "estagio"){
        return 1
    }

    if(a.senioridade === b.senioridade){
        return 0
    } else {
        return -1
    }
    
    
}

function IdadeCrescente(array){
    array.sort(function(a, b) {
        return ((a.idade < b.idade) ? -1 : (b.idade > a.idade) ? 1 : 0)
    });
}

function IdadeDecrescente(array){
    array.sort(function(a, b) {
        return ((a.idade < b.idade) ? 1 : (b.idade < a.idade) ? -1 : 0)
    });
}

function SalarioCrescente(array){
    array.sort(function(a,b) {
        return ((a.salario < b.salario) ? -1 : (a.salario > b.salario) ? 1: 0)
    })
}

function SalarioDecrescente(array){
    array.sort(function(a,b) {
        return ((a.salario < b.salario) ? 1 : (a.salario > b.salario) ? -1: 0)
    })
}


function SenioridadeCrescente(array){
    return array.sort(CompararSenioridade);
}


function SenioridadeDecrescente(array){
    return array.sort(CompararSenioridade).reverse();
}