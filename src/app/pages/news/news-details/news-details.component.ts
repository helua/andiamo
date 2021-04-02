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
  post: any = {
    body: "<div><h1>New andiamo website is already out there. Watch all the videos of directors duo.</h1><p></p><p>Great news for all the andiamo fans all overthe world. Directors duo new website is finally published.</p></div>",
    categories: [],
    id: "andiamo-new-website",
    image: "https://cdn.sanity.io/images/10ugj9p1/production/098188ddc114bc30957ae938fd2d82db67046140-600x398.webp",
    name: "Andiamo new website says \"Hello world!\"",
    url: "http://localhost:8888/.netlify/functions/getPosts"
  };
  title: string;
  keywords: MetaDefinition = {};
  description: MetaDefinition = {};

  constructor(
    private http: BlogPostsService ,
    private route: ActivatedRoute,
    // private location: Location,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getPost(params.get('id')))).
      subscribe(post => {
        this.post = post;
        console.log(post);
      })
  }
  ngAfterViewChecked(){
    this.title = this.post[0].name;
    this.titleService.setTitle(this.title);
    this.keywords = {name: 'keywords', content: 'jakies tam keywords'};
    this.description = {name: 'description', content: 'jakis tam opis' };
    this.metaService.updateTag(this.keywords);
    this.metaService.updateTag(this.description);
  }

  
  // goToPosts() {
  //   this.location.back();
  // }

}
