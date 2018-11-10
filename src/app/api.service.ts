import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { listener } from '@angular/core/src/render3';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token: string;
  responsLoginData: string;
  /*
    httpBase is for external server
  */
  //httpBase = `http://localhost:3000/api/profiles`;
  /*
    httpBase this one is for local test :
  */
  httpBase = `http://localhost:3000/api/listeners`;


  private getToken() {
    this.token = JSON.parse(localStorage.getItem('token'));
  }

  constructor(private http: HttpClient) { }

  newListener(listener) {
    return  this.http.post(`${this.httpBase}`, listener)
      
  }
  login(listener) {
    return this.http.post(`${this.httpBase}/login`, listener);
  }

  logout() {
    this.getToken();
    return this.http.post(`${this.httpBase}/logout?access_token=${this.token}`, this.responsLoginData).pipe(
      tap(value => {
        localStorage.removeItem('token');
        this.token = null;
      })
    )
  }
  getFavs(id, token){
    return this.http.get(`${this.httpBase}/${id}/favorites/?access_token=${token}`)
  }

  makeFavs(id, token, favorite){
    return this.http.post(`${this.httpBase}/${id}/favorites/?access_token=${token}`, favorite)
  }
}
