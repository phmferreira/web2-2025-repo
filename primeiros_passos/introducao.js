
// declaração dos atributos
let nome = 'José';
var idade = 17;
const temHobbies = true;

/**
 * apresenta os dados do usuário
 * @param {*} usuarioNome 
 * @param {*} usuarioIdade 
 * @param {*} usuarioTemHobbies 
 * @returns 
 */
function apresentacaoUsuario(
    usuarioNome, usuarioIdade, usuarioTemHobbies){
    
    return (
        'Nome é ' + usuarioNome +
        ', idade é ' + usuarioIdade +
        ' e o usuário tem hobbies: ' + usuarioTemHobbies
    );
}

/*
Comentário em bloco
*/


console.log(apresentacaoUsuario(nome, idade, temHobbies));
