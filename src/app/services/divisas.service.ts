import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DivisasService {
  q :number;
  desde:string;
  a:string;
  constructor(private _http: HttpClient) { }


  public getCambio(q,desde,a):Observable<any>{
const httpOptions = {
headers: new HttpHeaders({
  "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
	"x-rapidapi-key": "83841fdf18mshacef35baa5e1eb8p15e420jsnb9f86129ec1f",
}),
 params:{
   'q' : q,
   'from' : desde,
   'to' : a,
 }

};

return this._http.get("https://currency-exchange.p.rapidapi.com/exchange?q=1.0&from=USD&to=ARS", httpOptions);
}

}
