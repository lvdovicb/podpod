import { EpisodeComponent } from './../episode/episode.component';
import { PodApiService } from './../pod-api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.sass']
})
export class PodcastComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}
export class Podcast {
  title: String;
  description: String;
  language: String;
  numberOfEpisodes: Number;
  category: String;
  isFavorite: Boolean;
  episodes: Array<EpisodeComponent>;
  siteUrl: string;
  
}