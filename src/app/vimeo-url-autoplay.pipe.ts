import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'vimeoUrlAutoplay'
})
export class VimeoUrlAutoplayPipe implements PipeTransform {

  constructor(protected _sanitizer: DomSanitizer) {}

  transform(value: any, args?: any): any {
    let url = ('https://player.vimeo.com/video/'+value+'?badge=0&amp;player_id=0&amp;app_id=213646');
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

//&amp;autopause=0
}