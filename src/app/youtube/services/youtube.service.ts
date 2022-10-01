import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IStatistics, SearchItem } from 'src/app/shared/models/search-item';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private httpClient: HttpClient) { }

  statisticsArray: IStatistics[] = [];

  idsArray: string[] = [];

  item!: SearchItem;

  private itemBehavSubject = new BehaviorSubject<SearchItem>(this.item);

  currentItem = this.itemBehavSubject.asObservable();

  changeCurrentItem(value: SearchItem) {
    this.itemBehavSubject.next(value);
  }
}
