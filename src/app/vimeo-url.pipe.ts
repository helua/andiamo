import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'vimeoUrl'
})
export class VimeoUrlPipe implements PipeTransform {

  constructor(protected _sanitizer: DomSanitizer) {}

  transform(value: any, args?: any): any {
    let url = ('https://player.vimeo.com/video/' + value + '?app_id=122963&autoplay=1&autopause=0');
    return this._sanitizer.bypassSecurityTrustResourceUrl(url) ;
  }

}
