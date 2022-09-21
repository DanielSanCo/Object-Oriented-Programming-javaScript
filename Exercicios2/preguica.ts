import { Animal } from "./animal";

export class Preguica extends Animal {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        super(nome, idade);
        this.nome = nome;
        this.idade = idade;
    }

    som(): void {
        console.log("Som de preguiça")
    }
    correr(): void {
        console.log("Tenho preguiça de correr")
    }
}