import { EpisodeComponent } from './../episode/episode.component';
import { Component, OnInit } from '@angular/core';
import { ResultsStoreService } from '../results-store.service';
import { EventService } from '../event.service';



@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.sass']
})
export class EpisodeListComponent implements OnInit {
  episodes =  [];

  constructor(private resultsstore: ResultsStoreService, private eventservice: EventService) { }

  ngOnInit() {
    this.eventservice.event.subscribe(value => {
      this.episodes = this.resultsstore.results
      console.log(this.episodes);    
    }) 
  }
  list() {
    this.episodes = this.resultsstore.results
    // console.log(this.episodes);
  }
}
