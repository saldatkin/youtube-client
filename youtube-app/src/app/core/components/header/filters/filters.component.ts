import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { FilterService } from 'src/app/core/services/filter.service';
import { SearchFormService } from 'src/app/core/services/search-form.service';
import { SortState } from 'src/app/shared/models/sort-state';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export default class FiltersComponent implements OnInit {
  constructor(private filterService: FilterService,
    private searchFormService: SearchFormService) {
  }

  ngOnInit(): void {
  }
/*
  @Output() outInputVal = new EventEmitter<string>();

  @Output() outSortState = new EventEmitter<SortState>();
*/

  filterInputVal?:string;

  sortState!: SortState;



  getOrder(sort: SortState): string {
    return this.filterService
    .getOrder(this.filterService.getSortState());
  }

  onSortButtonClick(type: string) {
    return this.filterService.onSortButtonClick(type)
  }

  onFilterInputChange(inputValue:string = '') {
    this.filterInputVal = inputValue;
    this.searchFormService.changeCurrentFilterValue(this.filterInputVal);
  }
}
