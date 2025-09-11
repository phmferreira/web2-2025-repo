const frutas = ['Maçã', 'Uva', 'Laranja'];
console.log(frutas);
frutas.push('Banana');
console.log(frutas);

const novaListaFrutas = frutas;
console.log('nova lista de frutas');
console.log(novaListaFrutas);
novaListaFrutas.push('Abacaxi');
console.log('frutas', frutas);
console.log('nova lista', novaListaFrutas);

// Usando o operador spread
const outraListaFrutas = [...frutas];
console.log('outra lista', outraListaFrutas);
outraListaFrutas.pop()
console.log('frutas', frutas);
console.log('outra lista', outraListaFrutas);

// exemplo com objetos
const aluno = {
    nome: 'João Silva',
    matricula: '1234'
};

const copiaAluno = {...aluno};
copiaAluno.nome = 'Maria Silva';
console.log('aluno', aluno);
console.log('copia aluno', copiaAluno);

// operador spread em funções
function calcularMedia(nome, unidade, ...notas){
    let qnt = 0;
    let soma = 0;
    for (const nota of notas) {
        soma += nota;
        qnt += 1;
    }
    const media = soma / qnt;
    console.log(`Aluno: ${nome}`);
    console.log(`Unidade ${unidade}`);
    console.log(`Média: ${media}`);
}

let nota1unidade1 = 100;
let nota2unidade1 = 85;

let nota1unidade2 = 79;
let nota2unidade2 = 100;
let nota3unidade2 = 48;

let mediaUnidade1 = calcularMedia('Maria', 1,
    nota1unidade1, nota2unidade1);
let mediaUnidade2 = calcularMedia('Maria', 2,
    nota1unidade2, nota2unidade2, nota3unidade2);













