import { TestBed } from '@angular/core/testing';

import { GeolocalizationService } from './geolocalization.service';

describe('GeolocalizationService', () => {
  let service: GeolocalizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeolocalizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
