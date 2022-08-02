// Exercicio 05
const users = [
    {
        name: "Joao",
        skills: ["Javascript", "ReactJS", "Redux"]
    },
    {
        name: "Pedro",
        skills: ["VueJS", "Ruby on Rails", "Elixir"]
    },
]

ImprimirSkills(users)

function ImprimirSkills(objeto) {
    for(let i=0; i<objeto.length; i++){
        console.log("Nome: " + objeto[i].name + "\nSkills: " + objeto[i].skills)
    }
}

// Exercicio 06
let player1 = GerarNumeroAleatorio()
let player2 = GerarNumeroAleatorio()

console.log('\nPlayer 1: ' + player1 + '\nPlayer 2: ' + player2)
console.log(RockPaperScissorsWinner(player1, player2))

function GerarNumeroAleatorio(){
    const numero = Math.floor(Math.random() * 3)
    return(
        (numero == 0) ? 'Tesoura' : (numero == 1) ? 'Papel' : 'Pedra'
    )
}

function RockPaperScissorsWinner(player1, player2) {
    return(
        (player1 == player2) ? 'Empate' :
        (player1 == 'Tesoura' && player2 == 'Papel' || player1 == 'Papel' && player2 == 'Pedra' || player1 == 'Pedra' && player2 == 'Tesoura') ? 'Player 1 ganhou.': 'Player 2 ganhou'
    )
}