import { SearchService } from './../search.service';
import { ApiService } from './../api.service';
import { ResultsStoreService } from './../results-store.service';
import { EpisodeComponent } from './../episode/episode.component';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.sass']
})
export class PodcastComponent implements OnInit {
 @Input() result; 
    results = [];

  title: String;
  description: String;
  language: String;
  numberOfEpisodes: Number;
  category: String;
  isFavorite: Boolean;
  episodes: Array<EpisodeComponent>;
  siteUrl: string;

  constructor(private search:SearchService, private resultsstore: ResultsStoreService, private favorite: ApiService) { }

  ngOnInit() {
  }
  
}
  