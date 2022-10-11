import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject, debounceTime, distinctUntilChanged, filter, map, Observable, Subject, switchMap,
} from 'rxjs';
import { YOUTUBE_SEARCH_URL, YOUTUBE_VIDEOS_URL } from 'src/app/shared/constants';
import { getYTResponseItemsIdList } from 'src/app/shared/helpers';
import { SearchItem } from 'src/app/shared/models/search-item';
import { SearchResponse } from 'src/app/shared/models/search-response';
import { SortState } from 'src/app/shared/models/sort-state';

@Injectable({
  providedIn: 'root',
})
export class SearchFormService {
  public item!: SearchItem;

  public itemsSearchResults?: SearchItem[];

  public filterInput!: string;

  public sortState!: SortState;

  private filteringValue$$ = new BehaviorSubject<string>(this.filterInput);

  private sortState$$ = new BehaviorSubject<SortState>(this.sortState);

  currentFilterValue$ = this.filteringValue$$.asObservable();

  currentSortState$ = this.sortState$$.asObservable();

  private selectedItem$$ = new BehaviorSubject<SearchItem>(this.item);

  currentItem$ = this.selectedItem$$.asObservable();

  changeCurrentItem(val: SearchItem) {
    this.selectedItem$$.next(val);
  }

  changeCurrentFilterValue(val: string) {
    this.filteringValue$$.next(val);
  }

  changeCurrentSortState(val: SortState) {
    this.sortState$$.next(val);
  }

  constructor(private http: HttpClient) {
  }

  searchResults: SearchItem[] = [];

  private searchValue$$ = new Subject<string>();

  changeCurrentSearchValue(val: string) {
    this.searchValue$$.next(val);
  }

  getSearchResults$(val: string): Observable<any> {
    return this.fetchSearchResults$(val)
      .pipe(
        switchMap(
          (response: SearchResponse) => {
            const searchIds: string = getYTResponseItemsIdList(response);
            return this.fetchResultStats(searchIds);
          },
        ),
        map(
          (response: SearchResponse) => this.searchResults = response.items,
        ),
      );
  }

  getSearchResults(): SearchItem[] {
    return this.searchResults;
  }

  fetchSearchResults$(val: string): Observable<SearchResponse> {
    const urlForVideos: string = `${YOUTUBE_SEARCH_URL}?part=snippet&type=video&maxResults=12&q=${val}`;
    return this.http.get<SearchResponse>(urlForVideos);
  }

  fetchResultStats(ids: string): Observable<SearchResponse> {
    const urlForStats: string = `${YOUTUBE_VIDEOS_URL}?id=${ids}&part=snippet,statistics`;
    return this.http.get<SearchResponse>(urlForStats);
  }

  getSearchValue$(): Observable<string> {
    return this.searchValue$$.asObservable()
      .pipe(
        filter((v) => v.length > 2),
        debounceTime(700),
        distinctUntilChanged(),
      );
  }

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
    this.changeCurrentSortState(this.sortState);
  }

  onFilterInputChange(inputValue:string = '') {
    this.filterInput = inputValue;
    this.changeCurrentFilterValue(this.filterInput);
  }
}
