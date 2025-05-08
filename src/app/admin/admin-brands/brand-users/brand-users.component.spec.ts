import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandUsersComponent } from './brand-users.component';

describe('BrandUsersComponent', () => {
  let component: BrandUsersComponent;
  let fixture: ComponentFixture<BrandUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
