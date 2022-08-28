import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BehaviorSubject, Observable, Subscription, switchMap,
} from 'rxjs';
import { SearchFormService } from 'src/app/core/services/search-form.service';
import { SearchItem } from 'src/app/shared/models/search-item';
import { SortState } from 'src/app/shared/models/sort-state';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export default class ItemsListComponent implements OnInit, OnDestroy {
  constructor(
    private searchFormService: SearchFormService,
  ) { }

  items: SearchItem[] = [];

  filterInputNew?: string;

  sortStateNew?: SortState;

  searchValue?: string = '';

  title:string = '';

  ngOnInit(): void {
    this.searchFormService.currentFilterValue$
      .subscribe((value) => this.filterInputNew = value);
    this.searchFormService.currentSortState$
      .subscribe((value) => this.sortStateNew = value);
    // this.searchFormService.currentSearchValue$
    //   .subscribe((value) => this.searchValue = value);

    const subscription: Subscription = this.getSearchValue$()
      .pipe(
        switchMap<string, Observable<SearchItem[]>>(
          (val: string) => this.getSearchResults$(val),
        ),
      )
      .subscribe(
        (val: SearchItem[]) => {
          this.items = val;
          this.responseItems.next(val);
          console.log('items - '+val);

        },
      );
    this.subscriptions.add(subscription);
  }

  private subscriptions = new Subscription();

  public responseItems = new BehaviorSubject<SearchItem[]>(this.searchFormService.getSearchResults());

  getSearchValue$(): Observable<string> {
    return this.searchFormService.getSearchValue$();
  }

  getSearchResults$(val: string): Observable<SearchItem[]> {
    return this.searchFormService.getSearchResults$(val);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
