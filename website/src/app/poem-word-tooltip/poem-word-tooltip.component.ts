import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PoemComponent } from '../poem/poem.component';
import { Pronunciation, Word } from '../poem/poem_classes';

@Component({
  selector: 'poem-word-tooltip',
  templateUrl: './poem-word-tooltip.component.html',
  styleUrls: ['./poem-word-tooltip.component.css']
})
export class PoemWordTooltipComponent extends PoemComponent {
  
  @Input() override clicked: number = 0;
  @Input() current_word: Word = new Word('', new Pronunciation([]));
  output_text: string[] = [];

  override ngOnInit() {}
  
  override ngOnChanges() {
    this.output_text = [this.current_word.pronunciation.ipa.join("_")];
    if (this.clicked > 0) {
      this.output_text.push(this.current_word.primary_meaning);
    }
  }

}
