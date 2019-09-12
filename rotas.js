const express = require('express');
const routes = express.Router();
const Listagem = require('./Listagem');

routes.post('/alunos', (req, res) => {
    const {nome} = req.body;
    
    const lista = new Listagem(nome);
    
    lista.adiciona()

    res.redirect('/alunos')
    
});

routes.get('/alunos', (req, res) =>{
    console.log('retornar a listagem de alunos')
    const lista = new Listagem();
    
    res.send(lista.busca());
})

module.exports = routes;