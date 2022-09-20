"use strict";
exports.__esModule = true;
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, idade, empresa, salario) {
        this.empresa = empresa;
        this.idade = idade;
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.depositar = function (valor) {
        this.salario += valor;
        console.log("**Depositei R$".concat(valor.toFixed(2), " no seu salario de R$").concat((this.salario - valor).toFixed(2), " agora voc\u00EA tem R$").concat(this.salario.toFixed(2)));
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
