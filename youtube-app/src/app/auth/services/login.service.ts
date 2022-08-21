import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  isLoggedIn: boolean = false;
  login: string = '';
  password: string = '';
  token: string = '';

  constructor() { }

  getLoginState(): boolean {
    return this.isLoggedIn;
  }

  setLoginState(state: boolean) {
    this.isLoggedIn = state;
  }

  setLogin(login: string) {
    this.login = login;
  }

  setPassword(password: string) {
    this.password = password;
  }

  createToken(): string {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( let i = 0; i < this.login.length; i++ ) {
      this.token += characters.charAt(Math.floor(Math.random() *
 charactersLength));
   }
    return this.token;
  }
}
