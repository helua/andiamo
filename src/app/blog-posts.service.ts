import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from './models/Post';

@Injectable({
  providedIn: 'root',
})
export class BlogPostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/.netlify/functions/getPosts', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  getPost(id) {
    return this.http.get('/.netlify/functions/getPosts/'+id);
  }
  // getPosts(): Observable<Post[]> {
  //   return this.http.get<Post[]>('https://10ugj9p1.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "post"]', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Referrer-Policy': 'no-referrer',
  //       'Access-Control-Allow-Origin': 'https://10ugj9p1.api.sanity.io'
  //     },
  //   });
  // }

}
