import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsStoreService {
  results: [];
  episode: Object;
  next_offset: number;
  
  constructor() { }
}
