import {
  Component, OnInit,
} from '@angular/core';
import { Subject } from 'rxjs';
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
  }

  onSearchInputChange(searchInput: string) {
    this.searchFormService.changeCurrentSearchValue(searchInput);
  }
}
