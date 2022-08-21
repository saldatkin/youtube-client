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

  responseItems: SearchItem[] = response.items;

  filterBy: any;

  ngOnInit(): void {
  }

  changeSearchValue() {
    this.searchFormService.changeCurrentSearchValue(this.responseItems);
  }

  onSubmitForm(form: NgForm) {
    if (form.value.searchForm !== '') {
      this.changeSearchValue();
    }
  }
}
