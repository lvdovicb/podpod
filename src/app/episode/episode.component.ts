import { SearchService } from './../search.service';
import { ResultsStoreService } from './../results-store.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.sass']
})

export class EpisodeComponent implements OnInit {
 @Input() result;

  results: [];
  pods: Object;

  id: number;
  name: string;
  audio: string;
  thumbnail: string;
  description: string;
  releaseDate: Date;
  duration: Number;

  constructor(private search:SearchService, private resultsstore: ResultsStoreService, private favorite: ApiService) { }

  ngOnInit() {
     console.log(this.result);
  }
  makeFavs(favorite){
    let listener = JSON.parse(localStorage.getItem("listener"))
    let fav =  {
        id_episode: favorite.id,
        podcast_title_original: favorite.podcast_title_original,
        listenerId: listener.userId
      }
    
    this.favorite.makeFavs(listener["userId"], listener["id"], fav).subscribe(value =>
      {
        console.log(value);
        
      })
  }
}
