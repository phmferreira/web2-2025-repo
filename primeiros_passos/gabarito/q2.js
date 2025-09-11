function avaliarAlunos(listaDeAlunos){
    const aprovados = [];
    const reprovados = [];

    for(const aluno of listaDeAlunos){
        if(aluno.nota >= 7){
            aprovados.push(aluno.nome);
        } else {
            reprovados.push(aluno.nome);
        }
    }

    return {
        aprovados,
        reprovados
    }
}

const turmaA = [ 
  { nome: "Alice", nota: 8.5 }, 
  { nome: "Bruno", nota: 6.0 }, 
  { nome: "Carla", nota: 9.0 }, 
  { nome: "Daniel", nota: 7.0 }, 
  { nome: "Eva", nota: 5.5 } 
];

console.log(avaliarAlunos(turmaA)); 



