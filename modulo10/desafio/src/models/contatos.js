const mongoose = require('mongoose')

const Contatos = mongoose.model('Contatos', {
    nome: String,
    telefone: String,
    endereco: String,
    email: String
})

module.exports = Contatos