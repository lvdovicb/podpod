
import { Component, OnInit, Injectable, Input, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';
import { ResultsStoreService } from './../results-store.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})

export class SearchComponent implements OnInit {
  response: Object;
  term: string;
  podcasts: Object;
  bestPodcasts: Object;
  next_offser: Number;
  constructor(private search: SearchService, private resultsStore: ResultsStoreService, private eventservice: EventService) { }

  ngOnInit() {
  }
  // general search
  getPods(query: String) {
    this.search.getPods(query).subscribe(search => {
      this.response = search
      this.resultsStore.results = this.response["results"];
      this.eventservice.event.emit();
    })
  }
  // podcasts search
  getPodcats(query: String) {
    this.search.getPodcasts(query)
    this.resultsStore.podcasts = this.search.podcasts
  }
}
