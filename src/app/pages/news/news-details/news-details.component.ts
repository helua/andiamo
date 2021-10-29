import { AfterViewChecked, Component, OnInit } from '@angular/core';
// import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogPostsService } from 'src/app/blog-posts.service';
import { switchMap } from 'rxjs/operators';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit, AfterViewChecked {
  post: any = {};
  title: string;
  description: MetaDefinition = {name: 'description', content: 'z pliku fiku miku' };

  constructor(
    private http: BlogPostsService ,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}


  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getPost(params.get('id')))).
      subscribe(post => {
        this.post = post;

      })


  }

  ngAfterViewChecked(){
    this.title = this.post.title;
    this.titleService.setTitle(this.title);
    this.description = {name: 'description', content: this.post.meta };
    this.metaService.updateTag(this.description);
  }


  // goToPosts() {
  //   this.location.back();
  // }

}
