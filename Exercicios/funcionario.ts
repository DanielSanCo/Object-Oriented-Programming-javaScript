export class Funcionario {
    nome: string;
    idade: number;
    empresa: string;
    salario: number;

    constructor(
        nome: string,
        idade: number,
        empresa: string,
        salario: number
    ){
        this.empresa = empresa;
        this.idade = idade;
        this.nome = nome;
        this.salario = salario;
    }

    depositar(valor: number){
        this.salario += valor;
        console.log(`**Depositei R$${valor.toFixed(2)} no seu salario de R$${(this.salario-valor).toFixed(2)} agora você tem R$${this.salario.toFixed(2)}`)
    }
}