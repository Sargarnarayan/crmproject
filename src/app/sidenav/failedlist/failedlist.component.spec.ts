import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedlistComponent } from './failedlist.component';

describe('FailedlistComponent', () => {
  let component: FailedlistComponent;
  let fixture: ComponentFixture<FailedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailedlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
