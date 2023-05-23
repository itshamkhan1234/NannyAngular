import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BASE_URL } from "./constants";

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  constructor(private http: HttpClient,private router: Router) { }

  getUrl(url: string) {
    return BASE_URL + url;
  }

  getHeader() {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
        .set("Content-Type", "application/json");
      return headers;
  }

  // Create
  public dataSubmit(data : any,url :string) {
    return this.http.post(this.getUrl(url), data,{headers:this.getHeader()});
  } 

  getlocation(url: any) {
    return this.http.get(url);
  }

  getData() {
    return this.http.get('./assets/country.json');
  }
}