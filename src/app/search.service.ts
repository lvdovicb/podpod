import { Search } from './entities/search';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Subject} from 'rxjs';
import { BehaviorSubject } from 'rxjs';


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
    // "Access-Control-Allow-Origin": "http://localhost:4200",
    // "Access-Control-Allow-Headers": "*"

   })  
      
    // const apiUrl = "https://listennotes.p.mashape.com/api/v1/search?q=";
    return this.http.get(`https://listennotes.p.mashape.com/api/v1/search?q=${query}`, {headers});
  };
}



