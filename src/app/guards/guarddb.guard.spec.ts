import { TestBed } from '@angular/core/testing';

import { GuarddbGuard } from './guarddb.guard';

describe('GuarddbGuard', () => {
  let guard: GuarddbGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuarddbGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
