/*
Armazenar dados da Array
Remover dados da Array;
Atualizar dados da Array.
Apresentar todos os dados da Array.
*/

let estoque = ['banana', 'maça', 'laranja', 'pêra'];

console.log(`--Removi o dado ${estoque[1]}--`)
estoque.splice(1,1)
console.log(estoque)
console.log("--Dois dados adicionados--")
estoque.push('uva', 'alface');
console.log(estoque);
console.log("--Todos os dados--")
console.log(estoque);