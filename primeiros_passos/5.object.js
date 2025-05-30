const aluno = {
    nome: 'Paulo',
    sobrenome: 'da Silva',
    matricula: 2023001,
    matriculaAtiva: true,
    disciplinas: ['pt', 'mat', 'web2', 'SO', ' pdm'],

    olaAluno (){
        console.log(`Olá, eu sou ${this.nome}`);
    }
};

console.log(aluno);
// acesso aos atributos
console.log(aluno.nome);
// ou
console.log(aluno['nome']);

aluno.olaAluno();


