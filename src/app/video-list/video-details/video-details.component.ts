import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { VimeoService } from 'src/app/vimeo.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  video: any;

  constructor(
    private http: VimeoService ,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getVideo(params.get('id')))).
      subscribe(video => {
        this.video = video;
        console.log(video);
      })
  }

  goToVideos() {
    this.location.back();
  }
}
