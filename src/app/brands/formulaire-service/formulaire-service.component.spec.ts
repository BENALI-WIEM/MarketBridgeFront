import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireServiceComponent } from './formulaire-service.component';

describe('FormulaireServiceComponent', () => {
  let component: FormulaireServiceComponent;
  let fixture: ComponentFixture<FormulaireServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
