import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCaptionComponent } from './item-caption.component';

describe('ItemCaptionComponent', () => {
  let component: ItemCaptionComponent;
  let fixture: ComponentFixture<ItemCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemCaptionComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ItemCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
