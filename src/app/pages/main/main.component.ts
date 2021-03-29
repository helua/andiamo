import { Component, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'andiamo';
  keywords: MetaDefinition = {name: 'keywords', content: 'kaszanka, film production'};
  description: MetaDefinition = {name: 'description', content: 'Andiamo to duet reżyserski'};

  constructor(private titleService: Title, private metaService: Meta){}
    
    ngOnInit() {
      this.titleService.setTitle(this.title);
      this.metaService.updateTag(this.keywords);
      this.metaService.updateTag(this.description);
    }

}
