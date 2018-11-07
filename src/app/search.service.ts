import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
}) 

export class SearchService {
  results:Object[];
  loading:boolean;
  query: string;
  
  constructor(private http: HttpClient) {
    
  }
  
  getPods(query) { 
   let headers: HttpHeaders = new HttpHeaders({
    "X-Mashape-Key": "cviLi6JurYmshmkatN7db3K4XZLAp191szBjsnzEEwrYY5NqUE",
    "Accept" : "application/json"
   })  
      
    // const apiUrl = "https://listennotes.p.mashape.com/api/v1/search?q=";
    return this.http.get("https://listennotes.p.mashape.com/api/v1/search?q=", {headers});
  };
}



