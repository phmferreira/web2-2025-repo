function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(typeof msg !== 'string'){
                reject(new Error('Valor inválido!'));
                return;
            }
            resolve(msg.toUpperCase());
        }, tempo);
    });
}

async function executa(){
    try{
        const resposta1 = await esperaAi(
            'Acesso ao Banco de dados', 1000);
        console.log(resposta1);
        const resposta2 = await esperaAi(
            100, 500);
        console.log(resposta2);
        const resposta3 = await esperaAi(
            'Tratamento dos dados', 1500);
        console.log(resposta3);
        console.log('Exibir ao usuário!');
    } catch(erro){
        console.log(erro);
    }
}

executa();