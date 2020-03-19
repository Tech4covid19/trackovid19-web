import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/states/user/state/user.service';
import { PostCodeComponent } from './post-code.component';

describe('PostCodeComponent', () => {
  let component: PostCodeComponent;
  let fixture: ComponentFixture<PostCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostCodeComponent],
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
    fixture = TestBed.createComponent(PostCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
