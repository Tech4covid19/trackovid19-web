import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/states/user/state/user.service';
import { PrivacyTermsComponent } from './privacy-terms.component';

describe('PrivacyTermsComponent', () => {
  let component: PrivacyTermsComponent;
  let fixture: ComponentFixture<PrivacyTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyTermsComponent],
      providers: [
        FormBuilder,
        {
          provide: UserService,
          useValue: () => {},
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
