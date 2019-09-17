const lista = require('./Listagem');

module.exports = {
    async add (req, res){
        const {nome} = req.body;
        const user = await  lista.adiciona(nome);
        res.redirect('/alunos')
    },

    async search (req, res){
        const alunos = await lista.busca();
        return res.send(alunos)
    }
}