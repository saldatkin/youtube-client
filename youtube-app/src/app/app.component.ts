import { Component } from '@angular/core';
import { SearchItem } from './shared/models/search-item';
import { SortState } from './shared/models/sort-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  title = 'youtube-app';
}
