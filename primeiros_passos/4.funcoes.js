// exemplo 1
function olaMundo(){
    console.log("Olá mundo!");
}
olaMundo();

// exemplo 2
function olaMundoV2(){
    return 'Olá mundo!';
}
console.log(olaMundoV2());
const respostaFuncao = olaMundoV2();
console.log(respostaFuncao);

// exemplo 3 - recebendo parâmetro
function olaPessoa(nomePessoa){
    return `Olá, ${nomePessoa}`;
}
const respOlaPessoa = olaPessoa('João');
console.log(respOlaPessoa);

// exemplo 4 - soma - CUIDADO!
function soma(num1, num2){
    return num1 + num2;
}
const resSoma = soma(3,4);
console.log(resSoma);
const resSomaNaoEsperado = 
    soma('João', ' da Silva');
console.log(resSomaNaoEsperado);

// Exemplo 5 - valores padrões 
// para parâmetros
function somaValoresPadroes (num1 = 0, num2 = 0){
    return num1 + num2;
}
console.log(soma());
console.log(somaValoresPadroes());

// Exemplo 6 - atribuindo 
// a uma variável uma função
const outraSoma = somaValoresPadroes;
console.log(outraSoma(1,2));

const somaGuardadaEmAtributo = function (num1, num2){
    return num1 + num2;
}
function executarFuncao(nomeFuncao){
    console.log(nomeFuncao(2,3));
}
executarFuncao(somaGuardadaEmAtributo);

// Exemplo 7 - função seta (arrow function)
const somaEmFuncaoSeta = (num1, num2) => {
    return num1 + num2;
}
const somaRefatorada = (num1, num2) => num1 + num2;
const somaUma = num1 => {
    return num1 + 1;
}
const somaUmRefatorada = num1 => num1 + 1;
const somaConstante = () => {
    return 1 + 1;
}
const somaConstRefatorada = () => 1 + 1;

console.log(somaRefatorada(5,6));
console.log(somaUmRefatorada(7));
console.log(somaConstRefatorada());





