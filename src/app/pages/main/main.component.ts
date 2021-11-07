import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { ScreenService } from 'src/app/screen.service';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {getSkipButton, setSkipButton} from '../../localStorageVriables'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'Reżyserski duet Andiamo Works. Mateusz Erdmann i Michał Więckowski';
  description: MetaDefinition = {name: 'description', content: 'Tworzymy wyjątkowe reklamy, teledyski i filmy. Zobacz nasze projekty, m.in. dla Adidasa, Wyborowej, czy Pezeta.'};
  arrowIcon = faArrowDown;
  isSkipped = 'nie';
  constructor(private titleService: Title, private metaService: Meta, private screen: ScreenService, private elementRef: ElementRef){}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.updateTag(this.description);
    this.screen.fixMenuColors('#000', '#fafff6');
    this.isSkipped = getSkipButton();
    this.screen.getScreenSize();
    if(this.screen.isHorizontal == true){
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'url("../../assets/ANDIAMO_bg-gray.jpg")';
    }
    else{
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'url("../../assets/ANDIAMO_bg-gray-pion.jpg")';

    }

  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  skipReel(): void{
    this.isSkipped = 'tak';
    setSkipButton('tak');
    // console.log(this.isSkipped);
    // let reel = document.getElementById("showreel");
    // reel.nativeElement.class.add('hide');
  }
  ngOnDestroy(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'none';

   }
}

