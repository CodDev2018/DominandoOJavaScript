class ContatosView {

    set controller(controller) {
        this._controller = controller
        document.querySelector('#btn-novo').addEventListener('click', (event) => {
            this._controller.incluir(event)
        })
    }

    read() {
        let nome = window.prompt("Entre com o nome: ")
        let telefone = window.prompt("Entre com o telefone: ")
        let endereco = window.prompt("Entre com o endereco: ")
        let email = window.prompt("Entre com o email: ")
        const contato = new ContatosModel(nome, telefone, endereco, email)
        return contato
    }

    print(contato, index) {
        let text = `Nome: ${contato.nome} \nTelefone: ${contato.telefone} \n` +
            `Endereço: ${contato.endereco} \nEmail: ${contato.email} \n`

        if (parseInt(index) >= 0) {
            text = `Contato selecionado: [${index + 1}] \n` + text
        } else {
            text = `Contato selecionado: \n` + text
        }

        window.alert(text)
    }

    printAll(contatos) {
        const listagem = document.querySelector('.listagem-contatos ul')
        listagem.innerHTML = ''
        contatos.forEach((contato, index) => {
            let contatoElement = document.createElement('li')
            let contatoTemplate = this.getContatoTemplate(index, contato)
            let editActionTemplate = this.getEditActionTemplate()
            let deleteActionTemplate = this.getDeleteActionTemplate()
            contatoElement.appendChild(contatoTemplate)
            contatoElement.appendChild(editActionTemplate)
            contatoElement.appendChild(deleteActionTemplate)
            listagem.appendChild(contatoElement)
        })
    }

    getContatoTemplate(index, contato) {
        let contatoTemplate = document.createElement('a')
        contatoTemplate.dataset.index = index
        contatoTemplate.setAttribute('href', '#')
        contatoTemplate.innerText = contato.nome
        contatoTemplate.addEventListener('click', (event) => this.view(event))
        return contatoTemplate
    }

    getEditActionTemplate() {
        let editActionTemplate = document.createElement('a')
        editActionTemplate.setAttribute('href', '#')
        editActionTemplate.classList.add('action')
        editActionTemplate.classList.add('edit')
        editActionTemplate.innerText = 'Editar'
        editActionTemplate.addEventListener('click', (event) => this.edit(event))
        return editActionTemplate;
    }

    getDeleteActionTemplate() {
        let deleteActionTemplate = document.createElement('a')
        deleteActionTemplate.setAttribute('href', '#')
        deleteActionTemplate.classList.add('action')
        deleteActionTemplate.classList.add('delete')
        deleteActionTemplate.innerText = 'Excluir'
        deleteActionTemplate.addEventListener('click', (event) => this.delete(event))
        return deleteActionTemplate;
    }

    view(event) {
        this._controller.visualizar(event, event.target.dataset.index)
    }

    edit(event) {
        let contato = event.target.previousSibling
        this._controller.editar(event, contato.dataset.index)
    }

    delete(event) {
        let contato = event.target.previousSibling.previousSibling
        if (window.confirm("Deseja mesmo excluir este contato?")) {
            this._controller.excluir(event, contato.dataset.index)
        }
    }

    successInsert(nome) {
        window.alert(`${nome} incluido com sucesso!`)
    }

    successUpdate(nome) {
        window.alert(`${nome} atualizado com sucesso!`)
    }

    successDelete(nome) {
        window.alert(`${nome} excluido com sucesso!`)
    }
}