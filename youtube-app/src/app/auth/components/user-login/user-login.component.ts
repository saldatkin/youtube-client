import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  loginFormGroup!: FormGroup<{
    loginInput: FormControl<string | null>;
    passwordInput: FormControl<string | null>;
  }>;


  REG_PASSWORD: string =
    '^(?=.*[0-9])(?=.*[!@%?#$^&()])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{0,}$';

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      loginInput: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      passwordInput: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(this.REG_PASSWORD)
      ])
    });
  }

  constructor(
    private loginService: LoginService,
  ) { }

  onSubmitLoginForm(form: FormGroupDirective) {
    if(form.valid) {
      let login = form.form.value.loginInput;
      localStorage.setItem('user', JSON.stringify(form.value));
      form.resetForm();
      this.loginService.onSubmitLoginForm(login);
    }
  }

  get login(){
    return this.loginFormGroup.get('loginInput');
  }
  get password(){
    return this.loginFormGroup.get('passwordInput');
  }
}
