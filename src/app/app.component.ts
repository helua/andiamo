import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faVimeoV } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'andiamo';
  vimeoIcon = faVimeoV;
  instagramIcon = faInstagram;
  facebookIcon = faFacebookF;
  menuIcon = faBars;

  constructor(private elementRef: ElementRef, private metaService: Meta){}
  ngOnInit() {
    this.metaService.addTags([
      {name: 'robots', content: 'noindex, nofollow, noimageindex'}
    ]);
  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fafff6';
  }
}


  

