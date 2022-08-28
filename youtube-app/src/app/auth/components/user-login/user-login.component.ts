import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  constructor(
    private loginService: LoginService,
  ) { }

  onSubmitLoginForm(form: NgForm) {
    this.loginService.onSubmitLoginForm(form);
  }
}
