import { TestBed } from '@angular/core/testing';

import { ResultsStoreService } from './results-store.service';

describe('ResultsStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultsStoreService = TestBed.get(ResultsStoreService);
    expect(service).toBeTruthy();
  });
});
