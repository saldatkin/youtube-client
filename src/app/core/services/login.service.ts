import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
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

  loginState$?: Observable<LoginState>;

  private loginState$$ = new BehaviorSubject<LoginState>(JSON.parse(`${localStorage.getItem('loginState')}`));

  changeLoginState(loginState: LoginState) {
    this.loginState$$.next(loginState);
  }

  password: string = '';

  searchResultItems?: SearchItem[];

  constructor(
    private router: Router,
    private searchFormService: SearchFormService,
  ) {
    this.loginState$ = this.loginState$$.asObservable();
  }

  initLoggedValue() {
    if (localStorage.getItem('loginState') === null) {
      return false;
    }
    return JSON.parse(`${localStorage.getItem('loginState')}`).isLoggedIn;
  }

  getLoginState(): LoginState {
    return JSON.parse(`${localStorage.getItem('loginState')}`);
  }

  setLoginState(login: string, isLoggedIn: boolean) {
    this.loginState.isLoggedIn = isLoggedIn;
    this.loginState.login = login;
    this.loginState.token = createToken();
  }

  setPassword(password: string) {
    this.password = password;
  }

  onSubmitLoginForm(login: string) {
    this.setLoginState(login, true);
    localStorage.setItem('loginState', JSON.stringify(this.loginState));
    this.changeLoginState(this.loginState);
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
    this.changeLoginState(this.loginState);
    this.searchFormService.changeCurrentSearchValue('');
    localStorage.clear();
    sessionStorage.clear();
    return this.router.navigate(['login']);
  }
}
