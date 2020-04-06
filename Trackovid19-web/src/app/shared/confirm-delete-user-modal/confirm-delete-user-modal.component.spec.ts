import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteUserModalComponent } from './confirm-delete-user.component';

describe('BasicModalComponent', () => {
  let component: ConfirmDeleteUserModalComponent;
  let fixture: ComponentFixture<ConfirmDeleteUserModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDeleteUserModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeleteUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
