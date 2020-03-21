import { TestBed } from '@angular/core/testing';

import { ProfileServiceService } from './profile-service.service';

describe('ProfileServiceService', () => {
  let service: ProfileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
