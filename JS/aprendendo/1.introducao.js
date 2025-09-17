
// declaração dos atributos
let nome = 'José';
var idade = 17;
const temHobbies = true;

function apresentacaoUsuario(
    usuarioNome, usuarioIdade, usuarioTemHobbies){   
    return (
        'Nome é ' + usuarioNome +
        ', idade é ' + usuarioIdade +
        ' e o usuário tem hobbies: ' + usuarioTemHobbies
    );
}
console.log(apresentacaoUsuario(nome, idade, temHobbies));
