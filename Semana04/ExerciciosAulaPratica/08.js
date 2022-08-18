let names = [ 'Juliana', 'Pedro', 'Regina', 'João', 'Patrícia', 'Gabriel', 'Carlos', 'Carla']

let search = 'Carla'

const findName = (array, string) => {
    names.find(nome => nome === string) ? console.log('O nome existe no array') : console.log('Não existe')
}

findName(names, search)