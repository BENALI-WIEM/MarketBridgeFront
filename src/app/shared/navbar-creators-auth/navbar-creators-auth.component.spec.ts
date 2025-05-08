import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCreatorsAuthComponent } from './navbar-creators-auth.component';

describe('NavbarCreatorsAuthComponent', () => {
  let component: NavbarCreatorsAuthComponent;
  let fixture: ComponentFixture<NavbarCreatorsAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCreatorsAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarCreatorsAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
