import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Full_Poem, PoemMap, poem_map } from './poem/poem_classes';
import { all_poems } from '../assets/poems/index';

@Injectable({
  providedIn: 'root'
})
export class FileGrabberService { 

  constructor(private http: HttpClient) { }
  
  getPoem(poem_title: string):Full_Poem {
    if ((poem_title === undefined) || (poem_title == '') || (poem_title == 'index')) {
      return new Full_Poem('', []);
    } else {
      let poem:Full_Poem = all_poems.poem_map[poem_title];
      return poem;
    }
  }

}