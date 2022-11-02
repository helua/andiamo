import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
// import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogPostsService } from 'src/app/blog-posts.service';
import { switchMap } from 'rxjs/operators';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';
import { Post } from '../../../models/Post';
import { environment } from 'src/environments/environment';
const sanityClient = require("@sanity/client");
const sanity = sanityClient({
  projectId: '10ugj9p1',
  dataset: 'production',
  useCdn: true,
});
@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  title: string;
  postRaw: any = {};
  post: Post = {createdAt: "", id: "",title: "", categories:[""], meta:"", body: "", images: []};
  postID: string;
  description: MetaDefinition = {};

  constructor(
    private http: BlogPostsService ,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    private blogPostService: BlogPostsService
  ) {}

  ngOnInit(){
    this.metaService.addTags([
      {name: 'robots', content: 'noindex, nofollow, noimageindex'}
    ]);
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.http.getPost(
          params.get('id'))
        )
      ).subscribe( post => {
        this.postRaw = post;
        this.post = this.blogPostService.workResult(this.postRaw.result[0]);
        this.postID = this.post.slug;
        this.title = this.post.title;
        this.titleService.setTitle(this.title);
        this.description = {name: 'description', content: this.post.meta};
        this.metaService.updateTag(this.description);
      })
  }

  addMeta(post){
    console.log('addMeta '+post.meta);
    // this.title = post.name;
    // this.description.content = post.meta;
    // this.metaService.updateTag(this.description);
    // this.titleService.setTitle(this.title);
    this.metaService.updateTag({name: 'description', content: post.meta});
    this.titleService.setTitle(post.name);
  }

  // goToPosts() {
  //   this.location.back();
  // }

}
