import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsolationStatusComponent } from './isolation-status.component';

describe('IsolationStatusComponent', () => {
  let component: IsolationStatusComponent;
  let fixture: ComponentFixture<IsolationStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IsolationStatusComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsolationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
