import { Episode } from './../episode/episode.component';
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
  podcast = "Gone";
}
export class Podcast {
  id: Number;
  title: String;
  description: String;
  language: String;
  numberOfEpisodes: Number;
  category: String;
  isFavorite: Boolean;
  episodes: Array<Episode>;
  siteUrl: string;
}