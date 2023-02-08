import { TestBed } from '@angular/core/testing';

import { ListEventsServiceService } from './list-events-service.service';

describe('ListEventsServiceService', () => {
  let service: ListEventsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListEventsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
