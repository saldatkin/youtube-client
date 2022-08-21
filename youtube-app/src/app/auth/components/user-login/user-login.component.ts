import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  onSubmitLoginForm(form: NgForm) {
    this.loginService.setLoginState(form.value.loginInput, true);
    localStorage.setItem('loginState', JSON.stringify(this.loginService.loginState));
    this.loginService.changeCurrentIsLogged(this.loginService.loginState.isLoggedIn);
    this.router.navigateByUrl('/search');
  }
}
