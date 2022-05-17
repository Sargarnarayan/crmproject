import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DripmarketingComponent } from './dripmarketing.component';

describe('DripmarketingComponent', () => {
  let component: DripmarketingComponent;
  let fixture: ComponentFixture<DripmarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DripmarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DripmarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
