import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PoemComponentTemplate } from '../poem/poem.component';
import { Full_Poem, PoemMap, poem_map } from '../poem/poem_classes';
import { full_poem_map, valid_poem_map } from 'src/assets/poems';

@Component({
  selector: 'poem-list',
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.css']
})
export class PoemListComponent extends PoemComponentTemplate {

  poem_index: PoemMap = full_poem_map;
  valid_poem_index: PoemMap = valid_poem_map;


  updatePoem(poemTitle: string) {
    this.poemTitle = poemTitle;
    this.poemTitleChange.emit(this.poemTitle);
  }

}
