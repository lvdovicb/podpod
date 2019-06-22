import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

  constructor(private api: ApiService) { }

  favorites: Object[];

  ngOnInit() {
  }

  signIn(form) {
    this.api.login(form.value).subscribe(value => {
      localStorage.setItem("listener", JSON.stringify(value))
      localStorage.setItem("userId", JSON.stringify(value["userId"]))
      console.log("TCL: SignInComponent -> signIn -> value['userId']", value["userId"])
      this.api.getFavorites(value["userId"], value["id"]).subscribe(favorites => {
        this.favorites = favorites
        console.log("TCL: SignInComponent -> signIn -> this.favorites", this.favorites)
      });
    })
  }
}
