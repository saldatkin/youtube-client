import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import BorderColorDirective from '../youtube/directives/border-color.directive';
import FilterWordPipe from '../youtube/pipes/filter-word.pipe';
import SortPipe from '../youtube/pipes/sort.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BorderColorDirective,
    SortPipe,
    FilterWordPipe,
  ],
  exports: [
    FormsModule,
    BorderColorDirective,
    SortPipe,
    FilterWordPipe,
  ],
  imports: [
    CommonModule,
  ],
})
export default class SharedModule { }
