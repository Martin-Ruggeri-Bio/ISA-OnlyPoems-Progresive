import { TestBed } from '@angular/core/testing';

import { AuthSessionGuard } from './auth-session.guard';

describe('AuthSessionGuard', () => {
  let guard: AuthSessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthSessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
