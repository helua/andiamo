import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class  NavComponent implements OnInit {
  main: string = "/";
  about: string = "/o-nas";
  bts: string = "/z-planu";
  contact: string = "/kontakt";
  soulreel: string = "/soulreel";

  constructor() { }

  ngOnInit(): void {
  }

}
