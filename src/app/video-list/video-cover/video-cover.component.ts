import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-cover',
  templateUrl: './video-cover.component.html',
  styleUrls: ['./video-cover.component.scss']
})
export class VideoCoverComponent{

  constructor() { }

  
  @Input() video: any;

  name: string = '';
  rest: string = '';

    // let title = this.video.title;
    // let nameGet = new RegExp(/[^\|]*/);
    // let name = nameGet.exec(title);
    // console.log('wynik: ' + name);

  getName(videoTitle: string){
    return videoTitle.split('|')[0].toUpperCase();
  }

  getRest(videoTitle: string){
    let title = this.getName(videoTitle)
    return videoTitle.substr(title.length+2).toUpperCase();
  }

}
