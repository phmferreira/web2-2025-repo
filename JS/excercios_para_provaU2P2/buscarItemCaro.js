function buscarItemCaro(precos) {
    let indexItemCaro = 0;
    const precoReferencia = 500;
    while(indexItemCaro < precos.length 
        && precos[indexItemCaro] < precoReferencia){
        indexItemCaro += 1;
    }

    if(indexItemCaro === precos.length){ 
        //não achou
        indexItemCaro = -1;
    }

    return indexItemCaro;
}