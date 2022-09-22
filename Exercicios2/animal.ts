export abstract class Animal{
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    som():void{

    }
    correr():void{
        
    }
}