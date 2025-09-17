// exemplo de condicional

const horaDoDia = 10;

if(horaDoDia < 12){
    console.log('Bom dia!');
} else if (horaDoDia < 18){
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
}

function ehPar(numero){
    return numero % 2 === 0;
}

const numEntrada = 12;
if (ehPar(numEntrada)) {
    console.log(`O número ${numEntrada} é par!`);
} else {
    console.log(`O número ${numEntrada} é ímpar!`);
}




