
import { SearchService } from './search.service';
import { ApiService } from './api.service';
import { Component, Input } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  @Input() bestPodcasts: [];
  show: boolean;
  title = 'PodPod';
  listener;

  constructor(private search: SearchService, private api: ApiService) { }
  ngOnInit() {
  }
  logout() {
    this.api.logout()
  }

}
