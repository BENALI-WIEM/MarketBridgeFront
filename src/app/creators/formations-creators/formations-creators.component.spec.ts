import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsCreatorsComponent } from './formations-creators.component';

describe('FormationsCreatorsComponent', () => {
  let component: FormationsCreatorsComponent;
  let fixture: ComponentFixture<FormationsCreatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationsCreatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationsCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
