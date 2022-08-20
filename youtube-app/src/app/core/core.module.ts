import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import SharedModule from '../shared/shared.module';
import FilterBtnComponent from './components/header/filter-btn/filter-btn.component';
import FiltersComponent from './components/header/filters/filters.component';
import HeaderComponent from './components/header/header/header.component';
import LoginBtnAreaComponent from './components/header/login-btn-area/login-btn-area.component';
import LogoComponent from './components/header/logo/logo.component';
import InputComponent from './components/header/search-form/input/input.component';
import SubmitBtnComponent from './components/header/search-form/submit-btn/submit-btn.component';

@NgModule({
  declarations: [
    FilterBtnComponent,
    FiltersComponent,
    HeaderComponent,
    LoginBtnAreaComponent,
    LogoComponent,
    InputComponent,
    SubmitBtnComponent,
  ],
  exports: [
    FilterBtnComponent,
    FiltersComponent,
    HeaderComponent,
    LoginBtnAreaComponent,
    LogoComponent,
    InputComponent,
    SubmitBtnComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
  ],
})
export class CoreModule { }
