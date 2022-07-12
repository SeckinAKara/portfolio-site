import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FileGrabberService } from '../file-grabber.service';
import { PoemComponent } from '../poem/poem.component';

@Component({
  selector: 'poem-info',
  templateUrl: './poem-info.component.html',
  styleUrls: ['./poem-info.component.css']
})
export class PoemInfoComponent extends PoemComponent {
  
}
