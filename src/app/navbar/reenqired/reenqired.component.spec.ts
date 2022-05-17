import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReenqiredComponent } from './reenqired.component';

describe('ReenqiredComponent', () => {
  let component: ReenqiredComponent;
  let fixture: ComponentFixture<ReenqiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReenqiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReenqiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
