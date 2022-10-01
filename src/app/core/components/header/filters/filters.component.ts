import {
  Component,
} from '@angular/core';
import { SearchFormService } from 'src/app/core/services/search-form.service';
import { SortState } from 'src/app/shared/models/sort-state';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export default class FiltersComponent {
  constructor(
    private searchFormService: SearchFormService,
  ) { }

  filterInputVal?:string;

  sortState!: SortState;

  getOrder(sort: SortState): string {
    return this.searchFormService.getOrder(sort);
  }

  onSortButtonClick(type: string) {
    this.searchFormService.onSortButtonClick(type);
  }

  onFilterInputChange(inputValue:string = '') {
    this.searchFormService.onFilterInputChange(inputValue);
  }
}
