/*
Crie uma classe cliente e apresente os atributos e métodos referentes a esta classe, em seguida 
crie um objeto cliente, defina as instâncias deste objeto e apresente as informações deste objeto 
no console.
*/

export class Cliente {
    id: string;
    nome: string;
    idade: number;

    constructor(
        id: string,
        nome: string,
        idade: number
    ){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    infosClient(){
        console.log(`-----Cliente ${this.id}-----\nNome: ${this.nome}\nIdade: ${this.idade}`)
    }
}