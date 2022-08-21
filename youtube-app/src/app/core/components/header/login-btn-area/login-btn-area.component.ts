import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-login-btn-area',
  templateUrl: './login-btn-area.component.html',
  styleUrls: ['./login-btn-area.component.scss'],
})
export default class LoginBtnAreaComponent implements OnInit {
  isLogged?: boolean | undefined;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginService.currentIsLogged.subscribe((value) => this.isLogged = value);
    this.loginService.changeCurrentIsLogged(this.loginService.loginState.isLoggedIn);
  }

  onLogoutClick() {
    this.loginService.setLoginState('', false);
    this.loginService.changeCurrentIsLogged(this.loginService.loginState.isLoggedIn);
    localStorage.clear();
    return this.router.navigate(['login']);
  }
}
