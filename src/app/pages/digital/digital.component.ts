import { Component, ElementRef, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.scss'],

})
export class DigitalComponent implements OnDestroy {

  constructor(private elementRef: ElementRef){}

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#8cfa60';
    let menu = Array.from(document.getElementsByClassName("mat-drawer")as HTMLCollectionOf<HTMLElement>)[0];
    menu.style.backgroundColor="#8cfa60";
 }

 scrollToElement($element): void {
  $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

 ngOnDestroy(){
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fafff6';
  let menu = Array.from(document.getElementsByClassName("mat-drawer")as HTMLCollectionOf<HTMLElement>)[0];
  menu.style.backgroundColor="#fafff6";
 }

}
