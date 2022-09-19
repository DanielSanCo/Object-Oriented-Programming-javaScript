//import {Pessoa} from './src/pessoa';
import { ContaBanco } from './src/contabanco';

/*
let pessoaUm = new Pessoa();

pessoaUm.name = "Daniel";
pessoaUm.age = 24;
pessoaUm.cpf = "123.333.333-29";
pessoaUm.tel = '969703202';*/

let contaUm = new ContaBanco("Danil", "005-4", "4002-89", 500);

contaUm.deposito(30);
contaUm.sacar(200);
contaUm.verSaldo();
console.log(contaUm.saldo)