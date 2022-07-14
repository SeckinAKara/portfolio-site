import { Component } from '@angular/core';
import { PoemComponentTemplate } from '../poem/poem.component';

@Component({
  selector: 'poem-toolbar',
  templateUrl: './poem-toolbar.component.html',
  styleUrls: ['./poem-toolbar.component.css']
})
export class PoemToolbarComponent extends PoemComponentTemplate {

  ascii: boolean = false;
  rhymes: boolean = false;


  updateSettings(property: string) {
    if (property == 'ascii') {
      this.ascii = !this.ascii;
      this.poemSettings['ascii_pronunciation'] = this.ascii;
    } else if (property == 'rhyme_colors') {
      this.rhymes = !this.rhymes;
      this.poemSettings['rhyme_colors'] = this.rhymes;
    }
    console.log(this.poemSettings);
    this.poemSettingsChange.emit(this.poemSettings);
  }
}
