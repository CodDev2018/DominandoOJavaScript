const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express()
const port = 3000

//ARQUIVOS ESTATICOS
app.use(express.static('public'))

//TEMPLATE
app.set('views', __dirname + '/src/views')
app.set('view engine', 'pug')

//BODY PARSER
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//BANCO DE DADOS
mongoose.connect('mongodb://localhost:27017/contatos', {
    useNewUrlParser: true
});

// ROTAS
const router = require('./src/router')
app.use('/', router)

//LISTEN
app.listen(port, () => console.log(`Aplicação rodando na porta ${port}.`))