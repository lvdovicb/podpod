import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
  }
  signIn(form){
    console.log(form);
    this.api.login(form.value).subscribe(value =>
      {console.log(value); 
        localStorage.setItem("listener", JSON.stringify(value)) 
        this.api.getFavs(value["userId"], value["id"]).subscribe(favorite =>
          {
            console.log(favorite);      
          }
          );
      } 
    )
  }
}
