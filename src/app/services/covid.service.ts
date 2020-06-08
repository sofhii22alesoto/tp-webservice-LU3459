import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private _http: HttpClient) { }

  public getDatos(pais,fecha):Observable<any>{

    const httpOptions ={
      headers : new HttpHeaders({
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
	      "x-rapidapi-key": "83841fdf18mshacef35baa5e1eb8p15e420jsnb9f86129ec1f"
      }),
    params :{
      'date': fecha,
      'name' : pais
    }
    };
    return this._http.get("https://covid-19-data.p.rapidapi.com/report/country/name" , httpOptions);
  }
}
