"use strict";
exports.__esModule = true;
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, idade, empresa, salario) {
        this.nome = nome;
        this.idade = idade;
        this.empresa = empresa;
        this.salario = salario;
    }
    Funcionario.prototype.depositar = function (valor) {
        this.salario += valor;
        console.log("Ganhou mais R$".concat(valor.toFixed(2), " ficando com R$").concat(this.salario.toFixed(2)));
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
