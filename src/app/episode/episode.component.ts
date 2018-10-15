import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.sass']
})
export class EpisodeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
export class Episode {
  id: number;
  name: string;
  description: string;
  releaseDate: Date;
  duration: Number;
}