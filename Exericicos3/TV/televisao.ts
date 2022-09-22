

export abstract class Televisao {
    volume: number;
    canal: number;

    constructor(volume: number, canal: number){
        this.volume = volume
        this.canal = canal
    }
}