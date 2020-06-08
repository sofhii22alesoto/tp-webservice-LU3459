import { Component, OnInit } from '@angular/core';
import { DivisasService } from 'src/app/services/divisas.service';
import { Cotidivisas} from 'src/app/models/cotidivisas';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {
  q :number;
  desde:string;
  a:string;
  total:number;
  tipoMoneda:number;

  constructor(private cambioService: DivisasService) {}

  ngOnInit() {
  }

  public cambiarMoneda()
  {
    if(this.tipoMoneda == 1)
      {
          this.cambioService.q= this.q;
          this.cambioService.desde= "USD";
          this.cambioService.a="ARS";
          this.cambioService.getCambio(this.q,this.desde,this.a)
          .subscribe(
          (result ) => {
          console.log(result)
          this.total = result;
      } )
      }
      else{
          this.cambioService.q= this.q;
          this.cambioService.desde= "ARS";
          this.cambioService.a="USD";
          this.cambioService.getCambio(this.q,this.desde,this.a)
          .subscribe(
          (result ) => {
          console.log(result)
          this.total = result;
      } )
    }  
  }
  
  limpiar(){
  
  this.q=0;
  this.total=0;
  }

} 
  

      

  
    

