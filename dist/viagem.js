"use strict";
exports.__esModule = true;
var Viagem = /** @class */ (function () {
    function Viagem(tempoGasto, velocidadeMedia, rendimento) {
        this.tempoGasto = tempoGasto;
        this.velocidadeMedia = velocidadeMedia;
        this.rendimento = rendimento;
    }
    Viagem.prototype.distancia = function () {
        return this.tempoGasto * this.velocidadeMedia;
    };
    Viagem.prototype.consumo = function () {
        return this.distancia() / this.rendimento;
    };
    return Viagem;
}());
exports.Viagem = Viagem;
