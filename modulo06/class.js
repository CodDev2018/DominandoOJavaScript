class Carro {
    constructor (nome, cor, marca, ano) {
        this.nome = nome
        this.cor = cor
        this.marca = marca
        this.ano = ano
    }
}

var fusca = new Carro('Fusca', 'Azul', 'VW', 1975)

console.log(fusca.nome)