import {
  Component, OnInit,
} from '@angular/core';
import {
  debounceTime, distinctUntilChanged, filter, Subject,
} from 'rxjs';
import { SearchFormService } from 'src/app/core/services/search-form.service';
import { SearchItem } from 'src/app/shared/models/search-item';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export default class InputComponent implements OnInit {
  constructor(
    private searchFormService: SearchFormService,
  ) { }

  responseItems!: SearchItem[];

  filterBy: any;

  searchInput = '';

  searchInputUpdate = new Subject<string>();

  ngOnInit(): void {
    this.searchInputUpdate
      .pipe(
        filter((value) => value.length > 2),
        debounceTime(1500),
        distinctUntilChanged(),
      )
      .subscribe((value) => {
        this.searchFormService.searchValue = value;
      });
  }

  onSearchInputChange(searchInput: string) {
    this.searchInput = searchInput;
    this.searchFormService.changeCurrentSearchValue(this.searchInput);
  }
}
