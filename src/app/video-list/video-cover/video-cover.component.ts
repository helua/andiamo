import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-cover',
  templateUrl: './video-cover.component.html',
  styleUrls: ['./video-cover.component.scss']
})
export class VideoCoverComponent{

  constructor() { }


  @Input() video;
  logo: string = 'assets/ANDIAMO_sign-mini.svg';

  getName(videoTitle: string){
    return videoTitle.split(' | ')[0].toUpperCase();
  }

  getRest(videoTitle: string){
    let title = this.getName(videoTitle)
    let rest = videoTitle.substr(title.length+2).split(' | ')
      if (rest.length > 1){
        rest.pop();
      }
    return rest.join(' | ').toUpperCase();
  }

  getNameRest(videoTitle: string){
    let name = this.getName(videoTitle);
    let rest = this.getRest(videoTitle);
    if(rest){
      return name.concat(' |' + rest);
    }
    else{
      return name;
    }
  }
}
