class Carro {
    constructor(nome, cor, marca, ano) {
        this.nome = nome
        this.cor = cor
        this.marca = marca
        this.ano = ano
    }
}

class CarroIPVA extends Carro{
    calcularIsencaoIPVA() {
        const anoAtual = new Date().getFullYear() - this.ano;
        if (anoAtual >= 30) {
            console.log(`O carro ${this.nome} possui isenção de IPVA`)
        } else {
            console.log(`O carro ${this.nome} não possui isenção de IPVA`)
        }
    }
}

var fusca = new CarroIPVA('Fusca', 'Azul', 'VW', 1975)
fusca.calcularIsencaoIPVA()