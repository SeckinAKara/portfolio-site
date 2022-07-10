import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Full_Poem, poem_map } from './poem/poem_classes';

@Injectable({
  providedIn: 'root'
})
export class FileGrabberService {

  constructor(private http: HttpClient) { }

  async getPoem(poem_title: string): Promise<Full_Poem> {
    const poem_module = await import('../assets/poems/index');
    return poem_module.all_poems[poem_title];
  }
}