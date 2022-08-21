import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  constructor(private loginService: LoginService,
    private router: Router) { }

  onSubmitLoginForm(form: NgForm) {
    localStorage.clear();
    this.loginService.setLoginState(true);
    this.loginService.setLogin(form.value.loginInput);
    localStorage.setItem('token', this.loginService.createToken());
    this.router.navigateByUrl('/search');
    window.alert('You are logged in!');
  }
}
