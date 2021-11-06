import { HostListener, Injectable } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  scrWidth: any;
  scrHeight: any;
  isBigScreen: boolean = false;
  isHorizontal: boolean = true;

  constructor() { }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
      this.scrWidth = window.innerWidth;
      this.scrHeight = window.innerHeight;
      console.log('szerokosc ekranu: ' + this.scrWidth + ' wysokość ekranu: ' + this.scrHeight);


      if(this.scrWidth > 1200){
        this.isBigScreen = true;
        console.log('ekran duży: ' + this.isBigScreen);
      }
      else{
        this.isBigScreen = false;
        console.log('ekran duży: ' +  this.isBigScreen);
      }
      if(this.scrWidth > this.scrHeight){
        this.isHorizontal = true;
      }
      else{
        this.isHorizontal = false;
      }
    }
    fixAllora(): void{
      let logo = document.getElementById("logotype-wrapper");
      logo.style.bottom="-1rem";
      logo.style.left="50%";
      logo.style.transform="translate(-50%, 0%)";
      let allora = document.getElementById("allora");
      allora.style.display="none";
      let question = document.getElementById("question-mark");
      question.style.display="none";
    }

    fixMenuColors(colorText, colorBack): void{
      let nav = Array.from(document.getElementsByTagName("a"));
      for (let i = 0; i < nav.length; i++) {
        nav[i].style.color = colorText;
      }
      let menu = Array.from(document.getElementsByClassName("mat-drawer")as HTMLCollectionOf<HTMLElement>)[0];
      menu.style.backgroundColor= colorBack;
    }
}
