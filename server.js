const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const port = 3000;

app.listen(port, function() {
    console.log('Rodando na porta ' + port);
})

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', require('./rotas'))

module.exports = app;