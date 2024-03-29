import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/screen.service';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {

  photos: number[] = [];
  smallURL: string = 'assets/about/small';
  bigURL: string = 'assets/about/big/compiled/';
  logo: string = 'assets/alt-green.svg';
  title = 'about';
  keywords: MetaDefinition = {name: 'keywords', content: 'inne tagi, about'};
  description: MetaDefinition = {name: 'description', content: 'O Andiamo'};


  

  constructor(private elementRef: ElementRef, public screen: ScreenService, private titleService: Title, private metaService: Meta){
  }

  ngOnInit() {

    this.titleService.setTitle(this.title);
    this.metaService.updateTag(this.keywords);
    this.metaService.updateTag(this.description);

    this.screen.getScreenSize();  
    for(let i = 1; i < 12; i++){
      let newPhoto: number = i;
      this.photos.push(newPhoto)
      console.log(this.photos);
    };  
  }


  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#000';
    let nav = Array.from(document.getElementsByTagName("a"));
    for (let i = 0; i < nav.length; i++) {
      nav[i].style.color = "#fafff6";
    }
    let shadow = Array.from(document.getElementsByClassName("active")as HTMLCollectionOf<HTMLElement>)[0];
    shadow.style.boxShadow="5px 5px #fafff6";

    let menu = Array.from(document.getElementsByClassName("mat-drawer")as HTMLCollectionOf<HTMLElement>)[0];
    menu.style.backgroundColor="#000";
  }

 ngOnDestroy(){
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fafff6';
  let nav = Array.from(document.getElementsByTagName("a"));
    for (let i = 0; i < nav.length; i++) {
      nav[i].style.color = "#000";
    }
  let shadow = Array.from(document.getElementsByClassName("active")as HTMLCollectionOf<HTMLElement>)[0];
  shadow.style.boxShadow="none";

  let menu = Array.from(document.getElementsByClassName("mat-drawer")as HTMLCollectionOf<HTMLElement>)[0];
    menu.style.backgroundColor="#fafff6";

  }
}
