import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Full_Poem } from '../poem/poem_classes';

@Component({
  selector: 'poem-list',
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.css']
})
export class PoemListComponent implements OnInit, OnChanges {

  @Input() poem_title: string = 'index';
  poem: Full_Poem = new Full_Poem('', []);

  constructor(private router: Router) {  }

  ngOnInit() {
    console.log(this.poem_title)
    this.updatePoem(this.poem_title);
  }

  ngOnChanges() {
    console.log(this.poem_title);
    this.updatePoem(this.poem_title);
  }

  updatePoem(poem_title: string) {
    this.poem_title = poem_title;
  }

}
