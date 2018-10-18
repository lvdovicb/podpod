import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable() 
export class SearchService {
  apiRoot:string = 'https://listennotes.p.mashape.com/api/v1/search'
  results:Object[];
  loading:boolean;

  constructor(private http:HttpClient) { 
    this.results = [];
    this.loading = false;
  }

  search(term:string) {
  }
}
