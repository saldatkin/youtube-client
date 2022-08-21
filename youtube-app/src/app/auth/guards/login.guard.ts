import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanLoad {
  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {
  }

  isLoggedIn?: boolean;

  canLoad() {
    if (localStorage !== null) {
      this.isLoggedIn = JSON.parse(`${localStorage.getItem('loginState')}`).isLoggedIn;
    } else {
      this.isLoggedIn = false;
    }
    return this.isLoggedIn || this.router.navigateByUrl('/login');
  }
}
