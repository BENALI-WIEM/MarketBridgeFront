import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateursRecommandesComponent } from './createurs-recommandes.component';

describe('CreateursRecommandesComponent', () => {
  let component: CreateursRecommandesComponent;
  let fixture: ComponentFixture<CreateursRecommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateursRecommandesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateursRecommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
