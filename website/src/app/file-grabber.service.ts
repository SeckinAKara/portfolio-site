import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Full_Poem, PoemMap, poem_map } from './poem/poem_classes';
import { index as poem_index } from '../assets/poems/index';

@Injectable({
  providedIn: 'root'
})
export class FileGrabberService { 

  constructor(private http: HttpClient) { }
  
  getPoem(poemTitle: string):Full_Poem {
    if ((poemTitle === undefined) || (poemTitle == '')) {
      return new Full_Poem('', []);
    } else {
      let poem:Full_Poem = poem_index.poem_map[poemTitle];
      return poem;
    }
  }

}