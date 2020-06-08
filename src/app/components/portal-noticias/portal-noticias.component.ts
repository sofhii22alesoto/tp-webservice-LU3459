import { Component, OnInit } from '@angular/core';
import { Noticia} from 'src/app/models/noticia';
import { PortalService } from 'src/app/services/portal.service';

@Component({
  selector: 'app-portal-noticias',
  templateUrl: './portal-noticias.component.html',
  styleUrls: ['./portal-noticias.component.css']
})
export class PortalNoticiasComponent implements OnInit {
categoria : string;
noticia : Noticia;
vector_noticia : Array<Noticia>;

  constructor(private noticiaservicio : PortalService) { 
    this.noticia = new Noticia();
    this.vector_noticia = new  Array<Noticia>();
  }

  ngOnInit(): void {
  }
  public cargarNoticias(){

    this.noticiaservicio.listNoticias(this.categoria).subscribe(
      (result) => {
        this.vector_noticia = new  Array<Noticia>();
        result['arts'].forEach(element => {
          this.noticia = new Noticia();
          Object.assign(this.noticia,element);
          this.vector_noticia.push(this.noticia);
          
        });
        console.log(this.vector_noticia);
      },
      error => {alert('Error de peticion'); })
      
    } 

  }
