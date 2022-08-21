import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more-btn',
  templateUrl: './more-btn.component.html',
  styleUrls: ['./more-btn.component.scss'],
})
export default class MoreBtnComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
