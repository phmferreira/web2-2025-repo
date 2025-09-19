function esperaAi(msg, tempo){
    setTimeout(() => {
        console.log(msg);
    }, tempo)
}

// esperaAi('Acesso ao Banco de Dados', 1000);
// esperaAi('Busca no Banco de Dados', 500);
// esperaAi('Tratamento dos dados', 1500);

// console.log('Exibir dados ao usuário!');

// callback - cambiarra
function esperaAiCallback(msg, tempo, callback){
    setTimeout(() => {
        console.log(msg);
        callback();
    }, tempo)
}

// esperaAiCallback('Acesso ao BD', 1000,
//     function(){
//         esperaAiCallback('Busca dos dados', 500,
//             function(){
//                 esperaAiCallback('Tratamento dos dados', 1500,
//                     function(){
//                         console.log('Exibir para usuário!'); 
//                     }
//                 );
//             }
//         );
//     }
// );
// console.log('Isso acontece primeiro');

// promise
function esperaAiPromise(msg, tempo){
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    if(typeof msg !== 'string'){
                        reject(new Error('Valor inválido!'));
                        return;
                    }
                    resolve(msg);
                }, tempo);   
        });
}

// esperaAiPromise('Conectar BD', 1000)
//     .then(reposta => {
//         console.log(reposta);
//         return esperaAiPromise(100, 500);
//     })
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAiPromise('Tratamento dos dados', 1500);
//     })
//     .then(() => {
//         console.log('Exibir para usuário');
//     })
//     .catch(err => console.log(err.message)
//     );
// console.log('Isso vai rodar primeiro!');

// Promise.all e Promise.race
const promises = [
    // 'Inicializar',
    esperaAiPromise('Conectar BD', 1500),
    esperaAiPromise('Buscar BD', 500),
    esperaAiPromise('Tratamento de dados', 1500),
    // 'Exibir resultado'
];

Promise.race(promises)
    .then(resp => console.log(resp))
    .catch(err => console.log(err.message));

