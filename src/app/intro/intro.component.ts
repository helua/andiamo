import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {getSkipButton, setSkipButton} from '../localStorageVriables'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  isSkipped = 'nie';
  @Output() skipped = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.isSkipped = getSkipButton();

  }
  skipReel(): void{
    this.isSkipped = 'tak';
    setSkipButton('tak');
    this.skipped.emit(this.isSkipped);

  }

}
