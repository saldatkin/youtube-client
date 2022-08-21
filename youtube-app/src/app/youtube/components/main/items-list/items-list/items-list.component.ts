import { Component, Input, OnInit } from '@angular/core';
import { SearchFormService } from 'src/app/core/services/search-form.service';
import { SearchItem } from 'src/app/shared/models/search-item';
import { SortState } from 'src/app/shared/models/sort-state';
import { items, response } from 'src/app/shared/response';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export default class ItemsListComponent implements OnInit {

  constructor(
    private searchFormService: SearchFormService) { }

  ngOnInit(): void {
    this.searchFormService.currentSearchValue
    .subscribe((items) => this.itemsListNew = items);
    this.searchFormService.currentFilterValue
    .subscribe((value) => this.filterInputNew = value);
    this.searchFormService.currentSortState
    .subscribe((value) => this.sortStateNew = value);
    this.searchFormService.currentSortState
    .subscribe((value) => this.sortStateNew = value);
  }

  itemsListNew?: SearchItem[];
  filterInputNew?: string;
  sortStateNew?: SortState;


  title:string = '';
}
