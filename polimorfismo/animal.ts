export abstract class Animal {
    specie: string; age: number;
    family: string; name: string;

    constructor(especie: string, idade: number,
        familia: string, nome: string){
        this.specie = especie; this.age = idade;
        this.family = familia; this.name = nome;
    }
    correr():void{}
    dormir():void{}
    cacar():void{}
}