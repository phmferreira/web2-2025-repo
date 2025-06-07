// considerei que a entrada está guarda 
// em um atributo constante chamado entrada
const entrada = 119;


const qntMinEmUmaHora = 60;
// resto dos minutos
let resto = entrada % qntMinEmUmaHora;
// quantidade de horas
let divisaoInteira = Math.floor( entrada / qntMinEmUmaHora );

// resolvendo primeiro os minutos
// caso base se resto === 0 então nos minutos de ter 00 
let resMinString = '00';

// caso contário
if (resto !== 0){
    const resMin = 60 - resto;
    resMinString = `${resMin}`;
    // fazendo a string dos minutos
    // se menor que 10 -> só um dígito ex.: 0, 7, 9 
    // então devemos colocar 0 antes do dígito
    if(resMin < 10){
        resMinString = '0' + resMinString; 
    }
}

// fazendo as horas
// o caso base das horas é 00
let horaString = '00';
let hora = 24 - divisaoInteira;
// podemos considerar esse próximo passo 
// porque a entrada vai até 100 minutos
// caso fosse mais de 119, 
// teriamos que pensar em outra solução!!!
if(hora < 24 && resto !== 0){
    horaString = `${hora}`
}

// saída
console.log(`${horaString}:${resMinString}`);