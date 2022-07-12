import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PoemComponent } from '../poem/poem.component';
import { pronunciation_key } from '../poem/ipa-guide';


@Component({
  selector: 'poem-info',
  templateUrl: './poem-info.component.html',
  styleUrls: ['./poem-info.component.css']
})
export class PoemInfoComponent extends PoemComponent {
  pronunciation_key = pronunciation_key;
}