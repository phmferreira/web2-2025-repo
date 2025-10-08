function buscarItemCaro(precos, valorCaro ) {
    let indexItemCaro = 0;
    const precoReferencia = valorCaro;
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