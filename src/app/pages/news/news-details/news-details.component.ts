import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
// import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogPostsService } from 'src/app/blog-posts.service';
import { switchMap } from 'rxjs/operators';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { ThisReceiver } from '@angular/compiler';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  // post: any = undefined;
  post: any = {};
  description: MetaDefinition = {name: 'description', content: 'z pliku fiku miku' };

  constructor(
    private http: BlogPostsService ,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}
  ngOnInit(){
    this.getData();
  }
  // ngOnInit(){
  //   const one = new Promise<string>((resolve, reject) => {
  //     this.getData()
  //     resolve('Hello')
  //   });
  //   one.then(value => {
  //     console.log('resolved', value);
  //   });
  //   one.catch(error => {
  //     console.log('rejected', error);
  //   });

  // }
///////////////////////////
  // ngOnInit(): void{
  //   const promise1 = new Promise((resolve, reject) => {
  //     resolve(
  //       this.getData()
  //     );
  //   });
  //   promise1.then((v) => {
  //     console.log(v);
  //   })
  // }
  async getData(){
    this.post = {body: "<p>ajajaj</p>", categories: [], createdAt: undefined, image: "", meta: "opis z mapety", name: "tytuł z Mapety", url: "" };
    this.post = await firstValueFrom(this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getPost(params.get('id')))));
    console.log(this.post);
    this.addMeta(this.post);
  }
  ///////////////////////////
  // ngOnInit(): void {
  //     this.route.paramMap.pipe(
  //     switchMap((params: ParamMap) => this.http.getPost(params.get('id')))).
  //     subscribe(post => {
  //       this.post = post;
  //       console.log(post);
  //       console.log('onitnit'+this.post.meta);

  //     });
  // }

  addMeta(post){
    console.log('addMeta'+post.meta);
    this.metaService.updateTag({name: 'description', content: post.meta});
    this.titleService.setTitle(post.name);
  }

  // goToPosts() {
  //   this.location.back();
  // }

}
