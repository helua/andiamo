import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {

  scrWidth: any;
  isBigScreen: boolean = false;
  photos: number[] = [1,2,3,4,5,6,7,8,9,10,11];

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
      this.scrWidth = window.innerWidth;
      console.log('szerokosc ekranu: ' + this.scrWidth);

      if(this.scrWidth > 1500){
        this.isBigScreen = true;
        console.log('ekran duży: ' + this.isBigScreen);
      }
      else{
        this.isBigScreen = false;
        console.log('ekran duży: ' +  this.isBigScreen);

      }
    }

  constructor(private elementRef: ElementRef){
  }

  ngOnInit() {
    this.getScreenSize();    
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

    let icon = Array.from(document.getElementsByClassName("mat-icon")as HTMLCollectionOf<HTMLElement>)[0];
    icon.style.color="#fafff6";
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

  let icon = Array.from(document.getElementsByClassName("mat-icon")as HTMLCollectionOf<HTMLElement>)[0];
  icon.style.color="#000";
 }
}
