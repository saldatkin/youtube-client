import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export default class ItemComponent implements OnInit {
  @Input() itemsFromItemsList?: SearchItem[];

  @Input() itemPicURL?: string;

  @Input() itemViews?: string;

  @Input() itemLikes?: string;

  @Input() itemDislikes?: string;

  @Input() itemComments?: string;

  @Input() itemTitle?: string;

  constructor() { }

  ngOnInit(): void {
  }
}
