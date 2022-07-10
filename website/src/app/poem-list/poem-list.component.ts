import { Component, Input } from '@angular/core';
import { Full_Poem } from '../poem/poem_classes';

@Component({
  selector: 'poem-list',
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.css']
})
export class PoemListComponent {

  poem_title: string = '';
  poem: Full_Poem = new Full_Poem('', []);

  constructor() {  }

  updatePoem(poem_title: string) {
    this.poem_title = poem_title;
  }

}
