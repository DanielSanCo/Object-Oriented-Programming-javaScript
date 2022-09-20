"use strict";
/*
Crie uma classe avião e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto
avião, defina as instâncias deste objeto e apresente as informações deste objeto no console.
*/
exports.__esModule = true;
exports.Aviao = void 0;
var Aviao = /** @class */ (function () {
    function Aviao(modelo, codigo, anoLancamento, empresa, passageiros) {
        this.modelo = modelo;
        this.codigo = codigo;
        this.anoLancamento = anoLancamento;
        this.empresa = empresa;
        this.passageiros = passageiros;
    }
    Aviao.prototype.infosAviao = function (valorPassagem) {
        console.log("---O avi\u00E3o de modelo ".concat(this.modelo, " da empresa ").concat(this.empresa, " est\u00E1 com ").concat(this.passageiros, " passageiros totalizando R$").concat((this.passageiros * valorPassagem).toFixed(2), " em passagem vendidas"));
    };
    return Aviao;
}());
exports.Aviao = Aviao;
