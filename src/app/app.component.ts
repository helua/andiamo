import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faVimeoV } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Meta } from '@angular/platform-browser';
import { setSkipButton } from '../app/localStorageVriables'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = '';
  vimeoIcon = faVimeoV;
  instagramIcon = faInstagram;
  facebookIcon = faFacebookF;
  menuIcon = faBars;
  isSkipped: boolean = false;


  constructor(private metaService: Meta){}

  ngOnInit() {
    this.metaService.addTags([
      {property: 'og:image', content: 'https://andiamo.works/assets/ANDIAMO_cover.jpg'}
    ]);
    setSkipButton('nie');
  }

}




