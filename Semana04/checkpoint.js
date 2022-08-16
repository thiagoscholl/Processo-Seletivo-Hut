// Exercicio 01

let names = "Maria, Paulo, Moisés, Joel, Ana"

printSplittedString(names)

function printSplittedString(string) {
    splittedString = string.split(", ")
    
    splittedString.forEach(string => {
        console.log(string)
    })
}

// Exercicio 02

let phrase = "Olá, mundo, meu, nome, é, Juca"

let newphrase = phrase.replace(/,/g, ".")

console.log(newphrase)