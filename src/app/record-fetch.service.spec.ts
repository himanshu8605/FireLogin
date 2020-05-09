import { TestBed } from '@angular/core/testing';

import { RecordFetchService } from './record-fetch.service';

describe('RecordFetchService', () => {
  let service: RecordFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
