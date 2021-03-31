import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from './models/Post';

@Injectable({
  providedIn: 'root',
})
export class BlogPostsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Post[]> {
    return this.http.get<Post[]>('/.netlify/functions/getPosts', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}