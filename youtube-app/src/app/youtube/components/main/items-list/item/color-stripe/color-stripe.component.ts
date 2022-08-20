import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-stripe',
  templateUrl: './color-stripe.component.html',
  styleUrls: ['./color-stripe.component.scss'],
})
export default class ColorStripeComponent implements OnInit {
  constructor() { }

  @Input() datePublish?: string;

  @Input() publishedDate?: string;

  publicationDate?: string;

  ngOnInit(): void {
    this.publicationDate = this.publishedDate;
  }
}
