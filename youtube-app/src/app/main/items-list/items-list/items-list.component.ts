import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export default class ItemsListComponent implements OnInit {
  @Input() itemsList?: SearchItem[];

  someValueFromParent: string = 'parentValue';

  constructor() { }

  ngOnInit(): void {
  }
}
