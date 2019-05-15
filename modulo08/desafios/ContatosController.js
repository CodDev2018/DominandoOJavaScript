class ContatosController {

    constructor(view, repository) {
        this.view = view
        this.repository = repository
    }

    list() {
        const contatos = this.repository.contatos
        view.printAll(contatos)
    }

    visualizar(event, index) {
        const contato = this.repository.get(index)
        this.view.print(contato)
    }

    incluir(event) {
        const contato = this.view.read()
        this.repository.add(contato)
        this.list()
        this.view.successInsert(contato.nome)
    }
    
    editar(event, index) {
        const oldContato = this.repository.get(index)
        const newContato = this.view.read()
        this.repository.edit(oldContato, newContato)
        this.view.print(newContato)
        this.list()
        this.view.successUpdate(newContato.nome)
    }
    
    excluir(event, index) {
        const contato = this.repository.get(index)
        this.repository.delete(contato)
        this.list()
        this.view.successDelete(contato.nome)
    }
}