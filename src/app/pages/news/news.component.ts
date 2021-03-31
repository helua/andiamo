import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPostsService } from 'src/app/blog-posts.service';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  posts!: Observable<Post[]>;

  constructor(private blogPostsService: BlogPostsService) {}

  ngOnInit(): void {
    this.posts = this.blogPostsService.getPosts();
  }

}
