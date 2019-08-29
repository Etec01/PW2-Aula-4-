export class Diaria{
   constructor(public QtdeHoras:number,public ValorHora:number,public HoraAdicional:number){}
   total():number{
       return this.ValorHora + this.HoraAdicional * (this.QtdeHoras - 1)
   } 

}