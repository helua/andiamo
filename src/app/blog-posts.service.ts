import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, firstValueFrom, Observable } from 'rxjs';
import { Post } from './models/Post';


@Injectable({
  providedIn: 'root',
})
export class BlogPostsService {
  postRaw: Observable<any>;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/.netlify/functions/getPosts', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  // getPost(id) {
  //   return this.http.get('/.netlify/functions/getPosts/'+id);
  // }

  // 'https://10ugj9p1.api.sanity.io/v2021-03-25/data/query/production?query=*[_type==\"post\"][slug.current==\"'+id+'\"]'

  getPost(id){
    console.log(id);
    return this.http.get( `https://10ugj9p1.api.sanity.io/v2021-03-25/data/query/production?query=*[slug.current=="${id}"]`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // const postReady = postRaw;
  }
  // getPost(id): Observable<Post>{
  //   console.log(id);
  //   return this.http.get<Post>( `/.netlify/functions/getPost\?id=${id}`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }
}
