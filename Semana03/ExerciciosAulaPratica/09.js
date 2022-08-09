const produtos = [
    { nome: 'maçã', quantidade: 2, valor: 0.5},
    { nome: 'alface', quantidade: 1, valor: 1.73},
    { nome: 'Água 5L', quantidade: 2, valor: 5.99},
    { nome: 'Pão Francês', quantidade: 8, valor: 0.63}
]

// Soma cada item (considerando já as quantidades)
var valortotal = produtos.reduce(getValorTotal, 0)

console.log(valortotal)

// Função que retorna o valor da quantidade total de cada item
function getValorTotal(total, produtos) {
    return total + (produtos.valor * produtos.quantidade)
}

