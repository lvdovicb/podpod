import { Episode } from './episode/episode.component';
import { Podcast } from './podcast/podcast.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'PodPod';
}
