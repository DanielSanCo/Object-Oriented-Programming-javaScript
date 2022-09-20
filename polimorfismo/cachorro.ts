import {Animal} from './animal';

class Cachorro extends Animal{
    raca: string;
    cor: string;
    specie: string; age: number;
    family: string; name: string;

    constructor(
        raca: string, cor: string, 
        specie: string, age: number,
        family: string, name: string
    ){
        super(specie, age, family, name)
        this.raca = raca; this.cor = cor;
    }
    correr(): void {console.log("I'm running like a dog")}
    dormir(): void {console.log("I'm aslep like a dog")}
}