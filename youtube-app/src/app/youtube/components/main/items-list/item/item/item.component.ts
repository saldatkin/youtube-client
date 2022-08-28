import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchItem } from 'src/app/shared/models/search-item';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';

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

  @Input() item!: SearchItem;

  publishedDate?: string;

  constructor(
    private router: Router,
    private youtubeService: YoutubeService,
  ) { }

  ngOnInit(): void {
    this.publishedDate = this.item?.snippet.publishedAt;
  }

  getPublishedDate(): string | undefined {
    return this.publishedDate;
  }

  onMoreBtnClick(value:SearchItem) {
    this.youtubeService.changeCurrentItem(this.item);
    return this.router.navigate(['search/video', { v: value.id }]);
  }
}
