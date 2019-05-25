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
        window.location.replace('./form.html')
    }

    salvar(event) {
        const contato = this.view.read()
        this.repository.add(contato)
        window.location.replace('./')
    }

    editar(event, index) {
        window.location.replace('./form.html?index=' + index)
    }

    carregarEditar(index) {
        return this.repository.get(index)
    }

    atualizar(event, index) {
        const oldContato = this.repository.get(index)
        const newContato = this.view.read()
        this.repository.edit(oldContato, newContato)
        window.location.replace('./')
    }

    excluir(event, index) {
        const contato = this.repository.get(index)
        this.repository.delete(contato)
        this.list()
        this.view.successDelete(contato.nome)
    }
}