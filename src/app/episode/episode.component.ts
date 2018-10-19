import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.sass']
})
export class EpisodeComponent implements OnInit {
  id: number;
  name: string;
  description: string;
  releaseDate: Date;
  duration: Number;
  constructor() { }

  ngOnInit() {
  }
}
