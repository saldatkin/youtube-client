import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export default class CommentsComponent implements OnInit {
  constructor() { }

  @Input() commentsCount?: string;

  ngOnInit(): void {
  }
}
