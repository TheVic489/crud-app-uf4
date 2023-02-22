import { TestBed } from '@angular/core/testing';

import { UserLoginRegisterService } from './user-login-register.service';

describe('UserLoginRegisterService', () => {
  let service: UserLoginRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLoginRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
