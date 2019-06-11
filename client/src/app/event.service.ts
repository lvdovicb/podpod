import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  event = new EventEmitter;
  
  constructor() { }
}
