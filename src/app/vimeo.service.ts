import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders ({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VimeoService {

  constructor(private http:HttpClient) { }

  getVideos(user) {
    // return this.http.get('https://vimeo.com/api/v2/'+user+'/videos.json');
    return this.http.get('https://api.vimeo.com/users/'+user+'/albums/8969296/videos?fields=uri,name,pictures.sizes&sizes=640x360',
     {
      headers: {
        'Accept': 'application/vnd.vimeo.user+json;version=3.0,application/vnd.vimeo.video+json;version=3.4',
        'User-Agent': 'andiamo-works-website',
        'Authorization': 'bearer 74ff957ff59b7305cbd387773f6d1a3f',
      },
    });

  }

  getVideo(id) {
  // return this.http.get('https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/'+id);
  return this.http.get('https://api.vimeo.com/videos/'+id+'?fields=name,embed.html,uri,description',
  {
    headers: {
      'Accept': 'application/vnd.vimeo.user+json;version=3.0,application/vnd.vimeo.video+json;version=3.4',
      'User-Agent': 'andiamo-works-website',
      'Authorization': 'bearer 74ff957ff59b7305cbd387773f6d1a3f',
    },
  });

  }

}
