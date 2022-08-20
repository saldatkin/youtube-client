import { Component, Input, OnInit } from '@angular/core';
import { FilterService } from 'src/app/core/services/filter.service';
import { SearchItem } from 'src/app/shared/models/search-item';
import { SortState } from 'src/app/shared/models/sort-state';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export default class ItemsListComponent implements OnInit {
  @Input() itemsList?: SearchItem[];

  @Input() formInput?: string;

  @Input() sortState?: SortState;

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    console.log(this.formInputNew);
  }

  formInputNew?: string = this.filterService.getInputVal();

  title:string = '';

  someValueFromParent: string = 'parentValue';

}
