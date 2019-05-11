const fs = require('fs')
const fileName = './contatos.json'

class ContatosRepository {
    constructor() {
        this.contatos = []
        this.initializeFile()
    }

    get(index, contatos) {
        contatos = !contatos ? this.contatos.length : contatos
        if (index < 0 || index > contatos) {
            return null
        }
        return contatos[index]
    }

    add(model) {
        this.contatos.push(model)
        this.updateFile()
    }

    edit(oldModel, newModel) {
        let index = this.contatos.indexOf(oldModel)
        newModel.nome = !newModel.nome ? oldModel.nome : newModel.nome 
        newModel.telefone = !newModel.telefone ? oldModel.telefone : newModel.telefone 
        newModel.endereco = !newModel.endereco ? oldModel.endereco : newModel.endereco 
        newModel.email = !newModel.email ? oldModel.email : newModel.email 
        this.contatos[index] = newModel
        this.updateFile()
    }

    delete(model) {
        let index = this.contatos.indexOf(model)
        this.contatos.splice(index, 1)
        this.updateFile()
    }

    search(key) {
        let result = this.contatos

        if (key) {
            result = this.contatos.filter(contato => contato.nome.toUpperCase().search(key.toUpperCase()) > -1)
        }

        if (result.length === 0) {
            console.log('Nenhum contato encontrado.')
            return
        }
        return result
    }

    updateFile() {
        fs.truncateSync(fileName)
        fs.writeFileSync(fileName, JSON.stringify(this.contatos))
        const data = fs.readFileSync(fileName)
        this.contatos = JSON.parse(data)
    }

    initializeFile() {
        if (!fs.existsSync(fileName)) {
            console.log('Criando arquivo de contatos...')
            fs.writeFileSync(fileName, JSON.stringify([]))
        }
        console.log('Lendo arquivo de contatos...')
        const data = fs.readFileSync(fileName)
        this.contatos = JSON.parse(data)
    }

    length() {
        return this.contatos.length
    }
}

module.exports = new ContatosRepository()