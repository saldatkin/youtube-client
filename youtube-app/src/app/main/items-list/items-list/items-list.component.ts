import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item';
import { SortState } from 'src/app/models/sort-state';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export default class ItemsListComponent implements OnInit {
  @Input() itemsList?: SearchItem[];

  @Input() formInput?: string;

  @Input() sortState?: SortState;

  title:string = '';

  someValueFromParent: string = 'parentValue';

  constructor() { }

  ngOnInit(): void {
  }
}
