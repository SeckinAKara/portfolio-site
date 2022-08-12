import { Component, Input, OnInit, Output, EventEmitter, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { FileGrabberService } from '../file-grabber.service';
import { Full_Poem, PoemSettings, poem_map } from './poem_classes';
import { Router } from '@angular/router';
import { full_poem_map, valid_poem_map } from 'src/assets/poems';


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

  poem_index: poem_map = full_poem_map;
  valid_poem_index: poem_map = valid_poem_map;
  sound_colors = ['none', 'crimson', 'hotpink', 'orange', 'darkkhaki', 'fuchsia', 'purple', 'limegreen', 'darkolivegreen', 'rosybrown', 'saddlebrown', 'silver', 'slategray']

  constructor(private http: FileGrabberService, private router: Router) { 
    super();
  }

  ngOnInit() {     
    let preliminary_url = this.router.url.split('/');
    let preliminary_title = preliminary_url[preliminary_url.length - 1];
    if (full_poem_map[preliminary_title] !== undefined ) {
      this.poemTitle = preliminary_title;
    }
    this.getPoem();    
  }

  ngDoCheck(): void {
    this.getPoem();
  }

  getPoem(): void {
    let old_poem = this.poem;
    this.poem = this.http.getPoem(this.poemTitle);
    if ((old_poem != this.poem) && (this.poemSettings.rhyme_colors)) {
      this.poemSettings.rhyme_colors = false;
      this.poemSettingsChange.emit(this.poemSettings);
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

  soundGroupHighlight(word_index: number[]): string {
    if (!this.poemSettings.rhyme_colors) {
      return 'transparent'
    } else {
      let current_word = this.poem.lines[word_index[0]].words[word_index[1]];
      return this.sound_colors[current_word.sound_group]
    }
  }
}