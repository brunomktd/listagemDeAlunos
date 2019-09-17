const express = require('express');
const routes = express.Router();
const lista = require('./Controller');

routes.post('/alunos', lista.add);

routes.get('/alunos', lista.search);

module.exports = routes;