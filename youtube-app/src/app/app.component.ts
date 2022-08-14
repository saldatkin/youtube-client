import { Component } from '@angular/core';
import { SearchItem } from './models/search-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  title = 'youtube-app';

  appItemsList: SearchItem[] = [];

  setAppItems(value: SearchItem[]) {
    this.appItemsList = value;
  }
}
