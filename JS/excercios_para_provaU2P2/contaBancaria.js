class ContaBancaria{
    #saldo;

    constructor(saldoInicial){
        if(saldoInicial < 0){
            throw new Error('O saldo deve ser positivo!');
        }
        this.#saldo = saldoInicial;
    }
    depositar(valor){
        if(valor < 0){
            throw new Error('O valor de deposito deve ser positivo!');
        }
        this.#saldo += valor;
    }
    sacar(valor){
        if(valor < 0){
            throw new Error('O valor de saque deve ser positivo!');
        }
        if(this.#saldo < valor){
            throw new Error('Saldo insuficiente!');
        }
        this.#saldo -= valor;
    }
    get saldo(){
        return this.#saldo;
    }
    set saldo(valor){
        if(valor < 0){
            throw new Error('O saldo deve ser positivo!');
        }
        this.#saldo = valor;
    }
}

const minhaConta = new ContaBancaria(1000);
minhaConta.depositar(500);
console.log(minhaConta.saldo);