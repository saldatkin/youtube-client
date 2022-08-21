import { Component, Input, OnInit } from '@angular/core';
import { FilterService } from 'src/app/core/services/filter.service';
import { SearchFormService } from 'src/app/core/services/search-form.service';
import { SearchItem } from 'src/app/shared/models/search-item';
import { SortState } from 'src/app/shared/models/sort-state';
import { items, response } from 'src/app/shared/response';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export default class ItemsListComponent implements OnInit {
 /*
  @Input() formInput?: string;

  @Input() sortState?: SortState;
*/
  constructor(private filterService: FilterService,
    private searchFormService: SearchFormService) { }

  ngOnInit(): void {
    this.searchFormService.currentSearchValue
    .subscribe((items) => this.itemsListNew = items);
    this.searchFormService.currentFilterValue
    .subscribe((value) => this.filterInputNew = value);
  }

  itemsListNew?: SearchItem[];
  filterInputNew?: string;
  
  formInputNew?: string = this.filterService.getInputVal();
  sortStateNew: SortState = this.filterService.getSortState();

  title:string = '';


}
