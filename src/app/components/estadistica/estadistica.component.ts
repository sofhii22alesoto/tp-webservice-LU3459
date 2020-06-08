import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';
import { Covid } from 'src/app/models/covid';
import { stringify } from 'querystring';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {
 resultados : Array<any>;


 pais01 = {
   'nombre' : '',
   'confirmados' : '',
   'recuperados' : '',
   'fallecidos' : '',
 }
 
  constructor(private covidServicio : CovidService) {
  
     this.obtenerDatoPais();
   }

  

  ngOnInit(): void {
  }

  obtenerDatoPais(){
    let pais : "Argentina";
    let fecha : "2020-04-01";
      this.covidServicio.getDatos(pais,fecha).subscribe(
        (result) => {
          this.resultados = result;
          this.pais01.nombre = this.resultados[0].country;
           this.pais01.confirmados = this.resultados[0].provinces[0].confirmed;
           this.pais01.recuperados = this.resultados[0].provinces[0].recovered;
           this.pais01.fallecidos = this.resultados[0].provinces[0].deaths;
           console.log(this.resultados);
            
      },
      error => {alert('Error de peticion');} )
  }
}
