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
