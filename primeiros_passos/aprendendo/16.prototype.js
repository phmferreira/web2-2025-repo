function Aluno(nome, sobrenome, matricula){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.matricula = matricula;
    // this.nomeCompleto = function(){
    //     return 'Original ' + this.nome + ' ' + this.sobrenome;
    // }

    // Trabalhar com defineProperty
}

// Trabalhando com prototype
Aluno.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}
Aluno.prototype.instituto = 'IFPB Campus Itaporanga'


const aluno2 = new Aluno('João', 'Silva', '4321');
console.log(aluno2);
console.log(aluno2.nomeCompleto());

const ana = new Aluno('Ana', 'Silva', '1234');
console.log(ana);


