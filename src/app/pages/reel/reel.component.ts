import { Component, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { ScreenService } from 'src/app/screen.service';

@Component({
  selector: 'app-reel',
  templateUrl: './reel.component.html',
  styleUrls: ['./reel.component.scss']
})
export class ReelComponent implements OnInit {
  title = 'reel';
  keywords: MetaDefinition = {name: 'keywords', content: 'reel, 2020'};
  description: MetaDefinition = {name: 'description', content: 'reel is real'};

  constructor(private titleService: Title, private metaService: Meta, private screen: ScreenService) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.updateTag(this.keywords);
    this.metaService.updateTag(this.description);
    this.screen.fixAllora();
    this.screen.fixMenuColors('#000', '#fafff6');
    this.metaService.addTags([
      {name: 'robots', content: 'noindex, nofollow, noimageindex'}
    ]);
  }
}
