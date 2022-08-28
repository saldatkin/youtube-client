import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login-btn-area',
  templateUrl: './login-btn-area.component.html',
  styleUrls: ['./login-btn-area.component.scss'],
})
export default class LoginBtnAreaComponent implements OnInit {
  isLogged?: boolean | undefined;

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.loginService.currentIsLogged.subscribe((value) => this.isLogged = value);
  }

  onLogoutClick(): Promise<boolean> {
    return this.loginService.onLogoutClick();
  }
}
