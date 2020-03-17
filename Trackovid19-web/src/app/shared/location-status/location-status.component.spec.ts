import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationStatusComponent } from './location-status.component';

describe('LocationStatusComponent', () => {
  let component: LocationStatusComponent;
  let fixture: ComponentFixture<LocationStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
