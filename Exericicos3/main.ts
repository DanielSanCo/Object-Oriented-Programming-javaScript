import { Pessoa } from "./pessoa";
import {Elevador} from './elevador';

let pessoaUm = new Pessoa('Daniel', 1998, 1.8);
let elevador = new Elevador(0, 5, 8, 0);

//pessoaUm.idade();
elevador.inicializa(8,5);
elevador.entra(9);
elevador.sobe(2);
elevador.sai(1);
elevador.desce(0);