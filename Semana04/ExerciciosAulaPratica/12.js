const user = [
    {
        name: 'Thiago Coelho Scholl',
        cpf: '04834144097',
        telefone: '53991639085',
    }
]

const formatCpf = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

const formatTelephone = (telefone) => {
    return telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
}

const printUser = (user) => {
    user.forEach(user => {
        console.log('Nome: ' + user.name + '\nCpf: ' + formatCpf(user.cpf) + '\nTelefone: ' + formatTelephone(user.telefone))
    })
}

printUser(user)