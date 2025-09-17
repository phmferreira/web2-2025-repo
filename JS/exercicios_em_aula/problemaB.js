//               A   B
const entrada = [50, 0];

function problemaB(entrada){
// A === 0 ->, B > 0
    let resposta = ''; 
    if(entrada[0] === 0){
        reposta = 'Prata';
    } else if(entrada[1] === 0){
        resposta = 'Ouro';
    } else {
        reposta = 'Liga';
    }
    return resposta
}
console.log(problemaB([0, 2]));
console.log(problemaB([3, 0]));
console.log(problemaB([20, 20]));