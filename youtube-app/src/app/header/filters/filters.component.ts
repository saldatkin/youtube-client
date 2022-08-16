import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export default class FiltersComponent implements OnInit {
  constructor() { }

  @Output() outInputVal = new EventEmitter<string>();

  inputVal?:string;

  ngOnInit(): void {
  }

  onInputChange(inputValue:string) {
    this.inputVal = inputValue;
    this.outInputVal.emit(inputValue);
  }
}
