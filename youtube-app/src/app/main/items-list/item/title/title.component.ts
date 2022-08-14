import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export default class TitleComponent implements OnInit {
  constructor() { }

  @Input() titleName?: string;

  ngOnInit(): void {
  }
}
