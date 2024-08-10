import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShortsComponent } from './shorts/shorts.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { LibraryComponent } from './library/library.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shorts', component: ShortsComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'history', component: HistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }