import { Component, OnInit, Output, EventEmitter, DoCheck } from '@angular/core';
import { PoemComponentTemplate } from '../poem/poem.component';
import { Full_Poem, poem_map } from '../poem/poem_classes';
import { full_poem_map, valid_poem_map } from 'src/assets/poems';

@Component({
  selector: 'poem-list',
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.css']
})
export class PoemListComponent extends PoemComponentTemplate implements OnInit, DoCheck {

  poem_index: poem_map = full_poem_map;
  valid_poem_index: poem_map = valid_poem_map;
  sorted_poem_titles: [string, string][] = [];
  sorting_by: string = 'title';
  sort_order: string = 'desc';

  seasons: string[] = ['Spring', 'Summer', 'Fall', 'Winter'];
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  ngOnInit() {
    this.sortPoemsBy(this.sorting_by);
  }

  ngDoCheck(): void {
    this.sortPoemsBy(this.sorting_by);
  }

  updatePoem(poemTitle: string) {
    this.poemTitle = poemTitle;
    this.poemTitleChange.emit(this.poemTitle);
  }

  sortPoemsBy(method: string) {
    var items = Object.entries(this.valid_poem_index);
    if (method == 'date') {
      items.sort((first, second) => this.compareDates(first[1], second[1]))
    } else if (method == 'title') {
      items.sort(function(a, b){
        let x = a[1].title.toLowerCase();
        let y = b[1].title.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      })
    }
    if (this.sort_order == 'asc') {
      items.reverse()
    }
    this.sorted_poem_titles = [];
    for (var poem_title of items) {
      this.sorted_poem_titles.push([poem_title[0], this.valid_poem_index[poem_title[0]].title]);
    } 
  }

  compareDates(first: Full_Poem, second: Full_Poem): number {
    var first_split: string[] = first.creation_time.split(' ');
    var second_split: string[] = second.creation_time.split(' ');

    if (first_split[first_split.length - 1] != second_split[second_split.length - 1]) {
      return parseInt(first_split[first_split.length - 1]) - parseInt(second_split[second_split.length - 1]);
    }

    var first_month: string;
    var second_month: string;

    if (this.seasons.indexOf(first_split[0]) >= 0) {
      switch(first_split[0]) {
        case 'Spring': {first_month = 'March'; break;}
        case 'Summer': {first_month = 'June'; break;}
        case 'Fall': {first_month = 'September'; break;}
        case 'Winter': {first_month = 'November'; break;}
        default: {first_month = 'January'; break;}
      }
    }
    if (this.seasons.indexOf(second_split[0]) >= 0) {
      switch(second_split[0]) {
        case 'Spring': {second_month = 'March'; break;}
        case 'Summer': {second_month = 'June'; break;}
        case 'Fall': {second_month = 'September'; break;}
        case 'Winter': {second_month = 'November'; break;}
        default: {second_month = 'January'; break;}
      }
    }
     
    if (first_split.length == 2) {
      first_split = [first_split[0], '1', first_split[1]];
    }
    if (second_split.length == 2) {
      second_split = [second_split[0], '1', second_split[1]];
    }

    if (first_split[0] != second_split[0]) {
      return this.months.indexOf(first_split[0]) - this.months.indexOf(second_split[0]);
    } else {
      return parseInt(first_split[1].replace(',', '')) - parseInt(second_split[1].replace(',', ''));
      }
    }
  }