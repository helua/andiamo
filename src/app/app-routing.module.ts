import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { BtsComponent } from './pages/bts/bts.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DigitalComponent } from './pages/digital/digital.component';
import { MainComponent } from './pages/main/main.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsDetailsComponent } from './pages/news/news-details/news-details.component';
import { ReelComponent } from './pages/reel/reel.component';
import { VideoDetailsComponent } from './video-list/video-details/video-details.component';

const routes: Routes = [
  // { path: 'films', redirectTo: '', pathMatch: 'full' },
  { path: '', component: MainComponent },
  { path: 'videos/:id', component: VideoDetailsComponent },
  { path: 'o-nas', component: AboutComponent },
  { path: 'digital', component: DigitalComponent },
  { path: 'newsy', component: NewsComponent },
  { path: 'newsy/:id', component: NewsDetailsComponent },
  { path: 'z-planu', component: BtsComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'soulreel', component: ReelComponent },
  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
