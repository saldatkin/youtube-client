import {
  Directive, ElementRef, Input, OnInit,
} from '@angular/core';

@Directive({
  selector: '[appBorderColor]',
})
export default class BorderColorDirective implements OnInit {
  @Input() itemDate?: string;

  dateP?: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.dateP = this.itemDate;
    const date: Date = new Date(this.dateP!);
    const millisecondsPassed: number = Date.now() - date.getTime();

    this.el.nativeElement.style.borderColor = 'violet';

    if (millisecondsPassed < (1000 * 3600 * 24 * 7)) {
      this.el.nativeElement.style.borderColor = 'blue';
    } else if (millisecondsPassed < (1000 * 3600 * 24 * 30)) {
      this.el.nativeElement.style.borderColor = 'green';
    } else if (millisecondsPassed < (1000 * 3600 * 24 * 30 * 6)) {
      this.el.nativeElement.style.borderColor = 'yellow';
    } else {
      this.el.nativeElement.style.borderColor = 'red';
    }
  }
}
