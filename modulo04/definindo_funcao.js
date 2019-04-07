const readerFactory = require('./reader_factory')

const reader = readerFactory()

const nomeDaFuncao = function () {
    reader.question("Qual é o seu nome", function(name) {
        console.log(`Olá ${name}!`)
    })
}

nomeDaFuncao()