import { Animal } from "./animal";

export class Cavalo extends Animal {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        super(nome, idade);
        this.nome = nome;
        this.idade = idade;
    }

    som(): void {
        console.log("Som de Cavalo")
    }
    correr(): void {
        console.log("Correndo igual a um cavalo")
    }
}