import {
  Component, OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { SortState } from 'src/app/shared/models/sort-state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private loginService: LoginService,
  ) { }

  isFiltersActive: boolean = false;

  formInput?: string;

  sortState!: SortState;

  ngOnInit(): void {
  }

  toggleFiltersDisplay() {
    this.isFiltersActive = !this.isFiltersActive;
  }

  onLogoutClick() {
    this.loginService.setLoginState('', false);
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
