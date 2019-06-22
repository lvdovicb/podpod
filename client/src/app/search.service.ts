
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
  term: string;
  results: Object[];
  loading: boolean;
  query: string;
  response: Object;
  bestPodcasts: Object;
  podcasts: Object;
  episodes: Object;

  constructor(private http: HttpClient) {
  }
  //general search
  getPods(term) {
    let response = this.http.get(`https://listen-api.listennotes.com/api/v2/search?q=${term}`, { headers })
    return response
  };

  // podcasts search
  async getPodcasts(term) {
    let podcasts = await this.http.get(`https://listen-api.listennotes.com/api/v2/search?q=${term}&type=podcast`, { headers }).subscribe()
    return podcasts;
  }

  // episodes search
  async getEpisodes(term) {
    let episodes = await this.http.get(`https://listen-api.listennotes.com/api/v2/search?q=${term}&type=episode`, { headers })
    return episodes;
  }

  // get best podcasts
  async getBestPodcasts() {
    let bestPodcasts = await this.http.get(`https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=93&page=2&region=us`, { headers })
    return bestPodcasts;
  }
  next_offset(term) {
    let response = this.http.get(`https://listen-api.listennotes.com/api/v2/search?q=${term}&next_offset=10`, { headers });
    return response
  }
}



