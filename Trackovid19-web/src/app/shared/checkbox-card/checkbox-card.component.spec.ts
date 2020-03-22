import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxCardComponent } from './checkbox-card.component';

describe('CheckboxCardComponent', () => {
  let component: CheckboxCardComponent;
  let fixture: ComponentFixture<CheckboxCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
