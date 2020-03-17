import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateChangeCardComponent } from './state-change-card.component';

describe('StateChangeCardComponent', () => {
  let component: StateChangeCardComponent;
  let fixture: ComponentFixture<StateChangeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StateChangeCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateChangeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
