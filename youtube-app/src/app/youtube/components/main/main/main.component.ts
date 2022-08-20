import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/shared/models/search-item';
import { SortState } from 'src/app/shared/models/sort-state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export default class MainComponent implements OnInit {
  constructor() { }

  @Input() mainItemsList?: SearchItem[];
/*
  @Input() formInput?: string;

  @Input() sortState?: SortState;
*/
  ngOnInit(): void {
  }

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
