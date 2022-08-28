import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorStripeComponent } from './color-stripe.component';

describe('ColorStripeComponent', () => {
  let component: ColorStripeComponent;
  let fixture: ComponentFixture<ColorStripeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorStripeComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ColorStripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
