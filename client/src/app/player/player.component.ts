import { ResultsStoreService } from './../results-store.service';
import { PlayerService } from './../player.service';
import { SearchService } from './../search.service';
import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import * as Amplitude from 'amplitudejs'



@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnInit {
  @Input() result;

  show: boolean = false;
  results: [];
  pods: Object;

  podcast_title_original: string;
  audio: string;
  audio_length: string;
  name: string;
  thumbnail: string;
  description_original: string;
  releaseDate: Date;
  genres: [];

  constructor(private search: SearchService, private resultsstore: ResultsStoreService, private favorite: ApiService, private router: Router) { }


  ngOnInit() {
    console.table(this.result);
  }
  makeFavs(favorite) {
    let listener = JSON.parse(localStorage.getItem("listener"))
    let fav = {
      id_episode: favorite.id,
      podcast_title_original: favorite.podcast_title_original,
      listenerId: listener.userId
    }
    this.favorite.makeFavs(listener["userId"], listener["id"], fav).subscribe(value => {
      console.log(value);
    })
  }
  // goToPodcast() {
  //   this.router.navigate(["podcast", this.podcast_title_original])
  // }
  // playerInit() {
  //   Amplitude.init({
  //     "songs": []
  //   })
  // }
}