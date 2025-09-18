class ContaBancaria{
    #saldo;
    constructor(saldoInicial){
        if(saldoInicial < 0){
            throw new Error('Saldo inicial não ser negativo!');
        }
        this.#saldo = saldoInicial;
    }

    depositar(valor){
        if(valor <= 0){
            throw new Error('O valor de deposito deve ser positivo!');
        }
        this.#saldo += valor;
    }

    sacar(valor){
        if(valor <= 0){
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
            throw new Error("O valor de saldo não pode ser negativo!");
        }
        this.#saldo = valor;
    }
}