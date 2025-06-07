// Resolvendo o problema B da OPI de 2025

// para resolver vamos considerar a entrada um arry de numeros
const entrada = [1, 7 , 4, 0, 0, 1];

const pilha = [];

for(const numeroFalado of entrada){
    if(numeroFalado !== 0){
        pilha.push(numeroFalado);
    } else {
        pilha.pop();
    }
}

let soma = 0;
for(const numero of pilha){
    soma = soma + numero;
}
console.log(soma);
