import { Component, Input, OnInit } from '@angular/core';
import { VimeoService } from '../vimeo.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  @Input() user: string;

  videos;

  constructor(private _vimeoService: VimeoService){}

  ngOnInit(): void{
    this._vimeoService.getVideos(this.user).subscribe(videos => {
      this.videos = videos;
      console.log(this.videos);
    })
  }
  
}
