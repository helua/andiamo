import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './models/Post';
const sanityClient = require("@sanity/client");
const sanity = sanityClient({
  projectId: '10ugj9p1',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
});

@Injectable({
  providedIn: 'root',
})
export class BlogPostsService {

  constructor(private http: HttpClient) {}

  getPosts(){
    return this.http.get(`https://10ugj9p1.api.sanity.io/v2021-03-25/data/query/production?query=*[_type=="post"]`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  workResult(p: any): Post{
    const blocksToHtml = require("@sanity/block-content-to-html");
    const imageUrlBuilder = require("@sanity/image-url");
    const postClean: Post = {
      createdAt: p._createdAt,
      body: blocksToHtml({ blocks: p.body }),
      title: p.title,
      meta: p.metaDescription,
      slug: p.slug.current,
      images: []
    }
    const image =
        p.mainImage.asset
          ? p.mainImage.asset._ref
          : null;
      if (image) {
        postClean.images.push(imageUrlBuilder(sanity).image(image).url());
      }
    return postClean;
  }



  getPost(id){
    console.log(id);
    return this.http.get( `https://10ugj9p1.api.sanity.io/v2021-03-25/data/query/production?query=*[slug.current=="${id}"]`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
    // getPosts(): Observable<Post[]> {
  //   return this.http.get<Post[]>('/.netlify/functions/getPosts', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }
  // getPost(id): Observable<Post>{
  //   console.log(id);
  //   return this.http.get<Post>( `/.netlify/functions/getPost\?id=${id}`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }
}
