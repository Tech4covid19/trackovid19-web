import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateConfirmBtnComponent } from './state-confirm-btn.component';

describe('StateConfirmBtnComponent', () => {
  let component: StateConfirmBtnComponent;
  let fixture: ComponentFixture<StateConfirmBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StateConfirmBtnComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateConfirmBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
