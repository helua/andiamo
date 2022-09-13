import { Component, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { ScreenService } from 'src/app/screen.service';
import { TranslationService } from 'src/app/translation.service';

@Component({
  selector: 'app-site-not-found',
  templateUrl: './site-not-found.component.html',
  styleUrls: ['./site-not-found.component.scss']
})
export class SiteNotFoundComponent implements OnInit {
  title = '';
  description: MetaDefinition = {name: 'description', content: ''};

  constructor(private titleService: Title, private metaService: Meta, private screen: ScreenService,  private translation: TranslationService, private translate: TranslateService) { }

  ngOnInit() {
    this.translation.checkLang();
    this.translate.get('404.META').subscribe( m => {
      this.description.content = m;
      this.metaService.updateTag(this.description);
    });
    this.translate.get('404.TITLE').subscribe( t => {
      this.title = t;
      this.titleService.setTitle(this.title);
    })
    this.screen.fixMenuColors('#000', '#fafff6');
    this.screen.getScreenSize();
  }

}
