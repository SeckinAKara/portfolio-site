import { Component, Input, OnInit, Output, EventEmitter, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { FileGrabberService } from '../file-grabber.service';
import { Full_Poem, PoemSettings, Word } from './poem_classes';

@Component({
  selector: 'poem-template-nonusable',
  template: "<div>Don't display this component!</div>",
})
export class PoemComponentTemplate {
  @Input() poemTitle: string = 'index';
  @Output() poemTitleChange = new EventEmitter<string>();
  
  @Input() poem: Full_Poem = new Full_Poem();
  @Output() poemChange = new EventEmitter<Full_Poem>();

  @Input() poemSettings = new PoemSettings();
  @Output() poemSettingsChange = new EventEmitter<PoemSettings>();

}

@Component({
  selector: 'poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent extends PoemComponentTemplate implements OnInit, DoCheck  {

  constructor(private http: FileGrabberService) { 
    super();
  }

  ngOnInit(): void {
    this.getPoem();
  }

  ngDoCheck(): void {
    this.getPoem();
  }

  getPoem(): void {
    this.poem = this.http.getPoem(this.poemTitle);
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