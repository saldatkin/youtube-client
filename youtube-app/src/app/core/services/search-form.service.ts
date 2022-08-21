import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchItem } from 'src/app/shared/models/search-item';

@Injectable({
  providedIn: 'root'
})
export class SearchFormService {

  searchResultItems?: SearchItem[];
  private behavSubjectItems = new BehaviorSubject<SearchItem[] | undefined>(this.searchResultItems);
  currentSearchValue = this.behavSubjectItems.asObservable();


  filterInput?: string;
  private behavSubjectFilterValue = new BehaviorSubject<string | undefined>(this.filterInput)
  currentFilterValue = this.behavSubjectFilterValue.asObservable();


  constructor() { }

  
  changeCurrentSearchValue(value: SearchItem[] = []){
    this.behavSubjectItems.next(value);
  }

  changeCurrentFilterValue(value: string = ''){
    this.behavSubjectFilterValue.next(value);
  }
}
