import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { observable,Observable } from 'rxjs';
  

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  constructor(private _http: HttpClient) { }

  public listNoticias(categoria:string):Observable<any>{
    
    const httpOptions ={
      headers: new HttpHeaders({
      "x-rapidapi-host": "livescore6.p.rapidapi.com",
      "x-rapidapi-key": "83841fdf18mshacef35baa5e1eb8p15e420jsnb9f86129ec1f"
      })  
    };
    return this._http.get("https://livescore6.p.rapidapi.com/news/list?category=" + categoria, httpOptions );
  }
}
