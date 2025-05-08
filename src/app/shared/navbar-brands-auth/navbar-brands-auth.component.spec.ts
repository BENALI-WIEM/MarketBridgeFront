import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBrandsAuthComponent } from './navbar-brands-auth.component';

describe('NavbarBrandsAuthComponent', () => {
  let component: NavbarBrandsAuthComponent;
  let fixture: ComponentFixture<NavbarBrandsAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBrandsAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarBrandsAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
