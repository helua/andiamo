import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})


export class TranslationComponent implements OnInit {
  lang: string;
  @Output() updateLang = new EventEmitter<any>();

  constructor( public translate: TranslateService) {
  translate.addLangs(['pl', 'en']);
  translate.setDefaultLang('pl');

  const browserLang = translate.getBrowserLang();
  translate.use(browserLang.match(/pl|en/) ? browserLang : 'pl');
 }

  ngOnInit(): void {
  }
  informSite(){
    console.log(this.translate.currentLang);
    this.lang = this.translate.currentLang;
    this.updateLang.emit({lang: this.lang});
    

  }

}
