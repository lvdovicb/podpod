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

  url: string = 'https://listennotes.p.mashape.com/api/v1/search?q={query}';

    constructor(private http: HttpClient) { }

  getPods(query) {
    const headers: HttpHeaders = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('X-Mashape-Key', 'cviLi6JurYmshmkatN7db3K4XZLAp191szBjsnzEEwrYY5NqUE');
    return this.http.get(this.url, {headers: headers});
  }
}



