import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingFrameComponent } from './onboarding-frame.component';

describe('OnboardingFrameComponent', () => {
  let component: OnboardingFrameComponent;
  let fixture: ComponentFixture<OnboardingFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
