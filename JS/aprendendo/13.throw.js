try{
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(erro){
    console.log('Tipo do erro:', erro.name);
    console.log('Mensagem:', erro.message);
}

// function hoisting
function soma(num1, num2){
    if(
        typeof num1 !== 'number' ||
        typeof num2 !== 'number'
    ){
        throw new TypeError('Os parâmetros devem ser numéricos.');
    }
    return num1 + num2;
}