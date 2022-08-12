import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Full_Poem, poem_map } from './poem/poem_classes';
import { full_poem_map } from '../assets/poems/index';

@Injectable({
  providedIn: 'root'
})
export class FileGrabberService { 

  constructor(private http: HttpClient) { }
  
  getPoem(poemTitle: string):Full_Poem {
    if (full_poem_map[poemTitle] !== undefined ) {
      return full_poem_map[poemTitle];
    }
    else {
      return full_poem_map['all_poems'];
    }
  }

}