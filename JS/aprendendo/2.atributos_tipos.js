let nome = 'João'; //string
console.log(typeof nome);
var idade = 17; //number
console.log(typeof idade);
let altura = 1.83 //number
console.log(typeof altura)
let fezMatricula = true; // boolean
console.log(typeof fezMatricula);
let matricula; // underfined
console.log(typeof matricula);
let disciplinas = null; // object null
console.log(typeof disciplinas);
// padrão camelCase


/**
 * função que apresenta os dados do aluno.
 * @param {string} nomeAluno 
 * @param {number} idadeAluno 
 * @param {number} alturaAluno 
 * @returns {string}
 */
function resumo(nomeAluno, idadeAluno, alturaAluno){
    return (
        'Nome aluno: ' + nome + '\n' +
        'Idade aluno: ' + idade + '\n' +
        'Altura aluno: ' + altura + '\n'
    )
}

console.log(resumo(nome, idade, altura))


// tipo number
console.log(idade.toString());
console.log(idade.toString(2));
console.log(idade.toString(16));
console.log(altura.toFixed(1));
console.log(altura.toExponential());


let num1 = 9.75
console.log(Math.PI);
console.log(Math.floor(num1));
console.log(Math.ceil(num1));

// String      01234567
let palavra = 'Um texto';
console.log(palavra + ' em javascript');
console.log(palavra + " em javascript");
console.log(`${palavra} em javascript`);
console.log(palavra.length);
console.log(palavra.indexOf('texto'));
console.log(palavra.indexOf('javascript'));
console.log(palavra.slice(3));
console.log(palavra.slice(-3));
console.log(palavra.slice(2,5));
console.log(palavra.replace('Um', 'Outro'));
console.log(palavra)

 




















