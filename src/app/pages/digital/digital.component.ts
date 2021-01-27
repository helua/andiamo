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
 }

 scrollToElement($element): void {
  console.log($element);
  $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

 ngOnDestroy(){
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
 }

}
