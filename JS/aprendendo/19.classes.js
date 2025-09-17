// Agora usando classes
class Aluno{

    constructor(nome, sobrenome, matricula){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.matricula = matricula;
    }

    // nomeCompleto(){
    //     return this.nome + ' ' + this.sobrenome;
    // }
    
    //get e set em nome completo
    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor){
        const nomeDividido = valor.split(' ');
        this.nome = nomeDividido.shift();
        this.sobrenome = nomeDividido.join(' ');
    }
}

// instância da classe Aluno
const joao = new Aluno('João', 'Silva', '1234');
console.log(joao);
// console.log(joao.nomeCompleto());
console.log(joao.nomeCompleto);
joao.nomeCompleto = 'João Silva Souza';
console.log(joao.nome);
console.log(joao.sobrenome);



