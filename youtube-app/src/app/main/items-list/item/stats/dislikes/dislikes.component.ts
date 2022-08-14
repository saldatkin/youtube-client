import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dislikes',
  templateUrl: './dislikes.component.html',
  styleUrls: ['./dislikes.component.scss'],
})
export default class DislikesComponent implements OnInit {
  constructor() { }

  @Input() dislikesCount?: string;

  ngOnInit(): void {
  }
}
