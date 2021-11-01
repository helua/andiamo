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
  // post: any = undefined;
  title: string;
  postRaw: any = {};
  post: Post = {createdAt: "", id: "",name: "", categories:[""], meta:"", body: "", image: ""};
  postID: string;
  //   createdAt: '2021-04-09T14:20:02Z',
  //   id: 'd',
  //   name: 'ASdasdasd',
  //   categories: ['gdf'],
  //   body: 'fsdfs',
  //   image: 'sdfsdf',
  //   meta: 'sfsdfsdf'
  // }
  description: MetaDefinition = {};

  constructor(
    private http: BlogPostsService ,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(){

    // this.getData();
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.http.getPost(
          params.get('id'))
        )
      ).subscribe( post => {
        this.postRaw = post;
        this.post = this.workResult(this.postRaw.result[0]);
        this.postID = this.post.id;
        console.log(this.post);
        this.title = this.post.name;
        this.titleService.setTitle(this.title);
        this.description = {name: 'description', content: this.post.meta};
        this.metaService.updateTag(this.description);
      })
  }

  // async getData(): Promise<Object>{
  //   const postProto = await firstValueFrom(
  //     this.route.paramMap.pipe(
  //       switchMap((params: ParamMap) =>
  //         this.http.getPost(
  //           params.get('id')

  //           )
  //         )
  //       )
  //     )
  //     console.log(postProto);
  //     this.post = this.workResult(postProto.result[0]);
  //     console.log(this.post);

  //   console.log(this.post);
  //   return postProto;

  // }
  workResult(p): Post{
    const blocksToHtml = require("@sanity/block-content-to-html");
    const postClean = {
      createdAt: p._createdAt,
      name: p.title,
      categories: p.categories,
      body: blocksToHtml({ blocks: p.body }),
      meta: p.metaDescription,
      id: p.slug.current,
      image: null
    }
    const imageUrlBuilder = require("@sanity/image-url");
    const image =
        p.mainImage.asset
          ? p.mainImage.asset._ref
          : null;

      if (image) {
        postClean.image = imageUrlBuilder(sanity).image(image).url();
      }

    return postClean;
  }
  // async getData(){
  //   this.post = {body: "<p>ajajaj</p>", categories: [], createdAt: undefined, image: "", meta: "opis z mapety", name: "tytuł z Mapety", url: "" };
  //   this.post = await firstValueFrom(
  //     this.route.paramMap.pipe(
  //       switchMap((params: ParamMap) =>
  //         this.http.getPost(
  //           params.get('id')
  //           )
  //         )
  //       )
  //     );
  //   console.log(this.post);
  //   this.addMeta(this.post);
  // }

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
