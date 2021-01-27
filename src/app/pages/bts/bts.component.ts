import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-bts',
  templateUrl: './bts.component.html',
  styleUrls: ['./bts.component.scss']
})
export class BtsComponent{

  constructor() { }

  ngAfterViewInit(){
    let logo = document.getElementById("logotype-wrapper");
    console.log(logo);
    logo.style.bottom="50%";
    logo.style.left="calc(50% + 4.725rem)"
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
