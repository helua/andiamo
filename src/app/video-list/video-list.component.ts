import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { VimeoVideo } from '../models/video';
import { VimeoService } from '../vimeo.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  @Input() user: string;

  videos;
  videosUnsorted: any;
  videoCount: number;
  order: number[] = Order;



  constructor(private _vimeoService: VimeoService){}

  ngOnInit(): void{
    this._vimeoService.getVideos(this.user).subscribe(videos => {
      this.videosUnsorted = videos;
      this.videoCount = this.videosUnsorted.length;
      this.order = this.orderUpdate(this.videoCount, this.order);
      this.videos = this.changePosition(this.videosUnsorted, this.order);
      console.log(this.videos);
    })
  }

  orderUpdate(count: number, array: number[]){
    if(count > array.length){
      var diff = count - array.length;
      var list = []

      for(let i = 0; i < array.length; i++){
        list.push(array[i]+1);
      }

      list.unshift(0);

      for(let i = 1; i < diff; i++){
        for(let i = 0; i < array.length; i++){
          list[i]++;
        }
        list.unshift(0);
      }
      console.log("Nowe filmy zostały umieszczone na górze listy "+list);

      return list;
    }
    else{
      return array;
    }
  }
  changePosition(array: [], start: number[]){
    var list = [];
    for(let i = 0; i < array.length; i++){
      list.push(array[start[i]]);
    }
    return list;
  }

}
