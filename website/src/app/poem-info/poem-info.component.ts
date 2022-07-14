import { Component, DoCheck, Input } from '@angular/core';
import { PoemComponentTemplate } from '../poem/poem.component';
import { pronunciation_key_ipa, pronunciation_key_spelled } from '../poem/ipa-guide';
import { Full_Poem } from '../poem/poem_classes';


@Component({
  selector: 'poem-info',
  templateUrl: './poem-info.component.html',
  styleUrls: ['./poem-info.component.css']
})
export class PoemInfoComponent extends PoemComponentTemplate {

  key_in_ipa: boolean = false;
  pronunciation_key: string[] = pronunciation_key_spelled;
  @Input() override poem: Full_Poem = new Full_Poem('index');

  ipa_toggle() {
    this.key_in_ipa = !this.key_in_ipa;
    console.log(this.key_in_ipa)
    if (this.key_in_ipa) {
      this.pronunciation_key = pronunciation_key_ipa;
    } else {
      this.pronunciation_key = pronunciation_key_spelled;
    }
  }

}