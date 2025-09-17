// normalmente apenas um tipo de dado dentro array
//                    0       1       2
const nomeAlunos = ['Ana', 'João', 'Maria'];

// mas podemos colocar qualquer tipos
const outroExemplo = 
    ['Palavra', 1, true, ['outro', 'array']];

console.log(nomeAlunos);
// exemplo de acesso ao conteúdo do array
console.log(nomeAlunos[2]);
// tamanho do array
console.log(nomeAlunos.length);

// Modificando valores no array
nomeAlunos[1] = 'Pedro';
console.log(nomeAlunos);

// Adicionando mais elementos no final do array
nomeAlunos.push('Luiza');
nomeAlunos.push('Francisco');
nomeAlunos[nomeAlunos.length] = 'João'

// acessando fora do conteúdo do array
console.log(nomeAlunos[10]);

// adicionando no início do array
console.log(nomeAlunos);
nomeAlunos.unshift('Francisca');
console.log(nomeAlunos);

// função slice
console.log(nomeAlunos.slice(1,5));
console.log(nomeAlunos.slice(3));
console.log(nomeAlunos.slice(-2));

// CUIDADO
// nomeAlunos[20] = 'Cuidado!!!';
// console.log(nomeAlunos);

// remoção - no final do array

const nomeDoAluno = nomeAlunos.pop();
console.log(nomeDoAluno);
console.log(nomeAlunos);

// removendo do início
const nomeInicioArray = nomeAlunos.shift()
console.log(nomeInicioArray);
console.log(nomeAlunos);













