import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';



@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})


export class TranslationComponent implements OnInit {

  constructor( public translate: TranslateService, private translation: TranslationService) {
  translate.addLangs(['pl', 'en']);
  translate.setDefaultLang('pl');

  // const browserLang = translate.getBrowserLang();
  // translate.use(browserLang.match(/pl|en/) ? browserLang : 'pl');
 }

  ngOnInit(): void {
  }

  navigateOnLangSwitch(){
    this.translation.navigateOnLangSwitch();
  }

}
