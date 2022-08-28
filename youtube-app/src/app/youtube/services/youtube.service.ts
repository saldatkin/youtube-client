import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchItem } from 'src/app/shared/models/search-item';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor() { }

  item!: SearchItem;

  private itemBehavSubject = new BehaviorSubject<SearchItem>(this.item);

  currentItem = this.itemBehavSubject.asObservable();

  changeCurrentItem(value: SearchItem) {
    this.itemBehavSubject.next(value);
  }
}
