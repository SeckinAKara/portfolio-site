import { Component, Input } from '@angular/core';
import { PoemComponentTemplate } from '../poem/poem.component';
import { Word, PoemSettings } from '../poem/poem_classes';

@Component({
  selector: 'poem-word-tooltip',
  templateUrl: './poem-word-tooltip.component.html',
  styleUrls: ['./poem-word-tooltip.component.css']
})
export class PoemWordTooltipComponent extends PoemComponentTemplate {
  
  @Input() current_word: Word = new Word();

}
