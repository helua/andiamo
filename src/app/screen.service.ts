import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  scrWidth: any;
  isBigScreen: boolean = false;

  constructor() { }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
      this.scrWidth = window.innerWidth;
        console.log('szerokosc ekranu: ' + this.scrWidth);

      if(this.scrWidth > 1200){
        this.isBigScreen = true;
        console.log('ekran duży: ' + this.isBigScreen);
      }
      else{
        this.isBigScreen = false;
        console.log('ekran duży: ' +  this.isBigScreen);
      }
    }
}
