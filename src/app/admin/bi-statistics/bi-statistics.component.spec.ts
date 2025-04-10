import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiStatisticsComponent } from './bi-statistics.component';

describe('BiStatisticsComponent', () => {
  let component: BiStatisticsComponent;
  let fixture: ComponentFixture<BiStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
