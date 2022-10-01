import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../../shared/models/search-item';

@Pipe({
  name: 'filter',
})
export default class FilterWordPipe implements PipeTransform {
  transform(
    itemsList: SearchItem[] | undefined,
    stringFilter: string | undefined,
  ): SearchItem[] | undefined {
    if (itemsList?.length === 0 || stringFilter === undefined) {
      return itemsList;
    }

    return itemsList?.filter((item) => {
      const title: string = item.snippet.title.toLowerCase();
      const value: string = stringFilter?.trim().toLowerCase();

      return title.includes(value);
    });
  }
}
