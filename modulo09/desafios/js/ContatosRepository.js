class ContatosRepository {
    constructor() {
        this.contatos = []
        this.init()
    }

    init() {
        if (!window.localStorage.getItem('contatos')) {
            window.localStorage.setItem('contatos', '[]')
        }
        const data = window.localStorage.getItem('contatos')
        this.contatos = JSON.parse(data)
    }


    get(index, contatos) {
        contatos = !contatos ? this.contatos : contatos
        if (index < 0 || index >= this.length()) {
            return null
        }
        return contatos[index]
    }

    add(model) {
        this.contatos.push(model)
        this.updateStorage()
    }

    edit(oldModel, newModel) {
        let index = this.contatos.indexOf(oldModel)
        newModel.nome = !newModel.nome ? oldModel.nome : newModel.nome 
        newModel.telefone = !newModel.telefone ? oldModel.telefone : newModel.telefone 
        newModel.endereco = !newModel.endereco ? oldModel.endereco : newModel.endereco 
        newModel.email = !newModel.email ? oldModel.email : newModel.email 
        this.contatos[index] = newModel
        this.updateStorage()
    }

    delete(model) {
        let index = this.contatos.indexOf(model)
        this.contatos.splice(index, 1)
        this.updateStorage()
    }

    search(key) {
        let result = this.contatos

        if (key) {
            result = this.contatos.filter(contato => contato.nome.toUpperCase().search(key.toUpperCase()) > -1)
        }

        if (result.length === 0) {''
            console.log('Nenhum contato encontrado.')
            return
        }
        return result
    }

    updateStorage() {
        window.localStorage.setItem('contatos', JSON.stringify(this.contatos))
    }

    length() {
        return this.contatos.length
    }
}
