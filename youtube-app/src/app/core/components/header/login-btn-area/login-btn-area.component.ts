import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { LoginState } from 'src/app/shared/models/login-state';

@Component({
  selector: 'app-login-btn-area',
  templateUrl: './login-btn-area.component.html',
  styleUrls: ['./login-btn-area.component.scss'],
})
export default class LoginBtnAreaComponent implements OnInit {
  isLogged?: boolean | undefined;

  loginState?: LoginState;

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    // this.isUserLoggedIn();
    this.loginService.loginState$?.subscribe((value) => this.loginState = value);
    this.loginService.currentIsLogged.subscribe((value) => this.isLogged = value);
  }

  // isUserLoggedIn() {
  //   if(JSON.parse(`${localStorage.getItem('loginState')}`).isLoggedIn){

  //     this.loginState = JSON.parse(`${localStorage.getItem('loginState')}`);
  //   }
  // }

  onLogoutClick(): Promise<boolean> {
    return this.loginService.onLogoutClick();
  }
}
