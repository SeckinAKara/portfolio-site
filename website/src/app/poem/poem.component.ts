import { Component, Input, OnInit, Output, EventEmitter, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { FileGrabberService } from '../file-grabber.service';
import { Full_Poem, PoemSettings, Word } from './poem_classes';

@Component({
  selector: 'poem-component-template',
  templateUrl: './poem-component-template.component.html',
  styleUrls: ['./poem-component-template.component.css']
})
export class PoemComponentTemplate implements OnChanges {
  @Input() poemTitle: string = 'index';
  @Output() poemTitleChange = new EventEmitter<string>();
  poem: Full_Poem = new Full_Poem('index');

  @Input() poemSettings = new PoemSettings();
  @Output() poemSettingsChange = new EventEmitter<PoemSettings>();

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}

@Component({
  selector: 'poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent extends PoemComponentTemplate implements OnInit, DoCheck  {

  constructor(private http: FileGrabberService) { 
    super();
    this.getPoem();
  }

  ngOnInit(): void {
    this.getPoem();
  }

  ngDoCheck(): void {
    this.getPoem();
  }

  getPoem(): void {
    if ((this.poem !== undefined) && (this.poem.title !== this.poemTitle) || (this.poem.title == 'index')) {
      this.poem = this.http.getPoem(this.poemTitle);
    }
  }

  hoverWord(word_index:number[]): void {
    this.poemSettings.hovering = word_index;
  }

  currentHover(word_index:number[]): boolean {
    if (this.poemSettings.hovering.length == 2) {
      return ((word_index[0] === this.poemSettings.hovering[0]) && (word_index[1] === this.poemSettings.hovering[1]));
    } else {
      this.poemSettings.clicked = 0;
      return false;
    }
  }
}