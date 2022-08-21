import {
  Component, OnInit,
} from '@angular/core';
import { SortState } from 'src/app/shared/models/sort-state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent implements OnInit {
  constructor() { }

  isFiltersActive: boolean = false;

  formInput?: string;

  sortState!: SortState;

  ngOnInit(): void {
  }

  toggleFiltersDisplay() {
    this.isFiltersActive = !this.isFiltersActive;
  }
}
