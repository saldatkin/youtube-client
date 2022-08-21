import {
  Component, OnInit,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchFormService } from 'src/app/core/services/search-form.service';
import { SearchItem } from 'src/app/shared/models/search-item';
import { response } from 'src/app/shared/response';

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

  ngOnInit(): void {
  }

  changeSearchValue(items: SearchItem[]) {
    this.searchFormService.changeCurrentSearchValue(items);
  }

  onSubmitForm(form: NgForm) {
    if (form.value.searchInput !== '' && form.value.searchInput !== undefined) {
      this.responseItems = response.items;
      this.changeSearchValue(this.responseItems);
    }
  }
}
