import { Component, Input, DoCheck, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Full_Poem, PoemMap, poem_map } from '../poem/poem_classes';
import { full_poem_map, valid_poem_map } from 'src/assets/poems';

@Component({
  selector: 'poem-list',
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.css']
})
export class PoemListComponent implements OnInit {

  poemTitle: string = 'index';
  @Output() poemTitleChange = new EventEmitter<string>();
  poem: Full_Poem = full_poem_map.poem_map['index'];
  poem_index: PoemMap = full_poem_map;
  valid_poem_index: PoemMap = valid_poem_map;
  constructor(private router: Router) {  }

  ngOnInit() {     
    let preliminary_url = this.router.url.split('/');
    let preliminary_title = preliminary_url[preliminary_url.length - 1];
    if (full_poem_map.hasTitle(preliminary_title)) {
      this.poemTitle = preliminary_title;
    }
    
  }

  updatePoem(poemTitle: string) {
    this.poemTitle = poemTitle;
  }

}
