/*
Crie uma classe avião e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto 
avião, defina as instâncias deste objeto e apresente as informações deste objeto no console.
*/

export class Aviao {
    modelo: string;
    codigo: number;
    anoLancamento: number;
    empresa: string;
    passageiros: number;

    constructor(modelo: string, codigo: number, anoLancamento: number, empresa: string, passageiros: number) {
        this.modelo = modelo;
        this.codigo = codigo;
        this.anoLancamento = anoLancamento;
        this.empresa = empresa;
        this.passageiros = passageiros;
    }

    infosAviao(valorPassagem: number){
        console.log(`---O avião de modelo ${this.modelo} da empresa ${this.empresa} está com ${this.passageiros} passageiros totalizando R$${(this.passageiros*valorPassagem).toFixed(2)} em passagem vendidas`)
    }
}