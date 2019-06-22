import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchService } from './search.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { Form, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PodcastComponent } from './podcast/podcast.component';
import { EpisodeComponent } from './episode/episode.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PlayerComponent } from './player/player.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { UserComponent } from './user/user.component';
import { ApiService } from './api.service';
library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    PodcastComponent,
    EpisodeComponent,
    EpisodeListComponent,
    SearchComponent,
    NavComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    PlayerComponent,
    UserComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [SearchService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
