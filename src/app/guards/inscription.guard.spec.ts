import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { inscriptionGuard } from './inscription.guard';

describe('inscriptionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => inscriptionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
