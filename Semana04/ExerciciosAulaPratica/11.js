const strings = [" h3ll0 w0rld", " w3b d3v3l0p3r ", "0tterw1s3", "j4v4scr1pt "]

const tabelaDeSimbolos = (string) => {
    newString = string.trim()
    newString = newString.replace(/1/g, 'i')
    newString = newString.replace(/3/g, 'e')
    newString = newString.replace(/4/g, 'a')
    newString = newString.replace(/5/g, 's')
    newString = newString.replace(/0/g, 'o')
    return newString
}

printarSimbolosTrocados(strings)

function printarSimbolosTrocados(strings) {
    console.log(strings.map(string => tabelaDeSimbolos(string)))
}