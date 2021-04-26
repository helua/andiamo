import { Location } from '@angular/common';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { VimeoService } from 'src/app/vimeo.service';
import { switchMap } from 'rxjs/operators';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { AllCredits } from 'src/app/models/credits';



@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit, AfterViewChecked {

  video: any = {title: "", description: "", video_id: null};
  title: string;
  keywords: MetaDefinition = {};
  description: MetaDefinition = {};
  credits: any = {id: 1, dop: "...", editor: "...", prodComp: "..."};
  allCredits = AllCredits;

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
        this.credits = this.getCredits(this.video.video_id, this.allCredits);
        console.log(this.credits);
      });
  }

  getCredits(id: number, allCredits){
    var credit = allCredits.find(o => o.id === id);
    if(credit){

    return credit;
    }
    else{
      return this.credits;
    }
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
