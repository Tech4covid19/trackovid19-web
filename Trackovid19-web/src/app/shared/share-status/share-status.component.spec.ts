import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareStatusComponent } from './share-status.component';

describe('ShareStatusComponent', () => {
  let component: ShareStatusComponent;
  let fixture: ComponentFixture<ShareStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShareStatusComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
