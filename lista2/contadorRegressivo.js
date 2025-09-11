function contagemRegressiva(inicio, parada){
    let continuar = true;
    while(continuar){
        if(inicio > parada){
            console.log(inicio);
            inicio = inicio - 1;
        }
        if(inicio <= parada || inicio < 50){
            continuar = false;
        }
    }
}
console.log('Primeiro teste:');
contagemRegressiva(120, 60);
console.log('Segundo teste:');
contagemRegressiva(120, 150);
console.log('Terceito teste');
contagemRegressiva(120, 10);

