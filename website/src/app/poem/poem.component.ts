import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FileGrabberService } from '../file-grabber.service';
import { Full_Poem } from './poem_classes';

@Component({
  selector: 'poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnChanges {

  @Input() poem_title: string = 'index';
  poem: Full_Poem = new Full_Poem('', []);

  constructor(private http: FileGrabberService) {   }

  ngOnChanges() {
    console.log(this.poem_title);
    this.getPoem();
  }

  async getPoem() {
    this.poem = await this.http.getPoem(this.poem_title);
  }
}
