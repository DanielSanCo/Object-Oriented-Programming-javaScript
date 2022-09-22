/*2. Crie uma classe denominada Elevador para armazenar as informações de um elevador
dentro de um prédio. A classe deve armazenar o andar atual (térreo = 0), total de andares
no prédio (desconsiderando o térreo), capacidade do elevador e quantas pessoas estão
presentes nele. A classe deve também disponibilizar os seguintes métodos:
Inicializa : que deve receber como parâmetros a capacidade do elevador e o total de
andares no prédio (os elevadores sempre começam no térreo e vazio);
Entra : para acrescentar uma pessoa no elevador (só deve acrescentar se ainda houver
espaço);
Sai : para remover uma pessoa do elevador (só deve remover se houver alguém
dentro dele);
Sobe : para subir um andar (não deve subir se já estiver no último andar);
Desce : para descer um andar (não deve descer se já estiver no térreo);
Encapsular todos os atributos da classe*/

export class Elevador{
    andarAtual: number;
    totalAndares: number;
    capacidade: number;
    numPessoas: number;

    constructor(andarAtual: number, totalAndares: number, capacidade: number, numPessoas: number){
        this.andarAtual = andarAtual
        this.capacidade = capacidade
        this.numPessoas = numPessoas
        this.totalAndares = totalAndares
    }

    inicializa(capac: number, andares: number){
        console.log(`-Elevador-\ncapacidade: ${capac}\nandares: ${andares}`)
    }
    entra(num: number){
        if(this.andarAtual == 0){
            console.log(`O elevador esta no terreo`)
        }
        this.numPessoas += num
        if(this.numPessoas <= 8){
            console.log(`Entrou ${this.numPessoas} pessoa(s) no elevador`)
        }else{
            console.log(`Tem ${this.numPessoas} pessoa(s) no elevador não vai subir`)
        }
    }
    sai(num: number){
        this.numPessoas -= num
        console.log(`Saiu ${num} pessoa(s), agora tem ${this.numPessoas}`)
    }
    sobe(num: number){
        if(this.numPessoas <= 8){
            this.andarAtual += num
            if(this.andarAtual >= 0 && this.andarAtual <= this.totalAndares){
                console.log(`O elevador subiu para o andar ${this.andarAtual}`)
            }else{
                console.log(`O andar ${this.andarAtual} não existe`)
            }
        }
        
    }
    desce(num: number){
        this.andarAtual -= num
        if(this.numPessoas <= 8){
            if(this.andarAtual >= 0 && this.andarAtual <= this.totalAndares){
                if(this.andarAtual == 0) {
                    console.log(`O elevador está no terreo`)
                }else{
                    console.log(`O elevador desceu para o andar ${this.andarAtual}`)
                }
            }else{
                console.log(`O andar ${this.andarAtual} não existe`)
            }
        }
    }
}