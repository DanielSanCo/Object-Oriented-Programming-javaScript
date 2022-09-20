"use strict";
/*
Crie uma classe cliente e apresente os atributos e métodos referentes a esta classe, em seguida
crie um objeto cliente, defina as instâncias deste objeto e apresente as informações deste objeto
no console.
*/
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(id, nome, idade) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.infosClient = function () {
        console.log("-----Cliente ".concat(this.id, "-----\nNome: ").concat(this.nome, "\nIdade: ").concat(this.idade));
    };
    return Cliente;
}());
exports.Cliente = Cliente;
