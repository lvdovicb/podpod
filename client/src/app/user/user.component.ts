import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})

export class UserComponent implements OnInit {
  userId: string;
  token: string;

  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userId')
    this.token = localStorage.getItem('listener.id')
    console.log("TCL: UserComponent -> ngOnInit -> listener", this.token)
    console.log("TCL: UserComponent -> ngOnInit -> userId", this.userId)
    this.apiservice.getFavorites(this.userId, this.token).subscribe(favorites => {
      console.log("TCL: UserComponent -> ngOnInit -> favorites", favorites)

    })
  }

}
