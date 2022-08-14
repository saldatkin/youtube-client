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

  ngOnInit(): void {
  }

  isFiltersActive: boolean = false;

  toggleFiltersDisplay() {
    this.isFiltersActive = !this.isFiltersActive;
  }

  headerSendResponse(value: SearchItem[]) {
    this.outHeaderResponse.emit(value);
  }
}
