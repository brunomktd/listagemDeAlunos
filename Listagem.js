class Listagem {
    constructor(){
        this._alunos = ["Steve Jobs", "Bruce Wayne"]
    }

    adiciona(aluno){
        console.log(aluno);
        this._alunos.push(aluno)
        return ;
    }

    busca(){
        const meusAlunos = this._alunos;        

        const alunos = (`
            <htm>
                <head>
                    <meta charset="UTF-8">
                </head>
                <body>
                    <h1>Lista de Presença</h1>
                    <div></div>
                </body>
                <scrip>
                    ${montaAlunos(meusAlunos)}
                </script>
            </html>`)

        function montaAlunos(meusAlunos){

            var div = document.querySelector('div');
            
            meusAlunos.forEach((aluno) => {
                const ulEL = document.createElement('ul');
                const liEl = document.createElement('li');
                const txt = document.createTextNode(aluno);
                liEl.appendChild(txt);
                ulEL.appendChild(liEl);
                div.appendChild(ulEL);
            })
            
            console.log(div)
        }

        return alunos;
        
    }
}
        
const lista = new Listagem();
        
module.exports = lista;