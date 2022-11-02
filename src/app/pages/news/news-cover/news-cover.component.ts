import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-news-cover',
  templateUrl: './news-cover.component.html',
  styleUrls: ['./news-cover.component.scss'],
})
export class NewsCoverComponent implements OnInit {
  @Input() post: Post;

  constructor() {}

  ngOnInit(): void {}
}
