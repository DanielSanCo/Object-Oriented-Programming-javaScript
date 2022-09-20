import { Funcionario } from './src/funcionario';
import {Pessoadois} from './src/pessoadois';

let pessoadois = new Pessoadois('Daniel', '456.443.643-54', '342345345', 'RJ', 24);
let funcionario = new Funcionario('Daniel', '456.443.643-54', '342345345', 'RJ', 24, '2342', 'trabalhador', '131f', 1200)

pessoadois.verDados();