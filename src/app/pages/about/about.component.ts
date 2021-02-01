import { Component, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnDestroy {

  constructor(private elementRef: ElementRef){}

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#000';
    let nav = Array.from(document.getElementsByTagName("a"));
    for (let i = 0; i < nav.length; i++) {
      nav[i].style.color = "#fff";
    }
    let shadow = Array.from(document.getElementsByClassName("active")as HTMLCollectionOf<HTMLElement>)[0];
    shadow.style.boxShadow="5px 5px #fff";

    let menu = Array.from(document.getElementsByClassName("mat-drawer")as HTMLCollectionOf<HTMLElement>)[0];
    menu.style.backgroundColor="#000";

    let icon = Array.from(document.getElementsByClassName("mat-icon")as HTMLCollectionOf<HTMLElement>)[0];
    icon.style.color="#fff";
  }

 ngOnDestroy(){
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
  let nav = Array.from(document.getElementsByTagName("a"));
    for (let i = 0; i < nav.length; i++) {
      nav[i].style.color = "#000";
  }
  let shadow = Array.from(document.getElementsByClassName("active")as HTMLCollectionOf<HTMLElement>)[0];
  shadow.style.boxShadow="none";

  let menu = Array.from(document.getElementsByClassName("mat-drawer")as HTMLCollectionOf<HTMLElement>)[0];
    menu.style.backgroundColor="#fff";

  let icon = Array.from(document.getElementsByClassName("mat-icon")as HTMLCollectionOf<HTMLElement>)[0];
  icon.style.color="#000";
 }
}
