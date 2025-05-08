import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilBrandsComponent } from './profil-brands.component';

describe('ProfilBrandsComponent', () => {
  let component: ProfilBrandsComponent;
  let fixture: ComponentFixture<ProfilBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilBrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
