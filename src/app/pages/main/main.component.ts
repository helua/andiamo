import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { ScreenService } from 'src/app/screen.service';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'Reżyserski duet Andiamo Works. Mateusz Erdmann i Michał Więckowski';
  description: MetaDefinition = {name: 'description', content: 'Tworzymy wyjątkowe reklamy, teledyski i filmy. Zobacz nasze projekty, m.in. dla Adidasa, Wyborowej, czy Pezeta.'};
  arrowIcon = faArrowDown;

  constructor(private titleService: Title, private metaService: Meta, private screen: ScreenService){}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.updateTag(this.description);
    this.screen.fixAllora();
    this.screen.fixMenuColors('#000', '#fafff6');
  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
