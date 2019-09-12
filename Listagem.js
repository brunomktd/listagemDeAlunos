class Listagem {
    constructor(aluno){
        this._aluno = aluno
        this._alunos = ["Steve Jobs", "Bruce Wayne"]
    }

    adiciona(){
        console.log('O aluno adicionado foi ' + this._aluno);
        this._alunos.push(this._aluno);
        console.log(this._alunos);
    }

    busca(){
        return this._alunos;
    }
}

module.exports = Listagem;