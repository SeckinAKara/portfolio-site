import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Full_Poem } from 'src/main';

@Component({
  selector: 'poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {

  poem: Full_Poem;

  constructor(full_poem: Full_Poem, private route: ActivatedRoute) {
      this.poem = full_poem;
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.poem = params['name'];
    });
  }

}
