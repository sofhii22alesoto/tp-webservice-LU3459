import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private _http: HttpClient) { }

  getHoroscopo():Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({
        'x-RapidAPI-Host' : 'zodiac-sign.p.rapidapi.com',
        'x-RapidAPI-Key' : '83841fdf18mshacef35baa5e1eb8p15e420jsnb9f86129ec1f'
      })
    };
    return this._http.get("https://zodiac-sign.p.rapidapi.com/signs", httpOptions);
  }
}
