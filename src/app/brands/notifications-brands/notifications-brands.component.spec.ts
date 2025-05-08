import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsBrandsComponent } from './notifications-brands.component';

describe('NotificationsBrandsComponent', () => {
  let component: NotificationsBrandsComponent;
  let fixture: ComponentFixture<NotificationsBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsBrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
