const app = require('./server');


app.get('/cadastro', (req, res) =>{
    res.send(`<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Cadastro de Alunos</title>
    </head>
    <body>
        <h1>Cadastro de Alunos</h1>
        <form action="api/alunos" method="post">
            <input type="text" name="nome" placeholder="Insira o nome do seu Aluno">
            <button type="submit">Cadastrar</button>
        </form>
    </body>
    </html>`);
})

app.get('/alunos', (req, res) =>{
    res.send(`<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Cadastro de Alunos</title>
    </head>
    <body>
        <h1>Lista de Alunos</h1>
        <div>
            <form action="api/alunos" method="get">
                <button type="submit"> Carregar Listagem </button>
            </form>
        </div>
        <div id="listagem"></div>
    </body>
    </html>`);
})
