// resposta da letra a da questão 1

function classificarUmidade(umidade){
    let resposta = '';
    if(umidade < 30){
        resposta = 'Umidade Crítica';
    } else if (umidade < 60){
        resposta = 'Umidade Adequada';
    } else {
        resposta = 'Umidade Elevada';
    }
    
    return resposta
}

console.log(classificarUmidade(25));
console.log(classificarUmidade(50));
console.log(classificarUmidade(85));

// letra b
function gerarRelatorioUmidade(leiturasDeUmdades){
    const relatorio = [];
    for(let umidade of leiturasDeUmdades){
        let respostaUmidade = classificarUmidade(umidade);
        relatorio.push(respostaUmidade);
    }
    return relatorio;
}

const dadosUmidades = [20, 35, 55, 75];
console.log(gerarRelatorioUmidade(dadosUmidades));





















