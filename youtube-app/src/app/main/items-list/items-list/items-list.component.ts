import { Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item';
import { response } from '../response';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export default class ItemsListComponent implements OnInit {
  items: SearchItem[] = response.items;

  someValueFromParent: string = 'parentValue';

  constructor() { }

  ngOnInit(): void {
  }
}
