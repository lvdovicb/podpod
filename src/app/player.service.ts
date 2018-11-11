import { ResultsStoreService } from './results-store.service';
import { SearchService } from './search.service';

import { Howler, Howl } from 'howler';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private player: ResultsStoreService) { }

  play(){
    let podplaying = new Howl( {
      src: ['result.audio']
    });
    podplaying.play();
  }
}
