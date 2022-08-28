import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import SharedModule from '../shared/shared.module';

import { UserLoginComponent } from './components/user-login/user-login.component';
import AuthRoutingModule from './auth-routing.module';

@NgModule({
  declarations: [
    UserLoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
  ],
})
export class AuthModule { }
