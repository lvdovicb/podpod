import { EpisodeListComponent } from './../episode-list/episode-list.component';
import { EpisodeComponent } from './../episode/episode.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'episode', component: EpisodeComponent },
  { path: 'episodeList', component: EpisodeListComponent }
];

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// export class FeatureRoutingModule {}


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
export class AppRoutingModule { }
