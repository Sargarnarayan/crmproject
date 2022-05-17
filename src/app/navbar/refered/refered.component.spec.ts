import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferedComponent } from './refered.component';

describe('ReferedComponent', () => {
  let component: ReferedComponent;
  let fixture: ComponentFixture<ReferedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
