import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
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
  title = 'News';
  description: MetaDefinition = {name: 'description', content: 'Newsy o andiamo'};

  constructor(private blogPostsService: BlogPostsService, private screen: ScreenService, private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.posts = this.blogPostsService.getPosts();
    this.screen.fixAllora();
    this.screen.fixMenuColors('#000', '#fafff6');
    this.titleService.setTitle(this.title);
    this.metaService.updateTag(this.description);
  }

}
