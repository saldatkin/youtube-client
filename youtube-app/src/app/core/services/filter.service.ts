import { Injectable } from '@angular/core';
import { SortState } from 'src/app/shared/models/sort-state';

@Injectable({
  providedIn: 'root',
})
export class FilterService {

  inputVal?:string = 'new';

  sortState!: SortState;

  constructor() { }

  getInputVal(){
    return this.inputVal;
  }
  getSortState(){
    return this.sortState;
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
      order: this.getOrder(sort),
    };

    this.sortState = sort;
  }

  onInputChange(inputValue:string) {
    this.inputVal = inputValue;
    return this.getInputVal();
  }
}
