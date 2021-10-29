import { Component, OnInit } from '@angular/core';
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
export class NewsDetailsComponent implements OnInit {
  // post: any = undefined;
  post: any = {body: "", categories: [], createdAt: "", image: "", meta: undefined, name: undefined, url: "" };
  description: MetaDefinition = {name: 'description', content: 'z pliku fiku miku' };

  constructor(
    private http: BlogPostsService ,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}


  ngOnInit(): void {
    console.log(this.description);

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getPost(params.get('id')))).
      subscribe(post => {
        this.post = post;
        console.log(post);
        this.metaService.updateTag({name: 'description', content: this.post.meta});
        this.titleService.setTitle(this.post.name);
      })


  }

  // ngAfterViewChecked(){
  //   this.title = this.post.title;
  //   this.description = {name: 'description', content: this.post.meta };
  // }


  // goToPosts() {
  //   this.location.back();
  // }

}
