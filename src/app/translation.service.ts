import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private router: Router, private translate: TranslateService) { }

  checkLang(){
    if(this.router.url === "/about"){
      this.translate.use('en');
    }
    if(this.router.url === "/o-nas"){
      this.translate.use('pl');
    }
    if(this.router.url === "/z-planu"){
      this.translate.use('pl');
    }
    if(this.router.url === "/bts"){
      this.translate.use('en');
    }
    if(this.router.url === "/contact"){
      this.translate.use('en');
    }
    if(this.router.url === "/kontakt"){
      this.translate.use('pl');
    }
    if(this.router.url === "/"){
      this.translate.use('pl');
    }
    if(this.router.url === "/en"){
      this.translate.use('en');
    }
    if(this.router.url === "/soulreel"){
      this.translate.use('pl');
    }
    if(this.router.url === "/soulreel-en"){
      this.translate.use('en');
    }
    this.underlineLangOption();

  }
  navigateOnLangSwitch(){

    if(this.router.url === '/o-nas'){
      this.router.navigate(['/about'])
    };
    if(this.router.url === '/about'){
      this.router.navigate(['/o-nas'])
    };
    if(this.router.url === '/'){
      this.router.navigate(['/en'])
    };
    if(this.router.url === '/en'){
      this.router.navigate(['/'])
    };
    if(this.router.url === '/z-planu'){
      this.router.navigate(['/bts'])
    };
    if(this.router.url === '/bts'){
      this.router.navigate(['/z-planu'])
    };
    if(this.router.url === '/kontakt'){
      this.router.navigate(['/contact'])
    };
    if(this.router.url === '/contact'){
      this.router.navigate(['/kontakt'])
    };
    if(this.router.url === '/soulreel'){
      this.router.navigate(['/soulreel-en'])
    };
    if(this.router.url === '/soulreel-en'){
      this.router.navigate(['/soulreel'])
    };

    this.underlineLangOption();


  }
  underlineLangOption(): void{
    const langOptionPL = document.getElementById('pl');
    console.log(langOptionPL)
    const langOptionEN = document.getElementById('en');
    console.log(langOptionEN)

    if(this.translate.currentLang === 'pl'){
      console.log('LANG OPTION - PL')
      if(langOptionPL && langOptionEN){
        langOptionPL.style.textDecoration = "underline";
        langOptionPL.style.fontFamily = "tex_gyre_heros_cnbold";
        langOptionEN.style.textDecoration = "none";
        langOptionEN.style.fontFamily = "tex_gyre_heros";

      }
    }
    if(this.translate.currentLang === 'en'){
      console.log('LANG OPTION - ENG')
      if(langOptionEN && langOptionPL){
        langOptionEN.style.textDecoration = "underline";
        langOptionEN.style.fontFamily = "tex_gyre_heros_cnbold";
        langOptionPL.style.textDecoration = "none";
        langOptionPL.style.fontFamily = "tex_gyre_heros";

      }
    }
  }
}
