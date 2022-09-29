import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/core/services/login.service';
import { LoginState } from 'src/app/shared/models/login-state';

@Component({
  selector: 'app-login-btn-area',
  templateUrl: './login-btn-area.component.html',
  styleUrls: ['./login-btn-area.component.scss'],
})
export default class LoginBtnAreaComponent implements OnInit, OnDestroy {
  isLogged?: boolean | undefined;

  private subscriptions: Subscription[] = [];

  loginState?: LoginState;

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.subscriptions
      .push(this.loginService.loginState$!.subscribe((value) => this.loginState = value));
    this.subscriptions
      .push(this.loginService.currentIsLogged.subscribe((value) => this.isLogged = value));
  }

  onLogoutClick(): Promise<boolean> {
    return this.loginService.onLogoutClick();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscr) => subscr.unsubscribe());
  }
}
