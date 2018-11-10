import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.sass']
})

export class EpisodeComponent implements OnInit {

  pods: Object;

  podcast_title_original: string;
  audio: string;
  audio_length: string;
  name: string;
  thumbnail: string;
  description_original: string;
  releaseDate: Date;
  genres: [];

  constructor(private search: SearchService) { }

  ngOnInit() { }

  getPods(query) {
    this.search.getPods(query).subscribe(search => {
      this.pods = search;
      console.log(this.pods);
    });
  }
}
