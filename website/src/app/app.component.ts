import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'website';
  
  option_title: string = 'index';
  
  constructor(public router: AppRoutingModule, private defaultRouter: Router) { }

  ngOnInit(): void {
    let preliminary_url = this.defaultRouter.url;
    let preliminary_title = preliminary_url.split('/')[2];
    if (preliminary_title !== undefined) {
      this.option_title = preliminary_title;
    } else {
      this.option_title = 'index';
    }
  }

}
