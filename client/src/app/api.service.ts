import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInComponent } from '../app/sign-in/sign-in.component'


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token: string;
  responseLoginData: string;
  favorites: any;
  userId: number;
  /*
    httpBase is for external server
  */
  //httpBase = `http://localhost:3000/api/profiles`;
  /*
    httpBase this one is for local test :
  */
  httpBase = `http://localhost:3308/api/listeners`;


  private getToken() {
    this.token = JSON.parse(localStorage.getItem('token'));
  }
  getUserId() {
    this.userId = JSON.parse(localStorage.getItem('userId'))
  }
  constructor(private http: HttpClient) { }

  newListener(listener) {
    return this.http.post(`${this.httpBase}`, listener)

  }
  login(listener) {
    return this.http.post(`${this.httpBase}/login`, listener)
  }

  logout() {
    // mettre token dans un header
    // return this.http.post(`${this.httpBase}/logout?access_token=${this.token}`, this.responseLoginData).pipe(
    //   tap(value => {
    this.getToken();
    localStorage.clear();
    console.log("localStorage.cleared")
    // })
  }
  getFavorites(userId, token) {
    this.favorites = this.http.get(`${this.httpBase}/${userId}/favorites/?access_token=${token}`)
    return this.favorites
  }
  getFavsFromApi(episodeId) {
    return this.http.get(`https://listen-api.listennotes.com/api/v2/episodes/${episodeId}`)
  }

  makeFavs(id, token, favorite) {
    return this.http.post(`${this.httpBase}/${id}/favorites/?access_token=${token}`, favorite)
  }
}
