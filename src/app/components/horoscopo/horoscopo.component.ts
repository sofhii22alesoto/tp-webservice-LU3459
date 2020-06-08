import { Component, OnInit } from '@angular/core';
import { HoroscopoService } from 'src/app/services/horoscopo.service';
import { Horoscopo } from 'src/app/models/horoscopo';
@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {
  horoscopo: Horoscopo;
  horoscopos: Array<Horoscopo>;
  verSigno: boolean;
  indice: number;
  constructor(private horoscopoService: HoroscopoService) { 
    this.verSigno = false;
    this.obtenerHoroscopos();
  }

  ngOnInit(): void {
  }

  obtenerHoroscopos(){
    this.horoscopoService.getHoroscopo().subscribe(
      (resul) => {
       
        this.horoscopos = new Array<Horoscopo>();
        resul.forEach(element => {
          this.horoscopo = new Horoscopo();
          Object.assign(this.horoscopo, element);
          this.horoscopos.push(this.horoscopo);
        });
        console.log(this.horoscopos);
        },
      (error) => {
        alert("Error de petición");
      }
    )
  }

  mostrarHoroscopo(num: number){
    this.verSigno = true;
    this.indice = num;
  }

}
