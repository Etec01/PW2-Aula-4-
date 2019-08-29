var Viagem = /** @class */ (function () {
    function Viagem(tempoGasto, velocidadeMedia, rendimento) {
        this.tempoGasto = tempoGasto;
        this.velocidadeMedia = velocidadeMedia;
        this.rendimento = rendimento;
    }
    Viagem.prototype.distancia = function () {
        var dis = this.tempoGasto * this.velocidadeMedia;
        return dis;
    };
    Viagem.prototype.consumo = function () {
        var cons = this.distancia() / this.rendimento;
        return cons;
    };
    return Viagem;
}());
