/*
3. Crie uma classe Televisao e uma classe ControleRemoto que pode controlar o volume e
trocar os canais da televisão. O controle de volume permite:
 aumentar ou diminuir a potência do volume de som em uma unidade de cada vez;
 aumentar e diminuir o número do canal em uma unidade
 trocar para um canal indicado;
 consultar o valor do volume de som e o canal selecionado.
*/
import { Televisao } from "./televisao";

class Controle extends Televisao{
    volume: number;
    canal: number;

    constructor(volume: number, canal: number){
        super(volume, canal)
        this.volume = volume
        this.canal = canal
    }

    aumentarVol(){
        this.volume += 1
    }
    diminuirVol(){
        this.volume -= 1
        console.log(`Volume: ${this.volume}`)
    }
    aumentarCanal(){
        this.canal += 1
        console.log(`Volume: ${this.volume}`)
    }
    diminuirCanal(){
        this.canal -= 1
    }
    canalEsp(chanal: number){
        this.canal = chanal
    }
}