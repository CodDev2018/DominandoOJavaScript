const ContatosRepository = require('./ContatosRepository')
const ContatosView = require('./ContatosView')

class ContatosController {

    run() {
        let sair = false
        do {
            console.clear()
            let length = ContatosRepository.length()
            let option = ContatosView.showMenu(length)
            switch (option) {
                case '1':
                    this.incluir()
                    break
                case '2':
                    let contatos = this.buscar()
                    this.manter(contatos)
                    break
                default:
                    sair = option.toLocaleUpperCase() === 'S'
            }
        } while (!sair)
    }

    buscar() {
        let key = ContatosView.readSearchKey()
        let contatos = ContatosRepository.search(key)
        ContatosView.printAll(contatos)
        return contatos
    }

    manter(contatos) {
        let index = ContatosView.readContactNumber()
        let contato = ContatosRepository.get(parseInt(index) - 1, contatos)
        if (contato) {
            ContatosView.print(contato)
            let option = ContatosView.showContactMenu()
            switch (option) {
                case '1':
                    this.editar(contato)
                    break
                case '2':
                    this.excluir(contato)
                    break
                default:
                    console.log('...')
            }
        }
    }

    incluir() {
        const contato = ContatosView.read()
        ContatosRepository.add(contato)
        ContatosView.successInsert(contato.nome)
    }

    editar(oldContato) {
        const newContato = ContatosView.read()
        ContatosRepository.edit(oldContato, newContato)
        ContatosView.print(newContato)
        ContatosView.successUpdate(newContato.nome)
    }

    excluir(contato) {
        ContatosRepository.delete(contato)
        ContatosView.successDelete(contato.nome)
    }
}

module.exports = new ContatosController