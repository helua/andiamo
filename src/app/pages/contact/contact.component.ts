import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { ScreenService } from 'src/app/screen.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  title = 'Kontakt z Andiamo Works';
  description: MetaDefinition = {name: 'description', content: 'Sprawdź nasze dane kontaktowe i skontaktuj się z nami.'};
  $light: '#D3FFB5';

  constructor(private elementRef: ElementRef, private titleService: Title, private metaService: Meta, private screen: ScreenService){}

    ngOnInit() {
      this.titleService.setTitle(this.title);
      this.metaService.updateTag(this.description);

      this.screen.fixAllora();
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#005953';

    }
    ngOnDestroy(){
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fafff6';
     }
}
