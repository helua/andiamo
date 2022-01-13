import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { ScreenService } from 'src/app/screen.service';
import { TranslationService } from 'src/app/translation.service';
import { VimeoService } from 'src/app/vimeo.service';

@Component({
  selector: 'app-reel',
  templateUrl: './reel.component.html',
  styleUrls: ['./reel.component.scss']
})
export class ReelComponent implements OnInit, OnDestroy {
  videoID: string = '643212746';
  video: any;
  title = 'Reel 2021 reżyserów Andiamo Works';
  description: MetaDefinition = {name: 'description', content: 'Najnowsza prezentacja prac Andiamo Works.'};

  constructor(private titleService: Title, private metaService: Meta, private screen: ScreenService, private vimeo: VimeoService, private elementRef: ElementRef, private translation: TranslationService) {}

  ngOnInit() {
    this.translation.checkLang();
    this.titleService.setTitle(this.title);
    this.metaService.updateTag(this.description);
    this.screen.fixMenuColors('#fafff6', '#000');
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#000';
    this.video = this.vimeo.getVideo(this.videoID).subscribe(video => {
      this.video = video;
    });
    console.log(this.video);
  }
  ngOnDestroy(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f0f0f0';

    }
}
