export class Covid {
 country : string;
 confirmed : number;
 recovered : number;
 deaths : number;
     constructor(country?:string,confirmed?:number,recovered?:number,deaths?:number){
       this.country = country;
       this.confirmed = confirmed;
       this.recovered = recovered;
       this.deaths = deaths;
     }
}
