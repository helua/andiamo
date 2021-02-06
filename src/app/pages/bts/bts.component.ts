import { Component, HostListener, OnDestroy, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-bts',
  templateUrl: './bts.component.html',
  styleUrls: ['./bts.component.scss']
})
export class BtsComponent implements OnInit, AfterViewInit, OnDestroy{
  scrWidth: any;
  photos: number[] = [];
  isBigScreen: boolean = false;

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


  constructor() {}

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  ngOnInit() {
    this.getScreenSize();    

    this.photos = Array(121).fill(1).map((x, i) => i + 1);
    let photosMix = this.shuffleArray(this.photos);
    this.photos = photosMix;

  }

  ngAfterViewInit(){

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

      // let logo = document.getElementsByTagName("h1")[0];
      // logo.style.display="block";
      // logo.style.visibility="visible";
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
