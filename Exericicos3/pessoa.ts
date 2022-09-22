export class Pessoa {
    private nome: string;
    private anoNasc: number;
    private altura: number;

    constructor(nome: string, anoNasc: number, altura: number){
        this.nome = nome;
        this.anoNasc = anoNasc;
        this.altura = altura;
    }

    idade():void{
        console.log(`Nome: ${this.nome}\nIdade: ${2022-this.anoNasc}\nAltura: ${this.altura}`)
    }
}