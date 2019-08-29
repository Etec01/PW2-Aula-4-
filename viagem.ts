class Viagem{
    constructor(public tempoGasto:number,public velocidadeMedia:number,public rendimento:number){}
    distancia(){
        let dis:number = this.tempoGasto * this.velocidadeMedia;
     
        return dis ;
    }
    consumo(){
        let cons:number =this.distancia() * this.rendimento;
    return cons;
    }
}