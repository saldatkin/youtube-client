import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { SearchFormService } from 'src/app/core/services/search-form.service';
import { SearchItem } from 'src/app/shared/models/search-item';

@Component({
  selector: 'app-login-btn-area',
  templateUrl: './login-btn-area.component.html',
  styleUrls: ['./login-btn-area.component.scss'],
})
export default class LoginBtnAreaComponent implements OnInit {
  isLogged?: boolean | undefined;

  constructor(
    private searchFormService: SearchFormService,
    private loginService: LoginService,
    private router: Router,
  ) { }

  searchResultItems?: SearchItem[];

  ngOnInit(): void {
    this.loginService.currentIsLogged.subscribe((value) => this.isLogged = value);
  }

  onLogoutClick() {
    this.loginService.setLoginState('', false);
    this.loginService.changeCurrentIsLogged(this.loginService.loginState.isLoggedIn);
    this.searchResultItems = [];
    this.searchFormService.changeCurrentSearchValue(this.searchResultItems);
    localStorage.clear();
    return this.router.navigate(['login']);
  }
}
