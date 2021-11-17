import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoCoverComponent } from './video-list/video-cover/video-cover.component';
import { VimeoUrlPipe } from './vimeo-url.pipe';
import { VimeoUrlAutoplayPipe } from './vimeo-url-autoplay.pipe';

import { VideoListComponent } from './video-list/video-list.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './pages/main/main.component';
import { DigitalComponent } from './pages/digital/digital.component';
import { AboutComponent } from './pages/about/about.component';
import { ReelComponent } from './pages/reel/reel.component';
import { BtsComponent } from './pages/bts/bts.component';
import { ContactComponent } from './pages/contact/contact.component';
import { VideoDetailsComponent } from './video-list/video-details/video-details.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsCoverComponent } from './pages/news/news-cover/news-cover.component';
import { NewsDetailsComponent } from './pages/news/news-details/news-details.component';
import { LoadingComponent } from './loading/loading.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoCoverComponent,
    VimeoUrlPipe,
    VimeoUrlAutoplayPipe,
    VideoListComponent,
    NavComponent,
    MainComponent,
    DigitalComponent,
    AboutComponent,
    ReelComponent,
    BtsComponent,
    ContactComponent,
    VideoDetailsComponent,
    NewsComponent,
    NewsCoverComponent,
    NewsDetailsComponent,
    LoadingComponent,
    IntroComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    FontAwesomeModule,
    CommonModule,
    LazyLoadImageModule,
    RouterModule,
    ScullyLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

 }
