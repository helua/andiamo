import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { ScreenService } from 'src/app/screen.service';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-bts',
  templateUrl: './bts.component.html',
  styleUrls: ['./bts.component.scss']
})
export class BtsComponent implements OnInit, AfterViewInit, OnDestroy{
  // numbers: number[] = Array(121).fill(1).map((x, i) => i + 1);
  photos: number[] = [];
  smallURL: string = 'assets/bts/smallbts';
  bigURL: string = 'assets/bts/big/compiled/bts';
  logo: string = 'assets/alt-green.svg';
  title = 'bts';
  keywords: MetaDefinition = {name: 'keywords', content: 'bts'};
  description: MetaDefinition = {name: 'description', content: 'behind the scenes'};

  constructor(public screen: ScreenService, private titleService: Title, private metaService: Meta) {}


  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.updateTag(this.keywords);
    this.metaService.updateTag(this.description);

    this.screen.getScreenSize();  

    for(let i = 1; i < 121; i++){
      let newPhoto: number = i;
      this.photos.push(newPhoto)
    };
    // this.photos = Array(121).fill(1).map((x, i) => i + 1);
    let photosMix = this.shuffleArray(this.photos);
    this.photos = photosMix;

  }

  ngAfterViewInit() {
    let logo = document.getElementById("logotype-wrapper");
    logo.style.bottom="50%";
    logo.style.left="calc(50% + 4.725rem)"
      if(this.screen.scrWidth < 405){
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
  logo.style.left="50%";
  logo.style.transform="translate(-50%, 0%)";
  let allora = document.getElementById("allora");
  allora.style.display="none";
  let question = document.getElementById("question-mark");
  question.style.display="none";
}

}
