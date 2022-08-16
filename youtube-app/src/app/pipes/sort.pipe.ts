import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item';

@Pipe({
  name: 'sortPipe',
})
export default class SortPipe implements PipeTransform {
  transform(itemsList: SearchItem[]): SearchItem[] | undefined {
    if (itemsList.length === 0) return [];
    return [];
  }
}
