import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComidasService {
  constructor(private http: HttpClient) { }

  url = "https://www.themealdb.com/api/json/v1/1/"

  comidasCerdo() {
    return this.http.get(`${this.url}filter.php?c=Pork`);
  }
  getPlato(id:string){
    return this.http.get(`${this.url}lookup.php?i=${id}`);
  }

}
