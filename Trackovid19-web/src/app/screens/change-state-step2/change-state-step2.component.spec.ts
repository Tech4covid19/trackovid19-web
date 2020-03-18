import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeStateStep2Component } from './change-state-step2.component';

describe('ChangeStateStep2Component', () => {
  let component: ChangeStateStep2Component;
  let fixture: ComponentFixture<ChangeStateStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeStateStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeStateStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
