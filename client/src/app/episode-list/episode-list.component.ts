import { EpisodeComponent } from './../episode/episode.component';
import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';
import { ResultsStoreService } from '../results-store.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.sass']
})

export class EpisodeListComponent implements OnInit {
  @Input() result: [];
  @Input() podcast: [];

  episodes = [];
  next_offset: number;
  bestPodcasts = [];
  podcasts: any;
  response: any;
  constructor(private searchService: SearchService, private resultsStore: ResultsStoreService, private eventservice: EventService) { }

  ngOnInit() {
    this.searchService.getBestPodcasts();
    this.eventservice.event.subscribe(value => {
      this.episodes = this.resultsStore.results
      this.podcasts = this.resultsStore.podcasts
      this.next_offset = this.resultsStore.next_offset
    })
  }
  nextOffset() {
    let next = this.searchService.response['next_offset']
  }
}
