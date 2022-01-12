import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/screen.service';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

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
  title = 'O nas – kto stoi za Andiamo Works?';
  description: MetaDefinition = {name: 'description', content: 'Duet reżyserów zniewalających spotów reklamowych i filmów dla firm. Poznajmy się!'};

  constructor(private elementRef: ElementRef, public screen: ScreenService, private titleService: Title, private metaService: Meta, private router: Router, public translate: TranslateService){}

  ngOnInit() {
    this.checkLang();
    this.titleService.setTitle(this.title);
    this.metaService.updateTag(this.description);

    this.screen.getScreenSize();
    for(let i = 1; i < 5; i++){
      let newPhoto: number = i;
      this.photos1.push(newPhoto)
      console.log(this.photos1);
    };
    for(let i = 5; i < 11; i++){
      let newPhoto: number = i;
      this.photos2.push(newPhoto)
      console.log(this.photos2);
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

  checkLang(){
    console.log(this.router.url);
    if(this.router.url === "/about"){
      this.translate.use('en');
    }

  }

 ngOnDestroy(){
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f0f0f0';
  }
}
