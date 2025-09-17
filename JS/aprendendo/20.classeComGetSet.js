class Carro{
    #velocidade;

    constructor(nome){
        this.nome = nome;
        this.#velocidade = 0;
    }

    get velocidade(){
        return this.#velocidade;
    }

    set velocidade(valor){
        if(typeof valor === 'number'
            && valor <= 100
            && valor >= 0 
        ){
            this.#velocidade = valor;
        }
    }

    acelerar(){
        if(this.#velocidade < 100){
            this.#velocidade = this.#velocidade + 1;
        }
    }

    freiar(){
        if(this.#velocidade >= 10){
            this.#velocidade -= 10;
        } else {
            this.#velocidade = 0;
        }
    }
}

const fusca = new Carro('fusca');
// console.log('#velocidade:', fusca.#velocidade);
console.log('velocidade', fusca.velocidade);
for (let i = 0; i < 20; i++) {
    fusca.acelerar();
    // console.log('#velocidade:', fusca.#velocidade);
    console.log('velocidade', fusca.velocidade);
}
fusca.velocidade = 55;
console.log('Vel:', fusca.velocidade);
fusca.velocidade = 1200;
console.log('Vel:', fusca.velocidade);
for (let i = 0; i < 5; i++) {
    fusca.freiar();
    // console.log('#velocidade:', fusca.#velocidade);
    console.log('velocidade:', fusca.velocidade);
}
