function Aluno(nome, sobrenome, matricula, cpf){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.matricula = matricula;
    
    // Trabalha r com defineProperty
    Object.defineProperty(this, 'cpf',{
        enumerable: true,
        configurable: true,
        get: function(){
            return cpf[0] + cpf[1] + cpf[2] + '.000.000-00';
        },
        set: function(valor){
            if(typeof valor === 'number'){
                throw new TypeError('CPF deve ser string');
            }
            cpf = valor;
        }
    })
}

const aluno = new Aluno(
    'João', 'Silva', '4321', '001.987.764-39');
console.log(aluno);
console.log('cpf:', aluno.cpf);
aluno.cpf = '002.003.004-00';
console.log('cpf:', aluno.cpf);




