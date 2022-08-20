import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss'],
})
export default class ViewsComponent implements OnInit {
  constructor() { }

  @Input() viewsCount?: string;

  ngOnInit(): void {
  }
}
