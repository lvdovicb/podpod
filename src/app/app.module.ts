import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PodcastComponent } from './podcast/podcast.component';
import { EpisodeComponent } from './episode/episode.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { SearchComponent } from './search/search.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PodcastComponent,
    EpisodeComponent,
    EpisodeListComponent,
    SearchComponent,
    MenuComponent,
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
