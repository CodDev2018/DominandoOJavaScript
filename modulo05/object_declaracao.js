let Pessoa = {
    nome: "Paulo Bezerra",
    idade: 18,
    endereco: "Rua X, Bairro Y",
    cidade: "Campo Grande",
    estado: "MS",
    getDadosEndereco() {
        console.log(this.endereco)
    }
}

let paulo = Object.create(Pessoa)

paulo.endereco = "asdfgasdfg"

paulo.getDadosEndereco()