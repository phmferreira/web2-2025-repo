function analisarSequenciaDeVotos(sequencia){
    const resposta = {
        totalVotos: 0,
        mediaVotos: 0,
        votoMaisJovem: null
    }

    let continuar = true;
    let somaIdade = 0;
    let indexAtual = 0;
    while(continuar){
        let idadeAtual = sequencia[indexAtual]; 
        if(idadeAtual < 16){
            continuar = false;
        } else if (indexAtual < sequencia.length){
            indexAtual += 1;
            resposta.totalVotos += 1;
            somaIdade += idadeAtual;
            if(resposta.votoMaisJovem === null 
            || resposta.votoMaisJovem > idadeAtual){
                resposta.votoMaisJovem = idadeAtual;   
            }
        } else {
            continuar = false;
        }
    }
    if(resposta.totalVotos > 0){
        resposta.mediaVotos = somaIdade / resposta.totalVotos;
    }
    return resposta;
}
console.log(analisarSequenciaDeVotos([10, 20, 30]));
console.log(analisarSequenciaDeVotos([25, 40, 18, 55, 15, 60]));
console.log(analisarSequenciaDeVotos([30, 20, 16, 70, 80]));
