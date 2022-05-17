import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfollowupsComponent } from './myfollowups.component';

describe('MyfollowupsComponent', () => {
  let component: MyfollowupsComponent;
  let fixture: ComponentFixture<MyfollowupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyfollowupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfollowupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
