import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { SearchItem } from 'src/app/shared/models/search-item';
import { SortState } from 'src/app/shared/models/sort-state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent implements OnInit {
  constructor() { }
/*
  @Output() outHeaderResponse = new EventEmitter<SearchItem[]>();

  @Output() outHeaderFormInput = new EventEmitter<string>();

  @Output() outHeaderSortState = new EventEmitter<SortState>();
*/
  isFiltersActive: boolean = false;

  formInput?: string;

  sortState!: SortState;

  ngOnInit(): void {
  }

  toggleFiltersDisplay() {
    this.isFiltersActive = !this.isFiltersActive;
  }
/*
  headerSendResponse(value: SearchItem[]) {
    this.outHeaderResponse.emit(value);
  }

  getFromInput(input: string) {
    this.formInput = input;
    this.outHeaderFormInput.emit(this.formInput);
  }

  getSortState(sortState: SortState) {
    this.sortState = sortState;
    this.outHeaderSortState.emit(this.sortState);
  }
  */
}
