class ContatosFormView {

    set controller(controller) {
        this._controller = controller
        this.forms = document.forms['contatoForm']
        this.index = null
        const urlParams = new URLSearchParams(window.location.search)
        if (!urlParams.get('index')) {
            this.forms.addEventListener('submit', (event) => {
                event.preventDefault()
                this._controller.salvar(event)
            })
        } else {
            this.index = urlParams.get('index')
            this.load(this.index);
            this.forms.addEventListener('submit', (event) => {
                event.preventDefault()
                this._controller.atualizar(event, this.index)
            })
        }
    }

    read() {
        let nome = document.querySelector("#inputNome").value
        let telefone = document.querySelector("#inputTelefone").value
        let endereco = document.querySelector("#textEndereco").value
        let email = document.querySelector("#inputEmail").value
        const contato = new ContatosModel(nome, telefone, endereco, email)
        return contato
    }

    load(index) {
        let contato = this._controller.carregarEditar(index)
        document.querySelector("#inputNome").value = contato.nome
        document.querySelector("#inputTelefone").value = contato.telefone
        document.querySelector("#textEndereco").value = contato.endereco
        document.querySelector("#inputEmail").value = contato.email
    }
}