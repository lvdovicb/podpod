import { ResultsStoreService } from './results-store.service';
import { SearchService } from './search.service';

import { Howler, Howl } from 'howler';
import { Injectable } from '@angular/core';
import * as Amplitude from 'amplitudejs'



@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private player: ResultsStoreService) { }


  initPlayer() {
    let player = new Amplitude.init({
      songs: [

      ]
    });
  }
}
