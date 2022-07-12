import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Full_Poem } from '../poem/poem_classes';

@Component({
  selector: 'poem-list',
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.css']
})
export class PoemListComponent implements OnInit, OnChanges {

  @Input() poem_title: string = 'index';
  @Output() poem_titleChange = new EventEmitter<string>();
  poem: Full_Poem = new Full_Poem('', []);

  constructor(private router: Router) { }

  ngOnInit() {
    let preliminary_url = this.router.url;
    this.poem_title = preliminary_url.split('/')[2];
    this.updatePoem(this.poem_title);
  }

  ngOnChanges() {
    this.updatePoem(this.poem_title);
  }

  updatePoem(poem_title: string) {
    this.poem_title = poem_title;
    this.poem_titleChange.emit(this.poem_title);
  }

}
