
import { Component, OnInit, Injectable, Input, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ResultsStoreService } from './../results-store.service';
import { EventService } from '../event.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})

export class SearchComponent implements OnInit {
  pods: Object;

  constructor(private search: SearchService, private resultsStore: ResultsStoreService, private eventservice: EventService) { }

  ngOnInit() {
  }

  getPods(query: String) {
    this.search.getPods(query).subscribe(search => {
      this.pods = search
      this.resultsStore.results = this.pods["results"];

    })
    this.eventservice.event.emit();
  }
}
