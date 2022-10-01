import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchItem } from 'src/app/shared/models/search-item';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-card-description',
  templateUrl: './card-description.component.html',
  styleUrls: ['./card-description.component.scss'],
})
export default class CardDescriptionComponent implements OnInit, OnDestroy {
  item!: SearchItem;

  dateItem!: Date;

  constructor(private youtubeService: YoutubeService, private router: Router) { }

  ngOnInit(): void {
    if (this.item === undefined || this.item === null) {
      this.item = JSON.parse(sessionStorage.getItem('current-item')!);
    } else {
      this.youtubeService.currentItem
        .subscribe((value) => this.item = value);
    }
    this.dateItem = new Date(this.item.snippet.publishedAt);
  }

  goBackFromDescription() {
    return this.router.navigate(['search']);
  }

  ngOnDestroy(): void {
    this.youtubeService.currentItem.subscribe().unsubscribe();
  }
}
