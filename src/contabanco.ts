export class ContaBanco {
    titular: string;
    agencia: string;
    conta: string;
    saldo: number;

    constructor(
        titular: string,
        agencia: string,
        conta: string,
        saldo: number
    ){
        this.titular = titular
        this.agencia = agencia
        this.conta = conta
        this.saldo = saldo
    }
    verSaldo(){
        console.log(`Saldo: ${this.saldo}`)
    }
    sacar(valor: number){
        if(valor > 0 && valor <= this.saldo){
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado`)
        }else{
            console.log(`Saque de R$ ${valor} impossivel de ser realizado`)
        }
    }
    deposito(valor: number){
        if(valor > 0){
            this.saldo += valor;
            console.log(`Deposito de R$ ${valor} realizado com sucesso`)
        }else{
            console.log(`Deposito de R$ ${valor} invalido`)    
        }
    }
}