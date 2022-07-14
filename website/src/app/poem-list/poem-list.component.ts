import { Component, Input, DoCheck, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Full_Poem, PoemMap } from '../poem/poem_classes';
import { index } from 'src/assets/poems';

@Component({
  selector: 'poem-list',
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.css']
})
export class PoemListComponent implements OnInit, DoCheck {

  @Input() poemTitle: string = 'index';
  @Output() poemTitleChange = new EventEmitter<string>();
  poem: Full_Poem = new Full_Poem('', []);
  poem_index: PoemMap = index;
  constructor(private router: Router) { 
    let preliminary_url = this.router.url;
    this.poemTitle = preliminary_url.split('/')[2];
    this.updatePoem(this.poemTitle);
  }

  ngOnInit() {  }

  ngDoCheck() {
    this.updatePoem(this.poemTitle);
  }

  updatePoem(poemTitle: string) {
    this.poemTitle = poemTitle;
    this.poemTitleChange.emit(this.poemTitle);
  }

}
