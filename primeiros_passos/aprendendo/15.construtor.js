// outra forma de fazer objetos em JS

const aluno = new Object();
aluno.nome = 'Maria';
aluno.sobrenome = 'Silva';
aluno.matricula = '1234';
aluno.imprimirDadosNoLog = function(){
    console.log('Nome completo:', 
        `${this.nome} ${this.sobrenome}`);
}

console.log(aluno);
aluno.imprimirDadosNoLog();
delete aluno.matricula;
console.log(aluno);

// Agora usando construtor
function Aluno(nome, sobrenome, matricula){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.matricula = matricula;
    this.nomeCompleto = function(){
        return this.nome + ' ' + this.sobrenome;
    }
}

const aluno2 = new Aluno('João', 'Silva', '4321');
console.log(aluno2);
console.log(aluno2.nomeCompleto());


