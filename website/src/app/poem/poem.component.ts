import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FileGrabberService } from '../file-grabber.service';
import { Full_Poem, Word } from './poem_classes';

@Component({
  selector: 'poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit, OnChanges {

  @Input() poem_title: string = 'index';
  poem: Full_Poem = new Full_Poem('', []);
  hovering: number[] = [];
  clicked: number = 0;

  constructor(private http: FileGrabberService) {   }

  ngOnInit(): void {
    this.getPoem();
  }

  ngOnChanges(): void {
    this.getPoem();
  }

  getPoem(): void {
    this.poem = this.http.getPoem(this.poem_title);
  }

  hoverWord(word_index:number[]): void {
    this.hovering = word_index;
  }

  currentHover(word_index:number[]): boolean {
    if (this.hovering.length == 2) {
      return ((word_index[0] === this.hovering[0]) && (word_index[1] === this.hovering[1]));
    } else {
      this.clicked = 0;
      return false;
    }
  }
}