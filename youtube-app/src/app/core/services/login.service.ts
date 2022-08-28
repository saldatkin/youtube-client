import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { createToken } from 'src/app/shared/helpers';
import { LoginState } from 'src/app/shared/models/login-state';
import { SearchItem } from 'src/app/shared/models/search-item';
import { SearchFormService } from './search-form.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginState: LoginState = {
    isLoggedIn: this.initLoggedValue(),
    login: '',
    token: '',
  };

  password: string = '';

  searchResultItems?: SearchItem[];

  constructor(
    private router: Router,
    private searchFormService: SearchFormService,
  ) { }

  initLoggedValue() {
    if (localStorage.getItem('loginState') === null) {
      return false;
    }
    return JSON.parse(`${localStorage.getItem('loginState')}`).isLoggedIn;
  }

  getLoginState(): LoginState {
    return this.loginState;
  }

  setLoginState(login: string, isLoggedIn: boolean) {
    this.loginState.isLoggedIn = isLoggedIn;
    this.loginState.login = login;
    this.loginState.token = createToken();
  }

  setPassword(password: string) {
    this.password = password;
  }

  onSubmitLoginForm(form: NgForm) {
    this.setLoginState(form.value.loginInput, true);
    localStorage.setItem('loginState', JSON.stringify(this.loginState));
    this.changeCurrentIsLogged(this.loginState.isLoggedIn);
    this.router.navigateByUrl('/search');
  }

  private isLoggedBehavSubject = new BehaviorSubject<boolean
  | undefined>(this.loginState.isLoggedIn);

  currentIsLogged = this.isLoggedBehavSubject.asObservable();

  changeCurrentIsLogged(value: boolean | undefined) {
    this.isLoggedBehavSubject.next(value);
  }

  onLogoutClick(): Promise<boolean> {
    this.setLoginState('', false);
    this.changeCurrentIsLogged(this.loginState.isLoggedIn);
    this.searchResultItems = [];
    this.searchFormService.changeCurrentSearchValue('');//
    localStorage.clear();
    return this.router.navigate(['login']);
  }
}
