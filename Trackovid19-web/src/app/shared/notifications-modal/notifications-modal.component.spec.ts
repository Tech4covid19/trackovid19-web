import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsModalComponent } from './notifications-modal.component';

describe('BasicModalComponent', () => {
  let component: NotificationsModalComponent;
  let fixture: ComponentFixture<NotificationsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationsModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
