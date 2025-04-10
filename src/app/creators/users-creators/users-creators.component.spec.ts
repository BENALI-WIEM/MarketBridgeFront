import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCreatorsComponent } from './users-creators.component';

describe('UsersCreatorsComponent', () => {
  let component: UsersCreatorsComponent;
  let fixture: ComponentFixture<UsersCreatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersCreatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
