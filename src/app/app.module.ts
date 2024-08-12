import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ShortsComponent } from './shorts/shorts.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { LibraryComponent } from './library/library.component';
import { HistoryComponent } from './history/history.component';
import { MusicComponent } from './music/music.component';
import { ComedyComponent } from './comedy/comedy.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { AllComponent } from './all/all.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';
import { LikedVideosComponent } from './liked-videos/liked-videos.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { Channel1Component } from './channel1/channel1.component';
import { Channel2Component } from './channel2/channel2.component';
import { Channel3Component } from './channel3/channel3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    ShortsComponent,

    LibraryComponent,
    HistoryComponent,
    SubscriptionsComponent,
    MusicComponent,
    ComedyComponent,
    EntertainmentComponent,
    AllComponent,
    WatchLaterComponent,
    LikedVideosComponent,
    PlaylistsComponent,
    Channel1Component,
    Channel2Component,
    Channel3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
