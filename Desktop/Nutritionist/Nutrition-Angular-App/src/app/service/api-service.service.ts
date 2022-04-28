import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private api:HttpClient) { }
  
  getdata(): Observable<any>{
    
    return this.api.get("https://api.nal.usda.gov/fdc/v1/foods/list?api_key=28d0mulUdpYIdonRwokU81U2fhAaaanUM9uwjZZi");
  }
  getDetails(id: any): Observable<any>{
    return this.api.get("https://api.nal.usda.gov/fdc/v1/food/"+id+"?api_key=28d0mulUdpYIdonRwokU81U2fhAaaanUM9uwjZZi");
  }
  getSearch(text: any): Observable<any>{
    return this.api.get("https://api.nal.usda.gov/fdc/v1/foods/search?api_key=28d0mulUdpYIdonRwokU81U2fhAaaanUM9uwjZZi&query="+text);
  }
  getfav(id: any): Observable<any>{
    return this.api.get("http://localhost:8081/api/favoriteitem/"+id);
  }
  getallfav(): Observable<any>{
    return this.api.get("http://localhost:8081/api/favoriteitem");
  }
  addfav(obj: any): Observable<any>{
    alert("Added to Favorite")
    return this.api.post("http://localhost:8081/api/favoriteitem",obj);
  }
  deleteFav(Id: any): Observable<any>{
    return this.api.delete("http://localhost:8081/api/favoriteitem/"+Id);
  }
  getRec(): Observable<any>{
    return this.api.get("http://localhost:20033/api/Recomend");
  }
  addRec(obj: any): Observable<any>{
    return this.api.post("http://localhost:20033/api/Recomend",obj);
  }
}

