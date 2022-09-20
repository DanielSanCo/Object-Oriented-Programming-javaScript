import {Cliente} from './cliente';
import {Aviao} from './aviao';
import {ProdutoEletronico} from './produtoEletronico';
import {Funcionario} from './funcionario';

let cliente = new Cliente('32d','Lucas',30);
let aviao = new Aviao('Aviona', 345, 2014, 'TAM', 20);
let produtoEletronico = new ProdutoEletronico();
let funcionario = new Funcionario("David", 30, "Amazon", 1200);

aviao.anoLancamento = 2014;
aviao.codigo = 214;
aviao.empresa = 'TAM';
aviao.modelo = 'Air5'

produtoEletronico.nome = 'ventilador';
produtoEletronico.empresa = 'MONDIAL';
produtoEletronico.preco = 120;

cliente.infosClient();

aviao.infosAviao(75);

console.log(`Produto: ${produtoEletronico.nome}`)
console.log(`Empresa: ${produtoEletronico.empresa}`)
console.log(`Preço: ${(produtoEletronico.preco).toFixed(2)}`)

funcionario.depositar(300);