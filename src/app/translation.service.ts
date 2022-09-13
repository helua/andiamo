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
      this.underlineLangOption('en');
    }
    if(this.router.url === "/o-nas"){
      this.translate.use('pl');
      this.underlineLangOption('pl');
    }
    if(this.router.url === "/z-planu"){
      this.translate.use('pl');
      this.underlineLangOption('pl');
    }
    if(this.router.url === "/bts"){
      this.translate.use('en');
      this.underlineLangOption('en');
    }
    if(this.router.url === "/contact"){
      this.translate.use('en');
      this.underlineLangOption('en');
    }
    if(this.router.url === "/kontakt"){
      this.translate.use('pl');
      this.underlineLangOption('pl');
    }
    if(this.router.url === "/"){
      this.translate.use('pl');
      this.underlineLangOption('pl');
    }
    if(this.router.url === "/en"){
      this.translate.use('en');
      this.underlineLangOption('en');
    }
    if(this.router.url === "/soulreel"){
      this.translate.use('pl');
      this.underlineLangOption('pl');
    }
    if(this.router.url === "/soulreel-en"){
      this.translate.use('en');
      this.underlineLangOption('en');
    }
    if(this.router.url === "/strona-nie-istnieje"){
      this.translate.use('pl');
      this.underlineLangOption('pl');
    }
    if(this.router.url === "/site-not-found"){
      this.translate.use('en');
      this.underlineLangOption('en');
    }

  }
  navigateOnLangSwitch(){
    if(this.router.url === '/o-nas'){
      this.router.navigate(['/about']);
    };
    if(this.router.url === '/about'){
      this.router.navigate(['/o-nas']);
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
    if(this.router.url === '/strona-nie-istnieje'){
      this.router.navigate(['/site-not-found'])
    };
    if(this.router.url === '/site-not-found'){
      this.router.navigate(['/strona-nie-istnieje'])
    };


    if(this.router.url === '/' || 'o-nas' || 'z-planu' || 'kontakt' || 'soulreel' || 'strona-nie-istnieje'){
      this.underlineLangOption('en');
    }
    if(this.router.url === '/en' || 'about' || 'bts' || 'contact' || 'soulreel-en' || 'site-not-found'){
      this.underlineLangOption('pl');
    }

  }
  underlineLangOption(code: string){
    const langOptionPL = document.getElementById('pl');
    const langOptionEN = document.getElementById('en');

    if(code === 'pl'){
      if(langOptionPL && langOptionEN){
        langOptionPL.style.textDecoration = "underline";
        langOptionPL.style.fontFamily = "tex_gyre_heros_cnbold";
        langOptionEN.style.textDecoration = "none";
        langOptionEN.style.fontFamily = "tex_gyre_heros_cnregular";
        langOptionPL.style.pointerEvents = "none";
        langOptionEN.style.pointerEvents = "auto";
      }
    }
    if(code === 'en'){
      if(langOptionEN && langOptionPL){
        langOptionEN.style.textDecoration = "underline";
        langOptionEN.style.fontFamily = "tex_gyre_heros_cnbold";
        langOptionPL.style.textDecoration = "none";
        langOptionPL.style.fontFamily = "tex_gyre_heros_cnregular";
        langOptionEN.style.pointerEvents = "none";
        langOptionPL.style.pointerEvents = "auto";
      }
    }
  }
}
