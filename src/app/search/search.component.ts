
import { Component, OnInit, Injectable, Input } from '@angular/core';
import { SearchService } from '../search.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})

// @Input :

export class SearchComponent implements OnInit {

  constructor(private search: SearchService) { }

  ngOnInit() {
  }

}
