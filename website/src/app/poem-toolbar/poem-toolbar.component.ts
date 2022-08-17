import { Component, Input } from '@angular/core';
import { PoemComponentTemplate } from '../poem/poem.component';
import { pronunciation_key_ipa, pronunciation_key_spelled } from '../poem/ipa-guide';
import { Full_Poem } from '../poem/poem_classes';


@Component({
  selector: 'poem-toolbar',
  templateUrl: './poem-toolbar.component.html',
  styleUrls: ['./poem-toolbar.component.css']
})
export class PoemToolbarComponent extends PoemComponentTemplate {

  ascii: boolean = false;
  rhymes: boolean = false;
  key_in_ipa: boolean = false;
  pronunciation_key: string[] = pronunciation_key_spelled;
  show_pronunciation_key: boolean = false;
  @Input() override poem: Full_Poem = new Full_Poem();

  updateSettings(property: string) {
    if (property == 'ascii') {
      this.ascii = !this.ascii;
      this.poemSettings['ascii_pronunciation'] = this.ascii;
      this.poemSettingsChange.emit(this.poemSettings);
    } else if (property == 'rhyme_colors') {
      this.rhymes = !this.rhymes;
      this.poemSettings['rhyme_colors'] = this.rhymes;
      this.poemSettingsChange.emit(this.poemSettings);
    } else if (property == 'settings') {
      this.poemSettings.rhyme_colors = false;
      this.poemSettings.ascii_pronunciation = false;
      this.poemSettings.rotate = 0;
      this.poemSettings.zoom = 1;
      this.poemSettingsChange.emit(this.poemSettings);
    }
  }

  ipa_toggle() {
    this.key_in_ipa = !this.key_in_ipa;
    if (this.key_in_ipa) {
      this.pronunciation_key = pronunciation_key_ipa;
    } else {
      this.pronunciation_key = pronunciation_key_spelled;
    }
  }

}
