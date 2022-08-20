import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { FilterService } from 'src/app/core/services/filter.service';
import { SortState } from 'src/app/shared/models/sort-state';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export default class FiltersComponent implements OnInit {
  constructor(private filterService: FilterService) {
  }

  ngOnInit(): void {
  }

  @Output() outInputVal = new EventEmitter<string>();

  @Output() outSortState = new EventEmitter<SortState>();

  inputVal?:string;

  sortState!: SortState;

  getOrder(sort: SortState): string {
    return this.filterService
    .getOrder(this.filterService.getSortState());
  }

  onSortButtonClick(type: string) {
    return this.filterService.onSortButtonClick(type)
  }

  onInputChange(inputValue:string = '') {
    return this.filterService.onInputChange(inputValue);
  }
}
