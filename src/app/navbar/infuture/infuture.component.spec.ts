import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfutureComponent } from './infuture.component';

describe('InfutureComponent', () => {
  let component: InfutureComponent;
  let fixture: ComponentFixture<InfutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfutureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
