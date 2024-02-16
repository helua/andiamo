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

  postsRaw: any = [];
  posts: Post [] = []
  title = 'Aktualności z życia i projektów Andiamo';
  description: MetaDefinition = {name: 'description', content: 'Sprawdź nasze najnowsze projekty i zrealizowane spoty reklamowe. Mamy doswiadczenie w produkcji i kreacji!'};

  constructor(private blogPostsService: BlogPostsService, private screen: ScreenService, private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    console.log('NEWS')
    this.blogPostsService.getPosts().subscribe( posts => {
      console.log(posts);
      this.postsRaw = posts;
      for (let i = 0; i < this.postsRaw.result.length; i++){
        this.posts.push(this.blogPostsService.workResult(this.postsRaw.result[i]));
      }
      console.log(this.posts);
    });

    this.screen.fixMenuColors('#000', '#f0f0f0');
    this.titleService.setTitle(this.title);
    this.metaService.updateTag(this.description);
    this.metaService.addTags([
      {name: 'robots', content: 'noindex, nofollow, noimageindex'}
    ]);
  }

}
