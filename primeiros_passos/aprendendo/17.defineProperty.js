function Aluno(nome, sobrenome, matricula, cpf){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.matricula = matricula;
    // Trabalhar com defineProperty
    Object.defineProperty(this, 'cpf',{
        value: cpf,
        enumerable: true,
        writable: false,
        configurable: true
    })
}

const aluno = new Aluno(
    'João', 'Silva', '4321', '001.987.764-39');
console.log(aluno);
// Object.defineProperty(aluno, 'cpf',{
//     writable: true
// });
aluno.cpf = '002.003.004-00';
delete aluno.cpf;
console.log(aluno);




