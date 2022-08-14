import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export default class PictureComponent implements OnInit {
  constructor() { }

  @Input() pictureURL?: string;

  ngOnInit(): void {
  }
}
