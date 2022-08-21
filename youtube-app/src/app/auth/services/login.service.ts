import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginState } from 'src/app/shared/models/login-state';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginState: LoginState = {
    isLoggedIn: false,
    login: '',
    token: '',
  };

  password: string = '';

  constructor() { }

  getLoginState(): LoginState {
    return this.loginState;
  }

  setLoginState(login: string, isLoggedIn: boolean) {
    this.loginState.isLoggedIn = isLoggedIn;
    this.loginState.login = login;
    this.loginState.token = this.createToken();
  }

  setPassword(password: string) {
    this.password = password;
  }

  createToken(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let token = '';
    for (let i = 0; i < this.loginState.login.length; i += 1) {
      token += characters.charAt(Math.floor(Math.random()
    * charactersLength));
    }
    return token;
  }

  private isLoggedBehavSubject = new BehaviorSubject<boolean
  | undefined>(this.loginState.isLoggedIn);

  currentIsLogged = this.isLoggedBehavSubject.asObservable();

  changeCurrentIsLogged(value: boolean | undefined) {
    this.isLoggedBehavSubject.next(value);
  }
}
