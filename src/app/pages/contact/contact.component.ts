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
      this.screen.getScreenSize();
      this.screen.fixMenuColors('#000', '#fafff6')
      if(this.screen.isHorizontal == true){
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'url("../../assets/ANDIAMO_bg.jpg"), linear-gradient(50deg, rgba(254,137,45,1) 0%, rgba(254,117,67,1) 100%)';
      }
      if(this.screen.isHorizontal !== true && this.screen.scrWidth > 450 ){
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'url("../../assets/ANDIAMO_bg-pion.jpg"), linear-gradient(50deg, rgba(254,137,45,1) 0%, rgba(254,117,67,1) 100%)';

      }
      else{
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'url("../../assets/ANDIAMO_bg-mobile.jpg"), linear-gradient(50deg, rgba(254,137,45,1) 0%, rgba(254,117,67,1) 100%)';
      }
    }
    ngOnDestroy(){
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'none';
     }
}
