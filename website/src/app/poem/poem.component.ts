import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FileGrabberService } from '../file-grabber.service';
import { Full_Poem } from './poem_classes';

@Component({
  selector: 'poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit, OnChanges {

  @Input() poem_title: string = 'index';
  poem: Full_Poem = new Full_Poem('', []);

  constructor(private http: FileGrabberService) {   }

  ngOnInit(): void {
    this.getPoem();
  }

  ngOnChanges(): void {
    this.getPoem();
  }

  async getPoem() {
    this.poem = await this.http.getPoem(this.poem_title);
  }
}