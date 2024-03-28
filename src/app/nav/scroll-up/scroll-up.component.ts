import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-scroll-up',
  templateUrl: './scroll-up.component.html',
  styleUrls: ['./scroll-up.component.scss']
})
export class ScrollUpComponent implements OnInit {

  @Output() scrollToTop = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  onScrollToTop(): void {
    this.scrollToTop.emit();
  }
}
