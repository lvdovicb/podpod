import { SearchService } from './search.service';
import { EpisodeComponent } from './episode/episode.component';
import { Podcast } from './podcast/podcast.component';
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor (private search: SearchService) {}
 
  title = 'PodPod';
}
