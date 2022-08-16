import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export default class MainComponent implements OnInit {
  constructor() { }

  @Input() mainItemsList?: SearchItem[];

  @Input() formInput?: string;

  ngOnInit(): void {
  }
}
