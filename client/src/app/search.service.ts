import { Search } from './entities/search';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SearchService {

  results: Object[];
  loading: boolean;
  query: string;

  constructor(private http: HttpClient) {

  }

  getPods(query) {
    let headers: HttpHeaders = new HttpHeaders({
      'X-ListenAPI-Key': '7a875cae64a0427cb768cbd28fa83345',
      "Accept": "application/json"
    })
    return this.http.get(`https://listen-api.listennotes.com/api/v2/search?q=${query}`, { headers });
  };
}



