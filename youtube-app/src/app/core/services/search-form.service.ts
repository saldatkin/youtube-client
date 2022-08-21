import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchItem } from 'src/app/shared/models/search-item';
import { SortState } from 'src/app/shared/models/sort-state';

@Injectable({
  providedIn: 'root',
})
export class SearchFormService {
  searchResultItems?: SearchItem[];

  private behavSubjectItems = new BehaviorSubject<SearchItem[] | undefined>(this.searchResultItems);

  currentSearchValue = this.behavSubjectItems.asObservable();

  filterInput?: string;

  private behavSubjectFilterValue = new BehaviorSubject<string | undefined>(this.filterInput);

  currentFilterValue = this.behavSubjectFilterValue.asObservable();

  sortState?: SortState;

  private behavSubjectSortState = new BehaviorSubject<SortState | undefined>(this.sortState);

  currentSortState = this.behavSubjectSortState.asObservable();

  constructor() { }

  changeCurrentSearchValue(value: SearchItem[]) {
    this.behavSubjectItems.next(value);
  }

  changeCurrentFilterValue(value: string) {
    this.behavSubjectFilterValue.next(value);
  }

  changeCurrentSortState(value: SortState) {
    this.behavSubjectSortState.next(value);
  }
}
