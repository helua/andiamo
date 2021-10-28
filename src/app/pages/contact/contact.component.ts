import { Component, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { ScreenService } from 'src/app/screen.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  title = 'andiamo';
  keywords: MetaDefinition = {name: 'keywords', content: 'contact, '};
  description: MetaDefinition = {name: 'description', content: 'Andiamo to Mateusz i Michal'};

  constructor(private titleService: Title, private metaService: Meta, private screen: ScreenService){}

    ngOnInit() {
      this.titleService.setTitle(this.title);
      this.metaService.updateTag(this.keywords);
      this.metaService.updateTag(this.description);

      // this.screen.fixAllora();
      // this.screen.fixMenuColors('#000', '#fafff6');
    }
}
