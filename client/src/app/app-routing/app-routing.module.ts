import { PodcastComponent } from './../podcast/podcast.component';
import { PlayerComponent } from './../player/player.component';
import { EpisodeListComponent } from './../episode-list/episode-list.component';
import { EpisodeComponent } from './../episode/episode.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UserComponent } from '../user/user.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'appComponent', pathMatch: 'full' },
  { path: 'episode', component: EpisodeComponent },
  { path: 'episodeList', component: EpisodeListComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'favorites', component: UserComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
