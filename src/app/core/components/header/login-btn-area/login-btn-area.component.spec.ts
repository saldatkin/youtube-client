import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBtnAreaComponent } from './login-btn-area.component';

describe('LoginBtnAreaComponent', () => {
  let component: LoginBtnAreaComponent;
  let fixture: ComponentFixture<LoginBtnAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginBtnAreaComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginBtnAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
