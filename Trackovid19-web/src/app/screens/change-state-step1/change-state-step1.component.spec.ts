import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeStateStep1Component } from './change-state-step1.component';

describe('ChangeStateStep1Component', () => {
  let component: ChangeStateStep1Component;
  let fixture: ComponentFixture<ChangeStateStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeStateStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeStateStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
