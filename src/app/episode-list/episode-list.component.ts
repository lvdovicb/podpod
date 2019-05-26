import { EpisodeComponent } from './../episode/episode.component';
import { Component, OnInit, Input } from '@angular/core';
import { ResultsStoreService } from '../results-store.service';
import { EventService } from '../event.service';



@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.sass']
})
export class EpisodeListComponent implements OnInit {
  @Input() result: [];

  episodes = [];
  next_offset: number;

  constructor(private resultsStore: ResultsStoreService, private eventservice: EventService) { }

  ngOnInit() {
    this.eventservice.event.subscribe(value => {
      this.episodes = this.resultsStore.results
      console.log(this.episodes);
      this.next_offset = this.resultsStore.next_offset
      console.log(this.resultsStore.next_offset);
    })
  }
  list() {
    this.episodes = this.resultsStore.results
    // console.log(this.episodes);
  }
}
