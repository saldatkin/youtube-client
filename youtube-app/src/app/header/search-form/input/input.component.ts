import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchItem } from 'src/app/models/search-item';
import { response } from 'src/app/main/items-list/response';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export default class InputComponent implements OnInit {
  constructor() { }

  responseItems: SearchItem[] = response.items;

  filterBy: any;

  @Output() outSubmitForm = new EventEmitter<SearchItem[]>();

  ngOnInit(): void {
  }

  onSubmitForm(form: NgForm) {
    const inputValue: string = form.value.searchInput;
    if (inputValue !== '') {
      this.outSubmitForm.emit(this.responseItems);
    }
  }
}
