import { Animal } from "./animal";

export class Cachorro extends Animal{
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        super(nome, idade)
        this.nome = nome;
        this.idade = idade;
    }

    som(): void {
        console.log("Au au!")
    }
    correr(): void {
        console.log("Correndo com 4 patas")
    }
}