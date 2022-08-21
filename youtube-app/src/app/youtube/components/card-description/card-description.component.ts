import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/shared/models/search-item';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-card-description',
  templateUrl: './card-description.component.html',
  styleUrls: ['./card-description.component.scss']
})
export default class CardDescriptionComponent implements OnInit {

  item!: SearchItem;

  dateItem!: Date;

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.youtubeService.currentItem
    .subscribe((value) => this.item = value);
    this.dateItem = new Date(this.item.snippet.publishedAt);
  }




}
