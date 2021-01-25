import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders ({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VimeoService {

  constructor(private http:HttpClient) { }

  getVideos(user) {
    
    // return this.http.get('https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/'+user);

    return this.http.get('https://vimeo.com/api/v2/'+user+'/videos.json');
}

getVideo(id) {
  return this.http.get('https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/'+id);
  // return this.http.get('https://vimeo.com/api/v2/video/'+id+'.json');

  }
      
getEmbedLink(url) {
  return this.http.get('https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/76979871');
}

}
