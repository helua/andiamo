import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { VimeoService } from 'src/app/vimeo.service';
import { switchMap } from 'rxjs/operators';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';



@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  video: any;
  title: string;
  keywords: MetaDefinition = {};
  description: MetaDefinition = {};

  constructor(
    private http: VimeoService ,
    private route: ActivatedRoute,
    private location: Location,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getVideo(params.get('id')))).
      subscribe(video => {
        this.video = video;
        console.log(video);
      })
  }
  ngAfterViewChecked(){
    this.title = this.video.title;
    this.titleService.setTitle(this.title);
    this.keywords = {name: 'keywords', content: this.video.title.split(' | ').join(', ') + ', ' + this.video.author_name};
    this.description = {name: 'description', content: this.video.description.substring(0, 250) + '...' };
    this.metaService.updateTag(this.keywords);
    this.metaService.updateTag(this.description);
  }

  goToVideos() {
    this.location.back();
  }
}
