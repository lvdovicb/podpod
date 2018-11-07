import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.sass']
})

export class EpisodeComponent implements OnInit {

  pods: Object;

  id: number;
  name: string;
  thumbnail: string;
  description: string;
  releaseDate: Date;
  duration: Number;

  constructor(private search:SearchService) { }

  ngOnInit() {
    this.search.getPods(query).subscribe(search => 
      {this.pods = search
      console.log(this.search);
      })
  }
}
