import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBtnComponent } from './status-btn.component';

describe('StatusBtnComponent', () => {
  let component: StatusBtnComponent;
  let fixture: ComponentFixture<StatusBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatusBtnComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
