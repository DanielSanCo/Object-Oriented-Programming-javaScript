import { Animal } from "./animal";

export class Cavalo extends Animal{
    cor: string;

    constructor(cor: string, 
        especie: string,
        idade: number,
        familia: string,
        nome: string
    ){
        super(especie, idade, familia, nome)
        this.cor = cor;
    }

    cacar(): void {
        console.log("I'm huting like a horse")
    }
    correr(): void {
        console.log("I'm running lika a horse")
    }
    dormir(): void {
        console.log("I'm aslep like a horse")
    }
}