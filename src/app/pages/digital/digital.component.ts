import { Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { ScreenService } from 'src/app/screen.service';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.scss'],

})
export class DigitalComponent implements OnInit, OnDestroy {

  arrowIcon = faArrowDown;
  title = 'digital';
  keywords: MetaDefinition = {name: 'keywords', content: 'digital, production'};
  description: MetaDefinition = {name: 'description', content: 'DIGITAL to zupełnie inna strona'};

  constructor(private elementRef: ElementRef, private titleService: Title, private metaService: Meta, private screen: ScreenService){}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.updateTag(this.keywords);
    this.metaService.updateTag(this.description);
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#8cfa60';
    this.screen.fixMenuColors('#000', '#8cfa60');
    this.metaService.addTags([
      {name: 'robots', content: 'noindex, nofollow, noimageindex'}
    ]);
  }

 scrollToElement($element): void {
  $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

 ngOnDestroy(){
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fafff6';
 }
}
