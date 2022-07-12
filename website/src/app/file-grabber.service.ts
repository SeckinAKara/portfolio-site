import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Full_Poem, PoemMap } from './poem/poem_classes';

@Injectable({
  providedIn: 'root'
})
export class FileGrabberService { 

  constructor(private http: HttpClient) { }
  
  async getAllPoems():Promise<poem_map> {
    const all_poems:PoemMap = (await import('../assets/poems/index.js')).index;
    return all_poems;
  }

  async getPoem(poem_title: string):Promise<Full_Poem> {
    if ((poem_title === undefined) || (poem_title == '') || (poem_title == 'index')) {
      return new Full_Poem('', []);
    } else {
      return (await this.getAllPoems())[poem_title];
    }
  }

}