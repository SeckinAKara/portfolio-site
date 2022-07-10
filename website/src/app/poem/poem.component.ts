import { Component, Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FileGrabberService } from '../file-grabber.service';
import { Full_Poem } from './poem_classes';

@Component({
  selector: 'poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {

  poem: Full_Poem;
  poem_title: string;

  constructor(private route: ActivatedRoute, private http: FileGrabberService) {
    this.poem_title = '';
    this.poem = new Full_Poem('', []);
   }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.poem_title = params['name'];
    });
    if (this.poem_title !== undefined) {
      this.poem = await this.http.getPoem(this.poem_title);
    }
  }

  async updatePoem(poem_title: string) {
    this.poem_title = poem_title;
    this.poem = await this.http.getPoem(this.poem_title);
  }
}
