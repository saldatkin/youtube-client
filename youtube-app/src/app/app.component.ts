import { Component } from '@angular/core';
import { SearchItem } from './models/search-item';
import { SortState } from './models/sort-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  title = 'youtube-app';

  appItemsList?: SearchItem[];

  formInput?: string;

  sortState?: SortState;

  setAppItems(value: SearchItem[]) {
    this.appItemsList = value;
  }

  sendFormInput(input: string) {
    this.formInput = input;
  }

  sendSortState(sortState: SortState) {
    this.sortState = sortState;
  }
}
