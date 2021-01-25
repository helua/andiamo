import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BtsComponent } from './pages/bts/bts.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DigitalComponent } from './pages/digital/digital.component';
import { MainComponent } from './pages/main/main.component';
import { ReelComponent } from './pages/reel/reel.component';
import { VideoDetailsComponent } from './video-list/video-details/video-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'films', component: MainComponent },
  { path: 'video/:id', component: VideoDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'reel', component: ReelComponent },
  { path: 'digital', component: DigitalComponent },
  { path: 'bts', component: BtsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: MainComponent },

  // { path: 'category/:category', component: MoviesInCategoryComponent },
  // { path: 'year/:year', component: MovieInYearComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
