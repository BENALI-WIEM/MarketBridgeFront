import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandRequestsComponent } from './brand-requests.component';

describe('BrandRequestsComponent', () => {
  let component: BrandRequestsComponent;
  let fixture: ComponentFixture<BrandRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
