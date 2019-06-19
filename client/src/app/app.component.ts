import { RouterModule, Routes, Router } from '@angular/router';
import { SearchService } from './search.service';
import { PlayerService } from "./player.service";
import { EpisodeComponent } from './episode/episode.component';
import { PodcastComponent } from './podcast/podcast.component';
import { Component, Input } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  @Input() bestPodcasts: [];
  show: boolean = true;
  title = 'PodPod';

  constructor(private search: SearchService) { }
  ngOnInit() {
    this.search.getBestPodcasts()
  }
}
