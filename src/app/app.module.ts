import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PodcastComponent } from './podcast/podcast.component';
import { EpisodeComponent } from './episode/episode.component';

@NgModule({
  declarations: [
    AppComponent,
    PodcastComponent,
    EpisodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
