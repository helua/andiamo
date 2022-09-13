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
import { SiteNotFoundComponent } from './pages/site-not-found/site-not-found.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'o-nas', component: AboutComponent },
  { path: 'z-planu', component: BtsComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'soulreel', component: ReelComponent },
  { path: 'strona-nie-istnieje', component: SiteNotFoundComponent },

  { path: 'en', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'bts', component: BtsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'soulreel-en', component: ReelComponent },
  { path: 'site-not-found', component: SiteNotFoundComponent },


  { path: 'videos/:id', component: VideoDetailsComponent },
  { path: 'newsy', component: NewsComponent },
  { path: 'newsy/:id', component: NewsDetailsComponent },

  // { path: '**', component: MainComponent },
  { path: '**', redirectTo: '/site-not-found', pathMatch: 'full' },
  { path: 'digital', component: DigitalComponent },

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
