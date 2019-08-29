export class Viagem{
    constructor(public tempoGasto:number,public velocidadeMedia:number,public rendimento:number){}
    distancia():number{
         
        return this.tempoGasto * this.velocidadeMedia;
    }
    consumo():number{
         
        return this.distancia() / this.rendimento;
    }

}