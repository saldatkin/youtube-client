import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item';
import { SortState } from '../models/sort-state';

@Pipe({
  name: 'sort',
})
export default class SortPipe implements PipeTransform {
  transform(
    itemsList: SearchItem[] | undefined,
    sortState: SortState | undefined,
  ) {
    if (!sortState || !itemsList) { return itemsList; }

    return this.sortItems(itemsList, sortState);
  }

  sortDate(itemsList: SearchItem[]) {
    return itemsList.sort((a, b) => {
      const dateA = a.snippet.publishedAt;
      const dateB = b.snippet.publishedAt;
      if (dateA < dateB) return -1;
      if (dateA > dateB) return 1;
      return 0;
    });
  }

  sortItems(itemsList: SearchItem[], sortState: SortState): SearchItem[] {
    let result: SearchItem[] = [];
    const t = sortState.type;
    const o = sortState.order;

    if (t === 'views' && o === 'asc') {
      result = itemsList.sort((a, b): number => +a.statistics.viewCount - +b.statistics.viewCount);
    } else if (t === 'views' && o === 'desc') {
      result = itemsList.sort((a, b): number => +b.statistics.viewCount - +a.statistics.viewCount);
    } else if (t === 'date' && o === 'asc') {
      result = this.sortDate(itemsList);
    } else if (t === 'date' && o === 'desc') {
      result = this.sortDate(itemsList).reverse();
    }
    return result;
  }
}
