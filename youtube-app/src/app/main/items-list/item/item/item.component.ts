import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export default class ItemComponent implements OnInit {

  @Input() itemPicURL?: string;

  @Input() itemViews?: string;

  @Input() itemLikes?: string;

  @Input() itemDislikes?: string;

  @Input() itemComments?: string;

  @Input() itemTitle?: string;

  @Input() itemDate?: string;

  @Input() item?: SearchItem;

  publishedDate?: string;

  constructor() { }

  ngOnInit(): void {
    this.publishedDate = this.item?.snippet.publishedAt;
  }

  getPublishedDate(): string | undefined {
    return this.publishedDate;
  }
}
