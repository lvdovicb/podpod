import { Component, OnInit } from '@angular/core';
import { FormsModule, Form } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
  show: boolean = true;

  constructor(private api: ApiService) { }

  ngOnInit() {


  }
  signUp(form) {
    this.api.newListener(form.value).subscribe(bibi => {
      console.log(bibi);
    }
    )
  }
}
