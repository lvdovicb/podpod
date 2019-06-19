
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const headers: HttpHeaders = new HttpHeaders({
  'X-ListenAPI-Key': '7a875cae64a0427cb768cbd28fa83345',
  "Accept": "application/json"
})

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  results: Object[];
  loading: boolean;
  query: string;
  bestPodcasts: Object[];
  podcasts: Object[];

  constructor(private http: HttpClient) {
  }
  //general search
  getPods(query) {
    return this.http.get(`https://listen-api.listennotes.com/api/v2/search?q=${query}`, { headers });
  };
  // podcasts search
  async getPodcasts(query) {
    let podcasts = await this.http.get(`https://listen-api.listennotes.com/api/v2/search?q=${query}&type=podcast`, { headers })
    return podcasts;
  }
  // get best podcasts
  async getBestPodcasts() {
    let bestPodcasts = await this.http.get(`https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=93&page=2&region=us`, { headers })
    console.log('bestPodcasts', bestPodcasts);

    return bestPodcasts;
  }
}



