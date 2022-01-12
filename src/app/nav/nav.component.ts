import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  main: string = "/";
  about: string = "/o-nas";
  bts: string = "/z-planu";
  contact: string = "/kontakt";
  soulreel: string = "/soulreel";

  constructor() { }

  ngOnInit(): void {
  }
  onUpdatedLang(lang: any){

    console.log('w nav component');
    console.log(lang.lang);
    if(lang.lang === 'en'){
      this.main = "/en";
      this.about = '/about';
      this.bts = '/bts';
      this.contact = '/contact';
      this.soulreel = '/soulreel-en';
    }
    if(lang.lang === 'pl'){
      this.main = "/";
      this.about = '/o-nas';
      this.bts = '/z-planu';
      this.contact = '/kontakt';
      this.soulreel = '/soulreel'
    }
    console.log(this.about);
  }
}
