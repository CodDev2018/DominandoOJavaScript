const carro = {
    nome: 'Fusca',
    marca: 'VW',
    mostrarDados: function (cor, ano) {
        console.log(this.nome, cor, this.marca, ano)
    }
}

carro.mostrarDados.call({
    nome: 'Opala',
    marca: 'Chevrolet',
}, 'Bordo', 1972)

var brasiliaAmarela = carro.mostrarDados.bind({
    nome: 'Brasília',
    marca: 'VW',
}, 'Amarelo')

brasiliaAmarela(1974)
brasiliaAmarela(1976)
brasiliaAmarela(1982)

carro.mostrarDados.apply({
    nome: 'Onix',
    marca: 'Chevrolet',
}, ['Cinza', 2016])