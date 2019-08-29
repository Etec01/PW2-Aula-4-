"use strict";
exports.__esModule = true;
var Diaria = /** @class */ (function () {
    function Diaria(QtdeHoras, ValorHora, HoraAdicional) {
        this.QtdeHoras = QtdeHoras;
        this.ValorHora = ValorHora;
        this.HoraAdicional = HoraAdicional;
    }
    Diaria.prototype.total = function () {
        return this.ValorHora + this.HoraAdicional * (this.QtdeHoras - 1);
    };
    return Diaria;
}());
exports.Diaria = Diaria;
