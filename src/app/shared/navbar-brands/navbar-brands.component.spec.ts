import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBrandsComponent } from './navbar-brands.component';

describe('NavbarBrandsComponent', () => {
  let component: NavbarBrandsComponent;
  let fixture: ComponentFixture<NavbarBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
