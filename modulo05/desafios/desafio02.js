const readline = require('readline-sync')

const Contatos = [{
    nome: 'Paulo Roberto Sampaio Bezerra',
    telefone: '6730428857',
    endereco: 'Teste, 89',
    email: 'codinomedeveloper@gmail.com'
}]

let Contato = {
    nome: '',
    telefone: '',
    endereco: '',
    email: ''
}

let sair = false
const run = () => {
    do {
        console.clear()
        let option = readline.question(`${Contatos.length} contato(s) cadastrado(s).\nEntre com: \n[1] para Incluir novo contato \n` +
            `[2] para Buscar contato \n[s] para Sair \nSua opcao: `)
        switch (option) {
            case '1':
                incluirContato()
                break
            case '2':
                let key = readline.question("Entre com o nome a ser buscado: ")
                buscarContato(key)
                break
            default:
                sair = option.toLocaleUpperCase() === 'S'
        }
    } while (!sair)
}

const lerContato = () => {
    console.clear()
    const contato = Object.create(Contato)
    contato.nome = readline.question("Entre com o nome: ")
    contato.telefone = readline.question("Entre com o telefone: ")
    contato.endereco = readline.question("Entre com o endereco: ")
    contato.email = readline.question("Entre com o email: ")
    return contato
}

const imprimirContato = (contato, index) => {
    let text = `Nome: ${contato.nome} \nTelefone: ${contato.telefone} \n` +
        `Endereço: ${contato.endereco} \nEmail: ${contato.email} \n`

    if (parseInt(index) >= 0) {
        text = `[${index + 1}] \n` + text
    }

    console.log(text)
}

const imprimirContatos = (contatos) => {
    contatos.forEach((contato, index) => {
        console.log(`[${index+1}] - ${contato.nome}`)
    })
}

const editarContato = (contato) => {
    const index = Contatos.indexOf(contato)
    const newContato = lerContato()
    contato.nome = newContato.nome ? newContato.nome : contato.nome
    contato.telefone = newContato.telefone ? newContato.telefone : contato.telefone
    contato.endereco = newContato.endereco ? newContato.endereco : contato.endereco
    contato.email = newContato.email ? newContato.email : contato.email
    Contatos[index] = contato
    console.clear()
    imprimirContato(contato)
    readline.question('Contato editado!')
}

const excluirContato = (contato) => {
    const index = Contatos.indexOf(contato)
    Contatos.splice(index, 1)
    console.clear()
    readline.question('Contato excluido...')
}

const incluirContato = () => {
    const contato = lerContato()
    Contatos.push(contato)
    readline.question(`${contato.nome} incluido com sucesso!`)
}

const manterContatos = (result) => {
    let index = readline.question('Entre com o numero do contato: ')
    if (parseInt(index) > 0 && parseInt(index) <= result.length) {
        const contato = Contatos[index - 1]
        console.clear()
        console.log('\n###Contato selecionado: ')
        imprimirContato(contato)
        let option = readline.question('Entre com: \n[1] para Editar contato \n' +
            '[2] para Excluir contato \nQualquer tecla para voltar... \nSua opcao:')
        console.clear()
        switch (option) {
            case '1':
                editarContato(contato)
                break
            case '2':
                excluirContato(contato)
                break
            default:
                console.log('...')
        }
    }
}

const buscarContato = (key) => {
    let result = Contatos

    if (key) {
        result = result.filter(contato => contato.nome.toUpperCase().search(key.toUpperCase()) > -1)
    }

    if (result.length === 0) {
        console.log('Nenhum contato encontrado.')
        return
    }
    imprimirContatos(result)
    console.log(`${result.length} contatos encontrados...`)
    manterContatos(result)
}

run()