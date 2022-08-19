import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss'],
})
export default class LikesComponent implements OnInit {
  constructor() { }

  @Input() likesCount?: string;

  ngOnInit(): void {
  }
}
