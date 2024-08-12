import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShortsComponent } from './shorts/shorts.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { LibraryComponent } from './library/library.component';
import { HistoryComponent } from './history/history.component';
import { AllComponent } from './all/all.component';
import { MusicComponent } from './music/music.component';
import { ComedyComponent } from './comedy/comedy.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';
import { LikedVideosComponent } from './liked-videos/liked-videos.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { Channel1Component } from './channel1/channel1.component';
import { Channel3Component } from './channel3/channel3.component';
import { Channel2Component } from './channel2/channel2.component';

const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, children: [
        { path: '', redirectTo: 'all', pathMatch: 'full' },
        { path: 'all', component: AllComponent },
        { path: 'music', component: MusicComponent },
        { path: 'comedy', component: ComedyComponent },
        { path: 'entertainment', component: EntertainmentComponent },
      ] 
    },
    { path: 'shorts', component: ShortsComponent },

    {
      path: 'library',
      component: LibraryComponent,
      children: [
        { path: '', redirectTo: 'watch-later', pathMatch: 'full' },
        { path: 'watch-later', component: WatchLaterComponent },
        { path: 'liked-videos', component: LikedVideosComponent },
        { path: 'playlists', component: PlaylistsComponent },
      ],
    },

    { path: 'subscriptions', component: SubscriptionsComponent,
      children: [
        { path: '', redirectTo: 'channel1', pathMatch: 'full' },
        { path: 'channel1', component: Channel1Component },
        { path: 'channel2', component: Channel2Component },
        { path: 'channel3', component: Channel3Component },
      ],
     },
    { path: 'history', component: HistoryComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }