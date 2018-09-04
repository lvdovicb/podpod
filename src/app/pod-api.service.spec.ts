import { TestBed, inject } from '@angular/core/testing';

import { PodApiService } from './pod-api.service';

describe('PodApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PodApiService]
    });
  });

  it('should be created', inject([PodApiService], (service: PodApiService) => {
    expect(service).toBeTruthy();
  }));
});
