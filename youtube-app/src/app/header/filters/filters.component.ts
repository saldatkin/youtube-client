import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { SortState } from 'src/app/models/sort-state';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export default class FiltersComponent implements OnInit {
  constructor() {
  }

  @Output() outInputVal = new EventEmitter<string>();

  @Output() outSortState = new EventEmitter<SortState>();

  inputVal?:string;

  sortState!: SortState;

  ngOnInit(): void {
  }

  getOrder(sort: SortState): string {
    return sort === undefined || sort.order === 'desc'
      ? 'asc'
      : 'desc';
  }

  onSortButtonClick(type: string) {
    let sort: SortState = this.sortState;

    sort = {
      type,
      isActive: true,
      order: this.getOrder(sort),
    };

    this.sortState = sort;
    this.outSortState.emit(this.sortState);
  }

  onInputChange(inputValue:string) {
    this.inputVal = inputValue;
    this.outInputVal.emit(inputValue);
  }
}
