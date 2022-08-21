import {
  Component, OnInit,
} from '@angular/core';
import { SearchFormService } from 'src/app/core/services/search-form.service';
import { SortState } from 'src/app/shared/models/sort-state';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export default class FiltersComponent implements OnInit {
  constructor(
    private searchFormService: SearchFormService) {
  }

  ngOnInit(): void {
  }


  filterInputVal?:string;

  sortState!: SortState;


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
    this.searchFormService.changeCurrentSortState(this.sortState);
  }


  onFilterInputChange(inputValue:string = '') {
    this.filterInputVal = inputValue;
    this.searchFormService.changeCurrentFilterValue(this.filterInputVal);
  }
}
