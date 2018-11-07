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
let sound = new Howl({
  src: ['sound.mp3']
});

sound.play();
