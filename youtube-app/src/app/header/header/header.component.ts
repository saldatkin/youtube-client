import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { SearchItem } from 'src/app/models/search-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent implements OnInit {
  constructor() { }

  @Output() outHeaderResponse = new EventEmitter<SearchItem[]>();

  @Output() outHeaderFormInput = new EventEmitter<string>();

  formInput?: string;

  isFiltersActive: boolean = false;

  ngOnInit(): void {
  }

  toggleFiltersDisplay() {
    this.isFiltersActive = !this.isFiltersActive;
  }

  headerSendResponse(value: SearchItem[]) {
    this.outHeaderResponse.emit(value);
  }

  getFromInput(input: string) {
    this.formInput = input;
    this.outHeaderFormInput.emit(this.formInput);
  }
}
