// for clássico
for(let contador = 0; contador < 10; contador++){
    const ehPar = contador % 2 === 0;
    console.log(`O contador ${contador} é par: ${ehPar}`);
}

const frutas = ['Maçã', 'Pêra', 'Uva'];
for (let index = 0; index < frutas.length; index++) {
    const fruta = frutas[index];
    console.log(fruta);
}

// for in
for(const index in frutas){
    console.log('Exemplo for in', frutas[index]);
}

const aluno = {
    nome: 'João',
    sobrenome: 'da Silva',
    matricula: '2022000123',
    matriculaAtiva: true
}

for(const atributo in aluno){
    console.log(atributo + ':', aluno[atributo]);    
}

// for of -> parecido com for in em python
for(const fruta of frutas){
    console.log('Nome da fruta:', fruta);
}

// o for of não funciona para objetos
// for (const elemento of aluno) {
//     console.log(elemento);
// }


// programação funcional
const printFruta = fruta => 
    console.log('Imprimir no ForEach()', fruta);
frutas.forEach(printFruta);

const numeros = [1,2,3,4];
const ehPar = numero => numero % 2 === 0;
const resultado = numeros.map(ehPar);
console.log(resultado);



/*
frutas -> ['Maçã', 'Pêra', 'Uva']

frutas.forEach :
    [
        printFruta('Maçã'), 
        printFruta('Pêra'), 
        printFruta('Uva')
    ]
*/


