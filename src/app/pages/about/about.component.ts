import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/screen.service';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/translation.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  photos1: number[] = [];
  photos2: number[] = [];
  smallURL: string = 'assets/about/small';
  bigURL: string = 'assets/about/big/';
  logo: string = 'assets/ANDIAMO_sign-mini.svg';
  title: string;
  description: MetaDefinition = {name: 'description', content: ''};

  constructor(private elementRef: ElementRef, public screen: ScreenService, private titleService: Title, private metaService: Meta, private translation: TranslationService, private translate: TranslateService, private viewport: ViewportScroller){}

  ngOnInit() {
    this.translation.checkLang();
    this.translate.get('ABOUT.META').subscribe( m => {
      console.log(m);
      this.description.content = m;
      this.metaService.updateTag(this.description);
    });
    this.translate.get('ABOUT.TITLE').subscribe( t => {
      this.title = t;
      console.log(t);
      this.titleService.setTitle(this.title);
    })
    this.screen.getScreenSize();
    console.log(this.screen.isBigScreen);
    for(let i = 1; i < 5; i++){
      let newPhoto: number = i;
      this.photos1.push(newPhoto)
    };
    for(let i = 5; i < 11; i++){
      let newPhoto: number = i;
      this.photos2.push(newPhoto)
    };
    // basic
    this.screen.fixMenuColors('#fafff6','#000');
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#000';
    // let nav = Array.from(document.getElementsByTagName("a"));
    // for (let i = 0; i < nav.length; i++) {
    //   nav[i].style.color = "#fafff6";
    // }
    //inne
    // let shadow = Array.from(document.getElementsByClassName("active")as HTMLCollectionOf<HTMLElement>)[0];
    // shadow.style.boxShadow="5px 5px #fafff6";

    // let menu = Array.from(document.getElementsByClassName("mat-drawer")as HTMLCollectionOf<HTMLElement>)[0];
    // menu.style.backgroundColor="#000";
  }
  onScrollToTop(): void {
    // this.viewport.scrollToPosition([0,0])
    // this.viewport.getScrollPosition()
    console.log(this.viewport.getScrollPosition())
    // this.viewport.scrollToAnchor('gallery')
    this.viewport.scrollToPosition([0,0])
  }
 ngOnDestroy(){
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f0f0f0';
  }
}
