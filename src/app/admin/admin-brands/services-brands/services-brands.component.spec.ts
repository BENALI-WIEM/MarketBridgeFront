import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesBrandsComponent } from './services-brands.component';

describe('ServicesBrandsComponent', () => {
  let component: ServicesBrandsComponent;
  let fixture: ComponentFixture<ServicesBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesBrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
