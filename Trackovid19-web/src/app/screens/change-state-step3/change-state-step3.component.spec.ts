import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeStateStep3Component } from './change-state-step3.component';

describe('ChangeStateStep3Component', () => {
  let component: ChangeStateStep3Component;
  let fixture: ComponentFixture<ChangeStateStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeStateStep3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeStateStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
