import { Location } from '@angular/common';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { VimeoService } from 'src/app/vimeo.service';
import { switchMap } from 'rxjs/operators';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { AllCredits } from 'src/app/models/credits';
import { VimeoUrlPipe } from 'src/app/vimeo-url.pipe';



@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit, AfterViewChecked {

  video: any = {name: "", embed: {html: ""}, uri:"", description:""};
  title: string;
  videoID: number;
  description: MetaDefinition = {};
  credits = {id: null, title: "...", dop: "...", editor: "...", prodComp: "...", agency: "..."};
  player: string = '';
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
        this.videoID = this.video.uri.split('/')[2];
        console.log(this.videoID, video);
        this.credits = this.getCredits(this.videoID, this.allCredits);
        console.log(this.video.embed.html);
        this.player = this.video.embed.html;
      });
  }



  ngAfterViewChecked(){
    this.title = this.video.name;
    this.titleService.setTitle(this.title);
    this.description = {name: 'description', content: this.video.description.substring(0, 155) + '...' };
    this.metaService.updateTag(this.description);
  }

  getCredits(id: number, allCredits){

    var credit = allCredits.find(o => o.id == id);
    console.log(id, credit);

    if(credit){

    return credit;

    }
    else{
      return this.credits;
    }
  }
  ngOnDestroy(){
    this.credits = {id: null, title: "...", dop: "...", editor: "...", prodComp: "...", agency: "..."};
    this.videoID = null;
    this.video = null;
    this.title = "";

  }

  goToVideos() {
    this.location.back();
  }
}
