import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FileGrabberService } from '../file-grabber.service';
import { Full_Poem } from './poem_classes';

@Component({
  selector: 'poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit, OnChanges {

  @Input() poem_title: string = '';
  poem: Full_Poem = new Full_Poem('', []);

  constructor(private http: FileGrabberService) {   }

  ngOnInit() {
    if (this.poem_title == undefined) {
      this.poem = new Full_Poem('', []);
    } else {
      this.getPoem();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (this.poem_title == undefined) {
      this.poem = new Full_Poem('', []);
    } else {
      this.getPoem();
    }
  }

  async getPoem() {
    this.poem = await this.http.getPoem(this.poem_title);
  }
}
