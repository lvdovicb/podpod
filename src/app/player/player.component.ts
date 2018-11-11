import { ResultsStoreService } from './../results-store.service';
import { PlayerService } from './../player.service';
import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';



@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
    }
  }