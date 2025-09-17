// declaração de atributos variáveis e constantes
let nome = 'João';
const matricula = 15897;

console.log('O nome do aluno:', nome);
// exemplo string formatada
console.log(`A matrícula do aluno: ${matricula}`);

// Arrays          0       1       2       3
const alunos = ['João', 'Maria', 'Ana', 'José'];

const outroExemplo = ['Palavra', 3, 4.75, true, ['outro', 'array']];

let alunoAcessado = alunos[2]; // acessando o conteúdo do índice 2

// adicionado e removendo do array
// adicionar no final
alunos.push('Lucas');
// remover do final
const alunoRemovido = alunos.pop();
// adicionar no início
alunos.unshift('Francisca');
// remover do início
const alunoRemovidoDoInicio = alunos.shift();

// Revisão Funções
function olaMundo(){
    console.log('Olá, Mundo!');
}

function soma(num1, num2){
    return num1 + num2;
}

const somaFuncaoSeta = (num1, num2) => {
    return num1 + num2;
};

// Revisando Objeto

const aluno1 = {
    nome: 'Maria',
    sobrenome: 'da Silva',
    matricula: 2023198,
    endereco: {
        local: 'Rua principal',
        numero: 50,
    }
}

// operadores de comparação
/*
== -> igualdade
=== -> igualdade estrita
*/

// operadores condicionais
const hora = 12;

if( hora < 12){
    console.log('Bom dia!');
} else if (hora < 18){
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
}

// operador ternário -> if em uma linha

let nota1 = 95;
let nota2 = 85;
const mediaNotas = (nota1 + nota2) / 2;
let notaRecuperacao = 70;

const notaUnidade = 
    mediaNotas >= notaRecuperacao ? mediaNotas : notaRecuperacao;

// revisando o laço de repetição 'for'

for(let i = 0; i < 10; i++){
    const ehParOuImpar = i % 2 === 0 ? 'é par.' : 'é ímpar.';
    console.log('O número', i, ehParOuImpar);
}

let frutas = ['Maçã', 'Uva', 'Goiaba'];

// exemplo for com of
for(const fruta of frutas){
    console.log('O nome da fruta é', fruta);   
}

// exemplo for com in
for(const index in frutas){
    console.log('A fruta no índice', index, 'é', frutas[index]);
}

for(const chave in aluno1){
    console.log(chave, ':', aluno1[chave]);   
}

// for com programação funcional
const printFruta = fruta => console.log('Nome fruta', fruta);
frutas.forEach(printFruta);

const numeros = [1, 2, 3, 4];
const ehParOuImpar = numero => numero % 2 === 0 ? 'Par' : 'Ímpar';
let resultado = numeros.map(ehParOuImpar);
console.log(resultado);
