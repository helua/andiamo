import { ViewportRuler } from '@angular/cdk/overlay';
import { Component, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-bts',
  templateUrl: './bts.component.html',
  styleUrls: ['./bts.component.scss']
})
export class BtsComponent{
  scrWidth:any;

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.scrWidth = window.innerWidth;
    }

  constructor() {
    this.getScreenSize();

   }


  ngAfterViewInit(){
        this.getScreenSize();

    let logo = document.getElementById("logotype-wrapper");
    logo.style.bottom="50%";
    logo.style.left="calc(50% + 4.725rem)"
      if(this.scrWidth < 405){
        logo.style.left="calc(50% + 3.225rem)";
      }
    logo.style.transform="translate(-50%, 50%)";

    let allora = document.getElementById("allora");
    allora.style.display="block";

    let question = document.getElementById("question-mark");
    question.style.display="block";
 }

 ngOnDestroy(){
  let logo = document.getElementById("logotype-wrapper");
  logo.style.bottom="-1rem";
  logo.style.left="50%"
  logo.style.transform="translate(-50%, 0%)";
  
  let allora = document.getElementById("allora");
  allora.style.display="none";

  let question = document.getElementById("question-mark");
  question.style.display="none";
}

}
