import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-news-cover',
  templateUrl: './news-cover.component.html',
  styleUrls: ['./news-cover.component.scss'],
})
export class NewsCoverComponent implements OnInit {
  @Input() post: Post = {
    createdAt: 'dzisiaj',
    id: 'super-post',
    name: 'Szok i niedowierzanie. Kliknij i też to przeżyj',
    url: 'zwr.waw.pl',
    categories: 'newsy',
    body: 'treść artykułu',
    image: 'zdjecia/img',
    meta: 'jakiś opis meta'
  };

  constructor() {}

  ngOnInit(): void {}
}
