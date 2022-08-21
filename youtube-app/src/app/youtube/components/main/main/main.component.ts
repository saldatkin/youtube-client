import { Component, Input, OnInit } from '@angular/core';
import { SortState } from 'src/app/shared/models/sort-state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export default class MainComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  formInput?: string;

  sortState?: SortState;

  sendFormInput(input: string) {
    this.formInput = input;
  }

  sendSortState(sortState: SortState) {
    this.sortState = sortState;
  }
}
