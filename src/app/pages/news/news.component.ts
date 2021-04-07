import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPostsService } from 'src/app/blog-posts.service';
import { Post } from 'src/app/models/Post';
import { ScreenService } from 'src/app/screen.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  posts!: Observable<Post[]>;

  constructor(private blogPostsService: BlogPostsService, private screen: ScreenService) {}

  ngOnInit(): void {
    this.posts = this.blogPostsService.getPosts();
    this.screen.fixAllora();
    this.screen.fixMenuColors('#000', '#fafff6');


  }

}
