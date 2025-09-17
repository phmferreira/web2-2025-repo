// Operadores lógicos (booleanos)
// && -> operador e
// || -> operador ou
// ! -> Operador negação

// exemplos
console.log(false && true);
console.log(true || false);
console.log(! true);

const alunoJoao = {
    nome: 'João',
    matriculaAtiva: true
}

const alunaMaria = {
    nome: 'Maria',
    matriculaAtiva: false
}

// operador e
console.log('os dois alunos estão matriculados:');
console.log(alunoJoao.matriculaAtiva && 
                alunaMaria.matriculaAtiva
);

console.log('algum aluno está matriculado:');
console.log(alunoJoao.matriculaAtiva ||
                alunaMaria.matriculaAtiva
);


function curtoCircuito(){
    console.log('executou!!!');
    return true;
}

// exemplos de curto circuito
// nesse caso, vai chamar a função curtoCircuito
console.log(true && curtoCircuito());
// nesse caso agora, ele vai pular a chamada da função
console.log(false && curtoCircuito());

// operador e
// verdade e (qualquer coisa) -> (qualquer coisa)
// nesse segundo exemplo temos o curto circuito
//  falso e (qualquer coisa) -> falso

// curto circuito do operador ou
console.log(true || curtoCircuito());


