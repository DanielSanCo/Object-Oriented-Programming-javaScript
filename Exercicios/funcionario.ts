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
        this.nome = nome;
        this.idade = idade;
        this.empresa = empresa;
        this.salario = salario;
    }

    depositar(valor: number){
        this.salario += valor;
        console.log(`Ganhou mais R$${valor.toFixed(2)} ficando com R$${this.salario.toFixed(2)}`)
    }
}