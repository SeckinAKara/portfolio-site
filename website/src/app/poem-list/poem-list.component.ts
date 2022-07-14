import { Component, Input, DoCheck, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Full_Poem } from '../poem/poem_classes';

@Component({
  selector: 'poem-list',
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.css']
})
export class PoemListComponent implements OnInit, DoCheck {

  @Input() poemTitle: string = 'index';
  @Output() poemTitleChange = new EventEmitter<string>();
  poem: Full_Poem = new Full_Poem('', []);

  constructor(private router: Router) { }

  ngOnInit() {
    let preliminary_url = this.router.url;
    this.poemTitle = preliminary_url.split('/')[2];
    this.updatePoem(this.poemTitle);
  }

  ngDoCheck() {
    this.updatePoem(this.poemTitle);
  }

  updatePoem(poemTitle: string) {
    this.poemTitle = poemTitle;
    this.poemTitleChange.emit(this.poemTitle);
  }

}
