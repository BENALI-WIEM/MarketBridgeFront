import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCreatorsComponent } from './navbar-creators.component';

describe('NavbarCreatorsComponent', () => {
  let component: NavbarCreatorsComponent;
  let fixture: ComponentFixture<NavbarCreatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCreatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
