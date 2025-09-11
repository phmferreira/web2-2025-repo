// ideia
// for e while usados para criar laço de repetição
// for normalmente para quando sabe quantas 
// vezes vai repetir
// while usado quando há uma condição de parada

// Exemplo - busca liner
const numeros = [1, -2, 0, 9, 19, 8];
let numeroBuscado = 3;

// o algoritmo retorna a posição do número buscado
// caso não encontre, retorna -1

let posicao = 0;
let encontrou = false; // encontrou o número buscado?
while(encontrou === false){
    let numeroAtual = numeros[posicao];
    if(numeroAtual === numeroBuscado){
        encontrou = true;
    } else if (posicao < numeros.length - 1) {
        posicao += 1;
    } else {
        posicao = -1;
        break;
    }
}

console.log('Array:', numeros);
console.log('Número buscado:', numeroBuscado);
console.log('Posição:', posicao);












