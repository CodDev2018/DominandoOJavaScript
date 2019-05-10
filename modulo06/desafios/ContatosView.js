const readline = require('readline-sync')
const ContatosModel = require('./ContatosModel')

class ContatosView {

    read() {
        console.clear()
        let nome = readline.question("Entre com o nome: ")
        let telefone = readline.question("Entre com o telefone: ")
        let endereco = readline.question("Entre com o endereco: ")
        let email = readline.question("Entre com o email: ")
        const contato = new ContatosModel(nome, telefone, endereco, email)
        return contato
    }

    print(contato, index) {
        console.clear()
        console.log('\n###Contato selecionado: ')
        let text = `Nome: ${contato.nome} \nTelefone: ${contato.telefone} \n` +
            `Endereço: ${contato.endereco} \nEmail: ${contato.email} \n`

        if (parseInt(index) >= 0) {
            text = `[${index + 1}] \n` + text
        }

        console.log(text)
    }

    printAll(contatos) {
        contatos.forEach((contato, index) => {
            console.log(`[${index+1}] - ${contato.nome}`)
        })
    }

    question(question) {
        return readline.question(question)
    }

    showMenu(length) {
        return this.question(`${length} contato(s) cadastrado(s).\nEntre com: \n[1] para Incluir novo contato \n` +
            `[2] para Buscar contato \n[s] para Sair \nSua opcao: `)
    }

    readSearchKey() {
        return this.question("Entre com o nome a ser buscado: ")
    }

    readContactNumber() {
        return this.question('Entre com o numero do contato: ')
    }

    showContactMenu() {
        return this.question('Entre com: \n[1] para Editar contato \n' +
            '[2] para Excluir contato \nQualquer tecla para voltar... \nSua opcao:')
        console.clear()
    }

    successInsert(nome) {
        this.question(`${nome} incluido com sucesso!`)
    }

    successUpdate(nome) {
        this.question(`${nome} atualizado com sucesso!`)
    }

    successDelete(nome) {
        this.question(`${nome} excluido com sucesso!`)
    }
}

module.exports = new ContatosView()