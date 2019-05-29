const express = require('express')
const Contatos = require('./models/contatos')
const router = express.Router()

router.get('/', (req, res) => {
    Contatos.find((err, contatos) => {
        if (err) {
            return res.status(500).send("Erro ao buscar contatos.")
        }
        return res.render('index', {
            contatos: contatos
        })
    })
})

router.get('/new', (req, res) => {
    return res.render('form', {})
})

router.post('/save', (req, res) => {
    let contato = new Contatos(req.body)
    contato.save((err) => {
        if (err) {
            return res.status(500).send("Erro ao salvar dados do contato.")
        }
        return res.redirect('/')
    })
})

router.get('/edit/:id', (req, res) => {
    Contatos.findById(req.params.id, (err, contato) => {
        if (err) {
            return res.status(500).send("Erro ao buscar dados do contato.")
        }
        return res.render('form', {
            contato: contato
        })
    })
})

router.post('/update/:id', (req, res) => {
    Contatos.findById(req.params.id, (err, contato) => {
        Object.assign(contato, req.body)
        contato.save((err) => {
            if (err) {
                res.status(500).send("Erro ao salvar dados do contato.")
            }
            return res.redirect('/')
        })
    })
})


router.get('/delete/:id', (req, res) => {
    Contatos.findByIdAndDelete(req.params.id, (err, contato) => {
        contato.save((err) => {
            if (err) {
                res.status(500).send("Erro ao salvar dados do contato.")
            }
            return res.redirect('/')
        })
    })
})

module.exports = router