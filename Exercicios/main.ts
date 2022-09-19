import {Cliente} from './cliente';
import {Aviao} from './aviao';
import {ProdutoEletronico} from './produtoEletronico';
import {Funcionario} from './funcionario';

let cliente = new Cliente();
let aviao = new Aviao();
let produtoEletronico = new ProdutoEletronico();
let funcionario = new Funcionario("David", 25, 'Amazon', 2600);

cliente.id = '1';
cliente.nome = 'Ricardo';
cliente.idade = 40;

aviao.anoLancamento = 2014;
aviao.codigo = 214;
aviao.empresa = 'TAM';
aviao.modelo = 'Air5'

produtoEletronico.nome = 'ventilador';
produtoEletronico.empresa = 'MONDIAL';
produtoEletronico.preco = 120;

funcionario.nome = 'David';
funcionario.idade = 27;
funcionario.empresa = 'Amazon';

console.log(`Id: ${cliente.id}`)
console.log(`Nome: ${cliente.nome}`)
console.log(`Idade: ${cliente.idade}`)

console.log(`Codigo: ${aviao.codigo}`)
console.log(`Modelo: ${aviao.modelo}`)
console.log(`Ano: ${aviao.anoLancamento}`)
console.log(`Empresa: ${aviao.empresa}`)

console.log(`Produto: ${produtoEletronico.nome}`)
console.log(`Empresa: ${produtoEletronico.empresa}`)
console.log(`Preço: ${(produtoEletronico.preco).toFixed(2)}`)

funcionario.depositar(400);